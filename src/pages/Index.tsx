import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-accent/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-white">Peremotka074</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-white hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-white hover:text-primary transition-colors">О компании</a>
            <a href="#services" className="text-white hover:text-primary transition-colors">Услуги</a>
            <a href="#contacts" className="text-white hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-accent leading-tight">
                Ремонт и перемотка электродвигателей
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональное обслуживание промышленного оборудования. 
                Качество, надёжность, опыт более 15 лет.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
                <Button size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/0d85afc5-838f-44d7-a1eb-96f0531c8c3f/files/db198f19-116b-4dcd-8f20-f6b747f0e232.jpg" 
                alt="Ремонт электродвигателей"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <Icon name="Award" className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">15+ лет опыта</h3>
                <p className="text-muted-foreground">Профессиональная команда с многолетним стажем</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <Icon name="Clock" className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">Быстрый ремонт</h3>
                <p className="text-muted-foreground">Сжатые сроки без потери качества работ</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <Icon name="ShieldCheck" className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
                <p className="text-muted-foreground">Официальная гарантия на все виды работ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/0d85afc5-838f-44d7-a1eb-96f0531c8c3f/files/20da3e66-c592-449d-b4a1-2295c82a9fbc.jpg" 
                alt="Перемотка двигателей"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-accent">О нашей компании</h2>
              <p className="text-lg text-foreground mb-4">
                <strong>Peremotka074</strong> — это команда профессионалов с опытом работы более 15 лет 
                в области ремонта и обслуживания электродвигателей промышленного назначения.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Мы специализируемся на ремонте электродвигателей любой мощности и сложности, 
                выполняем перемотку обмоток, диагностику и восстановление оборудования.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                  <span className="text-foreground">Современное оборудование</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                  <span className="text-foreground">Квалифицированные специалисты</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                  <span className="text-foreground">Контроль качества</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                  <span className="text-foreground">Доступные цены</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-accent">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <Icon name="Settings" className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Ремонт электродвигателей</h3>
                <p className="text-muted-foreground mb-4">
                  Капитальный и текущий ремонт электродвигателей постоянного и переменного тока
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Minus" size={16} className="text-primary" />
                    <span>Замена подшипников</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Minus" size={16} className="text-primary" />
                    <span>Балансировка роторов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Minus" size={16} className="text-primary" />
                    <span>Проточка коллекторов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <Icon name="Codesandbox" className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Перемотка обмоток</h3>
                <p className="text-muted-foreground mb-4">
                  Профессиональная перемотка статорных и роторных обмоток с использованием качественных материалов
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Minus" size={16} className="text-primary" />
                    <span>Перемотка статоров</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Minus" size={16} className="text-primary" />
                    <span>Перемотка роторов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Minus" size={16} className="text-primary" />
                    <span>Пропитка обмоток</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <Icon name="Search" className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Диагностика</h3>
                <p className="text-muted-foreground mb-4">
                  Комплексная диагностика технического состояния электрооборудования
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Minus" size={16} className="text-primary" />
                    <span>Измерение сопротивления изоляции</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Minus" size={16} className="text-primary" />
                    <span>Вибродиагностика</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Minus" size={16} className="text-primary" />
                    <span>Тепловизионное обследование</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <Icon name="Gauge" className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Испытания</h3>
                <p className="text-muted-foreground mb-4">
                  Проведение приёмо-сдаточных и периодических испытаний
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Minus" size={16} className="text-primary" />
                    <span>Испытания на холостом ходу</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Minus" size={16} className="text-primary" />
                    <span>Испытания под нагрузкой</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Minus" size={16} className="text-primary" />
                    <span>Оформление протоколов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-accent">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Адрес:</p>
                    <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Телефон:</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p className="text-muted-foreground">info@electroservice.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Режим работы:</p>
                    <p className="text-muted-foreground">Пн-Пт: 8:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб-Вс: Выходной</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Заявка на консультацию</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Сообщение"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Zap" className="text-primary" size={28} />
            <span className="text-xl font-bold">Peremotka074</span>
          </div>
          <p className="text-white/80">© 2024 ЭлектроСервис. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;