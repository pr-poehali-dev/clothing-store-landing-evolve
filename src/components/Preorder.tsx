import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ProductConfig {
  category: string;
  size: string;
  color: string;
  material: string;
  quantity: number;
}

const Preorder = () => {
  const [config, setConfig] = useState<ProductConfig>({
    category: "",
    size: "",
    color: "",
    material: "",
    quantity: 1,
  });

  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const categories = [
    { id: "jacket", name: "Умная куртка", price: 25000 },
    { id: "pants", name: "Адаптивные брюки", price: 18000 },
    { id: "shirt", name: "Био-рубашка", price: 12000 },
    { id: "dress", name: "Голографическое платье", price: 35000 },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = [
    "Неоновый синий",
    "Электрический фиолетовый",
    "Киберно-зелёный",
    "Голографический серебряный",
  ];
  const materials = [
    "Нано-ткань",
    "Био-волокно",
    "Умный текстиль",
    "Самовосстанавливающийся материал",
  ];

  const selectedCategory = categories.find((cat) => cat.id === config.category);
  const totalPrice = selectedCategory
    ? selectedCategory.price * config.quantity
    : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Предзаказ оформлен:", { config, customerData, totalPrice });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Предзаказ
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Станьте первыми обладателями революционной одежды будущего.
            Персонализируйте и закажите уже сейчас
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Конфигуратор продукта */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gray-900/70 border-cyan-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <Icon name="Settings" className="text-cyan-400" />
                  Конфигуратор одежды
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Категория */}
                <div>
                  <label className="text-white font-semibold mb-3 block">
                    Категория товара
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {categories.map((category) => (
                      <Card
                        key={category.id}
                        className={`cursor-pointer transition-all duration-300 ${
                          config.category === category.id
                            ? "bg-cyan-500/20 border-cyan-400"
                            : "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                        }`}
                        onClick={() =>
                          setConfig((prev) => ({
                            ...prev,
                            category: category.id,
                          }))
                        }
                      >
                        <CardContent className="p-4 text-center">
                          <h4 className="text-white font-semibold">
                            {category.name}
                          </h4>
                          <p className="text-cyan-400 text-lg font-bold">
                            {category.price.toLocaleString()} ₽
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Размер */}
                <div>
                  <label className="text-white font-semibold mb-3 block">
                    Размер
                  </label>
                  <Select
                    value={config.size}
                    onValueChange={(value) =>
                      setConfig((prev) => ({ ...prev, size: value }))
                    }
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Выберите размер" />
                    </SelectTrigger>
                    <SelectContent>
                      {sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Цвет */}
                <div>
                  <label className="text-white font-semibold mb-3 block">
                    Цвет
                  </label>
                  <Select
                    value={config.color}
                    onValueChange={(value) =>
                      setConfig((prev) => ({ ...prev, color: value }))
                    }
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Выберите цвет" />
                    </SelectTrigger>
                    <SelectContent>
                      {colors.map((color) => (
                        <SelectItem key={color} value={color}>
                          {color}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Материал */}
                <div>
                  <label className="text-white font-semibold mb-3 block">
                    Материал
                  </label>
                  <Select
                    value={config.material}
                    onValueChange={(value) =>
                      setConfig((prev) => ({ ...prev, material: value }))
                    }
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Выберите материал" />
                    </SelectTrigger>
                    <SelectContent>
                      {materials.map((material) => (
                        <SelectItem key={material} value={material}>
                          {material}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Количество */}
                <div>
                  <label className="text-white font-semibold mb-3 block">
                    Количество
                  </label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setConfig((prev) => ({
                          ...prev,
                          quantity: Math.max(1, prev.quantity - 1),
                        }))
                      }
                      className="border-gray-700 text-white hover:bg-gray-800"
                    >
                      <Icon name="Minus" className="w-4 h-4" />
                    </Button>
                    <span className="text-white text-xl font-semibold w-12 text-center">
                      {config.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setConfig((prev) => ({
                          ...prev,
                          quantity: prev.quantity + 1,
                        }))
                      }
                      className="border-gray-700 text-white hover:bg-gray-800"
                    >
                      <Icon name="Plus" className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Форма заказа и итоги */}
          <div className="space-y-6">
            {/* Итоговая стоимость */}
            <Card className="bg-gradient-to-br from-purple-900/70 to-pink-900/70 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <Icon name="ShoppingCart" className="text-purple-400" />
                  Итого
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedCategory ? (
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-300">
                      <span>{selectedCategory.name}</span>
                      <span>{selectedCategory.price.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Количество</span>
                      <span>{config.quantity}</span>
                    </div>
                    <div className="border-t border-gray-700 pt-3">
                      <div className="flex justify-between text-white text-xl font-bold">
                        <span>Общая стоимость</span>
                        <span className="text-purple-400">
                          {totalPrice.toLocaleString()} ₽
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-400">
                    Выберите товар для расчёта стоимости
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Форма оформления */}
            <Card className="bg-gray-900/70 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <Icon name="User" className="text-green-400" />
                  Контактные данные
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    value={customerData.name}
                    onChange={(e) =>
                      setCustomerData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={customerData.email}
                    onChange={(e) =>
                      setCustomerData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  />
                  <Input
                    placeholder="Телефон"
                    value={customerData.phone}
                    onChange={(e) =>
                      setCustomerData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 transition-all duration-300 hover:scale-105"
                    disabled={
                      !selectedCategory ||
                      !customerData.name ||
                      !customerData.email
                    }
                  >
                    Оформить предзаказ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preorder;
