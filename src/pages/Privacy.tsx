import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Политика конфиденциальности"
        description="Политика конфиденциальности и обработки персональных данных ООО АТМ (ИНН 5012090417)."
        canonical="/privacy"
      />
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Политика конфиденциальности
            </h1>

            <div className="prose prose-invert prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-foreground font-medium">
                Настоящая Политика конфиденциальности персональных данных (далее — Политика) 
                действует в отношении всей информации, которую ООО «АТМ» (ИНН 5012090417, 
                ОГРН 1155012004663), расположенное по адресу: 143981, Московская область, 
                г. Балашиха, пр-д Институтский (кучино Мкр.), дом 15 (далее — Оператор), 
                может получить о Пользователе во время использования сайта obrabotka-met.ru 
                (далее — Сайт).
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10">1. Общие положения</h2>
              <p>
                1.1. Использование Пользователем Сайта означает согласие с настоящей Политикой 
                и условиями обработки персональных данных Пользователя.
              </p>
              <p>
                1.2. В случае несогласия с условиями Политики Пользователь должен прекратить 
                использование Сайта.
              </p>
              <p>
                1.3. Настоящая Политика применяется только к сайту obrabotka-met.ru. Оператор 
                не контролирует и не несёт ответственности за сайты третьих лиц, на которые 
                Пользователь может перейти по ссылкам, доступным на Сайте.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10">2. Персональные данные</h2>
              <p>
                2.1. Оператор может собирать следующие персональные данные Пользователя:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Фамилия, имя, отчество</li>
                <li>Адрес электронной почты (e-mail)</li>
                <li>Номер телефона</li>
                <li>Содержание сообщений, направленных через форму обратной связи</li>
                <li>Прикреплённые файлы (чертежи, техническая документация)</li>
              </ul>
              <p>
                2.2. Также Оператор автоматически собирает данные, передаваемые браузером 
                Пользователя: IP-адрес, данные cookies, информацию о браузере, время доступа, 
                адрес запрашиваемой страницы.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10">3. Цели обработки</h2>
              <p>
                3.1. Оператор обрабатывает персональные данные Пользователя в следующих целях:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Обработка входящих запросов и заявок на металлообработку</li>
                <li>Связь с Пользователем для уточнения деталей заказа</li>
                <li>Расчёт стоимости и сроков выполнения работ</li>
                <li>Улучшение качества обслуживания</li>
                <li>Проведение статистических и маркетинговых исследований</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10">4. Защита персональных данных</h2>
              <p>
                4.1. Оператор принимает необходимые организационные и технические меры для 
                защиты персональных данных Пользователя от неправомерного или случайного 
                доступа, уничтожения, изменения, блокирования, копирования, распространения, 
                а также от иных неправомерных действий третьих лиц.
              </p>
              <p>
                4.2. Оператор не передаёт персональные данные третьим лицам, за исключением 
                случаев, предусмотренных законодательством Российской Федерации.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10">5. Права Пользователя</h2>
              <p>
                5.1. Пользователь имеет право:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Получить информацию об обработке своих персональных данных</li>
                <li>Потребовать уточнения, блокирования или уничтожения своих персональных данных</li>
                <li>Отозвать согласие на обработку персональных данных, направив письменное 
                    уведомление на адрес электронной почты: obrabotka-met@bk.ru</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10">6. Файлы cookies</h2>
              <p>
                6.1. Сайт использует файлы cookies для обеспечения корректной работы, 
                персонализации контента и анализа трафика.
              </p>
              <p>
                6.2. Пользователь может отключить обработку cookies в настройках своего браузера, 
                однако это может повлиять на функциональность Сайта.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10">7. Изменение Политики</h2>
              <p>
                7.1. Оператор оставляет за собой право вносить изменения в настоящую Политику. 
                Новая редакция Политики вступает в силу с момента её размещения на Сайте.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10">8. Контактная информация</h2>
              <p>
                По всем вопросам, связанным с обработкой персональных данных, Пользователь 
                может обратиться к Оператору:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Наименование:</strong> ООО «АТМ»</li>
                <li><strong className="text-foreground">ИНН:</strong> 5012090417</li>
                <li><strong className="text-foreground">ОГРН:</strong> 1155012004663</li>
                <li><strong className="text-foreground">Адрес:</strong> 143981, Московская область, г. Балашиха, пр-д Институтский (кучино Мкр.), дом 15</li>
                <li><strong className="text-foreground">Генеральный директор:</strong> Топилин Алексей Анатольевич</li>
                <li><strong className="text-foreground">Email:</strong> obrabotka-met@bk.ru</li>
                <li><strong className="text-foreground">Телефон:</strong> 8 (901) 744-94-40</li>
              </ul>

              <p className="text-sm mt-10 border-t border-border pt-6">
                Дата последнего обновления: {new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
