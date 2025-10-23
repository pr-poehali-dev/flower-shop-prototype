import json
import base64
from typing import Dict, Any
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from io import BytesIO
import textwrap

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    """
    Business: Generate PDF with flower shop design prototype and screens
    Args: event - HTTP event with httpMethod
          context - execution context with request_id
    Returns: PDF file as base64 encoded response
    """
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    buffer = BytesIO()
    pdf = canvas.Canvas(buffer, pagesize=A4)
    width, height = A4
    
    primary_color = HexColor('#E879F9')
    secondary_color = HexColor('#F0ABFC')
    text_color = HexColor('#1F2937')
    light_gray = HexColor('#F3F4F6')
    
    pdf.setTitle("Flower Shop - Design Prototype")
    pdf.setAuthor("Flower Shop Team")
    pdf.setSubject("Website Design & Prototype")
    
    def draw_header(page_title: str):
        pdf.setFillColor(primary_color)
        pdf.rect(0, height - 60*mm, width, 60*mm, fill=True, stroke=False)
        pdf.setFillColor(HexColor('#FFFFFF'))
        pdf.setFont("Helvetica-Bold", 32)
        pdf.drawCentredString(width/2, height - 40*mm, page_title)
    
    def draw_section_title(y_pos: float, title: str):
        pdf.setFillColor(text_color)
        pdf.setFont("Helvetica-Bold", 18)
        pdf.drawString(40, y_pos, title)
        pdf.setStrokeColor(primary_color)
        pdf.setLineWidth(2)
        pdf.line(40, y_pos - 5, 200, y_pos - 5)
    
    def draw_text_block(y_pos: float, text: str, font_size: int = 11):
        pdf.setFillColor(text_color)
        pdf.setFont("Helvetica", font_size)
        lines = textwrap.wrap(text, width=90)
        for line in lines:
            pdf.drawString(40, y_pos, line)
            y_pos -= 15
        return y_pos
    
    def draw_screen_mockup(y_pos: float, section_name: str, description: str):
        pdf.setFillColor(light_gray)
        pdf.rect(40, y_pos - 120, width - 80, 120, fill=True, stroke=True)
        
        pdf.setFillColor(text_color)
        pdf.setFont("Helvetica-Bold", 14)
        pdf.drawCentredString(width/2, y_pos - 30, section_name)
        
        pdf.setFont("Helvetica", 10)
        lines = textwrap.wrap(description, width=70)
        y_text = y_pos - 50
        for line in lines:
            pdf.drawCentredString(width/2, y_text, line)
            y_text -= 14
    
    draw_header("Flower Shop")
    pdf.setFillColor(text_color)
    pdf.setFont("Helvetica", 14)
    pdf.drawCentredString(width/2, height - 55*mm, "Прототип и Дизайн Веб-сайта")
    pdf.drawCentredString(width/2, height - 65*mm, "Цветочный магазин")
    
    y_position = height - 90*mm
    draw_section_title(y_position, "Концепция проекта")
    y_position -= 20
    y_position = draw_text_block(y_position, 
        "Современный одностраничный сайт цветочного магазина с нежным пастельным дизайном. "
        "Сайт включает 8 основных секций: главная страница, информация о магазине, каталог, "
        "галерея работ, отзывы клиентов, команда, доставка и контакты.")
    
    y_position -= 20
    draw_section_title(y_position, "Цветовая палитра")
    y_position -= 20
    
    colors = [
        ('#E879F9', 'Primary - Фуксия'),
        ('#F0ABFC', 'Secondary - Светло-розовый'),
        ('#A5F3FC', 'Accent - Мятный'),
        ('#1F2937', 'Text - Темно-серый')
    ]
    
    x_start = 40
    for color_hex, color_name in colors:
        pdf.setFillColor(HexColor(color_hex))
        pdf.rect(x_start, y_position - 20, 30, 30, fill=True, stroke=True)
        pdf.setFillColor(text_color)
        pdf.setFont("Helvetica", 9)
        pdf.drawString(x_start + 35, y_position - 10, color_name)
        pdf.drawString(x_start + 35, y_position - 22, color_hex)
        x_start += 130
    
    y_position -= 50
    draw_section_title(y_position, "Типографика")
    y_position -= 20
    pdf.setFont("Helvetica", 11)
    pdf.drawString(40, y_position, "• Заголовки: Playfair Display (serif, элегантный)")
    y_position -= 15
    pdf.drawString(40, y_position, "• Основной текст: Lato (sans-serif, читаемый)")
    
    pdf.showPage()
    
    draw_header("Структура прототипа")
    y_position = height - 80*mm
    
    sections = [
        ("1. Главная (Hero)", "Заголовок 'Цветочная коллекция', кнопки CTA, изображение букета"),
        ("2. О нас", "Описание магазина, 3 преимущества (Свежесть, Забота, Качество)"),
        ("3. Каталог", "Сетка из 3 популярных букетов с ценами и кнопками заказа"),
        ("4. Галерея", "Сетка 4x2 с фотографиями работ флористов"),
    ]
    
    for section_name, description in sections:
        draw_screen_mockup(y_position, section_name, description)
        y_position -= 140
        if y_position < 100:
            pdf.showPage()
            draw_header("Структура прототипа")
            y_position = height - 80*mm
    
    pdf.showPage()
    draw_header("Структура прототипа")
    y_position = height - 80*mm
    
    sections_2 = [
        ("5. Отзывы", "3 карточки отзывов клиентов с рейтингом 5 звёзд"),
        ("6. Команда", "3 карточки флористов с именем, должностью и опытом"),
        ("7. Доставка", "2 блока: условия доставки и режим работы магазина"),
        ("8. Контакты", "Адрес, телефон, email + форма обратной связи"),
    ]
    
    for section_name, description in sections_2:
        draw_screen_mockup(y_position, section_name, description)
        y_position -= 140
    
    pdf.showPage()
    draw_header("Ключевые элементы UX/UI")
    y_position = height - 80*mm
    
    draw_section_title(y_position, "Навигация")
    y_position -= 20
    y_position = draw_text_block(y_position,
        "Фиксированное меню с 8 пунктами навигации. Плавная прокрутка к секциям. "
        "Активный пункт меню подсвечивается основным цветом.")
    
    y_position -= 20
    draw_section_title(y_position, "Интерактивность")
    y_position -= 20
    y_position = draw_text_block(y_position,
        "• Hover-эффекты на карточках товаров (подъём и увеличение тени)\n"
        "• Масштабирование изображений при наведении\n"
        "• Плавные анимации появления элементов\n"
        "• Анимация кнопок при взаимодействии")
    
    y_position -= 30
    draw_section_title(y_position, "Адаптивность")
    y_position -= 20
    y_position = draw_text_block(y_position,
        "Дизайн адаптирован для всех устройств:\n"
        "• Desktop (>768px): сетки 2-4 колонки\n"
        "• Tablet (768px): сетки 2 колонки\n"
        "• Mobile (<768px): 1 колонка, скрытое меню")
    
    y_position -= 30
    draw_section_title(y_position, "Формы")
    y_position -= 20
    y_position = draw_text_block(y_position,
        "Форма обратной связи в секции 'Контакты':\n"
        "• Поля: Имя, Телефон, Сообщение\n"
        "• Валидация полей\n"
        "• Большая кнопка 'Отправить заявку'")
    
    pdf.showPage()
    draw_header("Технические детали")
    y_position = height - 80*mm
    
    draw_section_title(y_position, "Технологический стек")
    y_position -= 20
    pdf.setFont("Helvetica", 11)
    pdf.drawString(40, y_position, "• Frontend: React 18 + TypeScript")
    y_position -= 15
    pdf.drawString(40, y_position, "• Сборка: Vite")
    y_position -= 15
    pdf.drawString(40, y_position, "• Стилизация: Tailwind CSS + CSS Variables")
    y_position -= 15
    pdf.drawString(40, y_position, "• UI компоненты: shadcn/ui (Button, Card, Input, Textarea)")
    y_position -= 15
    pdf.drawString(40, y_position, "• Иконки: Lucide React")
    y_position -= 15
    pdf.drawString(40, y_position, "• Шрифты: Google Fonts (Playfair Display, Lato)")
    
    y_position -= 30
    draw_section_title(y_position, "Особенности реализации")
    y_position -= 20
    y_position = draw_text_block(y_position,
        "• Single Page Application (SPA) - весь контент на одной странице\n"
        "• Состояние активной секции отслеживается через React useState\n"
        "• Плавная прокрутка реализована через scrollIntoView API\n"
        "• Градиентные фоны и размытие для глубины дизайна\n"
        "• Семантическая разметка HTML5")
    
    y_position -= 70
    draw_section_title(y_position, "Файловая структура")
    y_position -= 20
    pdf.setFont("Courier", 9)
    structure = [
        "src/",
        "  pages/",
        "    Index.tsx          # Главная страница со всеми секциями",
        "  components/ui/       # UI компоненты (Button, Card, Input, etc.)",
        "  App.tsx             # Корневой компонент",
        "tailwind.config.ts    # Конфигурация цветов и шрифтов",
        "index.css            # Глобальные стили и CSS переменные",
    ]
    for line in structure:
        pdf.drawString(40, y_position, line)
        y_position -= 12
    
    pdf.showPage()
    draw_header("Рекомендации по развитию")
    y_position = height - 80*mm
    
    draw_section_title(y_position, "Функциональность")
    y_position -= 20
    y_position = draw_text_block(y_position,
        "• Интеграция корзины покупок для добавления товаров\n"
        "• Подключение обработки форм через backend функцию\n"
        "• Отправка заявок на email через API\n"
        "• Система фильтрации букетов по цене, типу цветов\n"
        "• Модальные окна для просмотра деталей букетов")
    
    y_position -= 80
    draw_section_title(y_position, "Контент")
    y_position -= 20
    y_position = draw_text_block(y_position,
        "• Замена placeholder изображений на реальные фото букетов\n"
        "• Добавление большего количества товаров в каталог\n"
        "• Расширение галереи работ\n"
        "• Добавление видео-отзывов клиентов")
    
    y_position -= 70
    draw_section_title(y_position, "SEO и Аналитика")
    y_position -= 20
    y_position = draw_text_block(y_position,
        "• Настройка meta-тегов для SEO\n"
        "• Подключение Google Analytics\n"
        "• Оптимизация изображений (WebP, lazy loading)\n"
        "• Добавление структурированных данных Schema.org")
    
    y_position -= 70
    draw_section_title(y_position, "Маркетинг")
    y_position -= 20
    y_position = draw_text_block(y_position,
        "• Интеграция с WhatsApp для быстрой связи\n"
        "• Всплывающие акции и скидки\n"
        "• Программа лояльности для постоянных клиентов\n"
        "• Интеграция с социальными сетями (Instagram Shop)")
    
    pdf.setFillColor(light_gray)
    pdf.rect(0, 0, width, 40, fill=True, stroke=False)
    pdf.setFillColor(text_color)
    pdf.setFont("Helvetica", 9)
    pdf.drawCentredString(width/2, 20, "Flower Shop • Design Prototype & Documentation • 2024")
    
    pdf.save()
    buffer.seek(0)
    pdf_bytes = buffer.getvalue()
    pdf_base64 = base64.b64encode(pdf_bytes).decode('utf-8')
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="flower-shop-prototype.pdf"',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': True,
        'body': pdf_base64
    }
