/* ============================================================
   VA TOKI PONA — КУРС NANPA MUTE (6 уроков)
   47 продвинутых слов: nimi ku suli, абстракции, стилистика
   Экосистема Vulpeto Abeleto · 2026
   ============================================================ */

window.LESSONS_TP3 = [

/* ═══════════════════════════════════════════════════════════
   УРОК 1: nimi en sona — абстрактные понятия
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp3-l1',
  title: 'nimi en sona',
  desc: 'абстрактные понятия: имя, знание, разум, сила',
  xp: 25,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Как говорить об имени и словах: <span class="tp">nimi</span></li>
      <li>Слова <span class="tp">sitelen</span> (знак, рисунок) и <span class="tp">sona</span> (знание)</li>
      <li>Как описать <b>разум</b> и <b>силу</b>: <span class="tp">lawa</span>, <span class="tp">wawa</span></li>
      <li>Разницу между знанием (<b>sona</b>) и чувством (<b>pilin</b>)</li>
    </ul>

    <h3>🌍 Абстрактные понятия по-простому</h3>
    <p>В toki pona даже абстракции описываются <b>конкретными</b> словами. <b>sona</b> — «знание», но также «знать» и «уметь». <b>lawa</b> — «голова», но также «управлять» и «разум».</p>

    <h3>📖 Новые слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">nimi</td><td><b>nimi</b></td><td>имя, слово, название</td></tr>
      <tr>linja-pona<td class="sp-cell">sitelen</td><td><b>sitelen</b></td><td>рисунок, письмо, изображение</td></tr>
      <tr>linja-pona<td class="sp-cell">sona</td><td><b>sona</b></td><td>знание, мудрость, понимание</td></tr>
      <tr>linja-pona<td class="sp-cell">pilin</td><td><b>pilin</b></td><td>чувство, эмоция, сердце</td></tr>
      <tr>linja-pona<td class="sp-cell">lawa</td><td><b>lawa</b></td><td>голова, разум, управлять</td></tr>
      <tr>linja-pona<td class="sp-cell">wawa</td><td><b>wawa</b></td><td>сила, энергия, мощь</td></tr>
    </table>

    <h3>🧩 Схема: из чего состоит человек</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center; font-size:12px; color:var(--muted); margin-bottom:14px; text-transform:uppercase; letter-spacing:1px;">Внутренний мир человека</div>

      <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; text-align:center;">
        <div style="background:var(--card2); border-radius:10px; padding:16px;">
          <div style="font-size:30px; margin-bottom:6px;">🧠</div>
          <div class="tp" style="font-weight:800; font-size:16px; color:var(--blue);">lawa</div>
          <div style="font-size:11px; color:var(--muted); margin-top:4px;">голова, разум</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:16px;">
          <div style="font-size:30px; margin-bottom:6px;">💭</div>
          <div class="tp" style="font-weight:800; font-size:16px; color:var(--green);">sona</div>
          <div style="font-size:11px; color:var(--muted); margin-top:4px;">знание</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:16px;">
          <div style="font-size:30px; margin-bottom:6px;">❤️</div>
          <div class="tp" style="font-weight:800; font-size:16px; color:var(--danger);">pilin</div>
          <div style="font-size:11px; color:var(--muted); margin-top:4px;">чувство</div>
        </div>
      </div>
    </div>

    <h3>🧩 Схема: lawa — голова и власть</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center; font-size:13px; color:var(--muted); margin-bottom:14px;">Одно слово — два больших смысла</div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:22px; margin-bottom:4px;">👤</div>
          <div class="tp" style="font-weight:800;">lawa mi</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">моя голова / мой разум</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:22px; margin-bottom:4px;">👑</div>
          <div class="tp" style="font-weight:800;">jan lawa</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">руководитель</div>
        </div>
      </div>

      <div style="text-align:center; margin-top:14px; padding-top:12px; border-top:1px dashed var(--border);">
        <span class="tp" style="font-weight:700;">ona li lawa e kulupu</span>
        <div style="font-size:12px; color:var(--muted); margin-top:4px;">он руководит группой</div>
      </div>
    </div>

    <h3>🧩 Схема: sona vs pilin</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <div style="background:var(--card2); border:1px solid var(--green); border-radius:10px; padding:14px;">
          <div style="font-size:11px; color:var(--green); font-weight:800; margin-bottom:6px;">РАЦИОНАЛЬНОЕ</div>
          <div class="tp" style="font-weight:800; font-size:16px;">sona</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px; margin-bottom:8px;">знать, уметь, понимать</div>
          <div class="tp" style="font-size:13px;">mi sona e ni</div>
          <div style="font-size:12px; color:var(--muted);">я знаю это</div>
        </div>
        <div style="background:var(--card2); border:1px solid var(--danger); border-radius:10px; padding:14px;">
          <div style="font-size:11px; color:var(--danger); font-weight:800; margin-bottom:6px;">ЭМОЦИОНАЛЬНОЕ</div>
          <div class="tp" style="font-weight:800; font-size:16px;">pilin</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px; margin-bottom:8px;">чувствовать, ощущать</div>
          <div class="tp" style="font-size:13px;">mi pilin e ni</div>
          <div style="font-size:12px; color:var(--muted);">я чувствую это</div>
        </div>
      </div>
    </div>

    <h3>🎯 Имена в toki pona</h3>
    <p>Имена пишутся с <b>заглавной буквы</b> после слов <b>jan</b>, <b>ma</b> или <b>toki</b>.</p>

    <table>
      <tr><th>Что</th><th>Пример</th><th>Перевод</th></tr>
      <tr><td>Человек</td><td><span class="tp">jan Malija</span></td><td>Мария</td></tr>
      <tr><td>Страна</td><td><span class="tp">ma Losi</span></td><td>Россия</td></tr>
      <tr><td>Язык</td><td><span class="tp">toki Losi</span></td><td>русский язык</td></tr>
      <tr><td>Город</td><td><span class="tp">ma Mosi</span></td><td>Москва</td></tr>
    </table>

    <div class="lesson-tip">
      <b>Правило:</b> имя адаптируется под фонетику toki pona. Никаких «th», «kh», «sh» — только 9 согласных. <span class="tp">Washington</span> → <span class="tp">ma Wasinton</span>.
    </div>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>nimi mi li jan Lina</b> — «моё имя — jan Lina»<br>
      <span class="ru">nimi mi = моё имя (подлежащее). li jan Lina = является jan Lina.</span>
    </div>

    <div class="lesson-example">
      <b>nimi sina li seme?</b> — «как тебя зовут?»<br>
      <span class="ru">seme в позиции сказуемого = «что / как».</span>
    </div>

    <div class="lesson-example">
      <b>mi sitelen e nimi sina</b> — «я пишу твоё имя»<br>
      <span class="ru">sitelen = писать/рисовать. e nimi sina = твоё имя (объект).</span>
    </div>

    <div class="lesson-example">
      <b>sitelen tawa li pona</b> — «фильм хороший»<br>
      <span class="ru">sitelen tawa = движущееся изображение = фильм.</span>
    </div>

    <div class="lesson-example">
      <b>ona li lawa e kulupu</b> — «он руководит группой»<br>
      <span class="ru">lawa e = управлять чем-то / кем-то.</span>
    </div>

    <div class="lesson-example">
      <b>wawa mi li lili</b> — «моя сила мала»<br>
      <span class="ru">wawa = сила. mi = моя. lili = маленькая.</span>
    </div>

    <div class="lesson-example">
      <b>sona li suli, taso pilin li suli kin</b> — «знание важно, но чувство тоже важно»<br>
      <span class="ru">Сравнение двух абстракций.</span>
    </div>

    <h3>🗣️ Диалог 1: знакомство</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> nimi sina li seme?<br>
      <b>jan B:</b> nimi mi li jan Ana. sina?<br>
      <b>jan A:</b> mi jan Tanja. sina kama tan ma seme?<br>
      <b>jan B:</b> mi kama tan ma Losi.
    </div>
    <p><span class="ru">Перевод: «Как тебя зовут? — Меня зовут Аня. Тебя? — Я Таня. Откуда ты? — Я из России.»</span></p>

    <h3>🗣️ Диалог 2: о знаниях</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina sona e toki Losi?<br>
      <b>jan B:</b> sona lili. taso mi pilin pona tan ona.<br>
      <b>jan A:</b> sina wile sona mute la, o kama sona poka mi.<br>
      <b>jan B:</b> pona! mi en sina li kama sona.
    </div>
    <p><span class="ru">Перевод: «Ты знаешь русский? — Немного. Но я рад этому. — Если хочешь знать больше, учись со мной. — Хорошо! Я и ты будем учиться.»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ nimi mi li Lina</span><br>
      <span class="ru">Ошибка: имя человека идёт после jan.</span><br>
      <span class="tp">✓ nimi mi li jan Lina</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi lawa kulupu</span><br>
      <span class="ru">Ошибка: lawa переходный, нужен e.</span><br>
      <span class="tp">✓ mi lawa e kulupu</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ sona mi e ni</span><br>
      <span class="ru">Ошибка: sona непереходный в значении «знать о» — используйте e только для объектов.</span><br>
      <span class="tp">✓ mi sona e ni</span>
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr><td><span style="color:var(--danger)">nimi mi li Lina</span></td><td><span class="tp">nimi mi li jan Lina</span></td></tr>
      <tr><td><span style="color:var(--danger)">mi lawa kulupu</span></td><td><span class="tp">mi lawa e kulupu</span></td></tr>
      <tr><td><span style="color:var(--danger)">pilin e ni</span> как «думать»</td><td><span class="tp">sona e ni</span> = знать; <span class="tp">pilin e ni</span> = чувствовать</td></tr>
      <tr><td>забывать wawa — «сила» (не только физическая)</td><td><span class="tp">wawa telo</span> = электричество</td></tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «моё имя — jan Ana»? <span class="ru">(nimi mi li jan Ana)</span></li>
      <li>Что означает <span class="tp">jan lawa</span>? <span class="ru">(руководитель)</span></li>
      <li>Разница между sona и pilin? <span class="ru">(знать vs чувствовать)</span></li>
      <li>Что такое <span class="tp">sitelen tawa</span>? <span class="ru">(фильм)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. <b>nimi</b> — имя, слово; пишется после <b>jan / ma / toki</b>.<br>
      2. <b>sitelen</b> — знак, рисунок, письмо; <span class="tp">sitelen tawa</span> = фильм.<br>
      3. <b>sona</b> — знание (рациональное); <b>pilin</b> — чувство (эмоциональное).<br>
      4. <b>lawa</b> — голова / разум / управлять.<br>
      5. <b>wawa</b> — сила во всех смыслах: <span class="tp">wawa telo</span> = электричество.
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">nimi</span>?', opts: ['вещь', 'имя, слово', 'голова', 'сила'], ans: 1 },
    { q: 'Что означает <span class="tp">sitelen</span>?', opts: ['имя', 'рисунок, письмо', 'мысль', 'движение'], ans: 1 },
    { q: 'Что означает <span class="tp">sona</span>?', opts: ['чувство', 'знание', 'сила', 'имя'], ans: 1 },
    { q: 'Что означает <span class="tp">pilin</span>?', opts: ['знание', 'чувство', 'мысль', 'слово'], ans: 1 },
    { q: 'Что означает <span class="tp">lawa</span>?', opts: ['рука', 'голова, управлять', 'нога', 'сердце'], ans: 1 },
    { q: 'Что означает <span class="tp">wawa</span>?', opts: ['слабость', 'сила, энергия', 'мудрость', 'красота'], ans: 1 },
    { q: 'Как спросить «как тебя зовут?»', opts: ['nimi sina li seme?', 'sina nimi seme?', 'seme nimi sina?', 'nimi seme sina?'], ans: 0 },
    { q: 'Что означает <span class="tp">jan lawa</span>?', opts: ['руководитель', 'голова человека', 'умный человек', 'случайный человек'], ans: 0 },
    { q: 'Что означает <span class="tp">sitelen tawa</span>?', opts: ['телевизор', 'фильм', 'фотография', 'книга'], ans: 1 },
    { q: 'Как сказать «я знаю это»?', opts: ['mi sona e ni', 'mi pilin e ni', 'mi lawa e ni', 'mi nimi e ni'], ans: 0 }
  ],
  test: [
    { q: 'Что означает <span class="tp">nimi mi li jan Lina</span>?', opts: ['я Линa', 'моё имя — jan Lina', 'я знаю Лину', 'Лина — человек'], ans: 1, explain: 'nimi mi li … = моё имя …' },
    { q: 'Как пишется имя Maria в toki pona?', opts: ['jan Malija', 'jan maria', 'jan Marija', 'jan MARIJA'], ans: 0, explain: 'jan + имя с заглавной, адаптированное под фонетику.' },
    { q: 'Что означает <span class="tp">ona li lawa e kulupu</span>?', opts: ['он в группе', 'он руководит группой', 'группа руководит им', 'он потерял группу'], ans: 1, explain: 'lawa e = управлять чем-то.' },
    { q: 'Введите «моё имя — jan Ana»:', type: 'input', ans: 'nimi mi li jan ana', explain: 'nimi mi li jan Ana.' },
    { q: 'Введите «я знаю это»:', type: 'input', ans: 'mi sona e ni', explain: 'mi sona e ni.' },
    { q: 'Введите «я чувствую это»:', type: 'input', ans: 'mi pilin e ni', explain: 'mi pilin e ni.' },
    { q: 'Что означает <span class="tp">wawa telo</span>?', opts: ['электричество', 'дождь', 'наводнение', 'питьё'], ans: 0, explain: 'водная сила = электричество.' },
    { q: 'Разница sona и pilin:', opts: ['синонимы', 'sona = знать, pilin = чувствовать', 'sona = видеть, pilin = слышать', 'sona = уметь, pilin = мочь'], ans: 1, explain: 'Разум vs чувство.' }
  ],
  builder: [
    { words: ['nimi', 'mi', 'li', 'jan', 'ana'], correct: ['nimi', 'mi', 'li', 'jan', 'ana'], translation: 'моё имя — jan Ana' },
    { words: ['mi', 'sona', 'e', 'ni'], correct: ['mi', 'sona', 'e', 'ni'], translation: 'я знаю это' },
    { words: ['jan', 'lawa', 'li', 'pona'], correct: ['jan', 'lawa', 'li', 'pona'], translation: 'руководитель хороший' },
    { words: ['mi', 'sitelen', 'e', 'nimi', 'sina'], correct: ['mi', 'sitelen', 'e', 'nimi', 'sina'], translation: 'я пишу твоё имя' },
    { words: ['wawa', 'li', 'lon', 'insa', 'mi'], correct: ['wawa', 'li', 'lon', 'insa', 'mi'], translation: 'сила внутри меня' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 2: esun en utala — общество и торговля
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp3-l2',
  title: 'esun en utala',
  desc: 'магазин, деньги, конфликт и сообщество',
  xp: 25,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Слова торговли: <span class="tp">esun</span> (магазин), <span class="tp">mani</span> (деньги)</li>
      <li>Как говорить о конфликте: <span class="tp">utala</span></li>
      <li>Как описать общество: <span class="tp">kulupu</span>, <span class="tp">nasin</span></li>
      <li>Как сказать «богатый» / «бедный» без специальных слов</li>
    </ul>

    <h3>🌍 Общество и торговля</h3>
    <p>В toki pona даже «экономика» описывается <b>простыми</b> словами. <b>esun</b> — это и «магазин», и «рынок», и «торговля», и «обмен».</p>

    <h3>📖 Новые слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">esun</td><td><b>esun</b></td><td>магазин, рынок, торговля, обмен</td></tr>
      <tr>linja-pona<td class="sp-cell">mani</td><td><b>mani</b></td><td>деньги, богатство</td></tr>
      <tr>linja-pona<td class="sp-cell">utala</td><td><b>utala</b></td><td>конфликт, битва, борьба</td></tr>
      <tr>linja-pona<td class="sp-cell">kulupu</td><td><b>kulupu</b></td><td>группа, сообщество, общество</td></tr>
      <tr>linja-pona<td class="sp-cell">nasin</td><td><b>nasin</b></td><td>обычай, доктрина, система</td></tr>
      <tr>linja-pona<td class="sp-cell">jan</td><td><b>jan</b></td><td>человек, личность</td></tr>
    </table>

    <h3>🧩 Схема: мир торговли</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center; font-size:12px; color:var(--muted); margin-bottom:14px; text-transform:uppercase; letter-spacing:1px;">esun — универсальное слово</div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:22px; margin-bottom:4px;">🏪</div>
          <div class="tp" style="font-weight:800;">tomo esun</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">магазин</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:22px; margin-bottom:4px;">🛒</div>
          <div class="tp" style="font-weight:800;">mi tawa esun</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">я иду в магазин</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:22px; margin-bottom:4px;">💰</div>
          <div class="tp" style="font-weight:800;">mi esun e kili</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">я продаю фрукты</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:22px; margin-bottom:4px;">🔄</div>
          <div class="tp" style="font-weight:800;">mi esun e mani</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">я меняю деньги</div>
        </div>
      </div>
    </div>

    <h3>🧩 Схема: mani — деньги и богатство</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="font-size:13px; color:var(--muted); margin-bottom:12px; text-align:center;">Как сказать «богатый» / «бедный»</div>

      <table style="margin:0;">
        <tr><th>Фраза</th><th>Буквально</th><th>Значение</th></tr>
        <tr><td><span class="tp">jan mani</span></td><td>человек денег</td><td>богатый человек</td></tr>
        <tr><td><span class="tp">jan jo mani</span></td><td>человек, имеющий деньги</td><td>тот, у кого есть деньги</td></tr>
        <tr><td><span class="tp">jan pi mani ala</span></td><td>человек без денег</td><td>бедный человек</td></tr>
      </table>
    </div>

    <h3>🧩 Схема: utala — все виды конфликта</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center; font-size:12px; color:var(--muted); margin-bottom:14px; text-transform:uppercase; letter-spacing:1px;">utala = противостояние любого масштаба</div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:10px;">
        <div style="background:var(--card2); border-radius:8px; padding:12px; text-align:center;">
          <div style="font-size:22px;">💬</div>
          <div style="font-size:12px; margin-top:6px;">спор</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:12px; text-align:center;">
          <div style="font-size:22px;">🥊</div>
          <div style="font-size:12px; margin-top:6px;">драка</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:12px; text-align:center;">
          <div style="font-size:22px;">⚔️</div>
          <div style="font-size:12px; margin-top:6px;">война</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:12px; text-align:center;">
          <div style="font-size:22px;">🏆</div>
          <div style="font-size:12px; margin-top:6px;">соревнование</div>
        </div>
      </div>
    </div>

    <h3>🎯 nasin как обычай и система</h3>
    <p>В обществе <b>nasin</b> — это не только «путь», но и <b>обычай</b>, <b>доктрина</b>, <b>традиция</b>.</p>

    <table>
      <tr><th>Фраза</th><th>Значение</th></tr>
      <tr><td><span class="tp">nasin pi ma mi</span></td><td>обычай нашей страны</td></tr>
      <tr><td><span class="tp">nasin mani</span></td><td>экономическая система</td></tr>
      <tr><td><span class="tp">nasin pona</span></td><td>хороший порядок (≈ справедливость)</td></tr>
      <tr><td><span class="tp">nasin sin</span></td><td>новый порядок</td></tr>
    </table>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>mi tawa esun</b> — «я иду в магазин»<br>
      <span class="ru">tawa = движение. esun = магазин.</span>
    </div>

    <div class="lesson-example">
      <b>mi jo e mani</b> — «у меня есть деньги»<br>
      <span class="ru">jo e = иметь. mani = деньги.</span>
    </div>

    <div class="lesson-example">
      <b>mi wile e mani mute</b> — «я хочу много денег»<br>
      <span class="ru">mani mute = много денег.</span>
    </div>

    <div class="lesson-example">
      <b>ona li jo ala e mani</b> — «у него нет денег»<br>
      <span class="ru">jo ala e = не иметь.</span>
    </div>

    <div class="lesson-example">
      <b>utala li ike</b> — «война ужасна»<br>
      <span class="ru">Оценочное суждение через ike.</span>
    </div>

    <div class="lesson-example">
      <b>mi utala e ona</b> — «я сражаюсь с ним»<br>
      <span class="ru">utala e = бороться с кем-то.</span>
    </div>

    <div class="lesson-example">
      <b>kulupu mi li jo e nasin pona</b> — «у нашего сообщества хороший порядок»<br>
      <span class="ru">nasin pona ≈ «справедливость».</span>
    </div>

    <div class="lesson-example">
      <b>mi wile ala e utala</b> — «я не хочу конфликта»<br>
      <span class="ru">wile ala e = не хотеть чего-то.</span>
    </div>

    <h3>🗣️ Диалог 1: на рынке</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> kili ni li mani seme?<br>
      <b>jan B:</b> ona li mani luka.<br>
      <b>jan A:</b> mani luka li mute. mi wile e mani tu taso.<br>
      <b>jan B:</b> pona. sina pana e mani tu la, sina lanpan e kili.
    </div>
    <p><span class="ru">Перевод: «Сколько стоит этот фрукт? — Он стоит пять монет. — Пять много. Я хочу только две. — Хорошо. Если дашь две монеты, возьмёшь фрукт.»</span></p>

    <h3>🗣️ Диалог 2: разговор о мире</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> tenpo ni la, utala li lon ma mute.<br>
      <b>jan B:</b> lon. mi pilin ike tan ni.<br>
      <b>jan A:</b> mi kin. nasin pona li pona mute.<br>
      <b>jan B:</b> lon. o pake e utala!
    </div>
    <p><span class="ru">Перевод: «Сейчас войны во многих странах. — Да. Мне от этого плохо. — Мне тоже. Хороший порядок очень важен. — Да. Остановите войну!»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi tawa lon esun</span><br>
      <span class="ru">Ошибка: tawa и lon не совмещаются. Выбирайте одно.</span><br>
      <span class="tp">✓ mi tawa esun</span> (я иду в магазин) или <span class="tp">mi lon esun</span> (я в магазине)
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi jo mani</span><br>
      <span class="ru">Ошибка: нужен e для объекта.</span><br>
      <span class="tp">✓ mi jo e mani</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ nasin pona li lon ma ale</span> — в смысле «справедливость во всём мире»<br>
      <span class="ru">Ошибка: nasin pona как концепт = одно целое. Убираем артикль li.</span><br>
      <span class="tp">✓ nasin pona li lon ma ale</span> (это правильно, но обратите внимание: nasin pona — подлежащее)
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr><td><span style="color:var(--danger)">mi jo mani</span></td><td><span class="tp">mi jo e mani</span></td></tr>
      <tr><td><span style="color:var(--danger)">jan mani mute li pona</span> — путаница: «много богатых» и «богатые много»</td><td><span class="tp">jan pi mani mute</span> — человек с большими деньгами</td></tr>
      <tr><td><span style="color:var(--danger)">utala mi e ona</span></td><td><span class="tp">mi utala e ona</span> (порядок S-V-O)</td></tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «у меня есть деньги»? <span class="ru">(mi jo e mani)</span></li>
      <li>Что означает <span class="tp">tomo esun</span>? <span class="ru">(магазин)</span></li>
      <li>Что такое <span class="tp">nasin pona</span>? <span class="ru">(хороший порядок ≈ справедливость)</span></li>
      <li>Как сказать «я не хочу конфликта»? <span class="ru">(mi wile ala e utala)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. <b>esun</b> — магазин, торговля, обмен.<br>
      2. <b>mani</b> — деньги; «богатый» = <span class="tp">jan jo mani</span>.<br>
      3. <b>utala</b> — конфликт в любом масштабе: спор, драка, война.<br>
      4. <b>kulupu</b> — группа, сообщество, общество.<br>
      5. <b>nasin</b> — не только путь, но и обычай, доктрина, порядок.
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">esun</span>?', opts: ['дом', 'магазин, торговля', 'деньги', 'рынок труда'], ans: 1 },
    { q: 'Что означает <span class="tp">mani</span>?', opts: ['торговля', 'деньги', 'богатство', 'работа'], ans: 1 },
    { q: 'Что означает <span class="tp">utala</span>?', opts: ['мир', 'конфликт, борьба', 'союз', 'дружба'], ans: 1 },
    { q: 'Что означает <span class="tp">kulupu</span>?', opts: ['человек', 'сообщество', 'зверь', 'дом'], ans: 1 },
    { q: 'Как сказать «я иду в магазин»?', opts: ['mi tawa esun', 'mi lon esun', 'mi jo e esun', 'esun mi'], ans: 0 },
    { q: 'Как сказать «у меня есть деньги»?', opts: ['mi jo e mani', 'mi mani', 'mani mi li', 'mi lon mani'], ans: 0 },
    { q: 'Как сказать «я не хочу конфликта»?', opts: ['mi wile ala e utala', 'mi utala ala', 'mi ala wile utala', 'utala li ala'], ans: 0 },
    { q: 'Что означает <span class="tp">jan lawa</span>?', opts: ['продавец', 'руководитель', 'покупатель', 'полицейский'], ans: 1 },
    { q: 'Что означает <span class="tp">tomo esun</span>?', opts: ['магазин', 'банк', 'склад', 'фабрика'], ans: 0 },
    { q: 'Что означает <span class="tp">utala musi</span>?', opts: ['спортивная игра', 'война', 'ссора', 'праздник'], ans: 0 }
  ],
  test: [
    { q: 'Что означает <span class="tp">esun li open</span>?', opts: ['магазин открыт', 'магазин закрыт', 'магазин строится', 'магазин сгорел'], ans: 0, explain: 'open = открывать.' },
    { q: 'Как сказать «у него нет денег»?', opts: ['ona li jo ala e mani', 'ona li jo e mani ala', 'ona li ala jo e mani', 'mani li ala ona'], ans: 0, explain: 'ala перед e.' },
    { q: 'Что означает <span class="tp">nasin pi ma mi</span>?', opts: ['дорога моей страны', 'обычай моей страны', 'граница', 'правительство'], ans: 1, explain: 'nasin = обычай, доктрина.' },
    { q: 'Введите «у меня есть деньги»:', type: 'input', ans: 'mi jo e mani', explain: 'mi jo e mani.' },
    { q: 'Введите «я хочу много денег»:', type: 'input', ans: 'mi wile e mani mute', explain: 'mani mute = много денег.' },
    { q: 'Введите «конфликт плохой»:', type: 'input', ans: 'utala li ike', explain: 'utala li ike.' },
    { q: 'Что означает <span class="tp">ona li utala e ona</span>?', opts: ['они сражаются друг с другом', 'они друзья', 'они беседуют', 'они братья'], ans: 0, explain: 'utala e = бороться с кем-то.' },
    { q: 'Что означает <span class="tp">kulupu mi li jo e nasin pona</span>?', opts: ['моё сообщество богато', 'моё сообщество имеет хороший порядок', 'моё сообщество большое', 'моё сообщество воюет'], ans: 1, explain: 'nasin pona = хороший порядок, обычай.' }
  ],
  builder: [
    { words: ['mi', 'tawa', 'esun'], correct: ['mi', 'tawa', 'esun'], translation: 'я иду в магазин' },
    { words: ['mi', 'jo', 'e', 'mani', 'mute'], correct: ['mi', 'jo', 'e', 'mani', 'mute'], translation: 'у меня много денег' },
    { words: ['utala', 'li', 'ike'], correct: ['utala', 'li', 'ike'], translation: 'конфликт плохой' },
    { words: ['kulupu', 'mi', 'li', 'suli'], correct: ['kulupu', 'mi', 'li', 'suli'], translation: 'моё сообщество большое' },
    { words: ['mi', 'wile', 'ala', 'e', 'utala'], correct: ['mi', 'wile', 'ala', 'e', 'utala'], translation: 'я не хочу конфликта' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 3: nimi ku suli — расширенный словарь (часть 1)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp3-l3',
  title: 'nimi ku suli — nanpa wan',
  desc: 'слова расширенного словаря: специи, глаза, монстры',
  xp: 25,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Что такое <b>nimi ku suli</b> и почему это важно</li>
      <li>Слова <span class="tp">namako</span>, <span class="tp">kin</span>, <span class="tp">oko</span>, <span class="tp">kipisi</span>, <span class="tp">leko</span></li>
      <li>Слова <span class="tp">monsuta</span>, <span class="tp">misikeke</span>, <span class="tp">jasima</span>, <span class="tp">soko</span>, <span class="tp">meso</span></li>
      <li>Как эти слова делают речь точнее, но остаются «в духе» toki pona</li>
    </ul>

    <h3>🌍 Что такое nimi ku suli</h3>
    <p>Кроме <b>nimi pu</b> (120 классических слов из книги Сони Ланг) есть <b>nimi ku suli</b> — слова, добавленные сообществом. Они признаны большинством, но не входят в классический минимум. Их около <b>17–20</b>.</p>

    <div class="lesson-tip">
      <b>nimi pu</b> — «слова из книги» (классические). <b>nimi ku</b> — «слова из словаря» (расширенные). <b>ku suli</b> — «большие / важные ku» — те, что знает большинство.
    </div>

    <h3>📖 Новые слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">namako</td><td><b>namako</b></td><td>специя, дополнительный</td></tr>
      <tr>linja-pona<td class="sp-cell">kin</td><td><b>kin</b></td><td>также, тоже, даже</td></tr>
      <tr>linja-pona<td class="sp-cell">oko</td><td><b>oko</b></td><td>глаз</td></tr>
      <tr>linja-pona<td class="sp-cell">kipisi</td><td><b>kipisi</b></td><td>резать, делить, разделять</td></tr>
      <tr>linja-pona<td class="sp-cell">leko</td><td><b>leko</b></td><td>квадрат, блок, кирпич</td></tr>
      <tr>linja-pona<td class="sp-cell">monsuta</td><td><b>monsuta</b></td><td>монстр, страх, опасный</td></tr>
      <tr>linja-pona<td class="sp-cell">misikeke</td><td><b>misikeke</b></td><td>лекарство, лечение</td></tr>
      <tr>linja-pona<td class="sp-cell">jasima</td><td><b>jasima</b></td><td>зеркало, отражение, обратный</td></tr>
      <tr>linja-pona<td class="sp-cell">soko</td><td><b>soko</b></td><td>гриб, грибок</td></tr>
      <tr>linja-pona<td class="sp-cell">meso</td><td><b>meso</b></td><td>средний, посредственный</td></tr>
    </table>

    <h3>🧩 Схема: kin — усилительная частица</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center; font-size:12px; color:var(--muted); margin-bottom:14px; text-transform:uppercase; letter-spacing:1px;">kin = тоже / также / даже</div>

      <div style="display:grid; grid-template-columns:1fr; gap:8px;">
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span class="tp" style="font-weight:700;">mi moku kin</span>
          <span style="color:var(--muted);"> → я тоже ем</span>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span class="tp" style="font-weight:700;">ona li pona kin</span>
          <span style="color:var(--muted);"> → он тоже хороший (или: даже хороший)</span>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span class="tp" style="font-weight:700;">sona li suli, pilin li suli kin</span>
          <span style="color:var(--muted);"> → знание важно, чувство тоже важно</span>
        </div>
      </div>
    </div>

    <div class="lesson-tip">
      <b>kin</b> ставится <b>в конце</b> фразы или <b>после</b> слова, к которому относится. Не в начале!
    </div>

    <h3>🧩 Схема: oko и lukin</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <div style="background:var(--card2); border-radius:10px; padding:14px;">
          <div class="tp" style="font-weight:800; font-size:16px; color:var(--green);">lukin</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">смотреть, видеть</div>
          <div style="font-size:12px; margin-top:6px;">классическое слово</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:14px; border:1px solid var(--blue);">
          <div class="tp" style="font-weight:800; font-size:16px; color:var(--blue);">oko</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">глаз как орган</div>
          <div style="font-size:12px; margin-top:6px;">ku suli, для точности</div>
        </div>
      </div>
      <div style="text-align:center; margin-top:14px; font-size:13px; color:var(--muted);">
        <span class="tp">oko mi li laso</span> — мои глаза синие
      </div>
    </div>

    <h3>🧩 Схема: monsuta — страх и монстр</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:26px; margin-bottom:6px;">👹</div>
          <div class="tp" style="font-weight:800;">monsuta</div>
          <div style="font-size:11px; color:var(--muted); margin-top:4px;">монстр как существо</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:26px; margin-bottom:6px;">😨</div>
          <div class="tp" style="font-weight:800;">pilin monsuta</div>
          <div style="font-size:11px; color:var(--muted); margin-top:4px;">чувствовать страх</div>
        </div>
      </div>
    </div>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>mi moku kin e soko</b> — «я тоже ем гриб»<br>
      <span class="ru">kin = «тоже». soko = гриб (объект).</span>
    </div>

    <div class="lesson-example">
      <b>oko sina li pona tawa mi</b> — «твои глаза мне нравятся»<br>
      <span class="ru">oko sina = твои глаза. pona tawa mi = приятны мне.</span>
    </div>

    <div class="lesson-example">
      <b>mi kipisi e pan</b> — «я режу хлеб»<br>
      <span class="ru">kipisi e = резать что-то.</span>
    </div>

    <div class="lesson-example">
      <b>mi kipisi e leko</b> — «я режу блок»<br>
      <span class="ru">leko = квадрат, блок.</span>
    </div>

    <div class="lesson-example">
      <b>monsuta li lon tomo</b> — «монстр в доме»<br>
      <span class="ru">monsuta = монстр. li lon tomo = находится в доме.</span>
    </div>

    <div class="lesson-example">
      <b>mi pilin monsuta</b> — «я боюсь»<br>
      <span class="ru">pilin monsuta = чувствовать страх.</span>
    </div>

    <div class="lesson-example">
      <b>mi moku e misikeke</b> — «я принимаю лекарство»<br>
      <span class="ru">misikeke = лекарство.</span>
    </div>

    <div class="lesson-example">
      <b>jasima li pana e sitelen</b> — «зеркало даёт изображение»<br>
      <span class="ru">jasima = зеркало. pana e = даёт.</span>
    </div>

    <div class="lesson-example">
      <b>moku ni li meso</b> — «эта еда средняя»<br>
      <span class="ru">meso = средний, так себе.</span>
    </div>

    <h3>🗣️ Диалог 1: в лесу</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> o lukin! soko li lon ma.<br>
      <b>jan B:</b> pona! mi moku kin e soko.<br>
      <b>jan A:</b> taso o sona: soko ante li ken ike.<br>
      <b>jan B:</b> lon. mi sona.
    </div>
    <p><span class="ru">Перевод: «Смотри! На земле гриб. — Хорошо! Я тоже ем грибы. — Но знай: другие грибы могут быть опасны. — Да. Я знаю.»</span></p>

    <h3>🗣️ Диалог 2: у врача</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina pilin ike?<br>
      <b>jan B:</b> lon. mi pilin monsuta tan sijelo mi.<br>
      <b>jan A:</b> o moku e misikeke ni.<br>
      <b>jan B:</b> pona tawa sina. mi moku e ona.
    </div>
    <p><span class="ru">Перевод: «Ты плохо себя чувствуешь? — Да. Я боюсь за своё тело. — Прими это лекарство. — Спасибо. Я его принимаю.»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ kin mi moku</span><br>
      <span class="ru">Ошибка: kin идёт после слова, не в начале.</span><br>
      <span class="tp">✓ mi moku kin</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi kipisi pan</span><br>
      <span class="ru">Ошибка: kipisi переходный, нужен e.</span><br>
      <span class="tp">✓ mi kipisi e pan</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ oko mi li laso mute</span> в значении «глаза очень синие»<br>
      <span class="ru">Ошибка: mute — «много», а не «очень». Для «очень» используйте «mute» только с действием.</span><br>
      <span class="tp">✓ oko mi li laso suli</span> (глаза большого синего цвета)
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr><td><span style="color:var(--danger)">kin mi moku</span></td><td><span class="tp">mi moku kin</span></td></tr>
      <tr><td><span style="color:var(--danger)">mi kipisi pan</span></td><td><span class="tp">mi kipisi e pan</span></td></tr>
      <tr><td>использовать oko там, где можно lukin</td><td>oko только когда важны глаза как орган</td></tr>
      <tr><td><span style="color:var(--danger)">misikeke mi li pona</span> в значении «я лечусь»</td><td><span class="tp">mi moku e misikeke</span></td></tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «я тоже ем»? <span class="ru">(mi moku kin)</span></li>
      <li>Что означает <span class="tp">pilin monsuta</span>? <span class="ru">(чувствовать страх)</span></li>
      <li>Как сказать «я режу хлеб»? <span class="ru">(mi kipisi e pan)</span></li>
      <li>Чем oko отличается от lukin? <span class="ru">(oko = глаз как орган)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. <b>namako</b> — специя или «дополнительный».<br>
      2. <b>kin</b> — усилительная частица «тоже / даже», ставится после.<br>
      3. <b>oko</b> — глаз как орган (уточнение к lukin).<br>
      4. <b>kipisi</b> — резать; <b>leko</b> — квадрат / блок.<br>
      5. <b>monsuta</b> — монстр / страх; <b>misikeke</b> — лекарство.<br>
      6. <b>jasima</b> — зеркало; <b>soko</b> — гриб; <b>meso</b> — средний.
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">namako</span>?', opts: ['вода', 'специя', 'соль', 'сахар'], ans: 1 },
    { q: 'Что означает <span class="tp">kin</span>?', opts: ['нет', 'тоже, даже', 'очень', 'только'], ans: 1 },
    { q: 'Что означает <span class="tp">oko</span>?', opts: ['ухо', 'глаз', 'нос', 'рот'], ans: 1 },
    { q: 'Что означает <span class="tp">kipisi</span>?', opts: ['резать', 'клеить', 'мыть', 'строить'], ans: 0 },
    { q: 'Что означает <span class="tp">leko</span>?', opts: ['круг', 'квадрат, блок', 'линия', 'треугольник'], ans: 1 },
    { q: 'Что означает <span class="tp">monsuta</span>?', opts: ['друг', 'монстр, страх', 'зверь', 'ребёнок'], ans: 1 },
    { q: 'Что означает <span class="tp">misikeke</span>?', opts: ['яд', 'лекарство', 'еда', 'питьё'], ans: 1 },
    { q: 'Что означает <span class="tp">jasima</span>?', opts: ['окно', 'зеркало, отражение', 'тень', 'свет'], ans: 1 },
    { q: 'Что означает <span class="tp">soko</span>?', opts: ['растение', 'гриб', 'цветок', 'корень'], ans: 1 },
    { q: 'Что означает <span class="tp">meso</span>?', opts: ['большой', 'средний', 'маленький', 'новый'], ans: 1 }
  ],
  test: [
    { q: 'Откуда пришли nimi ku suli?', opts: ['из Fundamento', 'от сообщества', 'из древних книг', 'из английского'], ans: 1, explain: 'ku suli — расширения от сообщества.' },
    { q: 'Что означает <span class="tp">mi moku kin</span>?', opts: ['я тоже ем', 'я не ем', 'я хочу есть', 'я готовлю'], ans: 0, explain: 'kin = тоже, также.' },
    { q: 'Что означает <span class="tp">mi pilin monsuta</span>?', opts: ['я монстр', 'я боюсь', 'я вижу монстра', 'я сражаюсь'], ans: 1, explain: 'pilin monsuta = чувствовать страх.' },
    { q: 'Введите «глаза синие»:', type: 'input', ans: 'oko li laso', explain: 'oko li laso.' },
    { q: 'Введите «я тоже ем»:', type: 'input', ans: 'mi moku kin', explain: 'kin = тоже.' },
    { q: 'Введите «я хочу лекарство»:', type: 'input', ans: 'mi wile e misikeke', explain: 'mi wile e misikeke.' },
    { q: 'Что означает <span class="tp">tomo leko</span>?', opts: ['круглый дом', 'квадратный дом', 'большой дом', 'маленький дом'], ans: 1, explain: 'leko = квадрат.' },
    { q: 'Что означает <span class="tp">soko li kama tan ma</span>?', opts: ['гриб растёт из земли', 'гриб падает', 'гриб ест землю', 'земля растёт'], ans: 0, explain: 'kama tan ma = приходить из земли.' }
  ],
  builder: [
    { words: ['oko', 'mi', 'li', 'laso'], correct: ['oko', 'mi', 'li', 'laso'], translation: 'мои глаза синие' },
    { words: ['mi', 'moku', 'kin', 'e', 'soko'], correct: ['mi', 'moku', 'kin', 'e', 'soko'], translation: 'я тоже ем гриб' },
    { words: ['mi', 'kipisi', 'e', 'pan'], correct: ['mi', 'kipisi', 'e', 'pan'], translation: 'я режу хлеб' },
    { words: ['mi', 'wile', 'e', 'misikeke'], correct: ['mi', 'wile', 'e', 'misikeke'], translation: 'я хочу лекарство' },
    { words: ['mi', 'pilin', 'monsuta'], correct: ['mi', 'pilin', 'monsuta'], translation: 'я боюсь' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 4: nimi ku suli — расширенный словарь (часть 2)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp3-l4',
  title: 'nimi ku suli — nanpa tu',
  desc: 'продвинутые ku suli и мета-слова',
  xp: 25,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Слова <span class="tp">epiku</span>, <span class="tp">kokosila</span>, <span class="tp">majuna</span>, <span class="tp">pake</span>, <span class="tp">powe</span>, <span class="tp">apeja</span></li>
      <li>Уникальные мета-слова <span class="tp">pu</span> и <span class="tp">ku</span> — «читать официальные книги»</li>
      <li>Самое длинное слово — <span class="tp">kijetesantakalu</span> («енот»)</li>
      <li>Заполнитель паузы <span class="tp">n</span></li>
    </ul>

    <h3>🌍 Что такое продвинутые ku suli</h3>
    <p>Эти слова — на <b>границе</b> классического словаря. Некоторые вошли недавно, другие считаются необязательными. Но их <b>знает большинство сообщества</b>, поэтому они в nimi ku suli.</p>

    <h3>📖 Новые слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">epiku</td><td><b>epiku</b></td><td>крутой, эпический</td></tr>
      <tr>linja-pona<td class="sp-cell">kokosila</td><td><b>kokosila</b></td><td>говорить не на toki pona</td></tr>
      <tr>linja-pona<td class="sp-cell">lanpan</td><td><b>lanpan</b></td><td>захватывать, воровать</td></tr>
      <tr>linja-pona<td class="sp-cell">n</td><td><b>n</b></td><td>м…, хм…, э… (заполнитель)</td></tr>
      <tr>linja-pona<td class="sp-cell">kijetesantakalu</td><td><b>kijetesantakalu</b></td><td>енот, куницеобразный</td></tr>
      <tr>linja-pona<td class="sp-cell">ku</td><td><b>ku</b></td><td>читать «Toki Pona Dictionary»</td></tr>
      <tr>linja-pona<td class="sp-cell">pu</td><td><b>pu</b></td><td>читать «Toki Pona: The Language of Good»</td></tr>
      <tr>linja-pona<td class="sp-cell">majuna</td><td><b>majuna</b></td><td>старый, древний</td></tr>
      <tr>linja-pona<td class="sp-cell">pake</td><td><b>pake</b></td><td>останавливать, прекращать</td></tr>
      <tr>linja-pona<td class="sp-cell">powe</td><td><b>powe</b></td><td>ложный, фальшивый</td></tr>
      <tr>linja-pona<td class="sp-cell">apeja</td><td><b>apeja</b></td><td>стыд, вина</td></tr>
    </table>

    <h3>🧩 Схема: pu и ku — уникальные мета-слова</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="font-size:12px; color:var(--muted); margin-bottom:14px; text-align:center;">Глаголы, которые означают «читать конкретную книгу»</div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <div style="background:var(--card2); border:1px solid var(--green); border-radius:10px; padding:14px; text-align:center;">
          <div class="tp" style="font-weight:800; font-size:18px; color:var(--green);">pu</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">«Toki Pona: The Language of Good» (2014)</div>
          <div class="tp" style="font-size:13px; margin-top:8px;">mi pu</div>
          <div style="font-size:11px; color:var(--muted);">я читал официальную книгу</div>
        </div>
        <div style="background:var(--card2); border:1px solid var(--blue); border-radius:10px; padding:14px; text-align:center;">
          <div class="tp" style="font-weight:800; font-size:18px; color:var(--blue);">ku</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">«Toki Pona Dictionary» (2021)</div>
          <div class="tp" style="font-size:13px; margin-top:8px;">mi ku</div>
          <div style="font-size:11px; color:var(--muted);">я читал словарь</div>
        </div>
      </div>
    </div>

    <div class="lesson-tip">
      <b>pu</b> и <b>ku</b> — уникальны. Это <b>глаголы</b>, которые означают «взаимодействовать с конкретной книгой». В русском аналог — глагол «гуглить» (не «искать», а «искать именно в Google»).
    </div>

    <h3>🧩 Схема: kijetesantakalu — самое длинное слово</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center;">
        <div style="font-size:60px; margin-bottom:8px;">🦝</div>
        <div class="tp" style="font-weight:900; font-size:22px; color:var(--green); word-break:break-all;">kijetesantakalu</div>
        <div style="font-size:12px; color:var(--muted); margin-top:8px;">16 букв · самое длинное слово в toki pona</div>
        <div style="font-size:12px; color:var(--muted); margin-top:4px;">Придумано в 2009 в шутку, но стало официальным.</div>
      </div>
    </div>

    <h3>🧩 Схема: epiku, pake, powe, apeja</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:10px;">

        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:24px; margin-bottom:6px;">⭐</div>
          <div class="tp" style="font-weight:800;">epiku</div>
          <div style="font-size:11px; color:var(--muted); margin-top:4px;">крутой, эпический</div>
        </div>

        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:24px; margin-bottom:6px;">⛔</div>
          <div class="tp" style="font-weight:800;">pake</div>
          <div style="font-size:11px; color:var(--muted); margin-top:4px;">останавливать</div>
        </div>

        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:24px; margin-bottom:6px;">⚐</div>
          <div class="tp" style="font-weight:800;">powe</div>
          <div style="font-size:11px; color:var(--muted); margin-top:4px;">ложный, фальшивый</div>
        </div>

        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:24px; margin-bottom:6px;">😔</div>
          <div class="tp" style="font-weight:800;">apeja</div>
          <div style="font-size:11px; color:var(--muted); margin-top:4px;">стыд, вина</div>
        </div>

        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:24px; margin-bottom:6px;">🧓</div>
          <div class="tp" style="font-weight:800;">majuna</div>
          <div style="font-size:11px; color:var(--muted); margin-top:4px;">старый, древний</div>
        </div>

        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:24px; margin-bottom:6px;">🐊</div>
          <div class="tp" style="font-weight:800;">kokosila</div>
          <div style="font-size:11px; color:var(--muted); margin-top:4px;">говорить не на toki pona</div>
        </div>
      </div>
    </div>

    <h3>🧩 Схема: kokosila — «говорить по-крокодильски»</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="font-size:13px; color:var(--muted); margin-bottom:10px; text-align:center;">
        Слово-шутка. Буквально — «говорить по-крокодильски» (от англ. <i>crocodile</i>).
      </div>
      <div style="font-size:13px; color:var(--muted); text-align:center;">
        Так в шутку называли тех, кто в компании toki pona говорит на другом языке.
      </div>
      <div style="text-align:center; margin-top:14px;">
        <span class="tp" style="font-weight:700;">o kokosila ala!</span>
        <div style="font-size:12px; color:var(--muted); margin-top:4px;">не говори на другом языке! (говори на toki pona)</div>
      </div>
    </div>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>ni li epiku!</b> — «это круто!»<br>
      <span class="ru">epiku = крутое / эпическое.</span>
    </div>

    <div class="lesson-example">
      <b>o pake e kokosila</b> — «прекрати говорить не на toki pona»<br>
      <span class="ru">pake e = останавливать что-то. kokosila = «говорить по-крокодильски».</span>
    </div>

    <div class="lesson-example">
      <b>mi lukin e kijetesantakalu lon ma</b> — «я вижу енота на улице»<br>
      <span class="ru">kijetesantakalu = енот (самое длинное слово).</span>
    </div>

    <div class="lesson-example">
      <b>mi pu e tenpo ni</b> — «я сейчас читаю Toki Pona»<br>
      <span class="ru">pu = читать официальную книгу.</span>
    </div>

    <div class="lesson-example">
      <b>jan pu li sona mute</b> — «читавший Toki Pona знает много»<br>
      <span class="ru">jan pu = тот, кто читал официальную книгу.</span>
    </div>

    <div class="lesson-example">
      <b>tomo majuna li pona tawa mi</b> — «старый дом мне нравится»<br>
      <span class="ru">majuna = старый, древний.</span>
    </div>

    <div class="lesson-example">
      <b>o pake e utala!</b> — «останови войну!»<br>
      <span class="ru">pake e utala = останавливать войну.</span>
    </div>

    <div class="lesson-example">
      <b>ni li powe</b> — «это фальшивка»<br>
      <span class="ru">powe = ложь, фальшивка.</span>
    </div>

    <div class="lesson-example">
      <b>mi pilin apeja</b> — «я чувствую стыд»<br>
      <span class="ru">apeja = стыд, вина.</span>
    </div>

    <div class="lesson-example">
      <b>n… mi sona ala</b> — «м… я не знаю»<br>
      <span class="ru">n = заполнитель паузы, как «эээ».</span>
    </div>

    <h3>🗣️ Диалог 1: в сообществе</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina pu anu ku?<br>
      <b>jan B:</b> mi pu. taso mi ku ala.<br>
      <b>jan A:</b> sina sona mute la, o pana e sona tawa mi.<br>
      <b>jan B:</b> pona! taso o kokosila ala.
    </div>
    <p><span class="ru">Перевод: «Ты читал Toki Pona или словарь? — Читал книгу. Но словарь не читал. — Если знаешь много, поделись знанием со мной. — Хорошо! Но не говори не на toki pona.»</span></p>

    <h3>🗣️ Диалог 2: о новой игре</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> musi sin li lon. ona li epiku!<br>
      <b>jan B:</b> seme? o toki e ona.<br>
      <b>jan A:</b> ona li musi pi kulupu mute. jan ale li pona.<br>
      <b>jan B:</b> n… mi wile ala. taso pona tawa sina.
    </div>
    <p><span class="ru">Перевод: «Появилась новая игра. Она крутая! — Какая? Расскажи. — Это игра для многих людей. Все хорошие. — М… не хочу. Но спасибо.»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi ku e lipu</span><br>
      <span class="ru">Ошибка: ku уже означает «читать словарь», e не нужен.</span><br>
      <span class="tp">✓ mi ku</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi wile pake kokosila</span><br>
      <span class="ru">Ошибка: kokosila — действие, нужен e, если это объект.</span><br>
      <span class="tp">✓ mi wile pake e kokosila</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ jan majuna li sona mute kin jan</span><br>
      <span class="ru">Ошибка: лишнее «jan» в конце, и kin не ставится после дополнения.</span><br>
      <span class="tp">✓ jan majuna li sona mute kin</span>
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr><td><span style="color:var(--danger)">mi ku e lipu</span></td><td><span class="tp">mi ku</span> (ku уже глагол «читать словарь»)</td></tr>
      <tr><td><span style="color:var(--danger)">mi pu e lipu</span></td><td><span class="tp">mi pu</span></td></tr>
      <tr><td><span style="color:var(--danger)">epiku mute</span> как «очень круто»</td><td><span class="tp">epiku</span> уже означает «круто»; «mute» усилит неуклюже</td></tr>
      <tr><td>путать <span class="tp">pake</span> и <span class="tp">pini</span></td><td><span class="tp">pake</span> = останавливать снаружи; <span class="tp">pini</span> = заканчивать самому</td></tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Что означает <span class="tp">mi pu</span>? <span class="ru">(я читал официальную книгу)</span></li>
      <li>Как сказать «это круто»? <span class="ru">(ni li epiku)</span></li>
      <li>Что значит <span class="tp">o pake e utala</span>? <span class="ru">(останови войну)</span></li>
      <li>Как звучит самое длинное слово toki pona? <span class="ru">(kijetesantakalu)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. <b>epiku</b> — круто; <b>majuna</b> — старый; <b>pake</b> — останавливать.<br>
      2. <b>powe</b> — ложный; <b>apeja</b> — стыд; <b>kokosila</b> — говорить на другом языке.<br>
      3. <b>pu</b> и <b>ku</b> — уникальные мета-глаголы «читать официальные книги».<br>
      4. <b>kijetesantakalu</b> — 16-буквенное слово-енот.<br>
      5. <b>n</b> — заполнитель паузы, как «м…» в русском.

      <div style="margin-top:14px; padding-top:14px; border-top:1px dashed var(--border);">
        <b>Культурная нота:</b> <span class="tp">pu</span> и <span class="tp">ku</span> стали маркерами «свой / чужой» в сообществе. Если человек говорит <span class="tp">mi pu</span> — значит, он читал официальную книгу и погружён в культуру.
      </div>
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">epiku</span>?', opts: ['плохой', 'крутой', 'смешной', 'старый'], ans: 1 },
    { q: 'Что означает <span class="tp">kokosila</span>?', opts: ['говорить по-птичьи', 'говорить не на toki pona', 'молчать', 'петь'], ans: 1 },
    { q: 'Что означает <span class="tp">n</span>?', opts: ['нет', 'да', 'м…, э…', 'и'], ans: 2 },
    { q: 'Что означает <span class="tp">kijetesantakalu</span>?', opts: ['кошка', 'собака', 'енот', 'птица'], ans: 2 },
    { q: 'Что означает <span class="tp">pu</span>?', opts: ['читать Toki Pona (книгу)', 'читать словарь', 'писать', 'говорить'], ans: 0 },
    { q: 'Что означает <span class="tp">ku</span>?', opts: ['читать Toki Pona', 'читать словарь', 'слушать', 'молчать'], ans: 1 },
    { q: 'Что означает <span class="tp">majuna</span>?', opts: ['молодой', 'старый', 'новый', 'большой'], ans: 1 },
    { q: 'Что означает <span class="tp">pake</span>?', opts: ['начинать', 'останавливать', 'продолжать', 'ломать'], ans: 1 },
    { q: 'Что означает <span class="tp">powe</span>?', opts: ['истинный', 'фальшивый', 'сильный', 'слабый'], ans: 1 },
    { q: 'Что означает <span class="tp">apeja</span>?', opts: ['радость', 'стыд', 'злость', 'страх'], ans: 1 }
  ],
  test: [
    { q: 'Как пишется «енот» на toki pona?', opts: ['soweli', 'kijetesantakalu', 'pipi', 'waso'], ans: 1, explain: 'kijetesantakalu — самое длинное слово.' },
    { q: 'Что означает <span class="tp">o kokosila ala!</span>?', opts: ['говори на toki pona!', 'молчи!', 'говори по-английски!', 'пой!'], ans: 0, explain: 'kokosila = говорить не на toki pona.' },
    { q: 'Что означает <span class="tp">mi pilin apeja</span>?', opts: ['я устал', 'я стыжусь', 'я боюсь', 'я зол'], ans: 1, explain: 'apeja = стыд.' },
    { q: 'Введите «это круто»:', type: 'input', ans: 'ni li epiku', explain: 'ni li epiku.' },
    { q: 'Введите «я читаю Toki Pona»:', type: 'input', ans: 'mi pu', explain: 'pu — глагол чтения официальной книги.' },
    { q: 'Введите «старый дом»:', type: 'input', ans: 'tomo majuna', explain: 'tomo majuna.' },
    { q: 'Что означает <span class="tp">jan pu li sona mute</span>?', opts: ['читавший Toki Pona знает много', 'много людей', 'все знают', 'мудрый человек'], ans: 0, explain: 'pu как маркер сообщества.' },
    { q: 'Что означает <span class="tp">pake e utala</span>?', opts: ['начать войну', 'остановить войну', 'продолжить войну', 'закончить мир'], ans: 1, explain: 'pake = остановить.' }
  ],
  builder: [
    { words: ['ni', 'li', 'epiku'], correct: ['ni', 'li', 'epiku'], translation: 'это круто' },
    { words: ['mi', 'lukin', 'e', 'kijetesantakalu'], correct: ['mi', 'lukin', 'e', 'kijetesantakalu'], translation: 'я вижу енота' },
    { words: ['o', 'pake', 'e', 'utala'], correct: ['o', 'pake', 'e', 'utala'], translation: 'останови войну!' },
    { words: ['mi', 'pilin', 'apeja'], correct: ['mi', 'pilin', 'apeja'], translation: 'я чувствую стыд' },
    { words: ['tomo', 'majuna', 'li', 'pona'], correct: ['tomo', 'majuna', 'li', 'pona'], translation: 'старый дом хорош' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 5: kalama en nasa — звук, поэзия, безумие
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp3-l5',
  title: 'kalama en nasa',
  desc: 'звук, поэзия, безумие и высшие смыслы',
  xp: 25,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Слова звука: <span class="tp">kalama</span>, <span class="tp">mu</span></li>
      <li>Слово <span class="tp">kon</span> — «дух, воздух, смысл» в трёх ролях</li>
      <li>Слова <span class="tp">nasa</span> (странный), <span class="tp">pakala</span> (ломать)</li>
      <li>Как <b>pona</b> становится глаголом «чинить»</li>
      <li>Стилистические приёмы: как играть с языком</li>
    </ul>

    <h3>🌍 Стилистика и поэзия</h3>
    <p>toki pona — <b>поэтический язык</b>. Малое количество слов заставляет искать метафоры. Этот урок — о словах, которые делают речь выразительной.</p>

    <h3>📖 Новые слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">kalama</td><td><b>kalama</b></td><td>звук, шум, играть (на инструменте)</td></tr>
      <tr>linja-pona<td class="sp-cell">mu</td><td><b>mu</b></td><td>звук животного (мяу, гав)</td></tr>
      <tr>linja-pona<td class="sp-cell">kon</td><td><b>kon</b></td><td>дух, воздух, смысл</td></tr>
      <tr>linja-pona<td class="sp-cell">sewi</td><td><b>sewi</b></td><td>священный, божественный</td></tr>
      <tr>linja-pona<td class="sp-cell">anpa</td><td><b>anpa</b></td><td>скромный, низкий</td></tr>
      <tr>linja-pona<td class="sp-cell">nasa</td><td><b>nasa</b></td><td>странный, безумный, пьяный</td></tr>
      <tr>linja-pona<td class="sp-cell">pakala</td><td><b>pakala</b></td><td>ошибка, разрушение, ломать</td></tr>
      <tr>linja-pona<td class="sp-cell">ike</td><td><b>ike</b></td><td>сложный, плохой, злой</td></tr>
      <tr>linja-pona<td class="sp-cell">pona</td><td><b>pona</b></td><td>исправлять, чинить, улучшать</td></tr>
      <tr>linja-pona<td class="sp-cell">musi</td><td><b>musi</b></td><td>искусство, творчество, игра</td></tr>
    </table>

    <h3>🧩 Схема: kalama — звук и музыка</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center; font-size:12px; color:var(--muted); margin-bottom:14px; text-transform:uppercase; letter-spacing:1px;">kalama + уточнение = музыкальные термины</div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:24px;">🎵</div>
          <div class="tp" style="font-weight:800; margin-top:6px;">kalama musi</div>
          <div style="font-size:11px; color:var(--muted);">музыка</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:24px;">🎸</div>
          <div class="tp" style="font-weight:800; margin-top:6px;">ilo kalama</div>
          <div style="font-size:11px; color:var(--muted);">инструмент / динамик</div>
        </div>
      </div>

      <div style="text-align:center; margin-top:14px;">
        <span class="tp" style="font-weight:700;">mi kalama e ilo musi</span>
        <div style="font-size:12px; color:var(--muted); margin-top:4px;">я играю на музыкальном инструменте</div>
      </div>
    </div>

    <h3>🧩 Схема: kon — дух, воздух, смысл</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center; font-size:12px; color:var(--muted); margin-bottom:14px; text-transform:uppercase; letter-spacing:1px;">kon покрывает три сферы</div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:10px;">
        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:24px; margin-bottom:4px;">💨</div>
          <div style="font-size:11px; color:var(--muted); margin-bottom:4px;">МАТЕРИАЛЬНОЕ</div>
          <div class="tp" style="font-weight:800;">kon lete</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">холодный воздух</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:24px; margin-bottom:4px;">👻</div>
          <div style="font-size:11px; color:var(--muted); margin-bottom:4px;">ДУХОВНОЕ</div>
          <div class="tp" style="font-weight:800;">kon jan</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">дух человека</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:14px; text-align:center;">
          <div style="font-size:24px; margin-bottom:4px;">📖</div>
          <div style="font-size:11px; color:var(--muted); margin-bottom:4px;">АБСТРАКТНОЕ</div>
          <div class="tp" style="font-weight:800;">kon pi toki</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">смысл речи</div>
        </div>
      </div>
    </div>

    <h3>🧩 Схема: pona vs pakala — чинить и ломать</h3>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:16px 0;">
      <div style="background:var(--card2); border:1px solid var(--green); border-radius:12px; padding:16px; text-align:center;">
        <div style="font-size:30px; margin-bottom:6px;">🔧</div>
        <div class="tp" style="font-weight:800; font-size:18px; color:var(--green);">pona</div>
        <div style="font-size:12px; color:var(--muted); margin-top:4px; margin-bottom:8px;">чинить</div>
        <div class="tp" style="font-size:13px;">mi pona e ijo</div>
        <div style="font-size:12px; color:var(--muted);">я чиню вещь</div>
      </div>
      <div style="background:var(--card2); border:1px solid var(--danger); border-radius:12px; padding:16px; text-align:center;">
        <div style="font-size:30px; margin-bottom:6px;">💥</div>
        <div class="tp" style="font-weight:800; font-size:18px; color:var(--danger);">pakala</div>
        <div style="font-size:12px; color:var(--muted); margin-top:4px; margin-bottom:8px;">ломать</div>
        <div class="tp" style="font-size:13px;">mi pakala e ijo</div>
        <div style="font-size:12px; color:var(--muted);">я ломаю вещь</div>
      </div>
    </div>

    <h3>🧩 Схема: nasa — странный и безумный</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="font-size:13px; color:var(--muted); margin-bottom:12px; text-align:center;">
        nasa — не оскорбление! Это «необычный, странный, нестандартный».
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div style="background:var(--card2); border-radius:10px; padding:12px; text-align:center;">
          <div class="tp" style="font-weight:800;">jan nasa</div>
          <div style="font-size:11px; color:var(--muted); margin-top:4px;">странный человек</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:12px; text-align:center;">
          <div class="tp" style="font-weight:800;">telo nasa</div>
          <div style="font-size:11px; color:var(--muted); margin-top:4px;">алкоголь</div>
        </div>
      </div>
    </div>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>kalama li pona</b> — «звук хорош»<br>
      <span class="ru">kalama = звук (подлежащее). li pona = хорош.</span>
    </div>

    <div class="lesson-example">
      <b>mi kalama e ilo musi</b> — «я играю на инструменте»<br>
      <span class="ru">kalama e = издавать звук чем-то.</span>
    </div>

    <div class="lesson-example">
      <b>kalama musi li pona tawa mi</b> — «музыка мне нравится»<br>
      <span class="ru">kalama musi = «весёлый звук» = музыка.</span>
    </div>

    <div class="lesson-example">
      <b>soweli li mu</b> — «собака лает»<br>
      <span class="ru">mu = звук животного (гав, мяу).</span>
    </div>

    <div class="lesson-example">
      <b>jan sewi li lon kon</b> — «святой человек в духе»<br>
      <span class="ru">kon = дух (духовное значение).</span>
    </div>

    <div class="lesson-example">
      <b>mi anpa tawa sina</b> — «я скромен перед тобой»<br>
      <span class="ru">anpa tawa = низкий перед кем-то.</span>
    </div>

    <div class="lesson-example">
      <b>tomo ni li nasa</b> — «этот дом странный»<br>
      <span class="ru">nasa = странный.</span>
    </div>

    <div class="lesson-example">
      <b>pakala!</b> — «чёрт! / караул!»<br>
      <span class="ru">Восклицание при неудаче.</span>
    </div>

    <div class="lesson-example">
      <b>mi pona e ijo pakala</b> — «я чиню сломанную вещь»<br>
      <span class="ru">pona e = чинить что-то.</span>
    </div>

    <div class="lesson-example">
      <b>kon pi toki ni li suli</b> — «смысл этой речи важен»<br>
      <span class="ru">kon pi toki = смысл речи (абстрактное значение).</span>
    </div>

    <h3>🗣️ Диалог 1: о музыке</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina ken kalama e ilo seme?<br>
      <b>jan B:</b> mi kalama e ilo kalama mute. taso mi pona lili.<br>
      <b>jan A:</b> pona! o kalama!<br>
      <b>jan B:</b> tenpo ni la, mi wile ala. taso tenpo kama la, mi kalama.
    </div>
    <p><span class="ru">Перевод: «На каком инструменте ты умеешь играть? — Я играю на многих инструментах. Но неважно. — Хорошо! Играй! — Сейчас не хочу. Но потом поиграю.»</span></p>

    <h3>🗣️ Диалог 2: после неудачи</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> pakala! mi pakala e ijo sina!<br>
      <b>jan B:</b> o pilin ike ala. mi ken pona e ona.<br>
      <b>jan A:</b> sina pona! taso mi pilin apeja.<br>
      <b>jan B:</b> o pona e pilin sina kin.
    </div>
    <p><span class="ru">Перевод: «Чёрт! Я сломал твою вещь! — Не расстраивайся. Я могу её починить. — Ты добрый! Но мне стыдно. — Приведи в порядок и свои чувства тоже.»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi kalama ilo</span><br>
      <span class="ru">Ошибка: kalama переходный, нужен e.</span><br>
      <span class="tp">✓ mi kalama e ilo</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi pona ijo</span><br>
      <span class="ru">Ошибка: в значении «чинить» — переходный глагол, нужен e.</span><br>
      <span class="tp">✓ mi pona e ijo</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ nasa li jan</span><br>
      <span class="ru">Ошибка: nasa — модификатор, а не подлежащее. Правильнее: jan nasa.</span><br>
      <span class="tp">✓ jan nasa li lon</span> (странный человек здесь)
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr><td><span style="color:var(--danger)">mi kalama ilo</span></td><td><span class="tp">mi kalama e ilo</span></td></tr>
      <tr><td><span style="color:var(--danger)">mi pona ijo</span></td><td><span class="tp">mi pona e ijo</span></td></tr>
      <tr><td>путать <span class="tp">kalama</span> (звук) и <span class="tp">mu</span> (звук животного)</td><td><span class="tp">soweli li mu</span> (собака лает), а не <span style="color:var(--danger)">soweli li kalama</span></td></tr>
      <tr><td>использовать <span class="tp">sewi</span> только как «верх»</td><td>sewi = ещё и «священный»: <span class="tp">jan sewi</span></td></tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «музыка»? <span class="ru">(kalama musi)</span></li>
      <li>Что означает <span class="tp">pilin monsuta</span>? <span class="ru">(чувствовать страх)</span></li>
      <li>Как сказать «я чиню вещь»? <span class="ru">(mi pona e ijo)</span></li>
      <li>Что такое <span class="tp">telo nasa</span>? <span class="ru">(алкоголь)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. <b>kalama</b> — звук; <span class="tp">kalama musi</span> = музыка; <span class="tp">ilo kalama</span> = инструмент.<br>
      2. <b>mu</b> — звук животного.<br>
      3. <b>kon</b> — воздух / дух / смысл (три значения!).<br>
      4. <b>nasa</b> — странный, необычный; <span class="tp">telo nasa</span> = алкоголь.<br>
      5. <b>pona</b> и <b>pakala</b> — антонимы: чинить и ломать.
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">kalama</span>?', opts: ['свет', 'звук', 'тень', 'вкус'], ans: 1 },
    { q: 'Что означает <span class="tp">mu</span>?', opts: ['мычать', 'звук животного', 'говорить', 'шептать'], ans: 1 },
    { q: 'Что означает <span class="tp">kon</span>?', opts: ['вода', 'дух, воздух, смысл', 'земля', 'огонь'], ans: 1 },
    { q: 'Что означает <span class="tp">sewi</span>?', opts: ['низкий', 'священный, верхний', 'левый', 'правый'], ans: 1 },
    { q: 'Что означает <span class="tp">anpa</span>?', opts: ['высокий', 'скромный, низкий', 'громкий', 'тихий'], ans: 1 },
    { q: 'Что означает <span class="tp">nasa</span>?', opts: ['нормальный', 'странный, безумный', 'красивый', 'простой'], ans: 1 },
    { q: 'Что означает <span class="tp">pakala</span>?', opts: ['строить', 'ломать, ошибка', 'чинить', 'играть'], ans: 1 },
    { q: 'Как сказать «музыка»?', opts: ['kalama musi', 'musi kalama', 'ilo kalama', 'kalama sina'], ans: 0 },
    { q: 'Что означает <span class="tp">mi pona e ijo</span>?', opts: ['я хороший', 'я чиню вещь', 'я имею вещь', 'я люблю вещь'], ans: 1 },
    { q: 'Что означает <span class="tp">jan nasa</span>?', opts: ['больной человек', 'странный человек', 'умный человек', 'святой'], ans: 1 }
  ],
  test: [
    { q: 'Что означает <span class="tp">kalama musi</span>?', opts: ['музыка', 'танец', 'речь', 'крик'], ans: 0, explain: 'kalama musi = весёлый звук = музыка.' },
    { q: 'Что означает <span class="tp">mi kalama e ilo musi</span>?', opts: ['я играю на инструменте', 'я слушаю музыку', 'я пою', 'я танцую'], ans: 0, explain: 'kalama e = издавать звук чем-то.' },
    { q: 'Что означает <span class="tp">kon pi toki</span>?', opts: ['звук речи', 'смысл речи', 'дыхание', 'голос'], ans: 1, explain: 'kon = смысл.' },
    { q: 'Введите «музыка хорошая»:', type: 'input', ans: 'kalama musi li pona', explain: 'kalama musi li pona.' },
    { q: 'Введите «я чиню вещь»:', type: 'input', ans: 'mi pona e ijo', explain: 'pona e = чинить что-то.' },
    { q: 'Введите «странный человек»:', type: 'input', ans: 'jan nasa', explain: 'jan nasa.' },
    { q: 'Что означает <span class="tp">pakala!</span>?', opts: ['ура!', 'чёрт! / караул!', 'привет!', 'тихо!'], ans: 1, explain: 'pakala — восклицание при неудаче.' },
    { q: 'Что означает <span class="tp">telo nasa</span>?', opts: ['странная вода', 'алкоголь', 'яд', 'лекарство'], ans: 1, explain: 'telo nasa = безумная вода = алкоголь.' }
  ],
  builder: [
    { words: ['kalama', 'musi', 'li', 'pona'], correct: ['kalama', 'musi', 'li', 'pona'], translation: 'музыка хорошая' },
    { words: ['mi', 'pona', 'e', 'ijo', 'pakala'], correct: ['mi', 'pona', 'e', 'ijo', 'pakala'], translation: 'я чиню сломанную вещь' },
    { words: ['jan', 'nasa', 'li', 'toki'], correct: ['jan', 'nasa', 'li', 'toki'], translation: 'странный человек говорит' },
    { words: ['soweli', 'li', 'mu'], correct: ['soweli', 'li', 'mu'], translation: 'собака лает' },
    { words: ['musi', 'li', 'pona', 'pali', 'li', 'pona', 'kin'], correct: ['musi', 'li', 'pona', 'pali', 'li', 'pona', 'kin'], translation: 'игра хороша, работа тоже хороша' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 6: nasin pi toki — финальные служебные слова
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp3-l6',
  title: 'nasin pi toki',
  desc: 'финальные служебные слова и предлоги',
  xp: 25,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Все <b>шесть предлогов</b> toki pona: <span class="tp">lon, tawa, tan, kepeken, sama, poka</span></li>
      <li>Как отвечать на шесть вопросов через предлоги</li>
      <li>Слова <span class="tp">taso</span> («но, только») и <span class="tp">ante</span> («иначе»)</li>
      <li>Итоговую сводку всей грамматики toki pona</li>
    </ul>

    <h3>🌍 Финал курса</h3>
    <p>Этот урок завершает грамматику toki pona. Мы соберём <b>все предлоги</b> и <b>служебные частицы</b> в одну систему.</p>

    <h3>📖 Финальные слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">tan</td><td><b>tan</b></td><td>от, из-за, причина</td></tr>
      <tr>linja-pona<td class="sp-cell">kepeken</td><td><b>kepeken</b></td><td>используя, с помощью</td></tr>
      <tr>linja-pona<td class="sp-cell">sama</td><td><b>sama</b></td><td>такой же, как, подобный</td></tr>
      <tr>linja-pona<td class="sp-cell">poka</td><td><b>poka</b></td><td>с, вместе, рядом</td></tr>
      <tr>linja-pona<td class="sp-cell">tawa</td><td><b>tawa</b></td><td>к, для, в направлении</td></tr>
      <tr>linja-pona<td class="sp-cell">lon</td><td><b>lon</b></td><td>в, на, быть расположенным</td></tr>
      <tr>linja-pona<td class="sp-cell">taso</td><td><b>taso</b></td><td>только, но</td></tr>
      <tr>linja-pona<td class="sp-cell">ante</td><td><b>ante</b></td><td>иначе, в противном случае</td></tr>
    </table>

    <h3>🧩 Схема: шесть предлогов и шесть вопросов</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center; font-size:12px; color:var(--muted); margin-bottom:14px; text-transform:uppercase; letter-spacing:1px;">В toki pona ровно шесть предлогов</div>

      <table style="margin:0;">
        <tr><th>Предлог</th><th>Вопрос</th><th>Пример</th></tr>
        <tr><td><b>lon</b></td><td>где?</td><td><span class="tp">mi lon tomo</span> — я в доме</td></tr>
        <tr><td><b>tawa</b></td><td>кому? куда?</td><td><span class="tp">mi tawa sina</span> — я к тебе</td></tr>
        <tr><td><b>tan</b></td><td>откуда? почему?</td><td><span class="tp">mi kama tan ma</span> — я пришёл из страны</td></tr>
        <tr><td><b>kepeken</b></td><td>чем?</td><td><span class="tp">mi pali kepeken ilo</span> — я работаю инструментом</td></tr>
        <tr><td><b>sama</b></td><td>как?</td><td><span class="tp">ona li pona sama sina</span> — он хорош как ты</td></tr>
        <tr><td><b>poka</b></td><td>с кем?</td><td><span class="tp">mi moku poka sina</span> — я ем с тобой</td></tr>
      </table>
    </div>

    <div class="lesson-tip">
      <b>Правило предлогов:</b> они стоят <b>между глаголом и объектом</b>. После предлога <b>нет</b> e. <span class="tp">mi tawa tomo</span> ✓ (не «mi tawa e tomo»).
    </div>

    <h3>🧩 Схема: tan — откуда и почему</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <div style="background:var(--card2); border-radius:10px; padding:14px;">
          <div style="font-size:11px; color:var(--blue); font-weight:800; margin-bottom:6px;">ОТКУДА</div>
          <div class="tp" style="font-weight:700;">mi kama tan tomo</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">я пришёл из дома</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:14px;">
          <div style="font-size:11px; color:var(--danger); font-weight:800; margin-bottom:6px;">ПОЧЕМУ</div>
          <div class="tp" style="font-weight:700;">mi pilin pona tan sina</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">я счастлив из-за тебя</div>
        </div>
      </div>
    </div>

    <h3>🧩 Схема: kepeken — инструмент</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center;">
        <div class="tp" style="font-weight:800; font-size:16px;">mi pali kepeken ilo</div>
        <div style="font-size:12px; color:var(--muted); margin-top:4px;">я работаю инструментом</div>

        <div style="margin-top:14px;">
          <span class="tp" style="font-weight:700;">mi toki kepeken toki pona</span>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">я говорю на toki pona</div>
        </div>

        <div style="margin-top:14px;">
          <span class="tp" style="font-weight:700;">mi tawa kepeken tomo tawa</span>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">я еду на машине (движущемся доме)</div>
        </div>
      </div>
    </div>

    <h3>🧩 Схема: tawa — направление и цель</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div style="background:var(--card2); border-radius:10px; padding:12px; text-align:center;">
          <div class="tp" style="font-weight:800;">mi tawa tomo</div>
          <div style="font-size:11px; color:var(--muted); margin-top:4px;">я иду домой (направление)</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:12px; text-align:center;">
          <div class="tp" style="font-weight:800;">ni li pona tawa mi</div>
          <div style="font-size:11px; color:var(--muted); margin-top:4px;">это хорошо для меня (цель)</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:12px; text-align:center;">
          <div class="tp" style="font-weight:800;">mi toki tawa sina</div>
          <div style="font-size:11px; color:var(--muted); margin-top:4px;">я говорю тебе (кому)</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:12px; text-align:center;">
          <div class="tp" style="font-weight:800;">ona li tawa noka</div>
          <div style="font-size:11px; color:var(--muted); margin-top:4px;">он идёт пешком (ногами)</div>
        </div>
      </div>
    </div>

    <h3>🧩 Схема: sama — подобие</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center;">
        <div class="tp" style="font-weight:800; font-size:16px;">ona li pona sama sina</div>
        <div style="font-size:12px; color:var(--muted); margin-top:4px;">он хорош, как ты</div>

        <div style="margin-top:14px;">
          <span class="tp" style="font-weight:700;">sama la, mi pilin pona</span>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">так же и я чувствую хорошо</div>
        </div>
      </div>
    </div>

    <h3>🧩 Схема: полная сводка вопросов</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <table style="margin:0;">
        <tr><th>Вопрос</th><th>Форма</th><th>Перевод</th></tr>
        <tr><td>Кто?</td><td><span class="tp">seme li …?</span></td><td>кто делает?</td></tr>
        <tr><td>Что?</td><td><span class="tp">… e seme?</span></td><td>что (объект)?</td></tr>
        <tr><td>Где?</td><td><span class="tp">… lon seme?</span></td><td>где находишься?</td></tr>
        <tr><td>Куда?</td><td><span class="tp">… tawa seme?</span></td><td>куда идёшь?</td></tr>
        <tr><td>Откуда?</td><td><span class="tp">… tan seme?</span></td><td>откуда пришёл?</td></tr>
        <tr><td>Почему?</td><td><span class="tp">… tan seme?</span></td><td>причина?</td></tr>
        <tr><td>Чем?</td><td><span class="tp">… kepeken seme?</span></td><td>с помощью чего?</td></tr>
        <tr><td>Как?</td><td><span class="tp">… sama seme?</span></td><td>каким образом?</td></tr>
        <tr><td>С кем?</td><td><span class="tp">… poka seme?</span></td><td>в компании кого?</td></tr>
        <tr><td>Когда?</td><td><span class="tp">tenpo seme la …?</span></td><td>в какое время?</td></tr>
      </table>
    </div>

    <h3>📝 Финальные примеры</h3>

    <div class="lesson-example">
      <b>mi kama tan ma Losi</b> — «я приехал из России»<br>
      <span class="ru">tan = из (источник).</span>
    </div>

    <div class="lesson-example">
      <b>mi toki kepeken toki pona</b> — «я говорю на toki pona»<br>
      <span class="ru">kepeken = с помощью чего.</span>
    </div>

    <div class="lesson-example">
      <b>ona li pona sama sina</b> — «он хорош, как ты»<br>
      <span class="ru">sama = как, подобно.</span>
    </div>

    <div class="lesson-example">
      <b>mi moku poka jan pona mi</b> — «я ем со своим другом»<br>
      <span class="ru">poka = в компании кого-то.</span>
    </div>

    <div class="lesson-example">
      <b>ni li pona tawa mi</b> — «это хорошо для меня»<br>
      <span class="ru">tawa mi = для меня (цель).</span>
    </div>

    <div class="lesson-example">
      <b>lon tenpo ni la, mi lon tomo mi</b> — «сейчас я в своём доме»<br>
      <span class="ru">lon tenpo ni la = в это время. lon tomo mi = в моём доме.</span>
    </div>

    <div class="lesson-example">
      <b>taso mi wile moku</b> — «но я хочу есть»<br>
      <span class="ru">taso в начале = «но».</span>
    </div>

    <div class="lesson-example">
      <b>ante la, mi tawa</b> — «иначе я уйду»<br>
      <span class="ru">ante la = «в противном случае».</span>
    </div>

    <h3>🗣️ Диалог 1: путешествие</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina kama tan ma seme?<br>
      <b>jan B:</b> mi kama tan ma Losi.<br>
      <b>jan A:</b> sina kama kepeken seme?<br>
      <b>jan B:</b> mi kama kepeken tomo tawa. taso tenpo kama la, mi wile kama kepeken noka.
    </div>
    <p><span class="ru">Перевод: «Откуда ты приехал? — Из России. — Как ты приехал? — На машине. Но в будущем хочу прийти пешком.»</span></p>

    <h3>🗣️ Диалог 2: общение</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina toki kepeken toki seme?<br>
      <b>jan B:</b> mi toki kepeken toki pona. sina kin?<br>
      <b>jan A:</b> lon. mi toki kepeken toki pona sama sina.<br>
      <b>jan B:</b> pona! ni li pona tawa mi.
    </div>
    <p><span class="ru">Перевод: «На каком языке ты говоришь? — На toki pona. Ты тоже? — Да. Я говорю на toki pona так же, как ты. — Хорошо! Это радует меня.»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi tawa e tomo</span><br>
      <span class="ru">Ошибка: после предлогов не ставится e.</span><br>
      <span class="tp">✓ mi tawa tomo</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi pali tan ilo</span> в значении «работаю инструментом»<br>
      <span class="ru">Ошибка: tan = «из-за, от», а инструмент — kepeken.</span><br>
      <span class="tp">✓ mi pali kepeken ilo</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ sina sama seme?</span> (в значении «откуда ты?»)<br>
      <span class="ru">Ошибка: sama seme = «как» (способ), а «откуда» — tan seme.</span><br>
      <span class="tp">✓ sina kama tan seme?</span>
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr><td><span style="color:var(--danger)">mi tawa e tomo</span></td><td><span class="tp">mi tawa tomo</span></td></tr>
      <tr><td><span style="color:var(--danger)">mi pali tan ilo</span></td><td><span class="tp">mi pali kepeken ilo</span></td></tr>
      <tr><td>путать <span class="tp">tan seme?</span> и <span class="tp">kepeken seme?</span></td><td>tan = откуда/почему; kepeken = чем</td></tr>
      <tr><td>ставить <span class="tp">lon</span> там, где нужен <span class="tp">tawa</span></td><td>lon = где; tawa = куда</td></tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «я пришёл из дома»? <span class="ru">(mi kama tan tomo)</span></li>
      <li>Как сказать «я говорю с тобой»? <span class="ru">(mi toki poka sina)</span></li>
      <li>Как сказать «это для меня хорошо»? <span class="ru">(ni li pona tawa mi)</span></li>
      <li>Чем отличается tan от kepeken? <span class="ru">(от/причина vs инструмент)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. В toki pona <b>шесть предлогов</b>: lon, tawa, tan, kepeken, sama, poka.<br>
      2. <b>lon</b> — где; <b>tawa</b> — куда / кому / для кого.<br>
      3. <b>tan</b> — откуда и почему (два значения!).<br>
      4. <b>kepeken</b> — с помощью чего (инструмент).<br>
      5. <b>sama</b> — как, подобно; <b>poka</b> — в компании.<br>
      6. <b>taso</b> — «но» или «только»; <b>ante la</b> — «иначе».
    </div>

    <h3>🎉 Поздравляем! Курс завершён!</h3>
    <div class="lesson-tip">
      <b>Вы закончили весь курс toki pona.</b><br><br>
      Теперь вы знаете:
      <ul style="margin-top:10px;">
        <li><b>137 слов</b> — весь словарь nimi pu + nimi ku suli</li>
        <li><b>Все частицы</b>: li, e, la, pi, en, anu, o, seme, ni, ala</li>
        <li><b>Все шесть предлогов</b>: lon, tawa, tan, kepeken, sama, poka</li>
        <li><b>Структуры</b>: S + li + V + e + O, la-обстоятельства, pi-группировка</li>
        <li><b>Числа</b>: wan, tu, mute, ale + порядковые через nanpa</li>
        <li><b>Вопросы</b>: seme в шести позициях</li>
        <li><b>Отрицание</b>: ala в трёх позициях</li>
      </ul>

      <div style="margin-top:14px; padding-top:14px; border-top:1px dashed var(--border);">
        <b>Что дальше?</b> Читайте оригинальные тексты на toki pona, пишите собственные, общайтесь с сообществом. Язык <b>живой</b> — и он ваш. <span class="tp">pona tawa sina!</span> 🌍
      </div>
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">tan</span>?', opts: ['к', 'от, из-за', 'с', 'в'], ans: 1 },
    { q: 'Что означает <span class="tp">kepeken</span>?', opts: ['для', 'с помощью', 'от', 'в'], ans: 1 },
    { q: 'Что означает <span class="tp">sama</span>?', opts: ['другой', 'такой же, как', 'близкий', 'далёкий'], ans: 1 },
    { q: 'Что означает <span class="tp">tawa</span>?', opts: ['от', 'к, для', 'с', 'в'], ans: 1 },
    { q: 'Что означает <span class="tp">lon</span>?', opts: ['от', 'в, на', 'с', 'для'], ans: 1 },
    { q: 'Как спросить «где ты?»', opts: ['sina lon seme?', 'sina tawa seme?', 'sina tan seme?', 'sina poka seme?'], ans: 0 },
    { q: 'Как спросить «почему?»', opts: ['lon seme?', 'tan seme?', 'kepeken seme?', 'tawa seme?'], ans: 1 },
    { q: 'Как спросить «с кем?»', opts: ['lon seme?', 'tan seme?', 'poka seme?', 'tawa seme?'], ans: 2 },
    { q: 'Как сказать «я говорю на toki pona»?', opts: ['mi toki kepeken toki pona', 'mi toki lon toki pona', 'mi toki tawa toki pona', 'mi toki tan toki pona'], ans: 0 },
    { q: 'Как сказать «я иду домой»?', opts: ['mi tawa tomo', 'mi lon tomo', 'mi tan tomo', 'mi poka tomo'], ans: 0 }
  ],
  test: [
    { q: 'Сколько предлогов в toki pona?', opts: ['3', '6', '10', '15'], ans: 1, explain: 'lon, tawa, tan, kepeken, sama, poka.' },
    { q: 'После предлога нужна частица e?', opts: ['да', 'нет', 'только с tawa', 'только с lon'], ans: 1, explain: 'Предлог заменяет e.' },
    { q: 'Что означает <span class="tp">tan seme?</span>', opts: ['откуда?', 'почему?', 'и то и другое', 'куда?'], ans: 2, explain: 'tan = причина и источник.' },
    { q: 'Введите «я пришёл из дома»:', type: 'input', ans: 'mi kama tan tomo', explain: 'tan = из, от.' },
    { q: 'Введите «я говорю с тобой»:', type: 'input', ans: 'mi toki poka sina', explain: 'poka = с.' },
    { q: 'Введите «это для меня хорошо»:', type: 'input', ans: 'ni li pona tawa mi', explain: 'tawa mi = для меня.' },
    { q: 'Что означает <span class="tp">kepeken seme?</span>', opts: ['чем? как?', 'где?', 'откуда?', 'с кем?'], ans: 0, explain: 'kepeken = инструмент.' },
    { q: 'Что означает <span class="tp">sama la, mi pilin pona</span>?', opts: ['так же и я чувствую хорошо', 'я другой', 'я не понимаю', 'я устал'], ans: 0, explain: 'sama la = так же / аналогично.' }
  ],
  builder: [
    { words: ['mi', 'kama', 'tan', 'tomo'], correct: ['mi', 'kama', 'tan', 'tomo'], translation: 'я пришёл из дома' },
    { words: ['mi', 'toki', 'kepeken', 'toki', 'pona'], correct: ['mi', 'toki', 'kepeken', 'toki', 'pona'], translation: 'я говорю на toki pona' },
    { words: ['ni', 'li', 'pona', 'tawa', 'mi'], correct: ['ni', 'li', 'pona', 'tawa', 'mi'], translation: 'это хорошо для меня' },
    { words: ['mi', 'moku', 'poka', 'jan', 'pona', 'mi'], correct: ['mi', 'moku', 'poka', 'jan', 'pona', 'mi'], translation: 'я ем со своим другом' },
    { words: ['lon', 'tenpo', 'ni', 'la', 'mi', 'lon', 'tomo'], correct: ['lon', 'tenpo', 'ni', 'la', 'mi', 'lon', 'tomo'], translation: 'сейчас я дома' }
  ]
}

];