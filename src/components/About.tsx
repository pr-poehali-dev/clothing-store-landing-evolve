import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 gradient-text">
            Будущее моды уже здесь
          </h2>
          <p className="text-xl text-gray-300 font-roboto leading-relaxed">
            Evolve революционизирует fashion-индустрию с помощью модульной
            одежды. Каждый элемент можно снимать, комбинировать и
            трансформировать.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "Puzzle",
              title: "Модульность",
              description:
                "Каждая деталь одежды — отдельный модуль. Рукава, карманы, капюшоны легко снимаются и заменяются.",
            },
            {
              icon: "Recycle",
              title: "Трансформация",
              description:
                "Одна базовая вещь превращается в десятки различных образов. Бесконечные возможности стиля.",
            },
            {
              icon: "Zap",
              title: "Технологии",
              description:
                "Умные застёжки, терморегуляция и интеграция с мобильными устройствами.",
            },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="module-card p-8 rounded-2xl text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={feature.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-roboto leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual demonstration */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-montserrat font-bold text-2xl mb-4 text-white">
                Как это работает?
              </h3>
              <div className="space-y-4">
                {[
                  "Выбираете базовую модель",
                  "Добавляете нужные модули",
                  "Трансформируете образ одним движением",
                  "Создаёте уникальный стиль",
                ].map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-gray-300 font-roboto">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-48 h-64 mx-auto bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl border-2 border-purple-500/50 flex items-center justify-center">
                <Icon name="Shirt" size={80} className="text-purple-400" />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center animate-pulse-slow">
                <Icon name="Plus" size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
