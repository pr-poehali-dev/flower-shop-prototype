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
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/20 to-white">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Flower Shop</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'catalog', 'gallery', 'reviews', 'team', 'delivery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground/60'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О нас'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'team' && 'Команда'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  Цветочная<br />
                  <span className="text-primary">Коллекция</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Создаём букеты, которые дарят радость и тепло. Свежие цветы каждый день.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" onClick={() => scrollToSection('catalog')} className="bg-primary hover:bg-primary/90">
                    Смотреть каталог
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                    Связаться с нами
                  </Button>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <img
                  src="https://cdn.poehali.dev/projects/14bec77c-3211-4531-ae91-ee2287d1b7e3/files/4810516f-fc49-431d-9721-b81e8bac01c3.jpg"
                  alt="Букет цветов"
                  className="relative rounded-3xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-bold">О нашем магазине</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы — команда флористов с 10-летним опытом, создающая уникальные цветочные композиции для особенных моментов. 
                Каждый букет — это история, рассказанная языком цветов. Мы тщательно подбираем свежие цветы от лучших поставщиков 
                и создаём композиции, которые вызывают эмоции и дарят радость.
              </p>
              <div className="grid md:grid-cols-3 gap-8 pt-8">
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6 text-center space-y-2">
                    <Icon name="Sparkles" className="w-12 h-12 mx-auto text-primary" />
                    <h3 className="text-xl font-semibold">Свежесть</h3>
                    <p className="text-sm text-muted-foreground">Цветы доставляются прямо с плантаций</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6 text-center space-y-2">
                    <Icon name="Heart" className="w-12 h-12 mx-auto text-primary" />
                    <h3 className="text-xl font-semibold">Забота</h3>
                    <p className="text-sm text-muted-foreground">Индивидуальный подход к каждому заказу</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6 text-center space-y-2">
                    <Icon name="Award" className="w-12 h-12 mx-auto text-primary" />
                    <h3 className="text-xl font-semibold">Качество</h3>
                    <p className="text-sm text-muted-foreground">Только лучшие материалы и цветы</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="catalog" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Популярные букеты</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Нежность',
                  price: '3 500₽',
                  description: 'Розы, тюльпаны, лаванда',
                  image: 'https://cdn.poehali.dev/projects/14bec77c-3211-4531-ae91-ee2287d1b7e3/files/4810516f-fc49-431d-9721-b81e8bac01c3.jpg'
                },
                {
                  name: 'Весенний сад',
                  price: '4 200₽',
                  description: 'Пионы, гортензии, эвкалипт',
                  image: 'https://cdn.poehali.dev/projects/14bec77c-3211-4531-ae91-ee2287d1b7e3/files/2bfbd799-a413-49b1-a36c-888f39b343fd.jpg'
                },
                {
                  name: 'Романтика',
                  price: '3 800₽',
                  description: 'Розы, гвоздики, гипсофила',
                  image: 'https://cdn.poehali.dev/projects/14bec77c-3211-4531-ae91-ee2287d1b7e3/files/8e514910-6368-421b-89d6-335e89560445.jpg'
                }
              ].map((bouquet) => (
                <Card key={bouquet.name} className="border-none shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 overflow-hidden group">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={bouquet.image} 
                      alt={bouquet.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-2xl font-semibold">{bouquet.name}</h3>
                    <p className="text-muted-foreground">{bouquet.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-2xl font-bold text-primary">{bouquet.price}</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Заказать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Наши работы</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 1, 2, 3, 1, 2].map((idx, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                  <img
                    src={`https://cdn.poehali.dev/projects/14bec77c-3211-4531-ae91-ee2287d1b7e3/files/${
                      idx === 1 ? '4810516f-fc49-431d-9721-b81e8bac01c3' : 
                      idx === 2 ? '2bfbd799-a413-49b1-a36c-888f39b343fd' : 
                      '8e514910-6368-421b-89d6-335e89560445'
                    }.jpg`}
                    alt={`Галерея ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: 'Анна Петрова', text: 'Потрясающие букеты! Цветы свежие, композиция красивая. Заказываю уже не первый раз.', rating: 5 },
                { name: 'Дмитрий Иванов', text: 'Отличный сервис и быстрая доставка. Букет превзошёл все ожидания, жена была в восторге!', rating: 5 },
                { name: 'Елена Смирнова', text: 'Профессионалы своего дела. Помогли подобрать идеальный букет для свадьбы. Рекомендую!', rating: 5 }
              ].map((review) => (
                <Card key={review.name} className="border-none shadow-lg">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{review.text}"</p>
                    <p className="font-semibold">{review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Наша команда</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: 'Мария Волкова', role: 'Главный флорист', experience: '12 лет опыта' },
                { name: 'Ольга Соколова', role: 'Флорист-дизайнер', experience: '8 лет опыта' },
                { name: 'Алексей Морозов', role: 'Флорист', experience: '6 лет опыта' }
              ].map((member) => (
                <Card key={member.name} className="border-none shadow-lg text-center">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto flex items-center justify-center">
                      <Icon name="User" className="w-16 h-16 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="delivery" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Доставка</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-none shadow-lg">
                  <CardContent className="pt-6 space-y-4">
                    <Icon name="Truck" className="w-12 h-12 text-primary" />
                    <h3 className="text-2xl font-semibold">Быстрая доставка</h3>
                    <p className="text-muted-foreground">
                      Доставляем по Москве в день заказа. Доставка в другие города — 1-2 дня.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• По Москве — от 500₽</li>
                      <li>• За МКАД — от 800₽</li>
                      <li>• Регионы — расчёт индивидуально</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg">
                  <CardContent className="pt-6 space-y-4">
                    <Icon name="Clock" className="w-12 h-12 text-primary" />
                    <h3 className="text-2xl font-semibold">Режим работы</h3>
                    <p className="text-muted-foreground">
                      Мы работаем без выходных, чтобы ваши цветы были всегда свежими.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Понедельник - Пятница: 9:00 - 21:00</li>
                      <li>• Суббота - Воскресенье: 10:00 - 20:00</li>
                      <li>• Срочная доставка в течение 2 часов</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Наши контакты</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Цветочная, д. 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@flowershop.ru</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <Input placeholder="Введите имя" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение</label>
                      <Textarea placeholder="Расскажите о вашем заказе" rows={4} />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4">Flower Shop</h3>
              <p className="text-sm opacity-80">Цветы, которые дарят радость</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p className="cursor-pointer hover:opacity-100" onClick={() => scrollToSection('catalog')}>Каталог</p>
                <p className="cursor-pointer hover:opacity-100" onClick={() => scrollToSection('delivery')}>Доставка</p>
                <p className="cursor-pointer hover:opacity-100" onClick={() => scrollToSection('contacts')}>Контакты</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Icon name="Instagram" className="w-6 h-6 cursor-pointer hover:opacity-80" />
                <Icon name="Facebook" className="w-6 h-6 cursor-pointer hover:opacity-80" />
                <Icon name="Twitter" className="w-6 h-6 cursor-pointer hover:opacity-80" />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-background/20 text-center text-sm opacity-80">
            © 2024 Flower Shop. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}