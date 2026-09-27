/* ============================================================
   VA TOKI PONA — КУРС NANPA WAN (8 уроков)
   64 базовых слова, грамматика частиц li / e / lon / pi
   Экосистема Vulpeto Abeleto · 2026
   ============================================================ */

window.LESSONS_TP1 = [

/* ═══════════════════════════════════════════════════════════
   УРОК 1: toki! — приветствия и основы
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp1-l1',
  title: 'toki!',
  desc: 'приветствия, mi / sina / ona и первые фразы',
  xp: 15,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Что такое <b>toki pona</b> и почему в ней так мало слов</li>
      <li>Как читать 9 букв алфавита и куда ставить ударение</li>
      <li>Шесть первых слов: <span class="tp">toki</span>, <span class="tp">pona</span>, <span class="tp">ike</span>, <span class="tp">mi</span>, <span class="tp">sina</span>, <span class="tp">ona</span></li>
      <li>Как построить простое предложение</li>
      <li>Почему частица <b>li</b> иногда не ставится</li>
    </ul>

    <h3>🌍 Что такое toki pona</h3>
    <p><b>toki pona</b> — искусственный язык, созданный канадкой Соней Ланг в 2001 году. Название переводится как <b>«язык добра»</b> или <b>«простой язык»</b>: <span class="tp">toki</span> — «язык», <span class="tp">pona</span> — «хороший».</p>

    <p>Главная идея — <b>минимум слов, максимум смысла</b>. В классической версии всего <b>120 слов</b>, в расширенной — <b>137</b>. Это в 30 раз меньше, чем в обычном языке!</p>

    <p>Как можно говорить с 120 словами? Ответ — <b>контекст</b>. Одно слово может быть существительным, глаголом, прилагательным или наречием — в зависимости от места в предложении. Например, <span class="tp">telo</span> означает и «вода», и «мыть», и «мокрый».</p>

    <div class="lesson-tip">
      <b>Философия языка:</b> toki pona заставляет говорить <b>просто</b>. Нельзя сказать «автомобиль» — нужно описать: <span class="tp">tomo tawa</span> — «движущийся дом». Нельзя сказать «холодильник» — <span class="tp">poki lete</span> — «холодная коробка». Это не недостаток, а <b>главная особенность</b>: язык заставляет видеть суть.
    </div>

    <h3>🔤 Алфавит — 9 букв</h3>
    <p>В toki pona только <b>9 согласных</b> и <b>5 гласных</b> — всего 14 звуков.</p>

    <table>
      <tr><th>Буква</th><th>Звук</th><th>Пример</th><th>Перевод</th></tr>
      <tr><td>a</td><td>а</td><td><span class="tp">ala</span></td><td>нет</td></tr>
      <tr><td>e</td><td>э</td><td><span class="tp">esun</span></td><td>магазин</td></tr>
      <tr><td>i</td><td>и</td><td><span class="tp">ilo</span></td><td>инструмент</td></tr>
      <tr><td>j</td><td>й</td><td><span class="tp">jan</span></td><td>человек</td></tr>
      <tr><td>k</td><td>к</td><td><span class="tp">kili</span></td><td>фрукт</td></tr>
      <tr><td>l</td><td>л</td><td><span class="tp">lawa</span></td><td>голова</td></tr>
      <tr><td>m</td><td>м</td><td><span class="tp">moku</span></td><td>еда</td></tr>
      <tr><td>n</td><td>н</td><td><span class="tp">nimi</span></td><td>имя</td></tr>
      <tr><td>o</td><td>о</td><td><span class="tp">ona</span></td><td>он / она</td></tr>
      <tr><td>p</td><td>п</td><td><span class="tp">pona</span></td><td>хороший</td></tr>
      <tr><td>s</td><td>с</td><td><span class="tp">sina</span></td><td>ты</td></tr>
      <tr><td>t</td><td>т</td><td><span class="tp">toki</span></td><td>язык</td></tr>
      <tr><td>u</td><td>у</td><td><span class="tp">uta</span></td><td>рот</td></tr>
      <tr><td>w</td><td>в / ў</td><td><span class="tp">waso</span></td><td>птица</td></tr>
    </table>

    <div class="lesson-tip">
      <b>Ударение всегда на первый слог.</b> Без исключений: <span class="tp">TOki</span>, <span class="tp">PONa</span>, <span class="tp">SIJElo</span>, <span class="tp">MOKU</span>.
    </div>

    <h3>💬 Первые шесть слов</h3>

    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th><th>Пример</th></tr>
      <tr>linja-pona<td class="sp-cell">toki</td><td><b>toki</b></td><td>язык, говорить, привет</td><td><span class="tp">toki!</span> — привет!</td></tr>
      <tr>linja-pona<td class="sp-cell">pona</td><td><b>pona</b></td><td>хороший, добрый, простой</td><td><span class="tp">pona</span> — хорошо</td></tr>
      <tr>linja-pona<td class="sp-cell">ike</td><td><b>ike</b></td><td>плохой, злой, сложный</td><td><span class="tp">ike</span> — плохо</td></tr>
      <tr>linja-pona<td class="sp-cell">mi</td><td><b>mi</b></td><td>я, мы, мой, наш</td><td><span class="tp">mi</span> — я</td></tr>
      <tr>linja-pona<td class="sp-cell">sina</td><td><b>sina</b></td><td>ты, вы, твой, ваш</td><td><span class="tp">sina</span> — ты</td></tr>
      <tr>linja-pona<td class="sp-cell">ona</td><td><b>ona</b></td><td>он, она, оно, они</td><td><span class="tp">ona</span> — он</td></tr>
    </table>

    <div class="lesson-tip">
      <b>Обратите внимание:</b> в toki pona нет разделения на мужской/женский род и на «ты/вы». Одно слово <span class="tp">ona</span> = «он, она, оно, они». Одно <span class="tp">sina</span> = «ты» и «вы».
    </div>

    <h3>🧩 Структура предложения</h3>
    <p>Базовый шаблон toki pona — фиксированный:</p>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:20px; margin:16px 0; text-align:center; font-size:15px; line-height:2;">
      <div style="display:flex; justify-content:center; align-items:center; gap:10px; flex-wrap:wrap;">
        <span style="background:var(--blue); color:#fff; padding:8px 16px; border-radius:8px; font-weight:800;">подлежащее</span>
        <span style="color:var(--muted); font-size:22px;">→</span>
        <span style="background:var(--green); color:#fff; padding:8px 16px; border-radius:8px; font-weight:800;">li</span>
        <span style="color:var(--muted); font-size:22px;">→</span>
        <span style="background:var(--purple); color:#fff; padding:8px 16px; border-radius:8px; font-weight:800;">сказуемое</span>
      </div>
    </div>

    <h4>Что такое li</h4>
    <p><b>li</b> — служебная частица, которая отделяет <b>подлежащее</b> от <b>сказуемого</b>. По смыслу — это просто <b>разделитель</b>: слева тот, о ком речь, справа — что о нём говорится.</p>

    <div class="lesson-example">
      <b>jan li pona</b> — «человек хороший»<br>
      <span class="ru">
        jan → человек (подлежащее)<br>
        li  → разделитель<br>
        pona → хороший (сказуемое)
      </span>
    </div>

    <h4>Исключение: mi и sina</h4>
    <p>Если подлежащее — <b>mi</b> или <b>sina</b>, частица <b>li</b> <b>не ставится</b>:</p>

    <table>
      <tr><th>Подлежащее</th><th>Правильно</th><th>Неправильно</th></tr>
      <tr><td>mi</td><td><span class="tp">mi pona</span> ✓</td><td><span style="color:var(--danger)">mi li pona</span> ✕</td></tr>
      <tr><td>sina</td><td><span class="tp">sina pona</span> ✓</td><td><span style="color:var(--danger)">sina li pona</span> ✕</td></tr>
      <tr><td>ona</td><td><span class="tp">ona li pona</span> ✓</td><td><span style="color:var(--danger)">ona pona</span> ✕</td></tr>
      <tr><td>jan</td><td><span class="tp">jan li pona</span> ✓</td><td><span style="color:var(--danger)">jan pona</span> ✕ (это «друг»)</td></tr>
    </table>

    <div class="lesson-tip">
      <b>Почему так?</b> mi и sina — самые близкие к говорящему слова, они «уже часть ситуации», и li между ними и сказуемым становится избыточной. Запомните: <b>mi pona</b>, <b>sina pona</b> — но <b>ona li pona</b>, <b>jan li pona</b>.
    </div>

    <h3>📝 Разбор примеров</h3>
    <p>Разберём каждое предложение по частям.</p>

    <div class="lesson-example">
      <b>mi pona</b> — «я хороший»<br>
      <span class="ru">mi = я (подлежащее). pona = хороший (сказуемое). li отсутствует, потому что подлежащее mi.</span>
    </div>

    <div class="lesson-example">
      <b>sina pona</b> — «ты хороший»<br>
      <span class="ru">sina = ты. pona = хороший. li не ставится.</span>
    </div>

    <div class="lesson-example">
      <b>ona li pona</b> — «он хороший»<br>
      <span class="ru">ona = он. li = разделитель. pona = хороший. li обязательна — подлежащее не mi и не sina.</span>
    </div>

    <div class="lesson-example">
      <b>jan li ike</b> — «человек плохой»<br>
      <span class="ru">jan = человек. li = разделитель. ike = плохой.</span>
    </div>

    <div class="lesson-example">
      <b>mi toki</b> — «я говорю»<br>
      <span class="ru">toki здесь не «язык», а глагол «говорить». Смысл зависит от контекста.</span>
    </div>

    <div class="lesson-example">
      <b>sina toki pona</b> — «ты хорошо говоришь»<br>
      <span class="ru">toki = говорить. pona = хорошо. Второе слово уточняет первое: «говорить хорошо».</span>
    </div>

    <h3>🗣️ Диалог 1: приветствие</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> toki!<br>
      <b>jan B:</b> toki!<br>
      <b>jan A:</b> sina pona?<br>
      <b>jan B:</b> mi pona. sina pona?<br>
      <b>jan A:</b> mi pona kin.
    </div>
    <p><span class="ru">Перевод: «Привет! — Привет! — Ты в порядке? — Я в порядке. Ты в порядке? — Я тоже в порядке.»</span></p>

    <h3>🗣️ Диалог 2: после долгой разлуки</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> toki, jan Lisa!<br>
      <b>jan B:</b> toki! sina pona anu sina ike?<br>
      <b>jan A:</b> mi pona. taso mi pilin ike lili.<br>
      <b>jan B:</b> a. o pona.
    </div>
    <p><span class="ru">Перевод: «Привет, jan Lisa! — Привет! Ты в порядке или нет? — Я в порядке. Но я немного грущу. — А. Выздоравливай / поправляйся.»</span></p>

    <div class="lesson-tip">
      Слова <span class="tp">anu</span> («или»), <span class="tp">taso</span> («но»), <span class="tp">kin</span> («тоже»), <span class="tp">lili</span> («немного») мы изучим позже. Но общий смысл уже понятен.
    </div>

    <h3>✏️ Задание: исправьте ошибку</h3>
    <p>Прочитайте предложения и найдите ошибки.</p>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi li pona</span><br>
      <span class="ru">Ошибка: mi не берёт li.</span><br>
      <span class="tp">✓ mi pona</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ sina li toki</span><br>
      <span class="ru">Ошибка: sina тоже не берёт li.</span><br>
      <span class="tp">✓ sina toki</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ ona pona</span><br>
      <span class="ru">Ошибка: для ona нужна li.</span><br>
      <span class="tp">✓ ona li pona</span>
    </div>

    <h3>⚠️ Типичные ошибки новичков</h3>
    <table>
      <tr><th>Ошибка</th><th>Почему неверно</th><th>Как правильно</th></tr>
      <tr>
        <td><span style="color:var(--danger)">mi li pona</span></td>
        <td>mi — исключение, li не ставится</td>
        <td><span class="tp">mi pona</span></td>
      </tr>
      <tr>
        <td><span style="color:var(--danger)">sina li toki</span></td>
        <td>sina — исключение</td>
        <td><span class="tp">sina toki</span></td>
      </tr>
      <tr>
        <td><span style="color:var(--danger)">ona pona</span></td>
        <td>забыли li</td>
        <td><span class="tp">ona li pona</span></td>
      </tr>
      <tr>
        <td>ударение на последний слог</td>
        <td>в toki pona ударение только на 1-й слог</td>
        <td><span class="tp">TOki</span>, а не <span style="color:var(--danger)">toKI</span></td>
      </tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «я хороший»? <span class="ru">(mi pona — без li)</span></li>
      <li>Как сказать «он хороший»? <span class="ru">(ona li pona — с li)</span></li>
      <li>Ставится ли li после sina? <span class="ru">(Нет)</span></li>
      <li>На какой слог падает ударение в слове toki? <span class="ru">(На первый: TOki)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. toki pona — язык из 137 слов, где всё зависит от контекста.<br>
      2. Ударение всегда на первый слог.<br>
      3. Структура: <b>подлежащее + li + сказуемое</b>.<br>
      4. <b>mi</b> и <b>sina</b> не берут li.<br>
      5. Одно слово = много значений. <span class="tp">pona</span> = «хороший», «хорошо», «чинить», «спасибо».
    </div>
  `,
  exercises: [
    { q: 'Как поздороваться на toki pona?', opts: ['pona!', 'toki!', 'mi!', 'sina!'], ans: 1 },
    { q: 'Что означает <span class="tp">mi</span>?', opts: ['ты', 'он', 'я', 'мы'], ans: 2 },
    { q: 'Что означает <span class="tp">pona</span>?', opts: ['плохой', 'хороший', 'большой', 'новый'], ans: 1 },
    { q: 'Что означает <span class="tp">ike</span>?', opts: ['хороший', 'плохой', 'маленький', 'старый'], ans: 1 },
    { q: 'Как сказать «ты хороший»?', opts: ['mi pona', 'sina li pona', 'sina pona', 'ona pona'], ans: 2 },
    { q: 'Как сказать «он плохой»?', opts: ['ona ike', 'ona li ike', 'li ona ike', 'ike ona'], ans: 1 },
    { q: 'Перед какими подлежащими НЕ ставится <b>li</b>?', opts: ['mi и sina', 'ona и mi', 'все всегда', 'никогда'], ans: 0 },
    { q: 'Где в слове <span class="tp">toki</span> ударение?', opts: ['на 1-м слоге', 'на 2-м слоге', 'на последнем', 'не важно'], ans: 0 },
    { q: 'Что означает <span class="tp">sina toki</span>?', opts: ['я говорю', 'ты говоришь', 'он говорит', 'говорит'], ans: 1 },
    { q: 'Как сказать «мы хорошие»?', opts: ['mi pona', 'mi li pona', 'sina pona', 'ona pona'], ans: 0 }
  ],
  test: [
    { q: 'Сколько слов в классической toki pona?', opts: ['50', '120', '300', '1000'], ans: 1, explain: 'Классическая (nimi pu) — 120 слов.' },
    { q: 'Сколько согласных в алфавите?', opts: ['5', '9', '14', '26'], ans: 1, explain: 'j k l m n p s t w — 9 согласных.' },
    { q: 'Какое слово пропущено: <span class="tp">ona __ pona</span>?', type: 'input', ans: 'li', explain: 'ona li pona — он хороший.' },
    { q: 'Как сказать «привет»?', type: 'input', ans: 'toki', explain: 'toki!' },
    { q: 'Как сказать «я хороший»?', type: 'input', ans: 'mi pona', explain: 'Без li.' },
    { q: 'Перед <b>ona</b> ставится li?', opts: ['да', 'нет'], ans: 0, explain: 'mi и sina — исключения, все остальные требуют li.' },
    { q: 'Что означает <span class="tp">ona li ike</span>?', opts: ['я плохой', 'ты плохой', 'он плохой', 'мы плохие'], ans: 2, explain: 'ona li ike.' },
    { q: 'Ударение в <span class="tp">pona</span> падает на…', opts: ['1-й слог', '2-й слог', 'последний', 'не важно'], ans: 0, explain: 'Первый слог — всегда.' }
  ],
  builder: [
    { words: ['mi', 'pona'], correct: ['mi', 'pona'], translation: 'я хороший' },
    { words: ['sina', 'toki'], correct: ['sina', 'toki'], translation: 'ты говоришь' },
    { words: ['ona', 'li', 'ike'], correct: ['ona', 'li', 'ike'], translation: 'он плохой' },
    { words: ['mi', 'toki', 'pona'], correct: ['mi', 'toki', 'pona'], translation: 'я хорошо говорю' },
    { words: ['ona', 'li', 'pona'], correct: ['ona', 'li', 'pona'], translation: 'она хорошая' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 2: jan en soweli — люди и звери
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp1-l2',
  title: 'jan en soweli',
  desc: 'люди, животные и частица li',
  xp: 15,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Слова для людей: <span class="tp">jan</span>, <span class="tp">meli</span>, <span class="tp">mije</span>, <span class="tp">mama</span></li>
      <li>Слова для животных: <span class="tp">soweli</span>, <span class="tp">waso</span>, <span class="tp">kala</span>, <span class="tp">pipi</span>, <span class="tp">akesi</span></li>
      <li>Как работает <b>li</b> с разными подлежащими</li>
      <li>Как выражать принадлежность: <span class="tp">mama mi</span> = «мой родитель»</li>
    </ul>

    <h3>👥 Люди — это просто</h3>
    <p>В toki pona <b>jan</b> — любой человек. Не важно, ребёнок это, старик или незнакомец. Одно слово.</p>

    <p>Пол уточняется отдельно: <b>meli</b> (женщина), <b>mije</b> (мужчина). А <b>mama</b> — это и «мать», и «отец»: в toki pona не делают различия без нужды.</p>

    <h3>📖 Новые слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">jan</td><td><b>jan</b></td><td>человек, кто-то</td></tr>
      <tr>linja-pona<td class="sp-cell">meli</td><td><b>meli</b></td><td>женщина, женский</td></tr>
      <tr>linja-pona<td class="sp-cell">mije</td><td><b>mije</b></td><td>мужчина, мужской</td></tr>
      <tr>linja-pona<td class="sp-cell">mama</td><td><b>mama</b></td><td>родитель, мать, отец</td></tr>
      <tr>linja-pona<td class="sp-cell">soweli</td><td><b>soweli</b></td><td>животное, зверь</td></tr>
      <tr>linja-pona<td class="sp-cell">waso</td><td><b>waso</b></td><td>птица</td></tr>
      <tr>linja-pona<td class="sp-cell">kala</td><td><b>kala</b></td><td>рыба, морское существо</td></tr>
      <tr>linja-pona<td class="sp-cell">pipi</td><td><b>pipi</b></td><td>насекомое, жук</td></tr>
      <tr>linja-pona<td class="sp-cell">akesi</td><td><b>akesi</b></td><td>рептилия, амфибия</td></tr>
    </table>

    <h3>🧩 Схема: li ставится после подлежащего</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:20px; margin:16px 0;">
      <div style="font-size:13px; color:var(--muted); margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;">Правило li</div>

      <div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px dashed var(--border);">
        <span style="color:var(--blue); font-weight:800;">mi / sina</span>
        <span style="color:var(--muted);">→</span>
        <span style="color:var(--danger); font-weight:800;">li НЕ ставится</span>
        <span style="color:var(--muted);">→</span>
        <span class="tp" style="font-weight:700;">mi pona</span>
      </div>

      <div style="display:flex; justify-content:space-between; padding:10px 0;">
        <span style="color:var(--purple); font-weight:800;">все остальные</span>
        <span style="color:var(--muted);">→</span>
        <span style="color:var(--green); font-weight:800;">li ставится</span>
        <span style="color:var(--muted);">→</span>
        <span class="tp" style="font-weight:700;">jan li pona</span>
      </div>
    </div>

    <p>Это правило <b>универсально</b> — оно работает для любого подлежащего во всех уроках. Запомните его один раз.</p>

    <h4>Практика: с li или без li?</h4>
    <table>
      <tr><th>Подлежащее</th><th>Как правильно</th></tr>
      <tr><td>mi</td><td><span class="tp">mi pona</span></td></tr>
      <tr><td>sina</td><td><span class="tp">sina pona</span></td></tr>
      <tr><td>jan</td><td><span class="tp">jan li pona</span></td></tr>
      <tr><td>ona</td><td><span class="tp">ona li pona</span></td></tr>
      <tr><td>soweli</td><td><span class="tp">soweli li pona</span></td></tr>
      <tr><td>meli</td><td><span class="tp">meli li pona</span></td></tr>
      <tr><td>mama mi</td><td><span class="tp">mama mi li pona</span></td></tr>
    </table>

    <h3>🎯 Притяжательность</h3>
    <p>Притяжание выражается простым порядком: <b>вещь + владелец</b>.</p>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:20px; margin:16px 0; text-align:center; font-size:15px;">
      <span style="color:var(--green); font-weight:800;">слово</span>
      <span style="color:var(--muted);"> + </span>
      <span style="color:var(--blue); font-weight:800;">чей</span>
    </div>

    <div class="lesson-example"><span class="tp">mama mi</span> — мой родитель</div>
    <div class="lesson-example"><span class="tp">mama sina</span> — твой родитель</div>
    <div class="lesson-example"><span class="tp">mama ona</span> — его родитель</div>
    <div class="lesson-example"><span class="tp">soweli mi</span> — моё животное (мой питомец)</div>

    <div class="lesson-tip">
      <b>Обратите внимание:</b> <span class="tp">mama mi</span> = «мой родитель», а <span class="tp">mi mama</span> = «я родитель». <b>Порядок важен!</b>
    </div>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>jan li pona</b> — «человек хороший»<br>
      <span class="ru">jan = человек. li = разделитель. pona = хороший.</span>
    </div>

    <div class="lesson-example">
      <b>meli li toki</b> — «женщина говорит»<br>
      <span class="ru">toki здесь — глагол «говорить». meli = женщина.</span>
    </div>

    <div class="lesson-example">
      <b>soweli li pona</b> — «зверь хороший»<br>
      <span class="ru">Зверь = любое животное с шерстью: кошка, собака, медведь.</span>
    </div>

    <div class="lesson-example">
      <b>waso li toki</b> — «птица поёт»<br>
      <span class="ru">Буквально «птица говорит». toki может означать любой звук, который издаёт живое существо.</span>
    </div>

    <div class="lesson-example">
      <b>mama mi li pona</b> — «моя мама хорошая»<br>
      <span class="ru">mama mi = мой родитель. Это подлежащее. li = разделитель. pona = хороший.</span>
    </div>

    <div class="lesson-example">
      <b>kala li ike</b> — «рыба плохая»<br>
      <span class="ru">kala = рыба. В контексте «опасная» — например, акула.</span>
    </div>

    <h3>🗣️ Диалог 1: о семье</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina jo e mama?<br>
      <b>jan B:</b> mama mi li lon. mama mi li pona.<br>
      <b>jan A:</b> mama sina li mije anu meli?<br>
      <b>jan B:</b> mama mi li meli. mama mi li mama meli.<br>
      <b>jan A:</b> pona.
    </div>
    <p><span class="ru">Перевод: «У тебя есть мама? — Моя мама здесь. Она хорошая. — Твоя мама — мужчина или женщина? — Женщина. Она женщина-родитель. — Хорошо.»</span></p>

    <h3>🗣️ Диалог 2: про животных</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina jo e soweli?<br>
      <b>jan B:</b> mi jo e soweli lili. ona li pona.<br>
      <b>jan A:</b> ona li meli anu mije?<br>
      <b>jan B:</b> mi sona ala. taso ona li pona tawa mi.
    </div>
    <p><span class="ru">Перевод: «У тебя есть питомец? — У меня есть маленькое животное. Оно хорошее. — Оно девочка или мальчик? — Не знаю. Но оно мне нравится.»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ soweli pona</span><br>
      <span class="ru">Ошибка: для soweli нужна li.</span><br>
      <span class="tp">✓ soweli li pona</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi li mama</span><br>
      <span class="ru">Ошибка: mi — исключение.</span><br>
      <span class="tp">✓ mi mama</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi mama li pona</span><br>
      <span class="ru">Ошибка: «мой родитель» = mama mi, а не mi mama.</span><br>
      <span class="tp">✓ mama mi li pona</span>
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr>
        <td><span style="color:var(--danger)">waso toki</span></td>
        <td><span class="tp">waso li toki</span> — если это целое предложение</td>
      </tr>
      <tr>
        <td><span style="color:var(--danger)">mi mama li pona</span></td>
        <td><span class="tp">mama mi li pona</span> — «мой родитель хороший»</td>
      </tr>
      <tr>
        <td>путать <span class="tp">mama mi</span> и <span class="tp">mi mama</span></td>
        <td>первое = «мой родитель», второе = «я родитель»</td>
      </tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «мой питомец»? <span class="ru">(soweli mi)</span></li>
      <li>Как сказать «я родитель»? <span class="ru">(mi mama)</span></li>
      <li>Нужна ли li после soweli? <span class="ru">(Да, soweli li pona)</span></li>
      <li>Что означает <span class="tp">waso li toki</span>? <span class="ru">(Птица поёт)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. <b>jan</b> = человек, <b>soweli</b> = любое животное с шерстью.<br>
      2. <b>meli / mije</b> — женский / мужской пол.<br>
      3. <b>mama</b> = «родитель» без различия пола.<br>
      4. Правило li: <b>mi / sina</b> → без li; остальные → с li.<br>
      5. Притяжение: <b>слово + чей</b>: <span class="tp">mama mi</span>, <span class="tp">soweli ona</span>.
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">jan</span>?', opts: ['животное', 'человек', 'птица', 'рыба'], ans: 1 },
    { q: 'Что означает <span class="tp">soweli</span>?', opts: ['птица', 'рыба', 'животное', 'насекомое'], ans: 2 },
    { q: 'Что означает <span class="tp">waso</span>?', opts: ['птица', 'рыба', 'зверь', 'человек'], ans: 0 },
    { q: 'Что означает <span class="tp">meli</span>?', opts: ['мужчина', 'женщина', 'родитель', 'друг'], ans: 1 },
    { q: 'Что означает <span class="tp">mije</span>?', opts: ['мужчина', 'женщина', 'ребёнок', 'зверь'], ans: 0 },
    { q: 'Как сказать «человек хороший»?', opts: ['jan pona', 'jan li pona', 'li jan pona', 'pona jan'], ans: 1 },
    { q: 'Как сказать «моя мама»?', opts: ['mi mama', 'mama mi', 'mama li mi', 'mi li mama'], ans: 1 },
    { q: 'Как сказать «рыба плохая»?', opts: ['kala ike', 'kala li ike', 'ike kala', 'li kala ike'], ans: 1 },
    { q: 'Что означает <span class="tp">soweli sina</span>?', opts: ['моё животное', 'твоё животное', 'его животное', 'животное-человек'], ans: 1 },
    { q: 'Как сказать «птица поёт»?', opts: ['waso toki', 'waso li toki', 'toki waso', 'li waso toki'], ans: 1 }
  ],
  test: [
    { q: 'Перед каким подлежащим НЕ ставится li?', opts: ['jan', 'soweli', 'sina', 'ona'], ans: 2, explain: 'mi и sina — исключения.' },
    { q: 'Что означает <span class="tp">mama mi li pona</span>?', opts: ['я родитель', 'мой родитель хороший', 'родитель мой', 'хороший родитель мой'], ans: 1, explain: 'mama mi = мой родитель; li pona = хороший.' },
    { q: 'Как переводится <span class="tp">pipi li ike</span>?', opts: ['жук хороший', 'жук плохой', 'я жук', 'жук говорит'], ans: 1, explain: 'pipi li ike — жук плохой.' },
    { q: 'Введите «человек говорит»:', type: 'input', ans: 'jan li toki', explain: 'jan li toki.' },
    { q: 'Введите «моё животное»:', type: 'input', ans: 'soweli mi', explain: 'soweli mi.' },
    { q: 'Введите «женщина хорошая»:', type: 'input', ans: 'meli li pona', explain: 'meli li pona.' },
    { q: 'Что означает <span class="tp">akesi li pona</span>?', opts: ['ящерица хорошая', 'ящерица плохая', 'рыба хорошая', 'жук хороший'], ans: 0, explain: 'akesi = рептилия.' },
    { q: 'Как сказать «твой отец»?', opts: ['mije sina', 'mama mije sina', 'sina mama', 'mama sina mije'], ans: 1, explain: 'mama mije = отец, + sina = твой.' }
  ],
  builder: [
    { words: ['jan', 'li', 'toki'], correct: ['jan', 'li', 'toki'], translation: 'человек говорит' },
    { words: ['mama', 'mi', 'li', 'pona'], correct: ['mama', 'mi', 'li', 'pona'], translation: 'мой родитель хороший' },
    { words: ['soweli', 'li', 'ike'], correct: ['soweli', 'li', 'ike'], translation: 'зверь плохой' },
    { words: ['waso', 'sina', 'li', 'toki'], correct: ['waso', 'sina', 'li', 'toki'], translation: 'твоя птица поёт' },
    { words: ['mi', 'mama'], correct: ['mi', 'mama'], translation: 'я родитель' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 3: pali — действия и состояния
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp1-l3',
  title: 'pali',
  desc: 'глаголы действия и частица e',
  xp: 15,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Слова действия: <span class="tp">jo</span>, <span class="tp">kama</span>, <span class="tp">tawa</span>, <span class="tp">awen</span>, <span class="tp">lukin</span>, <span class="tp">kute</span>, <span class="tp">sona</span>, <span class="tp">pilin</span></li>
      <li>Как работает частица <b>e</b> — маркер дополнения</li>
      <li>Как отличить глагол от существительного по позиции в предложении</li>
      <li>Как уточнять глагол модификатором: <span class="tp">pilin pona</span> = «чувствовать хорошо»</li>
    </ul>

    <h3>⚡ В toki pona нет «глаголов»</h3>
    <p>Это <b>главная идея</b> языка. Любое слово может быть действием — если стоит после <b>li</b> (или после mi/sina).</p>

    <div class="lesson-example">
      <b>mi moku</b> — «я ем / я еда / я съедобный»<br>
      <span class="ru">Смысл зависит от контекста. Обычно понимается как «я ем».</span>
    </div>

    <p>Только благодаря частице <b>e</b> мы понимаем, что действие направлено на объект.</p>

    <h3>📖 Новые слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">jo</td><td><b>jo</b></td><td>иметь, держать</td></tr>
      <tr>linja-pona<td class="sp-cell">kama</td><td><b>kama</b></td><td>приходить, становиться</td></tr>
      <tr>linja-pona<td class="sp-cell">tawa</td><td><b>tawa</b></td><td>идти, двигаться, к</td></tr>
      <tr>linja-pona<td class="sp-cell">awen</td><td><b>awen</b></td><td>ждать, оставаться</td></tr>
      <tr>linja-pona<td class="sp-cell">lukin</td><td><b>lukin</b></td><td>видеть, смотреть, глаз</td></tr>
      <tr>linja-pona<td class="sp-cell">kute</td><td><b>kute</b></td><td>слышать, слушать, ухо</td></tr>
      <tr>linja-pona<td class="sp-cell">sona</td><td><b>sona</b></td><td>знать, понимать</td></tr>
      <tr>linja-pona<td class="sp-cell">pilin</td><td><b>pilin</b></td><td>чувствовать, сердце</td></tr>
    </table>

    <h3>🧩 Схема: подлежащее + li + действие + e + объект</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="display:flex; justify-content:center; align-items:center; gap:8px; flex-wrap:wrap; font-size:14px;">
        <span style="background:var(--blue); color:#fff; padding:8px 14px; border-radius:8px; font-weight:800;">S</span>
        <span style="color:var(--muted); font-size:18px;">+</span>
        <span style="background:var(--green); color:#fff; padding:8px 14px; border-radius:8px; font-weight:800;">li</span>
        <span style="color:var(--muted); font-size:18px;">+</span>
        <span style="background:var(--purple); color:#fff; padding:8px 14px; border-radius:8px; font-weight:800;">V</span>
        <span style="color:var(--muted); font-size:18px;">+</span>
        <span style="background:var(--gold); color:#1a1a1a; padding:8px 14px; border-radius:8px; font-weight:800;">e</span>
        <span style="color:var(--muted); font-size:18px;">+</span>
        <span style="background:var(--orange); color:#fff; padding:8px 14px; border-radius:8px; font-weight:800;">O</span>
      </div>
      <div style="margin-top:14px; font-size:13px; color:var(--muted); text-align:center; line-height:1.9;">
        <div><span style="color:var(--blue); font-weight:700;">S</span> — подлежащее · <span style="color:var(--purple); font-weight:700;">V</span> — сказуемое (действие) · <span style="color:var(--orange); font-weight:700;">O</span> — объект</div>
        <div style="margin-top:6px;">Пример: <span class="tp">mi moku e kili</span> — «я ем фрукт»</div>
      </div>
    </div>

    <h3>🧩 Частица e — маркер объекта</h3>
    <p><b>e</b> ставится перед <b>прямым дополнением</b> — тем, на что направлено действие. Без e предложение меняет смысл.</p>

    <table>
      <tr><th>Без e</th><th>С e</th></tr>
      <tr><td><span class="tp">mi moku</span> — я ем (без объекта)</td><td><span class="tp">mi moku e kili</span> — я ем фрукт</td></tr>
      <tr><td><span class="tp">mi lukin</span> — я смотрю</td><td><span class="tp">mi lukin e sina</span> — я вижу тебя</td></tr>
      <tr><td><span class="tp">mi kute</span> — я слушаю</td><td><span class="tp">mi kute e sina</span> — я слышу тебя</td></tr>
    </table>

    <div class="lesson-tip">
      <b>Запомните:</b> если действие направлено на что-то — нужен <b>e</b>. Если действие «само по себе» — <b>e</b> не нужен.
    </div>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>mi jo e soweli</b> — «у меня есть животное»<br>
      <span class="ru">jo = иметь. e soweli = животное (объект). Буквально: «я имею животное».</span>
    </div>

    <div class="lesson-example">
      <b>mi lukin e sina</b> — «я вижу тебя»<br>
      <span class="ru">lukin = видеть. e sina = тебя (объект).</span>
    </div>

    <div class="lesson-example">
      <b>sina kute e mi</b> — «ты слышишь меня»<br>
      <span class="ru">kute = слышать. e mi = меня (объект).</span>
    </div>

    <div class="lesson-example">
      <b>ona li kama</b> — «он приходит»<br>
      <span class="ru">kama — непереходный глагол, объект не нужен. e не ставится.</span>
    </div>

    <div class="lesson-example">
      <b>jan li tawa</b> — «человек идёт»<br>
      <span class="ru">tawa = идти. Не требует объекта.</span>
    </div>

    <div class="lesson-example">
      <b>mi sona</b> — «я знаю»<br>
      <span class="ru">sona = знать. Без объекта — «знать вообще». С объектом: mi sona e ni = «я знаю это».</span>
    </div>

    <div class="lesson-example">
      <b>mi pilin pona</b> — «я чувствую себя хорошо»<br>
      <span class="ru">pilin = чувствовать. pona = хорошо (модификатор). Второе слово уточняет первое.</span>
    </div>

    <div class="lesson-example">
      <b>o awen!</b> — «подожди!»<br>
      <span class="ru">o — частица повеления. awen = ждать. Буквально: «пусть будет ожидание».</span>
    </div>

    <h3>🎯 Модификаторы: pilin pona</h3>
    <p>Слово после глагола уточняет его.</p>
    <div class="lesson-example"><span class="tp">mi pilin pona</span> — мне хорошо (я чувствую хорошее)</div>
    <div class="lesson-example"><span class="tp">mi pilin ike</span> — мне плохо</div>
    <div class="lesson-example"><span class="tp">mi sona pona</span> — я хорошо знаю</div>
    <div class="lesson-example"><span class="tp">mi tawa pona</span> — я иду хорошо / я иду спокойно</div>

    <h3>🗣️ Диалог 1: где ты?</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina lon seme?<br>
      <b>jan B:</b> mi lon tomo. sina kama?<br>
      <b>jan A:</b> mi kama. o awen lili.<br>
      <b>jan B:</b> pona. mi awen.
    </div>
    <p><span class="ru">Перевод: «Ты где? — Я в доме. Ты идёшь? — Иду. Подожди немного. — Хорошо. Жду.»</span></p>

    <h3>🗣️ Диалог 2: вижу тебя</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina lukin e seme?<br>
      <b>jan B:</b> mi lukin e sina.<br>
      <b>jan A:</b> mi kute e kalama. sina toki?<br>
      <b>jan B:</b> ala. mi kalama taso.
    </div>
    <p><span class="ru">Перевод: «Что ты видишь? — Я вижу тебя. — Я слышу звук. Ты говоришь? — Нет. Я просто издаю звук.»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi lukin sina</span><br>
      <span class="ru">Ошибка: забыли e перед объектом.</span><br>
      <span class="tp">✓ mi lukin e sina</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi jo soweli</span><br>
      <span class="ru">Ошибка: с jo всегда нужен e.</span><br>
      <span class="tp">✓ mi jo e soweli</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ ona li kama e tomo</span><br>
      <span class="ru">Ошибка: kama непереходный. e не нужен.</span><br>
      <span class="tp">✓ ona li kama tomo</span>
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr>
        <td><span style="color:var(--danger)">mi lukin sina</span></td>
        <td><span class="tp">mi lukin e sina</span></td>
      </tr>
      <tr>
        <td><span style="color:var(--danger)">mi e moku</span></td>
        <td><span class="tp">mi moku</span> (e только для объекта)</td>
      </tr>
      <tr>
        <td><span style="color:var(--danger)">mi sona ni</span></td>
        <td><span class="tp">mi sona e ni</span></td>
      </tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «я вижу тебя»? <span class="ru">(mi lukin e sina)</span></li>
      <li>Как сказать «ты слышишь меня»? <span class="ru">(sina kute e mi)</span></li>
      <li>Нужен ли e после kama? <span class="ru">(Нет, kama непереходный)</span></li>
      <li>Что означает <span class="tp">mi pilin pona</span>? <span class="ru">(Мне хорошо)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. В toki pona нет отдельных глаголов — любое слово после li может быть действием.<br>
      2. <b>e</b> — маркер объекта. Он ставится, когда действие направлено на что-то.<br>
      3. Структура предложения: <b>S + li + V + e + O</b>.<br>
      4. Модификатор после глагола уточняет его: <span class="tp">pilin pona</span>.<br>
      5. <b>o</b> — частица повеления. <span class="tp">o awen</span> = «жди».
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">jo</span>?', opts: ['идти', 'иметь', 'видеть', 'знать'], ans: 1 },
    { q: 'Что означает <span class="tp">kama</span>?', opts: ['уходить', 'приходить', 'ждать', 'видеть'], ans: 1 },
    { q: 'Что означает <span class="tp">lukin</span>?', opts: ['слушать', 'видеть', 'говорить', 'знать'], ans: 1 },
    { q: 'Что означает <span class="tp">sona</span>?', opts: ['чувствовать', 'знать', 'видеть', 'говорить'], ans: 1 },
    { q: 'Что означает <span class="tp">pilin</span>?', opts: ['чувствовать', 'слушать', 'ждать', 'говорить'], ans: 0 },
    { q: 'Как сказать «я вижу тебя»?', opts: ['mi lukin sina', 'mi lukin e sina', 'mi e lukin sina', 'lukin mi e sina'], ans: 1 },
    { q: 'Как сказать «ты слышишь меня»?', opts: ['sina kute mi', 'sina kute e mi', 'sina e kute mi', 'kute sina mi'], ans: 1 },
    { q: 'Что означает <span class="tp">mi jo e soweli</span>?', opts: ['я животное', 'у меня есть животное', 'я вижу животное', 'я люблю животное'], ans: 1 },
    { q: 'Что означает <span class="tp">mi pilin pona</span>?', opts: ['я хороший', 'мне хорошо', 'я знаю хорошо', 'я говорю хорошо'], ans: 1 },
    { q: 'Как сказать «он идёт»?', opts: ['ona tawa', 'ona li tawa', 'tawa ona', 'li ona tawa'], ans: 1 }
  ],
  test: [
    { q: 'Перед чем ставится частица e?', opts: ['перед подлежащим', 'перед сказуемым', 'перед дополнением', 'после всего'], ans: 2, explain: 'e — маркер прямого дополнения.' },
    { q: 'Как перевести <span class="tp">mi moku e kili</span>?', opts: ['я еда-фрукт', 'я ем фрукт', 'фрукт ест меня', 'я фрукт'], ans: 1, explain: 'e kili = прямое дополнение.' },
    { q: 'Введите «я тебя вижу»:', type: 'input', ans: 'mi lukin e sina', explain: 'mi lukin e sina.' },
    { q: 'Введите «ты меня слышишь»:', type: 'input', ans: 'sina kute e mi', explain: 'sina kute e mi.' },
    { q: 'Введите «у меня есть человек»:', type: 'input', ans: 'mi jo e jan', explain: 'mi jo e jan.' },
    { q: 'Что означает <span class="tp">mi sona</span>?', opts: ['я знаю', 'я иду', 'я вижу', 'я чувствую'], ans: 0, explain: 'sona = знать.' },
    { q: 'Что означает <span class="tp">jan li kama</span>?', opts: ['человек уходит', 'человек приходит', 'человек ждёт', 'человек видит'], ans: 1, explain: 'kama = приходить.' },
    { q: 'Как сказать «подожди»?', opts: ['awen!', 'o awen!', 'mi awen', 'sina awen'], ans: 1, explain: 'o + действие — повеление.' }
  ],
  builder: [
    { words: ['mi', 'lukin', 'e', 'sina'], correct: ['mi', 'lukin', 'e', 'sina'], translation: 'я вижу тебя' },
    { words: ['sina', 'kute', 'e', 'mi'], correct: ['sina', 'kute', 'e', 'mi'], translation: 'ты слышишь меня' },
    { words: ['ona', 'li', 'jo', 'e', 'soweli'], correct: ['ona', 'li', 'jo', 'e', 'soweli'], translation: 'у него есть животное' },
    { words: ['mi', 'pilin', 'pona'], correct: ['mi', 'pilin', 'pona'], translation: 'я чувствую себя хорошо' },
    { words: ['jan', 'li', 'kama'], correct: ['jan', 'li', 'kama'], translation: 'человек приходит' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 4: ijo — предметы вокруг нас
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp1-l4',
  title: 'ijo',
  desc: 'предметы, инструменты, ni / ona',
  xp: 15,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Слова для предметов: <span class="tp">ijo</span>, <span class="tp">ilo</span>, <span class="tp">lipu</span>, <span class="tp">supa</span>, <span class="tp">poki</span>, <span class="tp">lupa</span>, <span class="tp">palisa</span>, <span class="tp">linja</span>, <span class="tp">len</span></li>
      <li>Как называть вещи, у которых нет отдельного слова — через описание</li>
      <li>Как работают указатели <span class="tp">ni</span> («это») и <span class="tp">ona</span> («он, оно»)</li>
      <li>Как модификаторы уточняют предмет</li>
    </ul>

    <h3>📦 ijo — любая вещь</h3>
    <p>В toki pona <b>ijo</b> — «вещь, нечто, объект». Если нужно уточнить — добавляем слова <b>после</b>.</p>

    <div class="lesson-example"><span class="tp">ijo</span> — вещь</div>
    <div class="lesson-example"><span class="tp">ijo lili</span> — маленькая вещь</div>
    <div class="lesson-example"><span class="tp">ijo pona</span> — хорошая вещь</div>

    <h3>📖 Новые слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">ijo</td><td><b>ijo</b></td><td>вещь, нечто, объект</td></tr>
      <tr>linja-pona<td class="sp-cell">ilo</td><td><b>ilo</b></td><td>инструмент, устройство</td></tr>
      <tr>linja-pona<td class="sp-cell">lipu</td><td><b>lipu</b></td><td>бумага, документ, книга</td></tr>
      <tr>linja-pona<td class="sp-cell">supa</td><td><b>supa</b></td><td>стол, стул, поверхность</td></tr>
      <tr>linja-pona<td class="sp-cell">poki</td><td><b>poki</b></td><td>контейнер, коробка, чашка</td></tr>
      <tr>linja-pona<td class="sp-cell">lupa</td><td><b>lupa</b></td><td>отверстие, дверь, окно</td></tr>
      <tr>linja-pona<td class="sp-cell">palisa</td><td><b>palisa</b></td><td>палка, ветка, стержень</td></tr>
      <tr>linja-pona<td class="sp-cell">linja</td><td><b>linja</b></td><td>верёвка, нить, волосы</td></tr>
      <tr>linja-pona<td class="sp-cell">len</td><td><b>len</b></td><td>одежда, ткань, покрывать</td></tr>
    </table>

    <h3>🧩 Схема: модификатор идёт ПОСЛЕ</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="font-size:13px; color:var(--muted); margin-bottom:12px; text-transform:uppercase; letter-spacing:1px; text-align:center;">Главное правило toki pona</div>

      <div style="display:flex; justify-content:center; align-items:center; gap:12px; font-size:15px; flex-wrap:wrap;">
        <span style="background:var(--green); color:#fff; padding:10px 18px; border-radius:8px; font-weight:800;">главное слово</span>
        <span style="color:var(--muted); font-size:20px;">→</span>
        <span style="background:var(--blue); color:#fff; padding:10px 18px; border-radius:8px; font-weight:800;">уточнение</span>
      </div>

      <div style="text-align:center; margin-top:14px; font-size:13px; color:var(--muted);">
        Пример: <span class="tp">ilo</span> (инструмент) + <span class="tp">toki</span> (речь) = <span class="tp">ilo toki</span> (телефон)
      </div>
    </div>

    <h3>🧩 ni и ona — указатели</h3>

    <table>
      <tr><th>Слово</th><th>Значение</th><th>Пример</th></tr>
      <tr><td><b>ni</b></td><td>это, то</td><td><span class="tp">ni li pona</span> — это хорошая вещь</td></tr>
      <tr><td><b>ona</b></td><td>он, она, оно (о ранее упомянутом)</td><td><span class="tp">ona li ijo</span> — это вещь (что-то)</td></tr>
    </table>

    <div class="lesson-example"><span class="tp">ni li pona</span> — это хорошая вещь</div>
    <div class="lesson-example"><span class="tp">ni li ike</span> — это плохая вещь</div>
    <div class="lesson-example"><span class="tp">mi jo e ni</span> — у меня есть это</div>
    <div class="lesson-example"><span class="tp">ona li ijo</span> — это вещь (что-то)</div>

    <div class="lesson-tip">
      <b>ni</b> — подлежащее, поэтому <b>li обязательна</b>: <span class="tp">ni li pona</span>.
    </div>

    <h3>🎯 Схема: как называть вещи через описание</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="display:grid; grid-template-columns:1fr auto 1fr; gap:14px; align-items:center; font-size:14px;">
        <div style="text-align:right;">
          <div class="tp" style="font-weight:800; font-size:16px;">ilo</div>
          <div style="font-size:12px; color:var(--muted);">инструмент</div>
        </div>
        <div style="color:var(--muted); font-size:18px;">+</div>
        <div>
          <div class="tp" style="font-weight:800; font-size:16px;">toki</div>
          <div style="font-size:12px; color:var(--muted);">речь</div>
        </div>
      </div>

      <div style="text-align:center; margin-top:14px; padding-top:14px; border-top:1px dashed var(--border);">
        <div style="font-size:12px; color:var(--muted);">получается</div>
        <div class="tp" style="font-size:18px; font-weight:800; margin-top:4px;">ilo toki</div>
        <div style="font-size:13px; color:var(--muted); margin-top:2px;">телефон</div>
      </div>
    </div>

    <h4>Ещё примеры таких составных слов</h4>
    <table>
      <tr><th>Фраза</th><th>Буквально</th><th>Значение</th></tr>
      <tr><td><span class="tp">ilo toki</span></td><td>инструмент речи</td><td>телефон</td></tr>
      <tr><td><span class="tp">ilo lukin</span></td><td>инструмент зрения</td><td>очки / телескоп</td></tr>
      <tr><td><span class="tp">lipu toki</span></td><td>бумага речи</td><td>письмо / книга</td></tr>
      <tr><td><span class="tp">poki telo</span></td><td>сосуд воды</td><td>чашка / бутылка</td></tr>
      <tr><td><span class="tp">palisa kasi</span></td><td>палка растения</td><td>ветка</td></tr>
      <tr><td><span class="tp">len sijelo</span></td><td>ткань тела</td><td>одежда</td></tr>
      <tr><td><span class="tp">poki lete</span></td><td>холодный ящик</td><td>холодильник</td></tr>
    </table>

    <div class="lesson-tip">
      <b>Философия:</b> у toki pona нет слова «холодильник». Не потому что язык бедный, а потому что он <b>заставляет думать</b>: холодильник — что это? Холодный ящик. <span class="tp">poki lete</span>.
    </div>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>mi jo e ilo toki</b> — «у меня есть телефон»<br>
      <span class="ru">jo e = иметь (с объектом). ilo toki = инструмент речи = телефон.</span>
    </div>

    <div class="lesson-example">
      <b>mi lukin e lipu</b> — «я читаю книгу»<br>
      <span class="ru">lukin = смотреть. lipu = бумага / книга. В toki pona «читать» = «смотреть на бумагу».</span>
    </div>

    <div class="lesson-example">
      <b>ona li jo e poki telo</b> — «у него есть чашка»<br>
      <span class="ru">ona li jo e = у него есть. poki telo = сосуд воды.</span>
    </div>

    <div class="lesson-example">
      <b>ni li ilo pona</b> — «это хороший инструмент»<br>
      <span class="ru">ni = это. li ilo pona = является хорошим инструментом.</span>
    </div>

    <div class="lesson-example">
      <b>sina jo e lipu seme?</b> — «какая у тебя книга?»<br>
      <span class="ru">seme = «какой» в позиции уточнения.</span>
    </div>

    <h3>🗣️ Диалог 1: что это?</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> ni li seme?<br>
      <b>jan B:</b> ni li ilo toki.<br>
      <b>jan A:</b> ilo toki li pona anu ike?<br>
      <b>jan B:</b> ona li pona. ona li sin.
    </div>
    <p><span class="ru">Перевод: «Что это? — Это телефон. — Телефон хороший или плохой? — Он хороший. Он новый.»</span></p>

    <h3>🗣️ Диалог 2: в комнате</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina jo e lipu?<br>
      <b>jan B:</b> mi jo e lipu tu. lipu wan li pona. lipu ante li ike.<br>
      <b>jan A:</b> lipu pona li seme?<br>
      <b>jan B:</b> ona li lipu toki.
    </div>
    <p><span class="ru">Перевод: «У тебя есть книга? — У меня две книги. Одна хорошая. Другая плохая. — Что за хорошая книга? — Это письмо.»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ ni pona</span><br>
      <span class="ru">Ошибка: ni — подлежащее, требует li.</span><br>
      <span class="tp">✓ ni li pona</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ toki ilo</span><br>
      <span class="ru">Ошибка: главное слово должно быть первым.</span><br>
      <span class="tp">✓ ilo toki</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi jo ilo toki</span><br>
      <span class="ru">Ошибка: забыли e перед объектом.</span><br>
      <span class="tp">✓ mi jo e ilo toki</span>
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr>
        <td><span style="color:var(--danger)">toki ilo</span></td>
        <td><span class="tp">ilo toki</span> — главное слово сначала</td>
      </tr>
      <tr>
        <td><span style="color:var(--danger)">ni pona</span></td>
        <td><span class="tp">ni li pona</span></td>
      </tr>
      <tr>
        <td><span style="color:var(--danger)">mi jo ijo</span></td>
        <td><span class="tp">mi jo e ijo</span></td>
      </tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «телефон»? <span class="ru">(ilo toki)</span></li>
      <li>Что такое <span class="tp">poki telo</span>? <span class="ru">(чашка, бутылка)</span></li>
      <li>Как сказать «это хорошо»? <span class="ru">(ni li pona)</span></li>
      <li>Где стоит модификатор? <span class="ru">(После главного слова)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. <b>ijo</b> = вещь, <b>ilo</b> = инструмент, <b>lipu</b> = бумага.<br>
      2. Модификаторы всегда идут <b>после</b> главного слова: <span class="tp">ilo toki</span>.<br>
      3. Любую вещь можно описать, даже если нет отдельного слова.<br>
      4. <b>ni</b> = «это», требует li.<br>
      5. <b>ona</b> = «он/она/оно» о ранее упомянутом.
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">ijo</span>?', opts: ['человек', 'вещь', 'место', 'зверь'], ans: 1 },
    { q: 'Что означает <span class="tp">ilo</span>?', opts: ['вещь', 'инструмент', 'бумага', 'сосуд'], ans: 1 },
    { q: 'Что означает <span class="tp">lipu</span>?', opts: ['стол', 'бумага', 'одежда', 'коробка'], ans: 1 },
    { q: 'Что означает <span class="tp">poki</span>?', opts: ['палка', 'контейнер', 'дырка', 'верёвка'], ans: 1 },
    { q: 'Что означает <span class="tp">lupa</span>?', opts: ['отверстие, дверь', 'палка', 'стол', 'одежда'], ans: 0 },
    { q: 'Что означает <span class="tp">palisa</span>?', opts: ['вещь', 'палка', 'бумага', 'одежда'], ans: 1 },
    { q: 'Что означает <span class="tp">linja</span>?', opts: ['нить, верёвка', 'камень', 'палка', 'ткань'], ans: 0 },
    { q: 'Как сказать «это хорошая вещь»?', opts: ['ni pona', 'ni li pona', 'pona ni', 'li ni pona'], ans: 1 },
    { q: 'Как сказать «телефон»?', opts: ['ilo toki', 'toki ilo', 'ilo lukin', 'lipu toki'], ans: 0 },
    { q: 'Как сказать «чашка воды»?', opts: ['poki telo', 'telo poki', 'poki lupa', 'supa telo'], ans: 0 }
  ],
  test: [
    { q: 'Что такое <span class="tp">ilo toki</span>?', opts: ['книга', 'телефон', 'чашка', 'ручка'], ans: 1, explain: 'инструмент речи = телефон.' },
    { q: 'Что такое <span class="tp">lipu</span>?', opts: ['стол', 'бумага / документ', 'одежда', 'сосуд'], ans: 1, explain: 'lipu — любая плоская вещь с информацией.' },
    { q: 'Как сказать «я вижу вещь»?', opts: ['mi lukin e ijo', 'mi ijo lukin', 'lukin mi ijo', 'mi e lukin ijo'], ans: 0, explain: 'mi lukin e ijo.' },
    { q: 'Введите «это плохо»:', type: 'input', ans: 'ni li ike', explain: 'ni li ike.' },
    { q: 'Введите «у меня есть телефон»:', type: 'input', ans: 'mi jo e ilo toki', explain: 'mi jo e ilo toki.' },
    { q: 'Введите «чашка воды»:', type: 'input', ans: 'poki telo', explain: 'Букв. «сосуд воды».' },
    { q: 'Что означает <span class="tp">len sijelo</span>?', opts: ['обувь', 'одежда', 'шляпа', 'ремень'], ans: 1, explain: 'ткань тела = одежда.' },
    { q: 'Что означает <span class="tp">supa</span>?', opts: ['стол / поверхность', 'кровать', 'стул', 'пол'], ans: 0, explain: 'supa — любая горизонтальная поверхность.' }
  ],
  builder: [
    { words: ['mi', 'jo', 'e', 'ilo', 'toki'], correct: ['mi', 'jo', 'e', 'ilo', 'toki'], translation: 'у меня есть телефон' },
    { words: ['ni', 'li', 'pona'], correct: ['ni', 'li', 'pona'], translation: 'это хорошо' },
    { words: ['ona', 'li', 'jo', 'e', 'poki', 'telo'], correct: ['ona', 'li', 'jo', 'e', 'poki', 'telo'], translation: 'у него есть чашка' },
    { words: ['mi', 'lukin', 'e', 'lipu'], correct: ['mi', 'lukin', 'e', 'lipu'], translation: 'я читаю книгу' },
    { words: ['ni', 'li', 'ilo', 'pona'], correct: ['ni', 'li', 'ilo', 'pona'], translation: 'это хороший инструмент' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 5: ma en sewi — природа и мир
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp1-l5',
  title: 'ma en sewi',
  desc: 'природа, стихии и модификаторы',
  xp: 15,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Четыре стихии: <span class="tp">ma</span> (земля), <span class="tp">telo</span> (вода), <span class="tp">seli</span> (огонь), <span class="tp">kon</span> (воздух)</li>
      <li>Слова <span class="tp">lete</span> (холод), <span class="tp">kiwen</span> (камень), <span class="tp">ko</span> (паста), <span class="tp">kasi</span> (растение)</li>
      <li>Как смешивать модификаторы: <span class="tp">telo seli</span> = горячая вода</li>
      <li>Почему порядок слов важен: <span class="tp">telo seli</span> ≠ <span class="tp">seli telo</span></li>
    </ul>

    <h3>🌍 ma en sewi — земля и небо</h3>
    <p>Природа в toki pona описывается немногими словами. Всё остальное — их комбинации.</p>

    <h3>📖 Новые слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">ma</td><td><b>ma</b></td><td>земля, страна, природа</td></tr>
      <tr>linja-pona<td class="sp-cell">telo</td><td><b>telo</b></td><td>вода, жидкость, мыть</td></tr>
      <tr>linja-pona<td class="sp-cell">seli</td><td><b>seli</b></td><td>огонь, тепло, горячий</td></tr>
      <tr>linja-pona<td class="sp-cell">lete</td><td><b>lete</b></td><td>холод, холодный</td></tr>
      <tr>linja-pona<td class="sp-cell">kon</td><td><b>kon</b></td><td>воздух, дух, смысл</td></tr>
      <tr>linja-pona<td class="sp-cell">kiwen</td><td><b>kiwen</b></td><td>камень, металл, твёрдый</td></tr>
      <tr>linja-pona<td class="sp-cell">ko</td><td><b>ko</b></td><td>паста, порошок, грязь</td></tr>
      <tr>linja-pona<td class="sp-cell">kasi</td><td><b>kasi</b></td><td>растение, трава, дерево</td></tr>
    </table>

    <h3>🧩 Схема: 4 стихии</h3>

    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(120px, 1fr)); gap:10px; margin:16px 0;">
      <div style="background:var(--card2); border:1px solid var(--border); border-radius:12px; padding:16px; text-align:center;">
        <div style="font-size:32px; margin-bottom:6px;">🔥</div>
        <div class="tp" style="font-weight:800; font-size:17px;">seli</div>
        <div style="font-size:12px; color:var(--muted); margin-top:4px;">огонь, тепло</div>
      </div>
      <div style="background:var(--card2); border:1px solid var(--border); border-radius:12px; padding:16px; text-align:center;">
        <div style="font-size:32px; margin-bottom:6px;">💧</div>
        <div class="tp" style="font-weight:800; font-size:17px;">telo</div>
        <div style="font-size:12px; color:var(--muted); margin-top:4px;">вода, жидкость</div>
      </div>
      <div style="background:var(--card2); border:1px solid var(--border); border-radius:12px; padding:16px; text-align:center;">
        <div style="font-size:32px; margin-bottom:6px;">🌍</div>
        <div class="tp" style="font-weight:800; font-size:17px;">ma</div>
        <div style="font-size:12px; color:var(--muted); margin-top:4px;">земля, природа</div>
      </div>
      <div style="background:var(--card2); border:1px solid var(--border); border-radius:12px; padding:16px; text-align:center;">
        <div style="font-size:32px; margin-bottom:6px;">💨</div>
        <div class="tp" style="font-weight:800; font-size:17px;">kon</div>
        <div style="font-size:12px; color:var(--muted); margin-top:4px;">воздух, дух</div>
      </div>
    </div>

    <h3>🧩 Как смешивать модификаторы</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="font-size:12px; color:var(--muted); margin-bottom:10px; text-transform:uppercase; letter-spacing:1px;">Формула</div>

      <div style="text-align:center; font-size:15px; line-height:2;">
        <span style="background:var(--green); color:#fff; padding:6px 14px; border-radius:8px; font-weight:800;">что</span>
        <span style="color:var(--muted);"> + </span>
        <span style="background:var(--blue); color:#fff; padding:6px 14px; border-radius:8px; font-weight:800;">какой</span>
      </div>

      <div style="text-align:center; margin-top:14px; font-size:14px;">
        <span class="tp" style="font-weight:700;">telo</span> + <span class="tp" style="font-weight:700;">seli</span> = <span class="tp" style="font-weight:800; color:var(--green);">telo seli</span>
        <span style="color:var(--muted);"> → горячая вода</span>
      </div>
    </div>

    <h3>🧩 Полная таблица комбинаций</h3>
    <table>
      <tr><th>Фраза</th><th>Буквально</th><th>Значение</th></tr>
      <tr><td><span class="tp">telo seli</span></td><td>вода горячая</td><td>горячая вода</td></tr>
      <tr><td><span class="tp">telo lete</span></td><td>вода холодная</td><td>холодная вода</td></tr>
      <tr><td><span class="tp">kiwen telo</span></td><td>камень водяной</td><td>лёд</td></tr>
      <tr><td><span class="tp">kasi kiwen</span></td><td>растение твёрдое</td><td>дерево</td></tr>
      <tr><td><span class="tp">ma kiwen</span></td><td>земля твёрдая</td><td>горы</td></tr>
      <tr><td><span class="tp">kon lete</span></td><td>воздух холодный</td><td>холодный ветер</td></tr>
      <tr><td><span class="tp">ko pimeja</span></td><td>паста тёмная</td><td>грязь / чернозём</td></tr>
      <tr><td><span class="tp">kasi laso</span></td><td>растение синее</td><td>зелёная трава</td></tr>
    </table>

    <div class="lesson-tip">
      <b>Порядок важен!</b> <span class="tp">telo seli</span> (горячая вода) ≠ <span class="tp">seli telo</span> (водяной огонь, тушить огонь водой). Первое слово — главное, второе — уточняет.
    </div>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>mi moku e telo</b> — «я пью воду»<br>
      <span class="ru">moku = есть / пить. e telo = воду (объект).</span>
    </div>

    <div class="lesson-example">
      <b>seli li pona</b> — «огонь хороший»<br>
      <span class="ru">seli = огонь (подлежащее). li pona = хороший. li обязательна.</span>
    </div>

    <div class="lesson-example">
      <b>lete li ike</b> — «холод плохой»<br>
      <span class="ru">lete = холод. Оценочное суждение.</span>
    </div>

    <div class="lesson-example">
      <b>kasi li kama</b> — «растение растёт»<br>
      <span class="ru">kama = приходить / становиться. Буквально «растение приходит».</span>
    </div>

    <div class="lesson-example">
      <b>mi jo e kiwen telo</b> — «у меня есть лёд»<br>
      <span class="ru">kiwen telo = водяной камень. Порядок обязателен.</span>
    </div>

    <div class="lesson-example">
      <b>ma li kiwen</b> — «земля твёрдая»<br>
      <span class="ru">ma = земля. li kiwen = является твёрдой.</span>
    </div>

    <h3>🗣️ Диалог 1: погода</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> tenpo ni la, seme li lon?<br>
      <b>jan B:</b> telo li kama. kon li lete.<br>
      <b>jan A:</b> ike! mi wile ala e telo.<br>
      <b>jan B:</b> taso telo li pona tawa kasi.
    </div>
    <p><span class="ru">Перевод: «Что сейчас происходит? — Идёт дождь. Ветер холодный. — Плохо! Я не хочу дождя. — Но дождь хорош для растений.»</span></p>

    <h3>🗣️ Диалог 2: у костра</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina wile e telo seli?<br>
      <b>jan B:</b> pona! telo seli li pona mute.<br>
      <b>jan A:</b> o jo e poki.<br>
      <b>jan B:</b> pona tawa sina.
    </div>
    <p><span class="ru">Перевод: «Хочешь горячей воды (чая)? — Да! Горячая вода очень хороша. — Держи чашку. — Спасибо.»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ seli telo</span> (когда имеется в виду «горячая вода»)<br>
      <span class="ru">Ошибка: главное слово — «вода». Оно должно быть первым.</span><br>
      <span class="tp">✓ telo seli</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi moku telo</span><br>
      <span class="ru">Ошибка: объект требует e.</span><br>
      <span class="tp">✓ mi moku e telo</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ ma lete</span> (когда это целое предложение)<br>
      <span class="ru">Ошибка: нет li.</span><br>
      <span class="tp">✓ ma li lete</span>
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr>
        <td><span style="color:var(--danger)">seli telo</span> вместо «горячая вода»</td>
        <td><span class="tp">telo seli</span> — сначала главное</td>
      </tr>
      <tr>
        <td><span style="color:var(--danger)">telo kiwen</span> вместо «лёд»</td>
        <td><span class="tp">kiwen telo</span> — главное «камень»</td>
      </tr>
      <tr>
        <td><span style="color:var(--danger)">mi moku telo</span></td>
        <td><span class="tp">mi moku e telo</span></td>
      </tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «горячая вода»? <span class="ru">(telo seli)</span></li>
      <li>Как сказать «лёд»? <span class="ru">(kiwen telo)</span></li>
      <li>Что означает <span class="tp">kasi kiwen</span>? <span class="ru">(дерево)</span></li>
      <li>Как сказать «я пью воду»? <span class="ru">(mi moku e telo)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. Четыре стихии: <b>ma</b>, <b>telo</b>, <b>seli</b>, <b>kon</b>.<br>
      2. Порядок модификаторов важен: <span class="tp">telo seli</span> ≠ <span class="tp">seli telo</span>.<br>
      3. Из двух слов можно создавать новые понятия: <span class="tp">kiwen telo</span> = лёд.<br>
      4. В toki pona <b>нет «погоды»</b> как отдельного понятия — есть действия: <span class="tp">telo li kama</span> = «идёт дождь».
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">ma</span>?', opts: ['небо', 'земля, природа', 'вода', 'огонь'], ans: 1 },
    { q: 'Что означает <span class="tp">telo</span>?', opts: ['вода, жидкость', 'огонь', 'камень', 'воздух'], ans: 0 },
    { q: 'Что означает <span class="tp">seli</span>?', opts: ['холод', 'огонь, тепло', 'вода', 'земля'], ans: 1 },
    { q: 'Что означает <span class="tp">lete</span>?', opts: ['горячий', 'холодный', 'мокрый', 'сухой'], ans: 1 },
    { q: 'Что означает <span class="tp">kon</span>?', opts: ['земля', 'воздух, дух', 'вода', 'камень'], ans: 1 },
    { q: 'Что означает <span class="tp">kiwen</span>?', opts: ['мягкий', 'камень, твёрдый', 'горячий', 'мокрый'], ans: 1 },
    { q: 'Что означает <span class="tp">kasi</span>?', opts: ['животное', 'растение', 'камень', 'вода'], ans: 1 },
    { q: 'Как сказать «горячая вода»?', opts: ['seli telo', 'telo seli', 'telo lete', 'ma telo'], ans: 1 },
    { q: 'Как сказать «холодный воздух»?', opts: ['kon lete', 'lete kon', 'kon seli', 'telo lete'], ans: 0 },
    { q: 'Как сказать «лёд»?', opts: ['telo kiwen', 'kiwen telo', 'telo lete', 'ma kiwen'], ans: 1 }
  ],
  test: [
    { q: 'Где стоит модификатор в toki pona?', opts: ['до главного слова', 'после главного слова', 'не важно', 'в начале фразы'], ans: 1, explain: 'Всегда после главного слова.' },
    { q: 'Что означает <span class="tp">kiwen telo</span>?', opts: ['лёд', 'камень', 'водопад', 'река'], ans: 0, explain: 'водяной камень = лёд.' },
    { q: 'Что означает <span class="tp">kasi kiwen</span>?', opts: ['трава', 'дерево', 'цветок', 'лист'], ans: 1, explain: 'твёрдое растение = дерево.' },
    { q: 'Введите «я пью воду»:', type: 'input', ans: 'mi moku e telo', explain: 'moku = есть/пить.' },
    { q: 'Введите «горячая вода»:', type: 'input', ans: 'telo seli', explain: 'telo seli — горячая вода.' },
    { q: 'Введите «земля холодная»:', type: 'input', ans: 'ma li lete', explain: 'ma li lete.' },
    { q: 'Что означает <span class="tp">kon</span>?', opts: ['камень', 'воздух, дух, смысл', 'вода', 'огонь'], ans: 1, explain: 'kon — воздух и дух.' },
    { q: 'Что означает <span class="tp">ko</span>?', opts: ['камень', 'паста, грязь', 'вода', 'дерево'], ans: 1, explain: 'ko — вязкая субстанция.' }
  ],
  builder: [
    { words: ['mi', 'moku', 'e', 'telo'], correct: ['mi', 'moku', 'e', 'telo'], translation: 'я пью воду' },
    { words: ['telo', 'seli', 'li', 'pona'], correct: ['telo', 'seli', 'li', 'pona'], translation: 'горячая вода хороша' },
    { words: ['ma', 'li', 'lete'], correct: ['ma', 'li', 'lete'], translation: 'земля холодная' },
    { words: ['mi', 'jo', 'e', 'kiwen', 'telo'], correct: ['mi', 'jo', 'e', 'kiwen', 'telo'], translation: 'у меня есть лёд' },
    { words: ['kasi', 'li', 'kama'], correct: ['kasi', 'li', 'kama'], translation: 'растение растёт' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 6: tomo — дом и место
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp1-l6',
  title: 'tomo',
  desc: 'дом, место и предлог lon',
  xp: 15,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Слова места: <span class="tp">tomo</span>, <span class="tp">insa</span>, <span class="tp">selo</span>, <span class="tp">sinpin</span>, <span class="tp">monsi</span></li>
      <li>Как работает предлог <b>lon</b> («в, на»)</li>
      <li>Как описывать положение: <span class="tp">lon insa tomo</span> = «внутри дома»</li>
      <li>Разница между <b>lon</b> (где?) и <b>tawa</b> (куда?)</li>
    </ul>

    <h3>🏠 tomo — дом</h3>
    <p><b>tomo</b> — любое закрытое пространство: дом, комната, здание, даже шалаш.</p>

    <h3>📖 Новые слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">tomo</td><td><b>tomo</b></td><td>дом, здание, комната</td></tr>
      <tr>linja-pona<td class="sp-cell">lon</td><td><b>lon</b></td><td>в, на, быть в</td></tr>
      <tr>linja-pona<td class="sp-cell">insa</td><td><b>insa</b></td><td>внутри, живот, центр</td></tr>
      <tr>linja-pona<td class="sp-cell">selo</td><td><b>selo</b></td><td>снаружи, кожа, поверхность</td></tr>
      <tr>linja-pona<td class="sp-cell">sinpin</td><td><b>sinpin</b></td><td>перед, стена, лицо</td></tr>
      <tr>linja-pona<td class="sp-cell">monsi</td><td><b>monsi</b></td><td>зад, спина, задняя часть</td></tr>
    </table>

    <h3>🧩 Схема: дом в разрезе</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="position:relative; height:180px; display:flex; align-items:center; justify-content:center;">

        <div style="position:absolute; top:20px; font-size:12px; color:var(--muted); text-transform:uppercase; letter-spacing:1px;">сзади</div>

        <div style="display:flex; align-items:center; gap:20px;">

          <div style="text-align:center;">
            <div class="tp" style="font-weight:800; color:var(--blue); font-size:15px;">sinpin</div>
            <div style="font-size:11px; color:var(--muted);">перед / стена</div>
          </div>

          <div style="border:3px solid var(--green); border-radius:12px; padding:20px 30px; position:relative; min-width:160px; text-align:center;">
            <div style="position:absolute; top:-10px; left:50%; transform:translateX(-50%); background:var(--bg); padding:0 8px; font-size:11px; color:var(--green); font-weight:800; text-transform:uppercase; letter-spacing:1px;">tomo</div>
            <div class="tp" style="font-weight:800; color:var(--purple); font-size:15px;">insa</div>
            <div style="font-size:11px; color:var(--muted); margin-top:2px;">внутри</div>
            <div class="tp" style="font-weight:700; color:var(--muted); margin-top:6px; font-size:13px;">mi lon insa tomo</div>
          </div>

          <div style="text-align:center;">
            <div class="tp" style="font-weight:800; color:var(--orange); font-size:15px;">monsi</div>
            <div style="font-size:11px; color:var(--muted);">зад</div>
          </div>
        </div>

        <div style="position:absolute; bottom:8px; font-size:12px; color:var(--muted); text-transform:uppercase; letter-spacing:1px;">спереди</div>
      </div>
    </div>

    <h3>🧩 Предлог lon — где?</h3>
    <p><b>lon</b> — «в, на, быть в». Обычно заменяет глагол «быть» в значении «находиться».</p>

    <div class="lesson-example"><span class="tp">mi lon tomo</span> — я дома (букв. «я в доме»)</div>
    <div class="lesson-example"><span class="tp">mi lon ma</span> — я на улице</div>
    <div class="lesson-example"><span class="tp">ona li lon tomo</span> — он в доме</div>
    <div class="lesson-example"><span class="tp">soweli li lon supa</span> — зверь на столе</div>

    <div class="lesson-tip">
      <b>lon</b> работает и как самостоятельный глагол: <span class="tp">mi lon</span> — «я здесь / я существую».
    </div>

    <h3>🧩 insa, selo, sinpin, monsi</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="font-size:12px; color:var(--muted); margin-bottom:12px; text-transform:uppercase; letter-spacing:1px;">Положение в пространстве</div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:8px;">
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span class="tp" style="font-weight:800;">lon insa tomo</span>
          <div style="font-size:12px; color:var(--muted); margin-top:3px;">внутри дома</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span class="tp" style="font-weight:800;">lon selo tomo</span>
          <div style="font-size:12px; color:var(--muted); margin-top:3px;">снаружи / на поверхности</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span class="tp" style="font-weight:800;">lon sinpin tomo</span>
          <div style="font-size:12px; color:var(--muted); margin-top:3px;">перед домом</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span class="tp" style="font-weight:800;">lon monsi tomo</span>
          <div style="font-size:12px; color:var(--muted); margin-top:3px;">за домом</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span class="tp" style="font-weight:800;">lon insa mi</span>
          <div style="font-size:12px; color:var(--muted); margin-top:3px;">внутри меня</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span class="tp" style="font-weight:800;">lon poka sina</span>
          <div style="font-size:12px; color:var(--muted); margin-top:3px;">рядом с тобой</div>
        </div>
      </div>
    </div>

    <h3>🧩 lon vs tawa — где vs куда</h3>

    <table>
      <tr><th></th><th>lon</th><th>tawa</th></tr>
      <tr><td>Вопрос</td><td>где? (место)</td><td>куда? (направление)</td></tr>
      <tr><td>Пример</td><td><span class="tp">mi lon tomo</span> — я в доме</td><td><span class="tp">mi tawa tomo</span> — я иду домой</td></tr>
      <tr><td>Смысл</td><td>нахожусь где-то</td><td>двигаюсь куда-то</td></tr>
    </table>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>mi lon tomo</b> — «я дома»<br>
      <span class="ru">mi = я. lon tomo = в доме. Глагол «быть» здесь не нужен — lon выполняет его роль.</span>
    </div>

    <div class="lesson-example">
      <b>ona li lon insa tomo</b> — «он внутри дома»<br>
      <span class="ru">li lon = находится. insa tomo = внутри дома.</span>
    </div>

    <div class="lesson-example">
      <b>soweli li lon monsi tomo</b> — «животное за домом»<br>
      <span class="ru">monsi tomo = зад дома → «за домом».</span>
    </div>

    <div class="lesson-example">
      <b>jan li tawa tomo</b> — «человек идёт к дому»<br>
      <span class="ru">tawa = движение. Здесь нет lon, потому что это направление, а не место.</span>
    </div>

    <div class="lesson-example">
      <b>mi lukin e sina lon sinpin tomo</b> — «я вижу тебя перед домом»<br>
      <span class="ru">lukin e sina = вижу тебя. lon sinpin tomo = в позиции «перед домом».</span>
    </div>

    <div class="lesson-example">
      <b>lon insa mi, mi pilin pona</b> — «внутри себя я чувствую хорошо»<br>
      <span class="ru">Метафора: «внутри меня» = «в моей душе».</span>
    </div>

    <h3>🎯 tawa — к, для</h3>
    <p><b>tawa</b> означает «к, для, в направлении»:</p>

    <div class="lesson-example"><span class="tp">mi tawa tomo</span> — я иду домой</div>
    <div class="lesson-example"><span class="tp">ona li toki tawa mi</span> — он говорит мне (говорит ко мне)</div>
    <div class="lesson-example"><span class="tp">ni li pona tawa mi</span> — это хорошо для меня</div>

    <h3>🗣️ Диалог 1: где ты?</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina lon seme?<br>
      <b>jan B:</b> mi lon insa tomo.<br>
      <b>jan A:</b> mi kama tawa sina.<br>
      <b>jan B:</b> pona. mi awen.
    </div>
    <p><span class="ru">Перевод: «Ты где? — Я внутри дома. — Я иду к тебе. — Хорошо. Жду.»</span></p>

    <h3>🗣️ Диалог 2: дорога домой</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina tawa seme?<br>
      <b>jan B:</b> mi tawa tomo mi.<br>
      <b>jan A:</b> tomo sina li lon seme?<br>
      <b>jan B:</b> ona li lon monsi tomo suli.
    </div>
    <p><span class="ru">Перевод: «Куда ты идёшь? — Я иду в свой дом. — Где твой дом? — Он за большим домом.»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi tomo</span> (когда имеется в виду «я дома»)<br>
      <span class="ru">Ошибка: пропущено lon.</span><br>
      <span class="tp">✓ mi lon tomo</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi tawa lon tomo</span><br>
      <span class="ru">Ошибка: нельзя совмещать tawa и lon без причины. Выбирайте одно.</span><br>
      <span class="tp">✓ mi tawa tomo</span> (если движение) или <span class="tp">mi lon tomo</span> (если нахождение)
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ insa tomo mi lon</span><br>
      <span class="ru">Ошибка: нарушен порядок. lon идёт перед обстоятельством.</span><br>
      <span class="tp">✓ mi lon insa tomo</span>
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr>
        <td><span style="color:var(--danger)">mi tomo</span></td>
        <td><span class="tp">mi lon tomo</span> (я в доме)</td>
      </tr>
      <tr>
        <td><span style="color:var(--danger)">mi tawa tomo</span> как «я в доме»</td>
        <td><span class="tp">mi lon tomo</span> — для места; tawa = движение</td>
      </tr>
      <tr>
        <td><span style="color:var(--danger)">lon monsi</span> без указания чего</td>
        <td><span class="tp">lon monsi tomo</span> — за домом</td>
      </tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «я дома»? <span class="ru">(mi lon tomo)</span></li>
      <li>Как сказать «я иду домой»? <span class="ru">(mi tawa tomo)</span></li>
      <li>Что означает <span class="tp">lon monsi tomo</span>? <span class="ru">(за домом)</span></li>
      <li>Чем отличается lon от tawa? <span class="ru">(lon = где, tawa = куда)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. <b>lon</b> — «в, на, быть в». Заменяет глагол «быть» в значении «находиться».<br>
      2. <b>tawa</b> — «к, для, в направлении». Обозначает движение.<br>
      3. Слова места: <b>insa</b> (внутри), <b>selo</b> (снаружи), <b>sinpin</b> (перед), <b>monsi</b> (зад).<br>
      4. Цепочка <span class="tp">lon insa tomo</span> = «внутри дома».<br>
      5. <span class="tp">ni li pona tawa mi</span> = «это хорошо для меня».
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">tomo</span>?', opts: ['дорога', 'дом', 'сад', 'стол'], ans: 1 },
    { q: 'Что означает <span class="tp">lon</span>?', opts: ['в, на', 'под', 'над', 'рядом'], ans: 0 },
    { q: 'Что означает <span class="tp">insa</span>?', opts: ['снаружи', 'внутри', 'рядом', 'перед'], ans: 1 },
    { q: 'Что означает <span class="tp">selo</span>?', opts: ['внутри', 'снаружи, кожа', 'перед', 'зад'], ans: 1 },
    { q: 'Что означает <span class="tp">sinpin</span>?', opts: ['перед, стена', 'зад', 'внутри', 'снаружи'], ans: 0 },
    { q: 'Что означает <span class="tp">monsi</span>?', opts: ['перед', 'зад, спина', 'внутри', 'снаружи'], ans: 1 },
    { q: 'Как сказать «я дома»?', opts: ['mi tomo', 'mi lon tomo', 'tomo mi', 'mi e tomo'], ans: 1 },
    { q: 'Как сказать «внутри дома»?', opts: ['tomo insa', 'lon insa tomo', 'insa lon tomo', 'tomo lon insa'], ans: 1 },
    { q: 'Что означает <span class="tp">ona li lon monsi tomo</span>?', opts: ['он в доме', 'он за домом', 'он перед домом', 'он идёт домой'], ans: 1 },
    { q: 'Как сказать «я иду домой»?', opts: ['mi tawa tomo', 'mi tomo tawa', 'mi lon tomo', 'tomo mi'], ans: 0 }
  ],
  test: [
    { q: 'Чем <b>lon</b> отличается от <b>tawa</b>?', opts: ['lon = движение, tawa = место', 'lon = место, tawa = движение к', 'это синонимы', 'lon = вопрос'], ans: 1, explain: 'lon — где находишься, tawa — куда движешься.' },
    { q: 'Что означает <span class="tp">lon selo tomo</span>?', opts: ['в доме', 'снаружи дома', 'за домом', 'перед домом'], ans: 1, explain: 'selo = поверхность.' },
    { q: 'Что означает <span class="tp">toki tawa mi</span>?', opts: ['я говорю', 'говорит ко мне', 'говорит обо мне', 'говорю с собой'], ans: 1, explain: 'tawa mi = ко мне.' },
    { q: 'Введите «я в доме»:', type: 'input', ans: 'mi lon tomo', explain: 'mi lon tomo.' },
    { q: 'Введите «перед домом»:', type: 'input', ans: 'lon sinpin tomo', explain: 'sinpin tomo = перед дома.' },
    { q: 'Введите «он идёт домой»:', type: 'input', ans: 'ona li tawa tomo', explain: 'ona li tawa tomo.' },
    { q: 'Что означает <span class="tp">lon insa mi</span>?', opts: ['на мне', 'внутри меня', 'передо мной', 'за мной'], ans: 1, explain: 'insa mi = внутри меня.' },
    { q: 'Что означает <span class="tp">ni li pona tawa mi</span>?', opts: ['это моё', 'это хорошо для меня', 'это я', 'это нравится ему'], ans: 1, explain: 'tawa mi = для меня.' }
  ],
  builder: [
    { words: ['mi', 'lon', 'tomo'], correct: ['mi', 'lon', 'tomo'], translation: 'я дома' },
    { words: ['ona', 'li', 'lon', 'insa', 'tomo'], correct: ['ona', 'li', 'lon', 'insa', 'tomo'], translation: 'он внутри дома' },
    { words: ['mi', 'tawa', 'tomo'], correct: ['mi', 'tawa', 'tomo'], translation: 'я иду домой' },
    { words: ['soweli', 'li', 'lon', 'supa'], correct: ['soweli', 'li', 'lon', 'supa'], translation: 'зверь на столе' },
    { words: ['ni', 'li', 'pona', 'tawa', 'mi'], correct: ['ni', 'li', 'pona', 'tawa', 'mi'], translation: 'это хорошо для меня' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 7: moku en sijelo — еда и тело
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp1-l7',
  title: 'moku en sijelo',
  desc: 'еда, тело и частица pi',
  xp: 15,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Слова еды: <span class="tp">moku</span>, <span class="tp">pan</span>, <span class="tp">kili</span>, <span class="tp">suwi</span></li>
      <li>Слова тела: <span class="tp">sijelo</span>, <span class="tp">luka</span>, <span class="tp">noka</span>, <span class="tp">uta</span>, <span class="tp">nena</span></li>
      <li>Как работает частица <b>pi</b> — группировка модификаторов</li>
      <li>Когда без pi можно обойтись, а когда она обязательна</li>
    </ul>

    <h3>🍎 Еда — просто</h3>
    <p><b>moku</b> — это и «еда», и «есть», и «пить». <b>pan</b> — любая крахмалистая еда: хлеб, рис, макароны. <b>kili</b> — фрукты и овощи.</p>

    <h3>📖 Новые слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">moku</td><td><b>moku</b></td><td>еда, есть, пить</td></tr>
      <tr>linja-pona<td class="sp-cell">pan</td><td><b>pan</b></td><td>хлеб, зерно, рис</td></tr>
      <tr>linja-pona<td class="sp-cell">kili</td><td><b>kili</b></td><td>фрукт, овощ, гриб</td></tr>
      <tr>linja-pona<td class="sp-cell">suwi</td><td><b>suwi</b></td><td>сладкий, милый</td></tr>
      <tr>linja-pona<td class="sp-cell">sijelo</td><td><b>sijelo</b></td><td>тело, туловище</td></tr>
      <tr>linja-pona<td class="sp-cell">luka</td><td><b>luka</b></td><td>рука, кисть</td></tr>
      <tr>linja-pona<td class="sp-cell">noka</td><td><b>noka</b></td><td>нога, ступня</td></tr>
      <tr>linja-pona<td class="sp-cell">uta</td><td><b>uta</b></td><td>рот, губы</td></tr>
      <tr>linja-pona<td class="sp-cell">nena</td><td><b>nena</b></td><td>нос, холм, кнопка</td></tr>
    </table>

    <h3>🧩 Схема: что делает pi</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="font-size:12px; color:var(--muted); margin-bottom:14px; text-transform:uppercase; letter-spacing:1px; text-align:center;">pi — группировка модификаторов</div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <div style="background:var(--card2); border-radius:10px; padding:14px;">
          <div style="font-size:11px; color:var(--danger); font-weight:800; margin-bottom:6px;">БЕЗ PI</div>
          <div class="tp" style="font-weight:800;">tomo telo nasa</div>
          <div style="font-size:12px; color:var(--muted); margin-top:6px;">три отдельных модификатора</div>
          <div style="font-size:13px; margin-top:8px;">сумасшедший водный дом</div>
        </div>

        <div style="background:var(--card2); border-radius:10px; padding:14px; border:1px solid var(--green);">
          <div style="font-size:11px; color:var(--green); font-weight:800; margin-bottom:6px;">С PI</div>
          <div class="tp" style="font-weight:800;">tomo <span style="color:var(--green);">pi</span> telo nasa</div>
          <div style="font-size:12px; color:var(--muted); margin-top:6px;">«странная вода» — единая группа</div>
          <div style="font-size:13px; margin-top:8px;">бар (дом странной воды)</div>
        </div>
      </div>
    </div>

    <h3>🧩 Когда использовать pi</h3>

    <div class="lesson-tip">
      <b>Простое правило:</b> если модификаторов <b>два и больше</b>, и они должны работать как <b>единая группа</b> — ставь <span class="tp">pi</span>.
    </div>

    <h4>Ещё примеры</h4>
    <table>
      <tr><th>Без pi</th><th>С pi</th></tr>
      <tr>
        <td><span class="tp">jan pona mi</span><br><span class="ru">мой друг (просто)</span></td>
        <td><span class="tp">jan pi pona mi</span><br><span class="ru">человек, которого я люблю</span></td>
      </tr>
      <tr>
        <td><span class="tp">ilo toki pona</span><br><span class="ru">хороший инструмент речи</span></td>
        <td><span class="tp">ilo pi toki pona</span><br><span class="ru">инструмент языка toki pona</span></td>
      </tr>
      <tr>
        <td><span class="tp">tomo suli mi</span><br><span class="ru">мой большой дом</span></td>
        <td><span class="tp">tomo pi suli mi</span><br><span class="ru">дом моей важности (редко)</span></td>
      </tr>
    </table>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>mi moku e kili</b> — «я ем фрукт»<br>
      <span class="ru">moku = есть. e kili = фрукт (объект).</span>
    </div>

    <div class="lesson-example">
      <b>mi moku e kili suwi</b> — «я ем сладкий фрукт»<br>
      <span class="ru">kili suwi = сладкий фрукт. Без pi, потому что модификатор один.</span>
    </div>

    <div class="lesson-example">
      <b>mi jo e luka tu</b> — «у меня две руки»<br>
      <span class="ru">luka = рука. tu = два. Число идёт после.</span>
    </div>

    <div class="lesson-example">
      <b>ona li jo e nena suli</b> — «у него большой нос»<br>
      <span class="ru">nena = нос. suli = большой.</span>
    </div>

    <div class="lesson-example">
      <b>sijelo mi li lete</b> — «моё тело холодное»<br>
      <span class="ru">sijelo mi = моё тело. li lete = холодное.</span>
    </div>

    <div class="lesson-example">
      <b>uta mi li pona</b> — «мой рот хороший (здоровый)»<br>
      <span class="ru">uta mi = мой рот.</span>
    </div>

    <h3>🎯 Составные названия еды</h3>
    <table>
      <tr><th>Фраза</th><th>Значение</th></tr>
      <tr><td><span class="tp">telo kili</span></td><td>фруктовая вода = сок</td></tr>
      <tr><td><span class="tp">telo suwi</span></td><td>сладкая вода = сироп / сок</td></tr>
      <tr><td><span class="tp">pan suwi</span></td><td>сладкий хлеб = пирог / печенье</td></tr>
      <tr><td><span class="tp">moku kili</span></td><td>фруктовая еда = фрукты</td></tr>
      <tr><td><span class="tp">kiwen suwi</span></td><td>сладкий камень = сахар / конфета</td></tr>
    </table>

    <h3>🗣️ Диалог 1: за завтраком</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina moku e seme?<br>
      <b>jan B:</b> mi moku e pan suwi.<br>
      <b>jan A:</b> suwi li pona! mi wile e pan suwi kin.<br>
      <b>jan B:</b> o jo. mi jo e pan suwi mute.
    </div>
    <p><span class="ru">Перевод: «Что ты ешь? — Я ем пирог. — Сладкое вкусно! Я тоже хочу пирог. — Держи. У меня много пирогов.»</span></p>

    <h3>🗣️ Диалог 2: в кафе</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina wile e telo seme?<br>
      <b>jan B:</b> mi wile e telo kili.<br>
      <b>jan A:</b> telo kili anu telo suwi?<br>
      <b>jan B:</b> telo kili li pona tawa mi.
    </div>
    <p><span class="ru">Перевод: «Какой напиток ты хочешь? — Я хочу сок. — Сок или сироп? — Сок мне больше нравится.»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi moku kili</span><br>
      <span class="ru">Ошибка: нужен e перед объектом.</span><br>
      <span class="tp">✓ mi moku e kili</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ tomo telo nasa</span> (когда имеется в виду «бар»)<br>
      <span class="ru">Ошибка: нужна pi для группировки «странная вода».</span><br>
      <span class="tp">✓ tomo pi telo nasa</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ luka tu mi</span><br>
      <span class="ru">Ошибка: «мои две руки» = luka mi tu. Порядок: главное → владелец → число.</span><br>
      <span class="tp">✓ luka mi tu</span>
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr>
        <td><span style="color:var(--danger)">mi moku kili</span></td>
        <td><span class="tp">mi moku e kili</span></td>
      </tr>
      <tr>
        <td>ставить pi без необходимости</td>
        <td>pi только для группировки: <span class="tp">tomo pi telo nasa</span></td>
      </tr>
      <tr>
        <td>забыть pi, когда она нужна</td>
        <td>сравнивайте: <span class="tp">jan pona mi</span> (мой друг) vs <span class="tp">jan pi pona mi</span></td>
      </tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «я ем фрукт»? <span class="ru">(mi moku e kili)</span></li>
      <li>Что означает <span class="tp">telo kili</span>? <span class="ru">(сок)</span></li>
      <li>Когда нужна pi? <span class="ru">(Когда модификаторов 2+ и они работают как группа)</span></li>
      <li>Как сказать «у меня две руки»? <span class="ru">(mi jo e luka tu)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. <b>moku</b> = еда/есть/пить; <b>pan</b> = хлеб; <b>kili</b> = фрукт/овощ.<br>
      2. Слова тела: <b>sijelo</b>, <b>luka</b>, <b>noka</b>, <b>uta</b>, <b>nena</b>.<br>
      3. <b>pi</b> — группировка модификаторов: <span class="tp">tomo pi telo nasa</span>.<br>
      4. Без pi модификаторы идут по отдельности.<br>
      5. Порядок: <b>главное слово → владелец → число</b>: <span class="tp">luka mi tu</span>.
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">moku</span>?', opts: ['пить', 'есть / еда', 'готовить', 'хлеб'], ans: 1 },
    { q: 'Что означает <span class="tp">pan</span>?', opts: ['хлеб, зерно', 'фрукт', 'вода', 'мясо'], ans: 0 },
    { q: 'Что означает <span class="tp">kili</span>?', opts: ['фрукт, овощ', 'хлеб', 'сок', 'сладость'], ans: 0 },
    { q: 'Что означает <span class="tp">suwi</span>?', opts: ['горький', 'сладкий, милый', 'солёный', 'кислый'], ans: 1 },
    { q: 'Что означает <span class="tp">sijelo</span>?', opts: ['голова', 'тело', 'рука', 'нога'], ans: 1 },
    { q: 'Что означает <span class="tp">luka</span>?', opts: ['рука', 'нога', 'голова', 'нос'], ans: 0 },
    { q: 'Что означает <span class="tp">noka</span>?', opts: ['рука', 'нога', 'рот', 'ухо'], ans: 1 },
    { q: 'Что означает <span class="tp">uta</span>?', opts: ['нос', 'рот', 'глаз', 'ухо'], ans: 1 },
    { q: 'Что означает <span class="tp">nena</span>?', opts: ['нос, холм', 'рот', 'глаз', 'рука'], ans: 0 },
    { q: 'Когда используется <b>pi</b>?', opts: ['всегда', 'для группировки модификаторов', 'никогда', 'только в вопросах'], ans: 1 }
  ],
  test: [
    { q: 'Что означает <span class="tp">mi moku e kili suwi</span>?', opts: ['я сладкий фрукт', 'я ем сладкий фрукт', 'сладкий фрукт ест меня', 'я люблю фрукты'], ans: 1, explain: 'kili suwi = сладкий фрукт.' },
    { q: 'Что означает <span class="tp">telo kili</span>?', opts: ['вода с фруктами', 'сок', 'фруктовый суп', 'варенье'], ans: 1, explain: 'фруктовая вода = сок.' },
    { q: 'Что делает <b>pi</b>?', opts: ['отрицает', 'группирует модификаторы', 'задаёт вопрос', 'соединяет подлежащие'], ans: 1, explain: 'pi = группировка.' },
    { q: 'Введите «я ем хлеб»:', type: 'input', ans: 'mi moku e pan', explain: 'mi moku e pan.' },
    { q: 'Введите «моё тело холодное»:', type: 'input', ans: 'sijelo mi li lete', explain: 'sijelo mi li lete.' },
    { q: 'Введите «у меня две руки»:', type: 'input', ans: 'mi jo e luka tu', explain: 'luka tu = две руки.' },
    { q: 'Что означает <span class="tp">pan suwi</span>?', opts: ['пирог, печенье', 'хлеб с маслом', 'солёный хлеб', 'фруктовый хлеб'], ans: 0, explain: 'сладкий хлеб = пирог.' },
    { q: 'Как сказать «сладкая вода»?', opts: ['telo suwi', 'suwi telo', 'telo kili', 'kili telo'], ans: 0, explain: 'telo suwi — сладкая вода.' }
  ],
  builder: [
    { words: ['mi', 'moku', 'e', 'kili', 'suwi'], correct: ['mi', 'moku', 'e', 'kili', 'suwi'], translation: 'я ем сладкий фрукт' },
    { words: ['sijelo', 'mi', 'li', 'pona'], correct: ['sijelo', 'mi', 'li', 'pona'], translation: 'моё тело хорошее' },
    { words: ['ona', 'li', 'jo', 'e', 'luka', 'tu'], correct: ['ona', 'li', 'jo', 'e', 'luka', 'tu'], translation: 'у него две руки' },
    { words: ['telo', 'kili', 'li', 'suwi'], correct: ['telo', 'kili', 'li', 'suwi'], translation: 'сок сладкий' },
    { words: ['mi', 'moku', 'e', 'pan', 'suwi'], correct: ['mi', 'moku', 'e', 'pan', 'suwi'], translation: 'я ем пирог' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 8: nanpa — числа и время
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp1-l8',
  title: 'nanpa',
  desc: 'числа, время и отрицание ala',
  xp: 15,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Базовые числа: <span class="tp">ala</span>, <span class="tp">wan</span>, <span class="tp">tu</span>, <span class="tp">mute</span>, <span class="tp">ale</span></li>
      <li>Как работает отрицание <b>ala</b></li>
      <li>Слова времени: <span class="tp">tenpo</span>, <span class="tp">sike</span>, <span class="tp">sin</span></li>
      <li>Частица <b>la</b> — контекст перед главной частью</li>
    </ul>

    <h3>🔢 Числа в toki pona</h3>
    <p>В toki pona <b>нет больших чисел</b> как в обычных языках. Есть только пять основных:</p>

    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(100px, 1fr)); gap:10px; margin:16px 0;">
      <div style="background:var(--card2); border:1px solid var(--border); border-radius:12px; padding:14px; text-align:center;">
        <div class="tp" style="font-size:24px; font-weight:900; color:var(--green);">ala</div>
        <div style="font-size:11px; color:var(--muted); margin-top:4px;">ноль / нет</div>
      </div>
      <div style="background:var(--card2); border:1px solid var(--border); border-radius:12px; padding:14px; text-align:center;">
        <div class="tp" style="font-size:24px; font-weight:900; color:var(--green);">wan</div>
        <div style="font-size:11px; color:var(--muted); margin-top:4px;">один</div>
      </div>
      <div style="background:var(--card2); border:1px solid var(--border); border-radius:12px; padding:14px; text-align:center;">
        <div class="tp" style="font-size:24px; font-weight:900; color:var(--green);">tu</div>
        <div style="font-size:11px; color:var(--muted); margin-top:4px;">два</div>
      </div>
      <div style="background:var(--card2); border:1px solid var(--border); border-radius:12px; padding:14px; text-align:center;">
        <div class="tp" style="font-size:24px; font-weight:900; color:var(--green);">mute</div>
        <div style="font-size:11px; color:var(--muted); margin-top:4px;">много / 3+</div>
      </div>
      <div style="background:var(--card2); border:1px solid var(--border); border-radius:12px; padding:14px; text-align:center;">
        <div class="tp" style="font-size:24px; font-weight:900; color:var(--green);">ale</div>
        <div style="font-size:11px; color:var(--muted); margin-top:4px;">всё / 100</div>
      </div>
    </div>

    <h3>📖 Новые слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">ala</td><td><b>ala</b></td><td>нет, не, ноль</td></tr>
      <tr>linja-pona<td class="sp-cell">wan</td><td><b>wan</b></td><td>один, единица</td></tr>
      <tr>linja-pona<td class="sp-cell">tu</td><td><b>tu</b></td><td>два, пара</td></tr>
      <tr>linja-pona<td class="sp-cell">mute</td><td><b>mute</b></td><td>много, очень</td></tr>
      <tr>linja-pona<td class="sp-cell">ale</td><td><b>ale</b></td><td>всё, все, 100</td></tr>
      <tr>linja-pona<td class="sp-cell">nanpa</td><td><b>nanpa</b></td><td>число, номер, -й</td></tr>
      <tr>linja-pona<td class="sp-cell">tenpo</td><td><b>tenpo</b></td><td>время, момент</td></tr>
      <tr>linja-pona<td class="sp-cell">sike</td><td><b>sike</b></td><td>круг, колесо, год</td></tr>
      <tr>linja-pona<td class="sp-cell">sin</td><td><b>sin</b></td><td>новый, свежий, ещё</td></tr>
    </table>

    <h3>🧩 Схема: число идёт после слова</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center;">
        <span class="tp" style="font-size:18px; font-weight:800; color:var(--green);">kili</span>
        <span style="color:var(--muted); font-size:20px; margin:0 8px;">+</span>
        <span class="tp" style="font-size:18px; font-weight:800; color:var(--blue);">tu</span>
        <span style="color:var(--muted); font-size:20px; margin:0 8px;">=</span>
        <span class="tp" style="font-size:18px; font-weight:900;">kili tu</span>
      </div>
      <div style="text-align:center; margin-top:8px; font-size:13px; color:var(--muted);">фрукт + два = два фрукта</div>
    </div>

    <table>
      <tr><th>Фраза</th><th>Значение</th></tr>
      <tr><td><span class="tp">kili wan</span></td><td>один фрукт</td></tr>
      <tr><td><span class="tp">kili tu</span></td><td>два фрукта</td></tr>
      <tr><td><span class="tp">kili mute</span></td><td>много фруктов</td></tr>
      <tr><td><span class="tp">kili ale</span></td><td>все фрукты</td></tr>
      <tr><td><span class="tp">jan wan</span></td><td>один человек</td></tr>
      <tr><td><span class="tp">soweli tu</span></td><td>два зверя</td></tr>
    </table>

    <h3>🧩 Схема: отрицание ala</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="font-size:12px; color:var(--muted); margin-bottom:12px; text-transform:uppercase; letter-spacing:1px; text-align:center;">ala ставится ПОСЛЕ действия</div>

      <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px;">
        <div style="background:var(--card2); border-radius:8px; padding:10px; text-align:center;">
          <div class="tp" style="font-weight:800;">mi sona</div>
          <div style="font-size:11px; color:var(--muted); margin-top:3px;">я знаю</div>
        </div>
        <div style="display:flex; align-items:center; justify-content:center; color:var(--muted);">→</div>
        <div style="background:var(--card2); border:1px solid var(--danger); border-radius:8px; padding:10px; text-align:center;">
          <div class="tp" style="font-weight:800;">mi sona <span style="color:var(--danger);">ala</span></div>
          <div style="font-size:11px; color:var(--muted); margin-top:3px;">я не знаю</div>
        </div>
      </div>
    </div>

    <table>
      <tr><th>Утверждение</th><th>Отрицание</th></tr>
      <tr><td><span class="tp">mi moku</span> — я ем</td><td><span class="tp">mi moku ala</span> — я не ем</td></tr>
      <tr><td><span class="tp">mi sona</span> — я знаю</td><td><span class="tp">mi sona ala</span> — я не знаю</td></tr>
      <tr><td><span class="tp">jan li kama</span> — человек приходит</td><td><span class="tp">jan li kama ala</span> — человек не приходит</td></tr>
      <tr><td><span class="tp">mi jo e kili</span> — у меня есть фрукт</td><td><span class="tp">mi jo ala e kili</span> — у меня нет фрукта</td></tr>
    </table>

    <div class="lesson-tip">
      <b>ala может стоять и перед e:</b> <span class="tp">mi jo ala e ijo</span> — «я не имею вещи».
    </div>

    <h3>🧩 Время: tenpo</h3>
    <p>В toki pona <b>нет времён глагола</b>. Время выражается словом <b>tenpo</b> + уточнением или контекстом.</p>

    <table>
      <tr><th>Фраза</th><th>Значение</th><th>Буквально</th></tr>
      <tr><td><span class="tp">tenpo ni</span></td><td>сейчас</td><td>это время</td></tr>
      <tr><td><span class="tp">tenpo pini</span></td><td>прошлое</td><td>законченное время</td></tr>
      <tr><td><span class="tp">tenpo kama</span></td><td>будущее</td><td>приходящее время</td></tr>
      <tr><td><span class="tp">tenpo suno</span></td><td>день</td><td>время солнца</td></tr>
      <tr><td><span class="tp">tenpo pimeja</span></td><td>ночь</td><td>время тьмы</td></tr>
      <tr><td><span class="tp">sike suno</span></td><td>год</td><td>солнечный круг</td></tr>
    </table>

    <h3>🎯 Частица la — контекст</h3>
    <p><b>la</b> ставится после обстоятельства времени/места, чтобы отделить его от главной части.</p>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center; font-size:15px;">
        <span style="background:var(--blue); color:#fff; padding:6px 12px; border-radius:8px; font-weight:800;">обстоятельство</span>
        <span style="color:var(--muted); font-size:18px; margin:0 8px;">+</span>
        <span style="background:var(--green); color:#fff; padding:6px 12px; border-radius:8px; font-weight:800;">la</span>
        <span style="color:var(--muted); font-size:18px; margin:0 8px;">→</span>
        <span style="background:var(--purple); color:#fff; padding:6px 12px; border-radius:8px; font-weight:800;">главная часть</span>
      </div>
      <div style="text-align:center; margin-top:12px; font-size:14px;">
        <span class="tp" style="font-weight:700;">tenpo ni <span style="color:var(--green);">la</span>, mi moku</span>
        <span style="color:var(--muted);"> → сейчас я ем</span>
      </div>
    </div>

    <div class="lesson-example"><span class="tp">tenpo ni la, mi moku</span> — сейчас я ем</div>
    <div class="lesson-example"><span class="tp">tenpo pini la, mi lili</span> — раньше я был маленьким</div>
    <div class="lesson-example"><span class="tp">lon tomo la, mi pilin pona</span> — дома я чувствую себя хорошо</div>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>mi jo e kili wan</b> — «у меня один фрукт»<br>
      <span class="ru">jo e kili = имею фрукт. wan = один. Число после.</span>
    </div>

    <div class="lesson-example">
      <b>mi jo ala e kili</b> — «у меня нет фруктов»<br>
      <span class="ru">ala стоит после jo — отрицает действие.</span>
    </div>

    <div class="lesson-example">
      <b>mi sona ala</b> — «я не знаю»<br>
      <span class="ru">ala отрицает знание.</span>
    </div>

    <div class="lesson-example">
      <b>tenpo ni la, mi lon tomo</b> — «сейчас я дома»<br>
      <span class="ru">tenpo ni = это время. la = контекст.</span>
    </div>

    <div class="lesson-example">
      <b>tenpo kama la, mi tawa ma</b> — «в будущем я поеду в страну»<br>
      <span class="ru">tenpo kama = будущее. la отделяет обстоятельство.</span>
    </div>

    <div class="lesson-example">
      <b>soweli tu li lon tomo</b> — «две собаки в доме»<br>
      <span class="ru">soweli tu = два зверя (подлежащее). li lon tomo = находятся в доме.</span>
    </div>

    <div class="lesson-example">
      <b>mi jo e ijo sin</b> — «у меня новая вещь»<br>
      <span class="ru">sin = новый (модификатор после ijo).</span>
    </div>

    <h3>🗣️ Диалог 1: сколько?</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina jo e kili pi mute seme?<br>
      <b>jan B:</b> mi jo e kili tu.<br>
      <b>jan A:</b> mi jo e kili wan taso.<br>
      <b>jan B:</b> pona. mi ken pana e kili wan tawa sina.
    </div>
    <p><span class="ru">Перевод: «Сколько у тебя фруктов? — У меня два фрукта. — У меня только один. — Хорошо. Я могу дать тебе один.»</span></p>

    <h3>🗣️ Диалог 2: время</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> tenpo seme la, sina kama?<br>
      <b>jan B:</b> tenpo suno kama la, mi kama.<br>
      <b>jan A:</b> pona. mi awen.<br>
      <b>jan B:</b> tenpo ni la, mi tawa.
    </div>
    <p><span class="ru">Перевод: «Когда ты придёшь? — На следующий день я приду. — Хорошо. Жду. — Сейчас я ухожу.»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi ala sona</span><br>
      <span class="ru">Ошибка: ala стоит после глагола, не перед.</span><br>
      <span class="tp">✓ mi sona ala</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi jo e kili ala</span> (в значении «у меня нет фруктов»)<br>
      <span class="ru">Ошибка: ala должно отрицать глагол, а не модифицировать объект.</span><br>
      <span class="tp">✓ mi jo ala e kili</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ kili wan mi</span><br>
      <span class="ru">Ошибка: «мой один фрукт» = kili mi wan. Сначала владелец, потом число.</span><br>
      <span class="tp">✓ kili mi wan</span>
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr>
        <td><span style="color:var(--danger)">mi ala sona</span></td>
        <td><span class="tp">mi sona ala</span></td>
      </tr>
      <tr>
        <td><span style="color:var(--danger)">tenpo ni, mi moku</span></td>
        <td><span class="tp">tenpo ni la, mi moku</span></td>
      </tr>
      <tr>
        <td>ставить число перед словом</td>
        <td>число всегда после: <span class="tp">jan tu</span>, а не <span style="color:var(--danger)">tu jan</span></td>
      </tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «я не знаю»? <span class="ru">(mi sona ala)</span></li>
      <li>Как сказать «два фрукта»? <span class="ru">(kili tu)</span></li>
      <li>Что означает <span class="tp">tenpo kama</span>? <span class="ru">(будущее)</span></li>
      <li>Что делает частица la? <span class="ru">(Отделяет обстоятельство от главной части)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. Пять чисел: <b>ala</b>, <b>wan</b>, <b>tu</b>, <b>mute</b>, <b>ale</b>. Больше не нужно.<br>
      2. Число идёт <b>после</b> слова: <span class="tp">kili tu</span>.<br>
      3. Отрицание <b>ala</b> — после глагола: <span class="tp">mi sona ala</span>.<br>
      4. Время: <span class="tp">tenpo ni / pini / kama</span>.<br>
      5. <b>la</b> отделяет обстоятельство: <span class="tp">tenpo ni la, mi moku</span>.
    </div>

    <h3>🎉 Поздравляем!</h3>
    <div class="lesson-tip">
      <b>Вы закончили курс nanpa wan.</b> Теперь вы знаете 64 базовых слова и умеете строить предложения со структурами:
      <ul style="margin-top:10px;">
        <li><b>S + li + V</b> (jan li pona)</li>
        <li><b>S + li + V + e + O</b> (mi moku e kili)</li>
        <li><b>S + li + V + lon + место</b> (mi lon tomo)</li>
        <li><b>обстоятельство + la + главная часть</b> (tenpo ni la, mi moku)</li>
      </ul>
      Впереди — <b>nanpa tu</b>: частицы <span class="tp">en, anu, o, seme</span>, модальные глаголы <span class="tp">wile, ken</span>, эмоции, вопросы. <span class="tp">o kama sona!</span>
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">ala</span>?', opts: ['один', 'нет, ноль', 'много', 'всё'], ans: 1 },
    { q: 'Что означает <span class="tp">wan</span>?', opts: ['один', 'два', 'много', 'ноль'], ans: 0 },
    { q: 'Что означает <span class="tp">tu</span>?', opts: ['один', 'два', 'три', 'много'], ans: 1 },
    { q: 'Что означает <span class="tp">mute</span>?', opts: ['мало', 'много', 'один', 'ноль'], ans: 1 },
    { q: 'Что означает <span class="tp">ale</span>?', opts: ['всё, все', 'ничего', 'немного', 'один'], ans: 0 },
    { q: 'Что означает <span class="tp">tenpo</span>?', opts: ['место', 'время', 'человек', 'дом'], ans: 1 },
    { q: 'Что означает <span class="tp">sin</span>?', opts: ['старый', 'новый', 'большой', 'маленький'], ans: 1 },
    { q: 'Как сказать «два фрукта»?', opts: ['tu kili', 'kili tu', 'kili wan', 'wan kili'], ans: 1 },
    { q: 'Как сказать «я не знаю»?', opts: ['mi sona', 'mi sona ala', 'ala sona mi', 'mi ala sona'], ans: 1 },
    { q: 'Как сказать «у меня нет фрукта»?', opts: ['mi jo ala e kili', 'mi jo e kili ala', 'mi ala jo e kili', 'mi jo e ala kili'], ans: 0 }
  ],
  test: [
    { q: 'Где ставится число в toki pona?', opts: ['перед словом', 'после слова', 'в начале фразы', 'после e'], ans: 1, explain: 'Как все модификаторы.' },
    { q: 'Как сказать «сейчас»?', opts: ['tenpo ni', 'tenpo pini', 'tenpo kama', 'tenpo mute'], ans: 0, explain: 'tenpo ni = это время.' },
    { q: 'Как сказать «прошлое»?', opts: ['tenpo ni', 'tenpo pini', 'tenpo kama', 'tenpo suno'], ans: 1, explain: 'pini = законченный.' },
    { q: 'Введите «я не знаю»:', type: 'input', ans: 'mi sona ala', explain: 'ala после глагола.' },
    { q: 'Введите «два фрукта»:', type: 'input', ans: 'kili tu', explain: 'число после слова.' },
    { q: 'Введите «у меня есть один фрукт»:', type: 'input', ans: 'mi jo e kili wan', explain: 'wan после kili.' },
    { q: 'Что означает <span class="tp">tenpo kama</span>?', opts: ['прошлое', 'будущее', 'настоящее', 'вечер'], ans: 1, explain: 'kama = приходящее.' },
    { q: 'Что делает частица <b>la</b>?', opts: ['задаёт вопрос', 'отделяет обстоятельство', 'отрицает', 'соединяет'], ans: 1, explain: 'la = контекст перед главной частью.' }
  ],
  builder: [
    { words: ['mi', 'jo', 'e', 'kili', 'wan'], correct: ['mi', 'jo', 'e', 'kili', 'wan'], translation: 'у меня один фрукт' },
    { words: ['mi', 'sona', 'ala'], correct: ['mi', 'sona', 'ala'], translation: 'я не знаю' },
    { words: ['mi', 'jo', 'ala', 'e', 'kili'], correct: ['mi', 'jo', 'ala', 'e', 'kili'], translation: 'у меня нет фруктов' },
    { words: ['tenpo', 'ni', 'la', 'mi', 'moku'], correct: ['tenpo', 'ni', 'la', 'mi', 'moku'], translation: 'сейчас я ем' },
    { words: ['soweli', 'tu', 'li', 'lon', 'tomo'], correct: ['soweli', 'tu', 'li', 'lon', 'tomo'], translation: 'две собаки в доме' }
  ]
}

];