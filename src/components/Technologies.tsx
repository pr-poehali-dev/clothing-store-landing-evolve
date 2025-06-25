import Icon from "@/components/ui/icon";

const Technologies = () => {
  const technologies = [
    {
      icon: "Cpu",
      title: "Умные застёжки",
      description:
        "Магнитные соединения с NFC-чипами для мгновенного подключения модулей",
    },
    {
      icon: "Thermometer",
      title: "Терморегуляция",
      description:
        "Встроенные элементы подогрева и охлаждения для комфорта в любую погоду",
    },
    {
      icon: "Smartphone",
      title: "Мобильное приложение",
      description:
        "Управление функциями одежды через смартфон и создание образов в AR",
    },
    {
      icon: "Battery",
      title: "Беспроводная зарядка",
      description: "Зарядка встроенной электроники через индукционные площадки",
    },
    {
      icon: "Shield",
      title: "Защитные покрытия",
      description: "Нанотехнологии для водо- и грязеотталкивающих свойств",
    },
    {
      icon: "Wifi",
      title: "IoT интеграция",
      description:
        "Подключение к умному дому и синхронизация с другими устройствами",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 gradient-text">
            Технологии будущего
          </h2>
          <p className="text-xl text-gray-300 font-roboto max-w-3xl mx-auto">
            Evolve интегрирует передовые технологии в каждый элемент одежды,
            создавая интеллектуальную экосистему для современного человека.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className="module-card p-6 rounded-2xl group hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Icon
                  name={tech.icon as any}
                  size={24}
                  className="text-white"
                />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-3 text-white">
                {tech.title}
              </h3>
              <p className="text-gray-400 font-roboto text-sm leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Innovation showcase */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-montserrat font-bold text-2xl mb-6 text-white">
                Инновации Evolve
              </h3>
              <div className="space-y-4">
                {[
                  {
                    stat: "5 сек",
                    desc: "Время подключения нового модуля",
                  },
                  {
                    stat: "24 ч",
                    desc: "Время работы от одной зарядки",
                  },
                  {
                    stat: "100+",
                    desc: "Возможных комбинаций из одного комплекта",
                  },
                  {
                    stat: "IP68",
                    desc: "Класс защиты от воды и пыли",
                  },
                ].map((item) => (
                  <div key={item.stat} className="flex items-center gap-4">
                    <div className="text-2xl font-montserrat font-bold gradient-text">
                      {item.stat}
                    </div>
                    <div className="text-gray-300 font-roboto">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl border-2 border-purple-500/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse-slow"></div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    "Cpu",
                    "Zap",
                    "Wifi",
                    "Battery",
                    "Shield",
                    "Smartphone",
                  ].map((iconName, index) => (
                    <div
                      key={iconName}
                      className="w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center animate-float"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <Icon
                        name={iconName as any}
                        size={20}
                        className="text-purple-400"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
