import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Неоновые эффекты */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Связаться с нами
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Готовы присоединиться к революции модной индустрии? Свяжитесь с нами
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Форма контакта */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Icon name="MessageCircle" className="text-cyan-400" />
              Напишите нам
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-cyan-400"
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-cyan-400"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Ваше сообщение"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-cyan-400 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Отправить сообщение
              </Button>
            </form>
          </div>

          {/* Контактная информация */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/50 transition-colors">
              <Icon name="MapPin" className="text-purple-400 w-8 h-8 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Адрес</h4>
              <p className="text-gray-300">
                Москва, Россия
                <br />
                Инновационный центр "Сколково"
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors">
              <Icon name="Mail" className="text-cyan-400 w-8 h-8 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
              <p className="text-gray-300">contact@modfuture.com</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 hover:border-green-500/50 transition-colors">
              <Icon name="Phone" className="text-green-400 w-8 h-8 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Телефон</h4>
              <p className="text-gray-300">+7 (495) 123-45-67</p>
            </div>

            {/* Социальные сети */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6 hover:border-pink-500/50 transition-colors">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <Icon name="Share2" className="text-pink-400" />
                Социальные сети
              </h4>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-white/10"
                >
                  <Icon name="Instagram" className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-white/10"
                >
                  <Icon name="Twitter" className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-white/10"
                >
                  <Icon name="Facebook" className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-white/10"
                >
                  <Icon name="Linkedin" className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
