import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors">
            <Icon name="ArrowLeft" size={20} />
            <span className="text-sm font-medium">Назад</span>
          </Link>
          <div className="font-display font-bold text-2xl tracking-tighter bg-gradient-to-r from-white via-accent to-accent/80 bg-clip-text text-transparent">
            BizVoice AI
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Начните за 3 шага
              </span>
            </h1>
            <p className="text-xl text-white/70 font-light">
              Запустите платформу и получите доступ ко всему контенту за несколько минут
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8 mb-16">
            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl border-2 border-accent/40 group-hover:border-accent transition-all">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Создайте аккаунт</h3>
                <p className="text-white/70 leading-relaxed">
                  Зарегистрируйтесь и получите доступ к панели управления. Это займёт меньше минуты.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl border-2 border-accent/40 group-hover:border-accent transition-all">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Загрузите контент</h3>
                <p className="text-white/70 leading-relaxed">
                  Добавьте документы, презентации и материалы в облачное хранилище. Поддерживаются все популярные форматы.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl border-2 border-accent/40 group-hover:border-accent transition-all">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Настройте озвучку</h3>
                <p className="text-white/70 leading-relaxed">
                  Выберите голос и язык для каждого типа контента. AI автоматически озвучит все материалы.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Form */}
          <div className="border border-accent/20 rounded-3xl p-10 bg-card/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 text-center">Начать прямо сейчас</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-white/80">Рабочая почта</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-5 py-3.5 bg-background/50 border border-accent/20 rounded-xl focus:outline-none focus:border-accent/60 transition-colors text-white placeholder:text-white/40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white/80">Название компании</label>
                <input
                  type="text"
                  placeholder="Ваша компания"
                  className="w-full px-5 py-3.5 bg-background/50 border border-accent/20 rounded-xl focus:outline-none focus:border-accent/60 transition-colors text-white placeholder:text-white/40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white/80">Количество сотрудников</label>
                <select className="w-full px-5 py-3.5 bg-background/50 border border-accent/20 rounded-xl focus:outline-none focus:border-accent/60 transition-colors text-white">
                  <option value="">Выберите</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201+">201+</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-black rounded-xl hover:shadow-2xl hover:shadow-accent/50 transition-all font-semibold text-lg"
              >
                Создать аккаунт бесплатно
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-white/70">
                  <Icon name="CheckCircle2" className="text-accent" size={20} />
                  <span className="text-sm">Бесплатный тестовый период 14 дней</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Icon name="CheckCircle2" className="text-accent" size={20} />
                  <span className="text-sm">Без привязки карты</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Icon name="CheckCircle2" className="text-accent" size={20} />
                  <span className="text-sm">Техподдержка 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
