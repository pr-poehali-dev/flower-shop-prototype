import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Palette" className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">ArtStudio</h1>
            </div>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'courses', 'gallery', 'teachers', 'reviews', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-semibold transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О студии'}
                  {section === 'courses' && 'Курсы'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'teachers' && 'Преподаватели'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
              Записаться
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/14bec77c-3211-4531-ae91-ee2287d1b7e3/files/f6836e50-c804-4841-b51a-81c7ab085a58.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-primary font-semibold text-sm">Творчество • Искусство • Вдохновение</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                Откройте мир<br />
                <span className="text-primary">изобразительного искусства</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Профессиональное обучение рисованию для детей и взрослых. 
                Развиваем талант и творческое мышление в атмосфере вдохновения.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" onClick={() => scrollToSection('courses')} className="text-lg">
                  <Icon name="Brush" className="w-5 h-5 mr-2" />
                  Наши курсы
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="text-lg">
                  <Icon name="Calendar" className="w-5 h-5 mr-2" />
                  Записаться на пробное занятие
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">учеников</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">направлений</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">О нашей студии</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ArtStudio — это пространство, где рождается искусство. Мы обучаем рисованию с 2016 года, 
                  помогая детям и взрослым раскрыть свой творческий потенциал.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Наши преподаватели — практикующие художники с профильным образованием, 
                  которые создают атмосферу вдохновения и поддержки для каждого ученика.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Малые группы</div>
                      <div className="text-sm text-muted-foreground">До 8 человек</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Профессионалы</div>
                      <div className="text-sm text-muted-foreground">Опытные художники</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Palette" className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Все материалы</div>
                      <div className="text-sm text-muted-foreground">Включены в стоимость</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Heart" className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Атмосфера</div>
                      <div className="text-sm text-muted-foreground">Уютная студия</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/14bec77c-3211-4531-ae91-ee2287d1b7e3/files/f6836e50-c804-4841-b51a-81c7ab085a58.jpg"
                  alt="Студия изнутри"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши курсы</h2>
              <p className="text-lg text-muted-foreground">Выберите направление, которое вас вдохновляет</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Масляная живопись',
                  duration: '3 месяца',
                  description: 'Освойте технику масляной живописи, создавайте реалистичные картины',
                  level: 'Для начинающих',
                  price: '12 000₽/мес'
                },
                {
                  name: 'Акварель',
                  duration: '2 месяца',
                  description: 'Изучите акварельную технику, научитесь работать с цветом и светом',
                  level: 'Все уровни',
                  price: '10 000₽/мес'
                },
                {
                  name: 'Академический рисунок',
                  duration: '4 месяца',
                  description: 'Основы рисунка, перспектива, светотень, композиция',
                  level: 'Базовый курс',
                  price: '11 000₽/мес'
                },
                {
                  name: 'Портрет',
                  duration: '3 месяца',
                  description: 'Научитесь рисовать портреты, изучите анатомию и пропорции лица',
                  level: 'Средний уровень',
                  price: '13 000₽/мес'
                },
                {
                  name: 'Детская студия',
                  duration: 'Постоянно',
                  description: 'Развивающие занятия для детей 5-12 лет',
                  level: 'Для детей',
                  price: '8 000₽/мес'
                },
                {
                  name: 'Пастель',
                  duration: '2 месяца',
                  description: 'Работа с пастелью, создание мягких и выразительных работ',
                  level: 'Все уровни',
                  price: '10 500₽/мес'
                }
              ].map((course) => (
                <Card key={course.name} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Brush" className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-accent/20 text-accent-foreground rounded-full">
                        {course.level}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Icon name="Clock" className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <p className="text-muted-foreground">{course.description}</p>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{course.price}</span>
                        <Button size="sm" onClick={() => scrollToSection('contacts')}>
                          Записаться
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея работ</h2>
              <p className="text-lg text-muted-foreground">Работы наших учеников</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { img: 'https://cdn.poehali.dev/projects/14bec77c-3211-4531-ae91-ee2287d1b7e3/files/54e691b8-66ba-44f4-be1c-4fd4a3e2846f.jpg', title: 'Абстракция', author: 'Анна К.' },
                { img: 'https://cdn.poehali.dev/projects/14bec77c-3211-4531-ae91-ee2287d1b7e3/files/af1864e4-7c03-4209-be6a-f0e0ebc0c53d.jpg', title: 'Пейзаж', author: 'Дмитрий С.' },
                { img: 'https://cdn.poehali.dev/projects/14bec77c-3211-4531-ae91-ee2287d1b7e3/files/54e691b8-66ba-44f4-be1c-4fd4a3e2846f.jpg', title: 'Натюрморт', author: 'Елена М.' },
                { img: 'https://cdn.poehali.dev/projects/14bec77c-3211-4531-ae91-ee2287d1b7e3/files/af1864e4-7c03-4209-be6a-f0e0ebc0c53d.jpg', title: 'Портрет', author: 'Игорь П.' },
                { img: 'https://cdn.poehali.dev/projects/14bec77c-3211-4531-ae91-ee2287d1b7e3/files/54e691b8-66ba-44f4-be1c-4fd4a3e2846f.jpg', title: 'Акварель', author: 'Мария В.' },
                { img: 'https://cdn.poehali.dev/projects/14bec77c-3211-4531-ae91-ee2287d1b7e3/files/af1864e4-7c03-4209-be6a-f0e0ebc0c53d.jpg', title: 'Масло', author: 'Алексей Р.' },
              ].map((work, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={work.img}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl">{work.title}</h3>
                    <p className="text-white/80 text-sm">{work.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="teachers" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши преподаватели</h2>
              <p className="text-lg text-muted-foreground">Практикующие художники с профильным образованием</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: 'Екатерина Соколова', role: 'Художник-преподаватель', exp: '15 лет опыта', spec: 'Масляная живопись, портрет' },
                { name: 'Андрей Морозов', role: 'Главный преподаватель', exp: '12 лет опыта', spec: 'Академический рисунок' },
                { name: 'Ольга Волкова', role: 'Художник-акварелист', exp: '10 лет опыта', spec: 'Акварель, пастель' }
              ].map((teacher) => (
                <Card key={teacher.name} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6 text-center space-y-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-full mx-auto flex items-center justify-center">
                      <Icon name="User" className="w-16 h-16 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{teacher.name}</h3>
                      <p className="text-primary font-semibold text-sm">{teacher.role}</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <Icon name="Award" className="w-4 h-4" />
                        {teacher.exp}
                      </div>
                      <p className="text-muted-foreground">{teacher.spec}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы учеников</h2>
              <p className="text-lg text-muted-foreground">Что говорят о нас</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: 'Анна Петрова', text: 'Замечательная студия! За 3 месяца я научилась рисовать маслом. Преподаватели профессионалы, всё объясняют понятно.', rating: 5 },
                { name: 'Дмитрий Иванов', text: 'Привёл дочь на детские занятия — она в восторге! Каждую неделю приносит новые работы. Спасибо преподавателям!', rating: 5 },
                { name: 'Елена Смирнова', text: 'Всегда мечтала научиться рисовать. Здесь нашла то, что искала — профессионализм, атмосферу и результат!', rating: 5 }
              ].map((review) => (
                <Card key={review.name} className="border-none shadow-lg">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">"{review.text}"</p>
                    <p className="font-bold">{review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>



        <section id="contacts" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Запишитесь на пробное занятие</h2>
              <p className="text-lg text-muted-foreground">Первое занятие — бесплатно!</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Адрес студии</p>
                        <p className="text-muted-foreground">г. Москва, ул. Художественная, д. 42</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Телефон</p>
                        <p className="text-muted-foreground">+7 (495) 789-12-34</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <p className="text-muted-foreground">info@artstudio.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Режим работы</p>
                        <p className="text-muted-foreground">Пн-Пт: 10:00 - 21:00</p>
                        <p className="text-muted-foreground">Сб-Вс: 11:00 - 19:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t">
                  <h3 className="text-xl font-bold mb-4">Мы в социальных сетях</h3>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                      <Icon name="Instagram" className="w-6 h-6 text-primary" />
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                      <Icon name="Facebook" className="w-6 h-6 text-primary" />
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                      <Icon name="Send" className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
              <Card className="border-none shadow-xl">
                <CardContent className="pt-6">
                  <form className="space-y-5">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Ваше имя</label>
                      <Input placeholder="Иван Иванов" className="h-12" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Телефон</label>
                      <Input placeholder="+7 (999) 123-45-67" className="h-12" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Выберите курс</label>
                      <select className="w-full h-12 px-3 rounded-md border border-input bg-background">
                        <option>Масляная живопись</option>
                        <option>Акварель</option>
                        <option>Академический рисунок</option>
                        <option>Портрет</option>
                        <option>Детская студия</option>
                        <option>Пастель</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Комментарий</label>
                      <Textarea placeholder="Расскажите о себе и своём опыте" rows={4} />
                    </div>
                    <Button className="w-full h-12 text-lg" size="lg">
                      <Icon name="Send" className="w-5 h-5 mr-2" />
                      Записаться на занятие
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Palette" className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">ArtStudio</h3>
              </div>
              <p className="text-sm opacity-90">
                Изобразительная студия для детей и взрослых
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p className="cursor-pointer hover:opacity-100 transition-opacity" onClick={() => scrollToSection('about')}>О студии</p>
                <p className="cursor-pointer hover:opacity-100 transition-opacity" onClick={() => scrollToSection('courses')}>Курсы</p>
                <p className="cursor-pointer hover:opacity-100 transition-opacity" onClick={() => scrollToSection('gallery')}>Галерея</p>
                <p className="cursor-pointer hover:opacity-100 transition-opacity" onClick={() => scrollToSection('teachers')}>Преподаватели</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>+7 (495) 789-12-34</p>
                <p>info@artstudio.ru</p>
                <p>ул. Художественная, 42</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                  <Icon name="Instagram" className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                  <Icon name="Facebook" className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                  <Icon name="Send" className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary/10 text-center text-sm opacity-80">
            © 2024 ArtStudio. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}