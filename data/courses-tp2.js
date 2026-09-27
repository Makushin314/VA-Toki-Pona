/* ============================================================
   VA TOKI PONA — КУРС NANPA TU (7 уроков)
   50 слов, углублённая грамматика частиц и служебных слов
   Экосистема Vulpeto Abeleto · 2026
   ============================================================ */

window.LESSONS_TP2 = [

/* ═══════════════════════════════════════════════════════════
   УРОК 1: ilo pi toki — семь служебных частиц
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp2-l1',
  title: 'ilo pi toki',
  desc: 'частицы la, pi, en, anu, o, seme, ni',
  xp: 20,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Семь ключевых частиц: <span class="tp">la</span>, <span class="tp">pi</span>, <span class="tp">en</span>, <span class="tp">anu</span>, <span class="tp">o</span>, <span class="tp">seme</span>, <span class="tp">ni</span></li>
      <li>Как ставить обстоятельство перед главной частью с <b>la</b></li>
      <li>Как группировать модификаторы с <b>pi</b></li>
      <li>Как соединять подлежащие союзом <b>en</b> и задавать альтернативу с <b>anu</b></li>
      <li>Как строить повеление и обращение через <b>o</b></li>
      <li>Как задавать вопросы с <b>seme</b></li>
    </ul>

    <h3>🌍 Зачем нужны частицы</h3>
    <p>В toki pona <b>мало слов</b>, но <b>много служебных частиц</b>. Именно они определяют, кто на кого действует, где главное, а где уточнение. В этом уроке — <b>семь</b> самых важных.</p>

    <h3>📖 Новые частицы</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Функция</th><th>Пример</th></tr>
      <tr>linja-pona<td class="sp-cell">la</td><td><b>la</b></td><td>контекст</td><td><span class="tp">tenpo ni la, mi moku</span></td></tr>
      <tr>linja-pona<td class="sp-cell">pi</td><td><b>pi</b></td><td>группировка</td><td><span class="tp">tomo pi telo nasa</span></td></tr>
      <tr>linja-pona<td class="sp-cell">en</td><td><b>en</b></td><td>и (подлежащие)</td><td><span class="tp">mi en sina</span></td></tr>
      <tr>linja-pona<td class="sp-cell">anu</td><td><b>anu</b></td><td>или</td><td><span class="tp">kili anu pan</span></td></tr>
      <tr>linja-pona<td class="sp-cell">o</td><td><b>o</b></td><td>обращение, повеление</td><td><span class="tp">sina o kama</span></td></tr>
      <tr>linja-pona<td class="sp-cell">seme</td><td><b>seme</b></td><td>вопрос</td><td><span class="tp">sina moku e seme?</span></td></tr>
      <tr>linja-pona<td class="sp-cell">ni</td><td><b>ni</b></td><td>это, то</td><td><span class="tp">ni li pona</span></td></tr>
    </table>

    <h3>🧩 Схема: la — контекст впереди</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="font-size:12px; color:var(--muted); margin-bottom:12px; text-transform:uppercase; letter-spacing:1px; text-align:center;">la отделяет обстоятельство</div>

      <div style="display:flex; justify-content:center; align-items:center; gap:10px; flex-wrap:wrap; font-size:14px;">
        <span style="background:var(--blue); color:#fff; padding:8px 14px; border-radius:8px; font-weight:800;">обстоятельство</span>
        <span style="color:var(--muted); font-size:18px;">+</span>
        <span style="background:var(--green); color:#fff; padding:8px 14px; border-radius:8px; font-weight:800;">la</span>
        <span style="color:var(--muted); font-size:18px;">→</span>
        <span style="background:var(--purple); color:#fff; padding:8px 14px; border-radius:8px; font-weight:800;">главная часть</span>
      </div>

      <div style="text-align:center; margin-top:14px; font-size:14px;">
        <span class="tp" style="font-weight:700;">tenpo ni <span style="color:var(--green);">la</span>, mi moku</span>
        <span style="color:var(--muted);"> → сейчас я ем</span>
      </div>
    </div>

    <h4>Что может стоять перед la</h4>
    <table>
      <tr><th>Тип</th><th>Пример</th><th>Перевод</th></tr>
      <tr><td>Время</td><td><span class="tp">tenpo ni la, mi moku</span></td><td>сейчас я ем</td></tr>
      <tr><td>Место</td><td><span class="tp">lon tomo la, mi lape</span></td><td>дома я сплю</td></tr>
      <tr><td>Условие</td><td><span class="tp">sina pona la, mi pona</span></td><td>если ты хороший, я хороший</td></tr>
      <tr><td>Причина</td><td><span class="tp">tan ni la, mi tawa</span></td><td>поэтому я ухожу</td></tr>
    </table>

    <h3>🧩 Схема: pi — группировка</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
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
          <div style="font-size:13px; margin-top:8px;">бар</div>
        </div>
      </div>
    </div>

    <h4>Когда pi нужна</h4>
    <p>Если модификаторов <b>2 и больше</b> и они работают как <b>единая группа</b> — ставь <span class="tp">pi</span>.</p>

    <table>
      <tr><th>Без pi</th><th>С pi</th></tr>
      <tr><td><span class="tp">jan pona mi</span> — мой друг</td><td><span class="tp">jan pi pona mi</span> — человек, которого я люблю</td></tr>
      <tr><td><span class="tp">ilo toki pona</span> — хороший телефон</td><td><span class="tp">ilo pi toki pona</span> — инструмент языка toki pona</td></tr>
    </table>

    <h3>🧩 Схема: en и anu</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
        <div>
          <div style="text-align:center; font-size:11px; color:var(--green); font-weight:800; margin-bottom:8px;">EN — «И»</div>
          <div style="background:var(--card2); border-radius:8px; padding:12px; text-align:center;">
            <div class="tp" style="font-weight:700;">mi <span style="color:var(--green);">en</span> sina li pona</div>
            <div style="font-size:12px; color:var(--muted); margin-top:4px;">я и ты хорошие</div>
          </div>
        </div>
        <div>
          <div style="text-align:center; font-size:11px; color:var(--gold); font-weight:800; margin-bottom:8px;">ANU — «ИЛИ»</div>
          <div style="background:var(--card2); border-radius:8px; padding:12px; text-align:center;">
            <div class="tp" style="font-weight:700;">kili <span style="color:var(--gold);">anu</span> pan li pona</div>
            <div style="font-size:12px; color:var(--muted); margin-top:4px;">фрукт или хлеб хороши</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-tip">
      <b>en</b> — только между подлежащими! Для объектов используется <b>e … e …</b>: <span class="tp">mi moku e kili e pan</span> — «я ем фрукт и хлеб».
    </div>

    <h3>🧩 Схема: o — три функции</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <table style="margin:0;">
        <tr><th>Функция</th><th>Структура</th><th>Пример</th></tr>
        <tr><td>Повеление</td><td>подлежащее + o + действие</td><td><span class="tp">sina o kama</span> — ты приди</td></tr>
        <tr><td>Обращение</td><td>имя + o</td><td><span class="tp">jan Lisa o!</span> — Лиза!</td></tr>
        <tr><td>Пожелание</td><td>o + действие</td><td><span class="tp">o pona!</span> — пусть будет хорошо</td></tr>
      </table>
    </div>

    <h3>🧩 Схема: seme — вопрос</h3>
    <p><b>seme</b> ставится туда, где было бы неизвестное слово. Это как знак вопроса — только на месте слова.</p>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="display:grid; grid-template-columns:1fr; gap:8px;">
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span class="tp" style="font-weight:700;">seme li moku?</span>
          <span style="color:var(--muted);"> → кто ест?</span>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span class="tp" style="font-weight:700;">sina moku e seme?</span>
          <span style="color:var(--muted);"> → что ты ешь?</span>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span class="tp" style="font-weight:700;">sina lon seme?</span>
          <span style="color:var(--muted);"> → где ты?</span>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span class="tp" style="font-weight:700;">sina pona tan seme?</span>
          <span style="color:var(--muted);"> → почему ты хороший?</span>
        </div>
      </div>
    </div>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>tenpo pini la, mi lili</b> — «раньше я был маленьким»<br>
      <span class="ru">tenpo pini = прошедшее время. la отделяет обстоятельство. mi lili = я маленький.</span>
    </div>

    <div class="lesson-example">
      <b>mi en ona li moku</b> — «я и он едим»<br>
      <span class="ru">en соединяет подлежащие. li обязательна, потому что подлежащее составное.</span>
    </div>

    <div class="lesson-example">
      <b>sina o kama!</b> — «ты, приди!»<br>
      <span class="ru">o после подлежащего — повеление.</span>
    </div>

    <div class="lesson-example">
      <b>sina moku e seme?</b> — «что ты ешь?»<br>
      <span class="ru">seme на месте объекта.</span>
    </div>

    <div class="lesson-example">
      <b>tomo pi telo nasa li pona</b> — «бар хороший»<br>
      <span class="ru">pi группирует «странная вода» = алкоголь.</span>
    </div>

    <div class="lesson-example">
      <b>mi moku e kili e pan</b> — «я ем фрукт и хлеб»<br>
      <span class="ru">e … e … — для объектов (не en!).</span>
    </div>

    <h3>🗣️ Диалог 1: в баре</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina wile e telo seme?<br>
      <b>jan B:</b> mi wile e telo pi nasa ala.<br>
      <b>jan A:</b> sina wile ala e telo nasa?<br>
      <b>jan B:</b> ala. taso mi wile e telo kili.
    </div>
    <p><span class="ru">Перевод: «Какой напиток ты хочешь? — Я хочу неалкогольный напиток. — Ты не хочешь алкоголя? — Нет. Но я хочу сок.»</span></p>

    <h3>🗣️ Диалог 2: разговор об учёбе</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> tenpo seme la, sina kama sona e toki pona?<br>
      <b>jan B:</b> tenpo pini la, mi open. taso mi sona lili.<br>
      <b>jan A:</b> sina wile sona mute la, o kama poka mi.<br>
      <b>jan B:</b> pona! mi en sina li kama sona kune.
    </div>
    <p><span class="ru">Перевод: «Когда ты начал учить toki pona? — Я начал давно. Но знаю мало. — Если хочешь знать больше, приходи ко мне. — Хорошо! Я и ты будем учиться вместе.»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi en sina pona</span><br>
      <span class="ru">Ошибка: при составном подлежащем нужна li.</span><br>
      <span class="tp">✓ mi en sina li pona</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi moku en kili</span><br>
      <span class="ru">Ошибка: en только для подлежащих. Для объектов — e.</span><br>
      <span class="tp">✓ mi moku e kili</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ tenpo ni mi moku</span><br>
      <span class="ru">Ошибка: обстоятельство нужно отделить частицей la.</span><br>
      <span class="tp">✓ tenpo ni la, mi moku</span>
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr><td><span style="color:var(--danger)">mi en sina pona</span></td><td><span class="tp">mi en sina li pona</span></td></tr>
      <tr><td><span style="color:var(--danger)">mi moku en kili</span></td><td><span class="tp">mi moku e kili</span></td></tr>
      <tr><td><span style="color:var(--danger)">tenpo ni mi moku</span></td><td><span class="tp">tenpo ni la, mi moku</span></td></tr>
      <tr><td>ставить pi без необходимости</td><td>pi только для группировки: <span class="tp">tomo pi telo nasa</span></td></tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «я и он едим»? <span class="ru">(mi en ona li moku)</span></li>
      <li>Как спросить «что ты хочешь»? <span class="ru">(sina wile e seme?)</span></li>
      <li>Чем отличается «jan pona mi» от «jan pi pona mi»? <span class="ru">(мой друг vs человек, которого я люблю)</span></li>
      <li>Как сказать «ты, приди»? <span class="ru">(sina o kama)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. <b>la</b> — отделяет обстоятельство (время, место, условие).<br>
      2. <b>pi</b> — группирует модификаторы в единое целое.<br>
      3. <b>en</b> — «и» между подлежащими; для объектов — <b>e … e …</b>.<br>
      4. <b>anu</b> — «или».<br>
      5. <b>o</b> — повеление, обращение или пожелание.<br>
      6. <b>seme</b> — вопрос на месте неизвестного слова.<br>
      7. <b>ni</b> — «это, то» (указатель).
    </div>
  `,
  exercises: [
    { q: 'Что означает <b>la</b>?', opts: ['и', 'или', 'частица контекста', 'вопрос'], ans: 2 },
    { q: 'Что означает <b>pi</b>?', opts: ['группировка модификаторов', 'и', 'или', 'повеление'], ans: 0 },
    { q: 'Что означает <b>en</b>?', opts: ['или', 'и (между подлежащими)', 'нет', 'вопрос'], ans: 1 },
    { q: 'Что означает <b>anu</b>?', opts: ['и', 'или', 'нет', 'контекст'], ans: 1 },
    { q: 'Что означает <b>o</b>?', opts: ['вопрос', 'повеление / обращение', 'контекст', 'группировка'], ans: 1 },
    { q: 'Что означает <b>seme</b>?', opts: ['что (вопрос)', 'это', 'и', 'или'], ans: 0 },
    { q: 'Что означает <b>ni</b>?', opts: ['то, это', 'что?', 'и', 'нет'], ans: 0 },
    { q: 'Как сказать «я и ты хорошие»?', opts: ['mi en sina li pona', 'mi sina li pona', 'mi anu sina pona', 'mi pi sina pona'], ans: 0 },
    { q: 'Как спросить «что ты ешь»?', opts: ['sina moku e seme?', 'seme moku sina?', 'sina seme moku?', 'moku sina seme?'], ans: 0 },
    { q: 'Как сказать «приди!»?', opts: ['sina o kama', 'o sina kama', 'kama o sina', 'sina kama o'], ans: 0 }
  ],
  test: [
    { q: 'Когда используется <b>pi</b>?', opts: ['всегда', 'когда модификаторы группируются', 'для вопросов', 'для повеления'], ans: 1, explain: 'pi — группировка модификаторов.' },
    { q: 'Что означает <span class="tp">tenpo ni la, mi moku</span>?', opts: ['я ем время', 'сейчас я ем', 'я не ем', 'когда я ем'], ans: 1, explain: 'la отделяет обстоятельство времени.' },
    { q: 'Как сказать «что ты хочешь»?', opts: ['sina wile e seme?', 'seme sina wile?', 'sina seme wile?', 'wile sina seme?'], ans: 0, explain: 'seme = что.' },
    { q: 'Введите «я и он едим»:', type: 'input', ans: 'mi en ona li moku', explain: 'mi en ona li moku.' },
    { q: 'Введите «приди!»:', type: 'input', ans: 'o kama', explain: 'Повеление через o + действие.' },
    { q: 'Введите «где ты?»:', type: 'input', ans: 'sina lon seme', explain: 'lon seme = где.' },
    { q: 'Что означает <span class="tp">tomo pi telo nasa</span>?', opts: ['дом', 'бар', 'психиатрическая больница', 'аквариум'], ans: 1, explain: 'pi группирует «странная вода» = алкоголь.' },
    { q: 'Что означает <span class="tp">sina o kama</span>?', opts: ['ты пришёл', 'ты, приди!', 'он придёт', 'я иду'], ans: 1, explain: 'sina o … = обращение + повеление.' }
  ],
  builder: [
    { words: ['mi', 'en', 'sina', 'li', 'pona'], correct: ['mi', 'en', 'sina', 'li', 'pona'], translation: 'я и ты хорошие' },
    { words: ['sina', 'moku', 'e', 'seme'], correct: ['sina', 'moku', 'e', 'seme'], translation: 'что ты ешь?' },
    { words: ['tenpo', 'pini', 'la', 'mi', 'lili'], correct: ['tenpo', 'pini', 'la', 'mi', 'lili'], translation: 'раньше я был маленьким' },
    { words: ['sina', 'o', 'kama'], correct: ['sina', 'o', 'kama'], translation: 'ты, приди!' },
    { words: ['mi', 'moku', 'e', 'kili', 'e', 'pan'], correct: ['mi', 'moku', 'e', 'kili', 'e', 'pan'], translation: 'я ем фрукт и хлеб' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 2: pali — глаголы действия
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp2-l2',
  title: 'pali',
  desc: 'работа, начало, конец, давать, брать',
  xp: 20,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Девять новых глаголов: <span class="tp">pali</span>, <span class="tp">open</span>, <span class="tp">pini</span>, <span class="tp">pana</span>, <span class="tp">lanpan</span>, <span class="tp">weka</span>, <span class="tp">lape</span>, <span class="tp">musi</span>, <span class="tp">unpa</span></li>
      <li>Как различать <b>pana</b> (давать) и <b>lanpan</b> (брать)</li>
      <li>Как использовать <span class="tp">tawa</span> для получателя</li>
      <li>Что такое цепочка двух глаголов: <span class="tp">mi wile moku</span></li>
    </ul>

    <h3>🌍 Действия без глаголов</h3>
    <p>Помните: в toki pona нет «глаголов» как части речи. Любое слово после <b>li</b> или <b>mi/sina</b> становится действием. В этом уроке — <b>девять</b> новых слов, которые чаще всего работают как действия.</p>

    <h3>📖 Новые слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">pali</td><td><b>pali</b></td><td>делать, работать, создавать</td></tr>
      <tr>linja-pona<td class="sp-cell">open</td><td><b>open</b></td><td>открывать, начинать</td></tr>
      <tr>linja-pona<td class="sp-cell">pini</td><td><b>pini</b></td><td>закрывать, заканчивать, конец</td></tr>
      <tr>linja-pona<td class="sp-cell">pana</td><td><b>pana</b></td><td>давать, отправлять, класть</td></tr>
      <tr>linja-pona<td class="sp-cell">lanpan</td><td><b>lanpan</b></td><td>брать, хватать, красть</td></tr>
      <tr>linja-pona<td class="sp-cell">weka</td><td><b>weka</b></td><td>убирать, прочь, отсутствовать</td></tr>
      <tr>linja-pona<td class="sp-cell">lape</td><td><b>lape</b></td><td>спать, отдыхать, сон</td></tr>
      <tr>linja-pona<td class="sp-cell">musi</td><td><b>musi</b></td><td>играть, веселиться, искусство</td></tr>
      <tr>linja-pona<td class="sp-cell">unpa</td><td><b>unpa</b></td><td>секс, интимная близость</td></tr>
    </table>

    <h3>🧩 Схема: pana vs lanpan</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="display:grid; grid-template-columns:1fr auto 1fr; gap:14px; align-items:center;">

        <div style="text-align:center;">
          <div class="tp" style="font-weight:800; font-size:18px; color:var(--green);">pana</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">давать → кому-то</div>
        </div>

        <div style="color:var(--muted); font-size:22px;">↔</div>

        <div style="text-align:center;">
          <div class="tp" style="font-weight:800; font-size:18px; color:var(--danger);">lanpan</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">брать ← у кого-то</div>
        </div>
      </div>

      <div style="margin-top:16px; padding-top:14px; border-top:1px dashed var(--border); font-size:14px; line-height:1.9;">
        <div><span class="tp" style="font-weight:700;">mi pana e kili tawa sina</span> — я даю тебе фрукт</div>
        <div><span class="tp" style="font-weight:700;">mi lanpan e kili</span> — я беру фрукт</div>
      </div>
    </div>

    <div class="lesson-tip">
      <b>pana</b> требует <b>tawa</b> для получателя. <b>lanpan</b> — просто забирает объект, без указания получателя.
    </div>

    <h3>🧩 Схема: open и pini</h3>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:16px 0;">
      <div style="background:var(--card2); border:1px solid var(--green); border-radius:12px; padding:16px; text-align:center;">
        <div style="font-size:30px; margin-bottom:6px;">▶️</div>
        <div class="tp" style="font-weight:800; font-size:18px; color:var(--green);">open</div>
        <div style="font-size:12px; color:var(--muted); margin-top:4px; margin-bottom:8px;">открывать, начинать</div>
        <div class="tp" style="font-size:13px;">mi open e lupa</div>
        <div style="font-size:12px; color:var(--muted);">я открываю дверь</div>
      </div>
      <div style="background:var(--card2); border:1px solid var(--danger); border-radius:12px; padding:16px; text-align:center;">
        <div style="font-size:30px; margin-bottom:6px;">⏹️</div>
        <div class="tp" style="font-weight:800; font-size:18px; color:var(--danger);">pini</div>
        <div style="font-size:12px; color:var(--muted); margin-top:4px; margin-bottom:8px;">закрывать, заканчивать</div>
        <div class="tp" style="font-size:13px;">mi pini e pali</div>
        <div style="font-size:12px; color:var(--muted);">я заканчиваю работу</div>
      </div>
    </div>

    <h3>🧩 Схема: цепочка глаголов</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="font-size:12px; color:var(--muted); margin-bottom:12px; text-transform:uppercase; letter-spacing:1px; text-align:center;">Когда два глагола идут подряд</div>

      <div style="display:grid; grid-template-columns:1fr; gap:10px;">
        <div style="background:var(--card2); border-radius:8px; padding:12px;">
          <div class="tp" style="font-weight:700;">mi <span style="color:var(--green);">wile</span> <span style="color:var(--blue);">moku</span></div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">хочу + есть = «я хочу есть»</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:12px;">
          <div class="tp" style="font-weight:700;">mi <span style="color:var(--green);">ken</span> <span style="color:var(--blue);">pali</span></div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">могу + работать = «я могу работать»</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:12px;">
          <div class="tp" style="font-weight:700;">mi <span style="color:var(--green);">pali</span> <span style="color:var(--blue);">musi</span></div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">работать + весело = «я работаю с удовольствием»</div>
        </div>
      </div>
    </div>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>mi pali e tomo</b> — «я строю дом»<br>
      <span class="ru">pali = работать / создавать. e tomo = дом (объект).</span>
    </div>

    <div class="lesson-example">
      <b>mi pana e moku tawa sina</b> — «я даю тебе еду»<br>
      <span class="ru">pana e = давать (что). tawa sina = тебе (получатель).</span>
    </div>

    <div class="lesson-example">
      <b>ona li lanpan e mani mi</b> — «он украл мои деньги»<br>
      <span class="ru">lanpan e = брать / воровать. mani mi = мои деньги.</span>
    </div>

    <div class="lesson-example">
      <b>mi wile lape</b> — «я хочу спать»<br>
      <span class="ru">wile = хотеть. lape = спать. Второй глагол без e.</span>
    </div>

    <div class="lesson-example">
      <b>jan li musi lon ma</b> — «люди играют на улице»<br>
      <span class="ru">musi = играть / веселиться. lon ma = на улице.</span>
    </div>

    <div class="lesson-example">
      <b>o open e lupa!</b> — «открой дверь!»<br>
      <span class="ru">o + действие = повеление. open e lupa = открыть дверь.</span>
    </div>

    <div class="lesson-example">
      <b>mi pini e pali mi</b> — «я закончил свою работу»<br>
      <span class="ru">pini e = заканчивать что-то. pali mi = моя работа.</span>
    </div>

    <h3>🗣️ Диалог 1: на работе</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina pali e seme?<br>
      <b>jan B:</b> mi pali e tomo sin.<br>
      <b>jan A:</b> tenpo seme la, sina open?<br>
      <b>jan B:</b> tenpo suno pini la, mi open. tenpo suno kama la, mi pini.
    </div>
    <p><span class="ru">Перевод: «Что ты делаешь? — Я строю новый дом. — Когда ты начал? — Вчера я начал. Завтра закончу.»</span></p>

    <h3>🗣️ Диалог 2: подарок</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> mi pana e ijo tawa sina.<br>
      <b>jan B:</b> seme? mi lanpan ala e ijo sina.<br>
      <b>jan A:</b> ala! mi pana. o lanpan.<br>
      <b>jan B:</b> a! pona tawa sina!
    </div>
    <p><span class="ru">Перевод: «Я дарю тебе вещь. — Что? Я не беру твои вещи. — Нет! Я даю. Возьми. — А! Спасибо!»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi pana sina e moku</span><br>
      <span class="ru">Ошибка: получатель идёт через tawa, а не после pana.</span><br>
      <span class="tp">✓ mi pana e moku tawa sina</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi open lupa</span><br>
      <span class="ru">Ошибка: open переходный глагол, нужен e.</span><br>
      <span class="tp">✓ mi open e lupa</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi wile e moku</span> (когда «хочу есть»)<br>
      <span class="ru">Ошибка: с wile + непереходный глагол e не нужен.</span><br>
      <span class="tp">✓ mi wile moku</span>
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr><td><span style="color:var(--danger)">mi pana sina e kili</span></td><td><span class="tp">mi pana e kili tawa sina</span></td></tr>
      <tr><td><span style="color:var(--danger)">mi open lupa</span></td><td><span class="tp">mi open e lupa</span></td></tr>
      <tr><td><span style="color:var(--danger)">mi wile e moku</span> (в значении «хочу есть»)</td><td><span class="tp">mi wile moku</span></td></tr>
      <tr><td><span style="color:var(--danger)">mi lanpan e kili tawa sina</span></td><td><span class="tp">mi lanpan e kili</span> (получатель не нужен)</td></tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «я даю тебе еду»? <span class="ru">(mi pana e moku tawa sina)</span></li>
      <li>Как сказать «открой дверь»? <span class="ru">(o open e lupa)</span></li>
      <li>Что означает <span class="tp">mi wile lape</span>? <span class="ru">(я хочу спать)</span></li>
      <li>В чём разница между pana и lanpan? <span class="ru">(давать vs брать)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. <b>pali</b> — делать, работать; <b>open</b> — начинать; <b>pini</b> — заканчивать.<br>
      2. <b>pana</b> — давать (с <span class="tp">tawa</span> для получателя); <b>lanpan</b> — брать.<br>
      3. <b>weka</b> — убирать; <b>lape</b> — спать; <b>musi</b> — играть.<br>
      4. Два глагола подряд: <span class="tp">mi wile moku</span> — «я хочу есть».<br>
      5. Повеление: <span class="tp">o open e lupa</span>.
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">pali</span>?', opts: ['играть', 'делать, работать', 'спать', 'давать'], ans: 1 },
    { q: 'Что означает <span class="tp">open</span>?', opts: ['закрывать', 'открывать, начинать', 'давать', 'брать'], ans: 1 },
    { q: 'Что означает <span class="tp">pini</span>?', opts: ['начинать', 'заканчивать', 'спать', 'давать'], ans: 1 },
    { q: 'Что означает <span class="tp">pana</span>?', opts: ['давать', 'брать', 'убирать', 'играть'], ans: 0 },
    { q: 'Что означает <span class="tp">lanpan</span>?', opts: ['давать', 'брать, отбирать', 'убирать', 'спать'], ans: 1 },
    { q: 'Что означает <span class="tp">weka</span>?', opts: ['приходить', 'убирать, отсутствовать', 'давать', 'спать'], ans: 1 },
    { q: 'Что означает <span class="tp">lape</span>?', opts: ['спать', 'играть', 'работать', 'давать'], ans: 0 },
    { q: 'Что означает <span class="tp">musi</span>?', opts: ['играть, веселиться', 'работать', 'спать', 'давать'], ans: 0 },
    { q: 'Как сказать «я даю тебе еду»?', opts: ['mi pana e moku tawa sina', 'mi pana e sina tawa moku', 'mi moku pana tawa sina', 'mi tawa pana e moku'], ans: 0 },
    { q: 'Как сказать «я хочу спать»?', opts: ['mi wile lape', 'mi lape wile', 'wile mi lape', 'mi lape e wile'], ans: 0 }
  ],
  test: [
    { q: 'Что означает <span class="tp">mi pali e tomo</span>?', opts: ['я в доме', 'я строю дом', 'я иду домой', 'дом работает'], ans: 1, explain: 'pali e tomo = делаю дом.' },
    { q: 'Как сказать «открой дверь»?', opts: ['o open e lupa', 'open o lupa e', 'lupa o open', 'o lupa open e'], ans: 0, explain: 'o + действие + e объект.' },
    { q: 'Что означает <span class="tp">ona li lanpan e mani</span>?', opts: ['он даёт деньги', 'он берёт деньги', 'он не имеет денег', 'у него есть деньги'], ans: 1, explain: 'lanpan = брать.' },
    { q: 'Введите «я работаю»:', type: 'input', ans: 'mi pali', explain: 'mi pali.' },
    { q: 'Введите «кот спит»:', type: 'input', ans: 'soweli li lape', explain: 'soweli li lape.' },
    { q: 'Введите «я закончил работу»:', type: 'input', ans: 'mi pini e pali', explain: 'pini e pali.' },
    { q: 'Как сказать «я ухожу»?', opts: ['mi tawa weka', 'mi weka tawa', 'mi tawa lon', 'mi kama weka'], ans: 0, explain: 'tawa weka = уходить прочь.' },
    { q: 'Разница pana и lanpan:', opts: ['синонимы', 'pana = давать, lanpan = брать', 'pana = брать, lanpan = давать', 'оба = продавать'], ans: 1, explain: 'Обратные действия.' }
  ],
  builder: [
    { words: ['mi', 'pali', 'e', 'tomo'], correct: ['mi', 'pali', 'e', 'tomo'], translation: 'я строю дом' },
    { words: ['mi', 'pana', 'e', 'moku', 'tawa', 'sina'], correct: ['mi', 'pana', 'e', 'moku', 'tawa', 'sina'], translation: 'я даю тебе еду' },
    { words: ['ona', 'li', 'lanpan', 'e', 'mani'], correct: ['ona', 'li', 'lanpan', 'e', 'mani'], translation: 'он берёт деньги' },
    { words: ['soweli', 'li', 'lape', 'lon', 'supa'], correct: ['soweli', 'li', 'lape', 'lon', 'supa'], translation: 'кот спит на столе' },
    { words: ['o', 'open', 'e', 'lupa'], correct: ['o', 'open', 'e', 'lupa'], translation: 'открой дверь!' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 3: olin en kulupu — эмоции и сообщество
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp2-l3',
  title: 'olin en kulupu',
  desc: 'эмоции, отношения, сообщество',
  xp: 20,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Слово <span class="tp">olin</span> — «любовь» во всех смыслах</li>
      <li>Слова отношений: <span class="tp">poka</span>, <span class="tp">kulupu</span>, <span class="tp">tonsi</span></li>
      <li>Модальные глаголы <span class="tp">wile</span> («хотеть») и <span class="tp">ken</span> («мочь»)</li>
      <li>Слово <span class="tp">moli</span> — «смерть»</li>
      <li>Как строить цепочки модальных глаголов</li>
    </ul>

    <h3>🌍 Эмоции в toki pona</h3>
    <p>В toki pona <b>olin</b> — это и «любовь», и «любить», и «уважать». Одно слово покрывает большой спектр чувств — от романтической любви до дружбы и уважения.</p>

    <h3>📖 Новые слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">olin</td><td><b>olin</b></td><td>любить, любовь, уважать</td></tr>
      <tr>linja-pona<td class="sp-cell">poka</td><td><b>poka</b></td><td>рядом, бок, компания</td></tr>
      <tr>linja-pona<td class="sp-cell">kulupu</td><td><b>kulupu</b></td><td>группа, сообщество, семья</td></tr>
      <tr>linja-pona<td class="sp-cell">tonsi</td><td><b>tonsi</b></td><td>небинарный, гендерно-неконформный</td></tr>
      <tr>linja-pona<td class="sp-cell">moli</td><td><b>moli</b></td><td>смерть, умирать, убивать</td></tr>
      <tr>linja-pona<td class="sp-cell">wile</td><td><b>wile</b></td><td>хотеть, нуждаться, желать</td></tr>
      <tr>linja-pona<td class="sp-cell">ken</td><td><b>ken</b></td><td>мочь, возможность</td></tr>
      <tr>linja-pona<td class="sp-cell">sona</td><td><b>sona</b></td><td>знать, уметь, учиться</td></tr>
    </table>

    <h3>🧩 Схема: olin — широкий спектр</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center; font-size:14px; margin-bottom:14px;">
        <span class="tp" style="font-weight:800; font-size:20px; color:var(--green);">olin</span>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(120px, 1fr)); gap:10px;">
        <div style="background:var(--card2); border-radius:8px; padding:12px; text-align:center;">
          <div style="font-size:20px;">❤️</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">романтическая любовь</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:12px; text-align:center;">
          <div style="font-size:20px;">🤝</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">дружба</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:12px; text-align:center;">
          <div style="font-size:20px;">🙏</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">уважение</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:12px; text-align:center;">
          <div style="font-size:20px;">👨‍👩‍👧</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">семейная любовь</div>
        </div>
      </div>
    </div>

    <h3>🧩 Схема: poka — «рядом»</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="font-size:12px; color:var(--muted); margin-bottom:12px; text-transform:uppercase; letter-spacing:1px; text-align:center;">poka = «с», «рядом»</div>

      <div style="text-align:center; font-size:15px; line-height:2.2;">
        <span class="tp" style="font-weight:700;">mi moku <span style="color:var(--green);">poka</span> sina</span>
        <div style="font-size:12px; color:var(--muted);">я ем с тобой (в твоей компании)</div>

        <span class="tp" style="font-weight:700;">mi lape <span style="color:var(--green);">poka</span> sina</span>
        <div style="font-size:12px; color:var(--muted);">я сплю рядом с тобой</div>

        <span class="tp" style="font-weight:700;">soweli li <span style="color:var(--green);">poka</span> mi</span>
        <div style="font-size:12px; color:var(--muted);">кот рядом со мной</div>
      </div>
    </div>

    <h3>🧩 Схема: wile и ken — модальные глаголы</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <table style="margin:0;">
        <tr><th>Структура</th><th>Значение</th></tr>
        <tr><td><span class="tp">mi <b style="color:var(--green);">wile</b> moku</span></td><td>я хочу есть</td></tr>
        <tr><td><span class="tp">mi <b style="color:var(--green);">ken</b> moku</span></td><td>я могу есть</td></tr>
        <tr><td><span class="tp">mi <b style="color:var(--green);">wile</b> <b style="color:var(--green);">ken</b> moku</span></td><td>я хочу мочь есть</td></tr>
        <tr><td><span class="tp">mi <b style="color:var(--green);">ken</b> <b style="color:var(--green);">wile</b> moku</span></td><td>я могу хотеть есть</td></tr>
      </table>
    </div>

    <div class="lesson-tip">
      <b>wile</b> и <b>ken</b> стоят <b>перед</b> другим глаголом и не требуют <b>e</b>, если второй глагол непереходный. <span class="tp">mi wile moku</span> = «хочу есть», а не «хочу еду».
    </div>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>mi olin e sina</b> — «я люблю тебя»<br>
      <span class="ru">olin — переходный глагол, требует e для объекта.</span>
    </div>

    <div class="lesson-example">
      <b>mi olin e mama mi</b> — «я люблю свою мать»<br>
      <span class="ru">mama mi = мой родитель (объект).</span>
    </div>

    <div class="lesson-example">
      <b>mi poka sina</b> — «я рядом с тобой»<br>
      <span class="ru">poka = предлог «рядом». Без e.</span>
    </div>

    <div class="lesson-example">
      <b>kulupu mi li suli</b> — «моя семья большая»<br>
      <span class="ru">kulupu = группа / семья. li suli = является большой.</span>
    </div>

    <div class="lesson-example">
      <b>mi wile lape poka sina</b> — «я хочу спать рядом с тобой»<br>
      <span class="ru">wile lape = хочу спать. poka sina = рядом с тобой.</span>
    </div>

    <div class="lesson-example">
      <b>ona li ken pali</b> — «он может работать»<br>
      <span class="ru">ken pali = мочь работать.</span>
    </div>

    <div class="lesson-example">
      <b>moli li kama tawa jan ale</b> — «смерть приходит ко всем людям»<br>
      <span class="ru">moli = смерть. kama = приходить. tawa jan ale = ко всем людям.</span>
    </div>

    <h3>🗣️ Диалог 1: разговор о семье</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina olin e kulupu sina?<br>
      <b>jan B:</b> olin mute! mi olin e mama mi, e ona ante.<br>
      <b>jan A:</b> sina poka mama sina?<br>
      <b>jan B:</b> tenpo lili la, mi poka ona. taso mi wile poka ona mute.
    </div>
    <p><span class="ru">Перевод: «Ты любишь свою семью? — Очень люблю! Я люблю маму и остальных. — Ты рядом с мамой? — Редко рядом. Но я хочу быть рядом больше.»</span></p>

    <h3>🗣️ Диалог 2: о любви</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina olin e jan seme?<br>
      <b>jan B:</b> mi olin e jan mije wan.<br>
      <b>jan A:</b> ona li ken poka sina?<br>
      <b>jan B:</b> tenpo ni la, ona li poka mi. mi pilin pona mute.
    </div>
    <p><span class="ru">Перевод: «Кого ты любишь? — Я люблю одного мужчину. — Он может быть рядом с тобой? — Сейчас он рядом. Я очень счастлив.»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi olin sina</span><br>
      <span class="ru">Ошибка: olin переходный, нужен e.</span><br>
      <span class="tp">✓ mi olin e sina</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi wile e lape</span><br>
      <span class="ru">Ошибка: при wile + непереходный глагол e не нужен.</span><br>
      <span class="tp">✓ mi wile lape</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi ken e pali</span><br>
      <span class="ru">Ошибка: ken не берёт e перед другим глаголом.</span><br>
      <span class="tp">✓ mi ken pali</span>
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr><td><span style="color:var(--danger)">mi olin sina</span></td><td><span class="tp">mi olin e sina</span></td></tr>
      <tr><td><span style="color:var(--danger)">mi wile e lape</span></td><td><span class="tp">mi wile lape</span></td></tr>
      <tr><td><span style="color:var(--danger)">mi ken e pali</span></td><td><span class="tp">mi ken pali</span></td></tr>
      <tr><td><span style="color:var(--danger)">mi e poka sina</span></td><td><span class="tp">mi poka sina</span> (poka — предлог, не требует e)</td></tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «я люблю тебя»? <span class="ru">(mi olin e sina)</span></li>
      <li>Как сказать «я хочу спать»? <span class="ru">(mi wile lape)</span></li>
      <li>Что означает <span class="tp">mi poka sina</span>? <span class="ru">(я рядом с тобой)</span></li>
      <li>В чём разница wile и ken? <span class="ru">(хотеть vs мочь)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. <b>olin</b> — «любовь» во всех смыслах (романтическая, дружеская, семейная).<br>
      2. <b>poka</b> — предлог «рядом, вместе», не требует e.<br>
      3. <b>kulupu</b> — группа, семья, сообщество.<br>
      4. <b>tonsi</b> — небинарный человек.<br>
      5. <b>moli</b> — смерть.<br>
      6. Модальные глаголы <b>wile</b> (хотеть) и <b>ken</b> (мочь) стоят перед действием.<br>
      7. Цепочка модальных: <span class="tp">mi wile ken pali</span>.
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">olin</span>?', opts: ['ненавидеть', 'любить', 'бояться', 'знать'], ans: 1 },
    { q: 'Что означает <span class="tp">poka</span>?', opts: ['далеко', 'рядом, бок', 'внутри', 'снаружи'], ans: 1 },
    { q: 'Что означает <span class="tp">kulupu</span>?', opts: ['человек', 'группа, сообщество', 'место', 'зверь'], ans: 1 },
    { q: 'Что означает <span class="tp">tonsi</span>?', opts: ['женщина', 'мужчина', 'небинарный', 'ребёнок'], ans: 2 },
    { q: 'Что означает <span class="tp">moli</span>?', opts: ['жизнь', 'смерть', 'сон', 'боль'], ans: 1 },
    { q: 'Что означает <span class="tp">wile</span>?', opts: ['мочь', 'хотеть', 'знать', 'иметь'], ans: 1 },
    { q: 'Что означает <span class="tp">ken</span>?', opts: ['мочь', 'хотеть', 'знать', 'иметь'], ans: 0 },
    { q: 'Как сказать «я люблю тебя»?', opts: ['mi olin e sina', 'mi olin sina', 'sina olin mi', 'mi e olin sina'], ans: 0 },
    { q: 'Как сказать «я хочу есть»?', opts: ['mi wile moku', 'mi moku wile', 'wile mi moku', 'mi moku e wile'], ans: 0 },
    { q: 'Как сказать «я могу работать»?', opts: ['mi ken pali', 'mi pali ken', 'ken mi pali', 'mi pali e ken'], ans: 0 }
  ],
  test: [
    { q: 'Что означает <span class="tp">mi poka sina</span>?', opts: ['я рядом с тобой', 'я иду к тебе', 'я люблю тебя', 'я вижу тебя'], ans: 0, explain: 'poka = рядом.' },
    { q: 'Что означает <span class="tp">mi wile ken pali</span>?', opts: ['я хочу мочь работать', 'я могу хотеть работать', 'я работаю', 'я умею желать'], ans: 0, explain: 'Цепочка модальных.' },
    { q: 'Что означает <span class="tp">moli li ike</span>?', opts: ['смерть ужасна (для говорящего)', 'смерть хороша', 'он мёртв', 'он убил'], ans: 0, explain: 'ike = плохо (оценочно).' },
    { q: 'Введите «я тебя люблю»:', type: 'input', ans: 'mi olin e sina', explain: 'mi olin e sina.' },
    { q: 'Введите «я хочу спать»:', type: 'input', ans: 'mi wile lape', explain: 'mi wile lape.' },
    { q: 'Введите «моя семья большая»:', type: 'input', ans: 'kulupu mi li suli', explain: 'kulupu mi li suli.' },
    { q: 'Что означает <span class="tp">mi sona e ni</span>?', opts: ['я знаю это', 'я учу это', 'я могу это', 'я люблю это'], ans: 0, explain: 'sona + e = знать что-то.' },
    { q: 'Что делает <b>poka</b> как предлог?', opts: ['отрицает', 'означает «рядом, вместе»', 'задаёт вопрос', 'соединяет подлежащие'], ans: 1, explain: 'poka = рядом, компания.' }
  ],
  builder: [
    { words: ['mi', 'olin', 'e', 'sina'], correct: ['mi', 'olin', 'e', 'sina'], translation: 'я люблю тебя' },
    { words: ['mi', 'wile', 'lape'], correct: ['mi', 'wile', 'lape'], translation: 'я хочу спать' },
    { words: ['mi', 'poka', 'sina'], correct: ['mi', 'poka', 'sina'], translation: 'я рядом с тобой' },
    { words: ['kulupu', 'mi', 'li', 'suli'], correct: ['kulupu', 'mi', 'li', 'suli'], translation: 'моя семья большая' },
    { words: ['ona', 'li', 'ken', 'pali'], correct: ['ona', 'li', 'ken', 'pali'], translation: 'он может работать' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 4: seme en ala — вопросы и отрицание
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp2-l4',
  title: 'seme en ala',
  desc: 'вопросы, отрицание и противопоставления',
  xp: 20,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Три типа вопросов в toki pona: общий, специальный, «да/нет»</li>
      <li>Шесть позиций для <b>seme</b>: кто, что, где, куда, откуда, с кем</li>
      <li>Отрицание <b>ala</b> в трёх позициях</li>
      <li>Слова <span class="tp">taso</span> («но, только») и <span class="tp">ante</span> («другой»)</li>
    </ul>

    <h3>🌍 Как задавать вопросы</h3>
    <p>В toki pona <b>нет вопросительных знаков</b> в грамматике. Вопрос — это просто <b>seme</b> на месте неизвестного слова или <b>anu</b> между вариантами.</p>

    <h3>📖 Слова урока</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">seme</td><td><b>seme</b></td><td>что, какой, кто (вопрос)</td></tr>
      <tr>linja-pona<td class="sp-cell">ala</td><td><b>ala</b></td><td>нет, не, ноль, отрицание</td></tr>
      <tr>linja-pona<td class="sp-cell">taso</td><td><b>taso</b></td><td>но, только, однако</td></tr>
      <tr>linja-pona<td class="sp-cell">ante</td><td><b>ante</b></td><td>другой, разный, изменять</td></tr>
    </table>

    <h3>🧩 Схема: три типа вопросов</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <table style="margin:0;">
        <tr><th>Тип</th><th>Способ</th><th>Пример</th></tr>
        <tr>
          <td>Общий (да/нет)</td>
          <td>X anu X ala?</td>
          <td><span class="tp">sina moku anu moku ala?</span> — ты ешь или не ешь?</td>
        </tr>
        <tr>
          <td>Альтернативный</td>
          <td>X anu Y?</td>
          <td><span class="tp">sina moku anu sina lape?</span> — ты ешь или спишь?</td>
        </tr>
        <tr>
          <td>Специальный</td>
          <td>seme в позиции</td>
          <td><span class="tp">sina moku e seme?</span> — что ты ешь?</td>
        </tr>
      </table>
    </div>

    <h3>🧩 Схема: шесть вопросов с seme</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="display:grid; grid-template-columns:1fr; gap:8px;">
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span style="color:var(--blue); font-weight:800; font-size:11px; margin-right:8px;">КТО</span>
          <span class="tp" style="font-weight:700;">seme li moku?</span>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span style="color:var(--blue); font-weight:800; font-size:11px; margin-right:8px;">ЧТО</span>
          <span class="tp" style="font-weight:700;">sina moku e seme?</span>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span style="color:var(--blue); font-weight:800; font-size:11px; margin-right:8px;">ГДЕ</span>
          <span class="tp" style="font-weight:700;">sina moku lon seme?</span>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span style="color:var(--blue); font-weight:800; font-size:11px; margin-right:8px;">КУДА</span>
          <span class="tp" style="font-weight:700;">sina tawa seme?</span>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span style="color:var(--blue); font-weight:800; font-size:11px; margin-right:8px;">ПОЧЕМУ</span>
          <span class="tp" style="font-weight:700;">sina pona tan seme?</span>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span style="color:var(--blue); font-weight:800; font-size:11px; margin-right:8px;">С КЕМ</span>
          <span class="tp" style="font-weight:700;">sina moku poka seme?</span>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:10px 14px;">
          <span style="color:var(--blue); font-weight:800; font-size:11px; margin-right:8px;">КОГДА</span>
          <span class="tp" style="font-weight:700;">tenpo seme la, sina moku?</span>
        </div>
      </div>
    </div>

    <h3>🧩 Схема: отрицание ala</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <table style="margin:0;">
        <tr><th>Позиция</th><th>Пример</th><th>Смысл</th></tr>
        <tr><td>После глагола</td><td><span class="tp">mi moku ala</span></td><td>я не ем</td></tr>
        <tr><td>Перед e</td><td><span class="tp">mi jo ala e kili</span></td><td>я не имею фрукта</td></tr>
        <tr><td>Как модификатор</td><td><span class="tp">jan ala</span></td><td>никто</td></tr>
      </table>
    </div>

    <div class="lesson-tip">
      <b>ala всегда после глагола или перед e.</b> Нельзя ставить его перед подлежащим или после объекта без причины.
    </div>

    <h3>🧩 Схема: taso — «но» и «только»</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <div style="background:var(--card2); border-radius:8px; padding:14px;">
          <div style="font-size:11px; color:var(--green); font-weight:800; margin-bottom:6px;">В НАЧАЛЕ = «НО»</div>
          <div class="tp" style="font-weight:700;">taso mi wile moku</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">но я хочу есть</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:14px;">
          <div style="font-size:11px; color:var(--green); font-weight:800; margin-bottom:6px;">ПОСЛЕ СЛОВА = «ТОЛЬКО»</div>
          <div class="tp" style="font-weight:700;">mi jo e kili taso</div>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">у меня только фрукт</div>
        </div>
      </div>
    </div>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>sina sona ala sona?</b> — «ты знаешь или нет?»<br>
      <span class="ru">X ala X — стандартная форма вопроса «да/нет».</span>
    </div>

    <div class="lesson-example">
      <b>sina wile e seme?</b> — «что ты хочешь?»<br>
      <span class="ru">seme на месте объекта.</span>
    </div>

    <div class="lesson-example">
      <b>ona li moku ala</b> — «он не ест»<br>
      <span class="ru">ala после глагола moku.</span>
    </div>

    <div class="lesson-example">
      <b>jan ala li kama</b> — «никто не пришёл»<br>
      <span class="ru">jan ala = «человек-ноль» = никто.</span>
    </div>

    <div class="lesson-example">
      <b>mi sona, taso mi sona lili</b> — «я знаю, но знаю мало»<br>
      <span class="ru">taso в начале второй части = «но».</span>
    </div>

    <div class="lesson-example">
      <b>jan ante li toki</b> — «другой человек говорит»<br>
      <span class="ru">ante = другой (как модификатор).</span>
    </div>

    <div class="lesson-example">
      <b>ante la, mi tawa</b> — «иначе я уйду»<br>
      <span class="ru">ante la = «в противном случае».</span>
    </div>

    <h3>🗣️ Диалог 1: разговор о планах</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina sona ala sona e nasin?<br>
      <b>jan B:</b> mi sona ala. taso mi wile sona.<br>
      <b>jan A:</b> sina wile e seme?<br>
      <b>jan B:</b> mi wile sona e nasin tawa tomo sina.
    </div>
    <p><span class="ru">Перевод: «Ты знаешь дорогу или нет? — Не знаю. Но хочу знать. — Что ты хочешь? — Хочу знать дорогу к твоему дому.»</span></p>

    <h3>🗣️ Диалог 2: разговор о еде</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina moku e seme?<br>
      <b>jan B:</b> mi moku e kili taso. mi jo ala e pan.<br>
      <b>jan A:</b> sina wile e pan?<br>
      <b>jan B:</b> pona! taso mi wile e pan suwi.
    </div>
    <p><span class="ru">Перевод: «Что ты ешь? — Только фрукт. У меня нет хлеба. — Хочешь хлеба? — Да! Но хочу сладкий хлеб (пирог).»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi ala sona</span><br>
      <span class="ru">Ошибка: ala ставится после глагола, а не перед.</span><br>
      <span class="tp">✓ mi sona ala</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ seme li moku e sina?</span> (в значении «что ты ешь»)<br>
      <span class="ru">Ошибка: в роли подлежащего seme — «кто», а не «что». Для объекта нужен другой порядок.</span><br>
      <span class="tp">✓ sina moku e seme?</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ jan li kama ala ala</span><br>
      <span class="ru">Ошибка: двойное ala подряд не используется. Для «никто» — jan ala.</span><br>
      <span class="tp">✓ jan ala li kama</span>
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr><td><span style="color:var(--danger)">mi ala sona</span></td><td><span class="tp">mi sona ala</span></td></tr>
      <tr><td><span style="color:var(--danger)">seme li moku e sina?</span> как «что ты ешь?»</td><td><span class="tp">sina moku e seme?</span></td></tr>
      <tr><td><span style="color:var(--danger)">jan li kama ala ala</span></td><td><span class="tp">jan ala li kama</span></td></tr>
      <tr><td>ставить seme в неправильную позицию</td><td>seme стоит там, где было бы неизвестное слово</td></tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как спросить «что ты хочешь»? <span class="ru">(sina wile e seme?)</span></li>
      <li>Как спросить «где ты»? <span class="ru">(sina lon seme?)</span></li>
      <li>Как сказать «никто не пришёл»? <span class="ru">(jan ala li kama)</span></li>
      <li>Что означает <span class="tp">mi jo e kili taso</span>? <span class="ru">(у меня только фрукт)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. <b>seme</b> ставится на место неизвестного слова — это и есть вопрос.<br>
      2. Шесть позиций seme: подлежащее, объект, lon (где), tawa (куда), tan (почему), poka (с кем).<br>
      3. Отрицание <b>ala</b> — после глагола или перед e.<br>
      4. <b>taso</b> — «но» (в начале) или «только» (после слова).<br>
      5. <b>ante</b> — «другой»; <span class="tp">ante la</span> = «иначе».
    </div>
  `,
  exercises: [
    { q: 'Что означает <b>taso</b>?', opts: ['и', 'но, только', 'или', 'нет'], ans: 1 },
    { q: 'Что означает <b>ante</b>?', opts: ['такой же', 'другой, разный', 'хороший', 'плохой'], ans: 1 },
    { q: 'Как спросить «кто ест»?', opts: ['seme li moku?', 'moku li seme?', 'sina seme moku?', 'moku seme?'], ans: 0 },
    { q: 'Как спросить «что ты хочешь»?', opts: ['sina wile e seme?', 'seme sina wile?', 'sina seme wile?', 'wile seme sina?'], ans: 0 },
    { q: 'Как спросить «где ты?»', opts: ['sina lon seme?', 'seme lon sina?', 'sina seme lon?', 'lon seme sina?'], ans: 0 },
    { q: 'Как спросить «почему ты ешь»?', opts: ['sina moku tan seme?', 'seme tan sina moku?', 'sina tan seme moku?', 'moku tan seme?'], ans: 0 },
    { q: 'Как сказать «я не ем»?', opts: ['mi moku ala', 'mi ala moku', 'ala mi moku', 'mi moku e ala'], ans: 0 },
    { q: 'Как сказать «никто не пришёл»?', opts: ['jan ala li kama', 'jan li kama ala', 'ala jan li kama', 'jan li ala kama'], ans: 0 },
    { q: 'Как сказать «но я хочу есть»?', opts: ['taso mi wile moku', 'mi taso wile moku', 'mi wile taso moku', 'mi wile moku taso'], ans: 0 },
    { q: 'Как сказать «другой человек говорит»?', opts: ['jan ante li toki', 'jan li ante toki', 'ante jan li toki', 'toki ante jan'], ans: 0 }
  ],
  test: [
    { q: 'Что означает <span class="tp">sina sona ala sona?</span>', opts: ['ты знаешь', 'ты не знаешь', 'ты знаешь или нет?', 'что ты знаешь?'], ans: 2, explain: 'X ala X = вопрос да/нет.' },
    { q: 'Как спросить «с кем ты ешь»?', opts: ['sina moku poka seme?', 'sina moku seme poka?', 'poka seme sina moku?', 'sina seme moku poka?'], ans: 0, explain: 'poka seme = с кем.' },
    { q: 'Что означает <span class="tp">mi jo e kili taso</span>?', opts: ['у меня есть фрукт, но…', 'у меня только фрукт', 'у меня нет фрукта', 'я хочу фрукт'], ans: 1, explain: 'taso после слова = только.' },
    { q: 'Введите «что ты хочешь?»:', type: 'input', ans: 'sina wile e seme', explain: 'sina wile e seme?' },
    { q: 'Введите «он не ест»:', type: 'input', ans: 'ona li moku ala', explain: 'ala после глагола.' },
    { q: 'Введите «другой человек говорит»:', type: 'input', ans: 'jan ante li toki', explain: 'ante = другой.' },
    { q: 'Что означает <span class="tp">jan ala li kama</span>?', opts: ['никто не пришёл', 'человек не пришёл', 'все пришли', 'кто-то пришёл'], ans: 0, explain: 'jan ala = никто.' },
    { q: 'Что означает <span class="tp">ante la, mi tawa</span>?', opts: ['иначе я уйду', 'потому я уйду', 'хотя я уйду', 'я ушёл'], ans: 0, explain: 'ante la = в противном случае.' }
  ],
  builder: [
    { words: ['sina', 'wile', 'e', 'seme'], correct: ['sina', 'wile', 'e', 'seme'], translation: 'что ты хочешь?' },
    { words: ['ona', 'li', 'moku', 'ala'], correct: ['ona', 'li', 'moku', 'ala'], translation: 'он не ест' },
    { words: ['jan', 'ala', 'li', 'kama'], correct: ['jan', 'ala', 'li', 'kama'], translation: 'никто не пришёл' },
    { words: ['mi', 'sona', 'taso', 'mi', 'sona', 'lili'], correct: ['mi', 'sona', 'taso', 'mi', 'sona', 'lili'], translation: 'я знаю, но знаю мало' },
    { words: ['sina', 'moku', 'tan', 'seme'], correct: ['sina', 'moku', 'tan', 'seme'], translation: 'почему ты ешь?' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 5: sewi en anpa — верх, низ, путь
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp2-l5',
  title: 'sewi en anpa',
  desc: 'верх, низ, путь и направление',
  xp: 20,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Слова вертикали: <span class="tp">sewi</span> (верх), <span class="tp">anpa</span> (низ)</li>
      <li>Слова пути: <span class="tp">nasin</span> («путь, метод»), <span class="tp">noka</span> (основание)</li>
      <li>Как работает <b>nasin</b> — универсальное слово для дороги, метода и обычая</li>
      <li>Духовное значение <b>sewi</b> и <b>anpa</b></li>
    </ul>

    <h3>🌍 Пространство и направление</h3>
    <p>В toki pona ориентация строится на немногих словах. Вместо «север / юг / запад / восток» — <b>направления движения</b> и <b>вертикаль</b>.</p>

    <h3>📖 Новые слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">anpa</td><td><b>anpa</b></td><td>низ, вниз, нижний</td></tr>
      <tr>linja-pona<td class="sp-cell">sewi</td><td><b>sewi</b></td><td>верх, вверх, высокий, священный</td></tr>
      <tr>linja-pona<td class="sp-cell">noka</td><td><b>noka</b></td><td>нога, ступня, основание</td></tr>
      <tr>linja-pona<td class="sp-cell">poka</td><td><b>poka</b></td><td>бок, рядом, около</td></tr>
      <tr>linja-pona<td class="sp-cell">nasin</td><td><b>nasin</b></td><td>путь, дорога, метод, правило</td></tr>
      <tr>linja-pona<td class="sp-cell">ma</td><td><b>ma</b></td><td>земля, страна, территория</td></tr>
    </table>

    <h3>🧩 Схема: вертикаль и духовность</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center; font-size:13px; color:var(--muted); margin-bottom:14px; text-transform:uppercase; letter-spacing:1px;">sewi и anpa</div>

      <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="text-align:center;">
          <div class="tp" style="font-weight:800; font-size:20px; color:var(--green);">sewi</div>
          <div style="font-size:12px; color:var(--muted); margin-top:2px;">верх · высокий · священный · бог</div>
        </div>
        <div style="font-size:22px; color:var(--muted);">↕</div>
        <div style="text-align:center;">
          <div class="tp" style="font-weight:800; font-size:20px; color:var(--danger);">anpa</div>
          <div style="font-size:12px; color:var(--muted); margin-top:2px;">низ · низкий · скромный · подчиняться</div>
        </div>
      </div>
    </div>

    <div class="lesson-tip">
      <b>sewi</b> — не только «верх», но и «священный». В культуре toki pona «верх» = место богов. <span class="tp">jan sewi</span> = «святой человек» / «бог».
    </div>

    <h3>🧩 Схема: nasin — универсальное слово</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center; font-size:13px; color:var(--muted); margin-bottom:14px; text-transform:uppercase; letter-spacing:1px;">nasin = путь · метод · правило · обычай</div>

      <table style="margin:0;">
        <tr><th>Фраза</th><th>Значение</th></tr>
        <tr><td><span class="tp">nasin tomo</span></td><td>дорога к дому</td></tr>
        <tr><td><span class="tp">nasin pona</span></td><td>хороший путь / хороший метод</td></tr>
        <tr><td><span class="tp">nasin toki</span></td><td>грамматика (путь языка)</td></tr>
        <tr><td><span class="tp">nasin sewi</span></td><td>религия (божественный путь)</td></tr>
        <tr><td><span class="tp">nasin nanpa</span></td><td>математика (путь чисел)</td></tr>
        <tr><td><span class="tp">nasin pi ma mi</span></td><td>обычай моей страны</td></tr>
      </table>
    </div>

    <h3>🧩 Схема: компас toki pona</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center; font-size:12px; color:var(--muted); margin-bottom:14px;">Направления движения вместо сторон света</div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div style="background:var(--card2); border-radius:8px; padding:14px; text-align:center;">
          <div style="font-size:24px;">⬆️</div>
          <div class="tp" style="font-weight:800;">sewi</div>
          <div style="font-size:11px; color:var(--muted);">вверх / север</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:14px; text-align:center;">
          <div style="font-size:24px;">⬇️</div>
          <div class="tp" style="font-weight:800;">anpa</div>
          <div style="font-size:11px; color:var(--muted);">вниз / юг</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:14px; text-align:center;">
          <div style="font-size:24px;">➡️</div>
          <div class="tp" style="font-weight:800;">tawa</div>
          <div style="font-size:11px; color:var(--muted);">вперёд / от меня</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:14px; text-align:center;">
          <div style="font-size:24px;">⬅️</div>
          <div class="tp" style="font-weight:800;">kama</div>
          <div style="font-size:11px; color:var(--muted);">ко мне</div>
        </div>
      </div>
    </div>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>mi lon anpa</b> — «я внизу»<br>
      <span class="ru">lon = находиться. anpa = низ.</span>
    </div>

    <div class="lesson-example">
      <b>waso li lon sewi</b> — «птица вверху»<br>
      <span class="ru">sewi = верх (небо).</span>
    </div>

    <div class="lesson-example">
      <b>mi tawa anpa</b> — «я иду вниз»<br>
      <span class="ru">tawa = движение. anpa = вниз.</span>
    </div>

    <div class="lesson-example">
      <b>nasin ni li pona</b> — «этот путь хорош»<br>
      <span class="ru">nasin = путь. ni = этот.</span>
    </div>

    <div class="lesson-example">
      <b>mi kama tan ma ante</b> — «я пришёл из другой страны»<br>
      <span class="ru">kama = приходить. tan = из. ma ante = другая страна.</span>
    </div>

    <div class="lesson-example">
      <b>lon poka nasin la, mi lukin e sina</b> — «на обочине дороги я увидел тебя»<br>
      <span class="ru">poka nasin = бок дороги (обочина).</span>
    </div>

    <div class="lesson-example">
      <b>jan li tawa nasin sewi</b> — «человек идёт по религиозному пути»<br>
      <span class="ru">nasin sewi = божественный путь = религия.</span>
    </div>

    <h3>🗣️ Диалог 1: путь</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> nasin seme li tawa tomo sina?<br>
      <b>jan B:</b> o tawa sewi. o tawa poka tomo suli.<br>
      <b>jan A:</b> pona. mi sona.<br>
      <b>jan B:</b> o awen pona lon nasin.
    </div>
    <p><span class="ru">Перевод: «Какая дорога ведёт к твоему дому? — Иди вверх. Иди рядом с большим домом. — Хорошо. Я знаю. — Будь осторожен на пути.»</span></p>

    <h3>🗣️ Диалог 2: о религии</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina jo e nasin sewi?<br>
      <b>jan B:</b> mi jo ala. taso mi pilin e kon sewi.<br>
      <b>jan A:</b> kon sewi li seme?<br>
      <b>jan B:</b> ona li nasin pona tawa mi.
    </div>
    <p><span class="ru">Перевод: «У тебя есть религия? — Нет. Но я чувствую священный дух. — Что такое священный дух? — Это хороший путь для меня.»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ waso sewi</span> (в значении «птица в небе»)<br>
      <span class="ru">Ошибка: для предложения нужна li и lon.</span><br>
      <span class="tp">✓ waso li lon sewi</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ nasin sewi pona</span> (в значении «религия хорошая»)<br>
      <span class="ru">Ошибка: nasin sewi = «религия» — это одно целое подлежащее, потом li.</span><br>
      <span class="tp">✓ nasin sewi li pona</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ sewi tawa mi</span><br>
      <span class="ru">Ошибка: пропущено «mi tawa sewi» (я иду вверх).</span><br>
      <span class="tp">✓ mi tawa sewi</span>
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr><td><span style="color:var(--danger)">sewi nasin</span> (вместо «религия»)</td><td><span class="tp">nasin sewi</span></td></tr>
      <tr><td><span style="color:var(--danger)">jan li nasin sewi</span> (в значении «идёт по пути»)</td><td><span class="tp">jan li tawa nasin sewi</span></td></tr>
      <tr><td>ставить sewi/anpa без lon или tawa</td><td>нужен предлог: <span class="tp">mi lon sewi</span> / <span class="tp">mi tawa sewi</span></td></tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «птица в небе»? <span class="ru">(waso li lon sewi)</span></li>
      <li>Что означает <span class="tp">nasin sewi</span>? <span class="ru">(религия)</span></li>
      <li>Как сказать «я иду вниз»? <span class="ru">(mi tawa anpa)</span></li>
      <li>Что такое <span class="tp">nasin toki</span>? <span class="ru">(грамматика)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. <b>sewi</b> — верх, высокий, священный; <b>anpa</b> — низ, низкий, скромный.<br>
      2. <b>nasin</b> — универсальное слово: путь, метод, правило, религия.<br>
      3. <b>noka</b> — нога и основание.<br>
      4. Компас строится на <b>направлениях движения</b>: sewi / anpa / tawa / kama.<br>
      5. <b>nasin sewi</b> = «религия»; <b>nasin toki</b> = «грамматика».
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">anpa</span>?', opts: ['верх', 'низ, вниз', 'бок', 'путь'], ans: 1 },
    { q: 'Что означает <span class="tp">sewi</span>?', opts: ['низ', 'верх, высокий, священный', 'бок', 'путь'], ans: 1 },
    { q: 'Что означает <span class="tp">noka</span>?', opts: ['рука', 'нога, основание', 'голова', 'верх'], ans: 1 },
    { q: 'Что означает <span class="tp">poka</span>?', opts: ['верх', 'бок, рядом', 'низ', 'путь'], ans: 1 },
    { q: 'Что означает <span class="tp">nasin</span>?', opts: ['путь, метод, правило', 'дом', 'вода', 'зверь'], ans: 0 },
    { q: 'Что означает <span class="tp">ma</span>?', opts: ['небо', 'земля, страна', 'вода', 'гора'], ans: 1 },
    { q: 'Как сказать «птица вверху»?', opts: ['waso li lon sewi', 'waso li lon anpa', 'sewi waso', 'waso sewi'], ans: 0 },
    { q: 'Как сказать «я иду вниз»?', opts: ['mi tawa anpa', 'mi tawa sewi', 'anpa mi tawa', 'mi anpa tawa'], ans: 0 },
    { q: 'Что означает <span class="tp">nasin toki</span>?', opts: ['грамматика', 'путь домой', 'религия', 'буква'], ans: 0 },
    { q: 'Как сказать «религия»?', opts: ['nasin sewi', 'nasin anpa', 'sewi nasin', 'nasin tomo'], ans: 0 }
  ],
  test: [
    { q: 'Что означает <span class="tp">jan sewi</span>?', opts: ['святой человек / бог', 'человек вверху', 'высокий человек', 'низкий человек'], ans: 0, explain: 'sewi = священный.' },
    { q: 'Что означает <span class="tp">nasin sewi</span>?', opts: ['небесный путь', 'религия', 'дорога вверх', 'звёзды'], ans: 1, explain: 'nasin sewi = божественный путь.' },
    { q: 'Как сказать «я на улице»?', opts: ['mi lon ma', 'mi lon tomo', 'mi lon sewi', 'mi lon anpa'], ans: 0, explain: 'ma = улица, земля.' },
    { q: 'Введите «птица в небе»:', type: 'input', ans: 'waso li lon sewi', explain: 'sewi = верх / небо.' },
    { q: 'Введите «этот путь хорош»:', type: 'input', ans: 'nasin ni li pona', explain: 'nasin ni li pona.' },
    { q: 'Введите «я иду вниз»:', type: 'input', ans: 'mi tawa anpa', explain: 'tawa anpa = вниз.' },
    { q: 'Как сказать «боковая дорога»?', opts: ['nasin poka', 'poka nasin', 'nasin anpa', 'nasin sewi'], ans: 0, explain: 'nasin poka = боковая дорога.' },
    { q: 'Что означает <span class="tp">lon noka tomo</span>?', opts: ['у подножия дома', 'в доме', 'над домом', 'за домом'], ans: 0, explain: 'noka = основание.' }
  ],
  builder: [
    { words: ['waso', 'li', 'lon', 'sewi'], correct: ['waso', 'li', 'lon', 'sewi'], translation: 'птица в небе' },
    { words: ['mi', 'tawa', 'anpa'], correct: ['mi', 'tawa', 'anpa'], translation: 'я иду вниз' },
    { words: ['nasin', 'ni', 'li', 'pona'], correct: ['nasin', 'ni', 'li', 'pona'], translation: 'этот путь хорош' },
    { words: ['mi', 'lon', 'ma'], correct: ['mi', 'lon', 'ma'], translation: 'я на улице' },
    { words: ['nasin', 'sewi', 'li', 'pona'], correct: ['nasin', 'sewi', 'li', 'pona'], translation: 'религия хороша' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 6: nanpa pona — числа и количество
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp2-l6',
  title: 'nanpa pona',
  desc: 'размер, количество и система счисления nanpa',
  xp: 20,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Слова размера: <span class="tp">lili</span> (маленький), <span class="tp">suli</span> (большой)</li>
      <li>Как составлять числа больше 2 через <b>сложение</b></li>
      <li>Систему <b>nanpa</b> для порядковых чисел («первый», «второй»)</li>
      <li>Разницу между <span class="tp">ale</span> и <span class="tp">ali</span></li>
    </ul>

    <h3>🌍 Числа в toki pona</h3>
    <p>В toki pona <b>нет больших чисел</b> как в обычных языках. Классических числительных всего пять. Для больших чисел используется <b>сложение</b>.</p>

    <h3>📖 Новые слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">lili</td><td><b>lili</b></td><td>маленький, мало, молодой</td></tr>
      <tr>linja-pona<td class="sp-cell">suli</td><td><b>suli</b></td><td>большой, важный, взрослый</td></tr>
      <tr>linja-pona<td class="sp-cell">mute</td><td><b>mute</b></td><td>много, очень, количество</td></tr>
      <tr>linja-pona<td class="sp-cell">ale</td><td><b>ale</b></td><td>всё, все, полный, 100</td></tr>
      <tr>linja-pona<td class="sp-cell">ali</td><td><b>ali</b></td><td>всё, все (вариант ale)</td></tr>
      <tr>linja-pona<td class="sp-cell">nanpa</td><td><b>nanpa</b></td><td>число, номер, порядковый</td></tr>
      <tr>linja-pona<td class="sp-cell">luka</td><td><b>luka</b></td><td>рука, пять</td></tr>
    </table>

    <h3>🧩 Схема: lili vs suli</h3>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:16px 0;">
      <div style="background:var(--card2); border:1px solid var(--blue); border-radius:12px; padding:16px; text-align:center;">
        <div style="font-size:30px; margin-bottom:6px;">🔹</div>
        <div class="tp" style="font-weight:800; font-size:18px; color:var(--blue);">lili</div>
        <div style="font-size:12px; color:var(--muted); margin-top:4px; margin-bottom:8px;">маленький, мало</div>
        <div class="tp" style="font-size:13px;">jan lili</div>
        <div style="font-size:12px; color:var(--muted);">ребёнок</div>
      </div>
      <div style="background:var(--card2); border:1px solid var(--orange); border-radius:12px; padding:16px; text-align:center;">
        <div style="font-size:30px; margin-bottom:6px;">🔶</div>
        <div class="tp" style="font-weight:800; font-size:18px; color:var(--orange);">suli</div>
        <div style="font-size:12px; color:var(--muted); margin-top:4px; margin-bottom:8px;">большой, важный</div>
        <div class="tp" style="font-size:13px;">jan suli</div>
        <div style="font-size:12px; color:var(--muted);">взрослый</div>
      </div>
    </div>

    <h3>🧩 Схема: система nanpa через сложение</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="font-size:12px; color:var(--muted); margin-bottom:14px; text-transform:uppercase; letter-spacing:1px; text-align:center;">Числа получаются сложением</div>

      <table style="margin:0;">
        <tr><th>Значение</th><th>Как сказать</th><th>Логика</th></tr>
        <tr><td>1</td><td><span class="tp">wan</span></td><td>—</td></tr>
        <tr><td>2</td><td><span class="tp">tu</span></td><td>—</td></tr>
        <tr><td>3</td><td><span class="tp">tu wan</span></td><td>2 + 1</td></tr>
        <tr><td>4</td><td><span class="tp">tu tu</span> или <span class="tp">luka</span></td><td>2 + 2</td></tr>
        <tr><td>5</td><td><span class="tp">luka</span></td><td>рука (5 пальцев)</td></tr>
        <tr><td>6</td><td><span class="tp">luka wan</span></td><td>5 + 1</td></tr>
        <tr><td>7</td><td><span class="tp">luka tu</span></td><td>5 + 2</td></tr>
        <tr><td>10</td><td><span class="tp">luka luka</span></td><td>5 + 5</td></tr>
        <tr><td>20</td><td><span class="tp">mute</span> или 4 × 5</td><td>много</td></tr>
        <tr><td>100</td><td><span class="tp">ale</span></td><td>всё</td></tr>
      </table>
    </div>

    <div class="lesson-tip">
      <b>Философия:</b> большие числа считаются <b>неуместными</b>. Точное «1567» сказать сложно — и не нужно. Всё, что больше нескольких — <span class="tp">mute</span>.
    </div>

    <h3>🧩 Схема: порядковые числа через nanpa</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="text-align:center; font-size:14px; margin-bottom:12px;">
        <span style="background:var(--green); color:#fff; padding:6px 12px; border-radius:8px; font-weight:800;">nanpa</span>
        <span style="color:var(--muted); font-size:18px; margin:0 8px;">+</span>
        <span style="background:var(--blue); color:#fff; padding:6px 12px; border-radius:8px; font-weight:800;">число</span>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
        <div style="background:var(--card2); border-radius:8px; padding:8px 12px; text-align:center;">
          <div class="tp" style="font-weight:700;">nanpa wan</div>
          <div style="font-size:11px; color:var(--muted);">первый</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:8px 12px; text-align:center;">
          <div class="tp" style="font-weight:700;">nanpa tu</div>
          <div style="font-size:11px; color:var(--muted);">второй</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:8px 12px; text-align:center;">
          <div class="tp" style="font-weight:700;">nanpa luka</div>
          <div style="font-size:11px; color:var(--muted);">пятый</div>
        </div>
        <div style="background:var(--card2); border-radius:8px; padding:8px 12px; text-align:center;">
          <div class="tp" style="font-weight:700;">nanpa mute</div>
          <div style="font-size:11px; color:var(--muted);">«энный»</div>
        </div>
      </div>
    </div>

    <h3>🧩 Схема: ale vs ali</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <div style="background:var(--card2); border-radius:10px; padding:14px;">
          <div class="tp" style="font-weight:800; font-size:16px;">ale</div>
          <div style="font-size:12px; color:var(--muted); margin-top:6px;">классический вариант</div>
          <div style="font-size:12px; margin-top:6px;">Но можно спутать с <span class="tp">ala</span> («нет»).</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:14px; border:1px solid var(--green);">
          <div class="tp" style="font-weight:800; font-size:16px;">ali</div>
          <div style="font-size:12px; color:var(--muted); margin-top:6px;">вариант-уточнение</div>
          <div style="font-size:12px; margin-top:6px;">Появился, чтобы не путать с <span class="tp">ala</span>.</div>
        </div>
      </div>
      <div style="text-align:center; margin-top:14px; font-size:13px; color:var(--muted);">
        Оба варианта правильны. Используйте тот, что вам удобнее.
      </div>
    </div>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>mi jo e kili lili</b> — «у меня маленький фрукт»<br>
      <span class="ru">lili = маленький.</span>
    </div>

    <div class="lesson-example">
      <b>ona li suli</b> — «он взрослый / большой»<br>
      <span class="ru">suli = большой / важный / взрослый.</span>
    </div>

    <div class="lesson-example">
      <b>mi jo e kili tu wan</b> — «у меня три фрукта»<br>
      <span class="ru">tu wan = 2 + 1 = 3.</span>
    </div>

    <div class="lesson-example">
      <b>ona li jan nanpa wan</b> — «он первый человек»<br>
      <span class="ru">nanpa wan = первый.</span>
    </div>

    <div class="lesson-example">
      <b>jan ale li pona</b> — «все люди хорошие»<br>
      <span class="ru">jan ale = все люди.</span>
    </div>

    <div class="lesson-example">
      <b>mi wile e ale</b> — «я хочу всё»<br>
      <span class="ru">ale = всё.</span>
    </div>

    <h3>🗣️ Диалог 1: покупки</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina wile e kili pi mute seme?<br>
      <b>jan B:</b> mi wile e kili tu wan.<br>
      <b>jan A:</b> kili luka li pona mute. sina wile e ona?<br>
      <b>jan B:</b> ala. tu wan taso li pona.
    </div>
    <p><span class="ru">Перевод: «Сколько фруктов ты хочешь? — Хочу три. — Пять фруктов очень хорошо. Хочешь их? — Нет. Три — то, что надо.»</span></p>

    <h3>🗣️ Диалог 2: о времени</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> tenpo seme la, sina kama?<br>
      <b>jan B:</b> tenpo suno nanpa tu la, mi kama.<br>
      <b>jan A:</b> sina jo e tenpo mute?<br>
      <b>jan B:</b> lili. taso mi ken kama.
    </div>
    <p><span class="ru">Перевод: «Когда ты придёшь? — На второй день я приду. — У тебя много времени? — Мало. Но я могу прийти.»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ mi jo e tu kili</span><br>
      <span class="ru">Ошибка: число идёт после главного слова.</span><br>
      <span class="tp">✓ mi jo e kili tu</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ wan nanpa jan</span><br>
      <span class="ru">Ошибка: nanpa + число идут вместе, и оба перед существительным.</span><br>
      <span class="tp">✓ jan nanpa wan</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ kili li mute ale</span><br>
      <span class="ru">Ошибка: не смешивайте «mute» и «ale» без причины. Выбирайте одно.</span><br>
      <span class="tp">✓ kili li mute</span> или <span class="tp">kili li ale</span>
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr><td><span style="color:var(--danger)">tu kili</span></td><td><span class="tp">kili tu</span> (число после)</td></tr>
      <tr><td><span style="color:var(--danger)">jan tu wan</span> (в значении «третий человек»)</td><td><span class="tp">jan nanpa tu wan</span> (порядковое — с nanpa)</td></tr>
      <tr><td><span style="color:var(--danger)">lili wan</span> в значении «один маленький»</td><td><span class="tp">lili</span> + <span class="tp">wan</span> — сначала lili, потом wan: <span class="tp">ijo lili wan</span></td></tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «три фрукта»? <span class="ru">(kili tu wan)</span></li>
      <li>Как сказать «первый»? <span class="ru">(nanpa wan)</span></li>
      <li>Что означает <span class="tp">jan lili</span>? <span class="ru">(ребёнок)</span></li>
      <li>Как сказать «я хочу всё»? <span class="ru">(mi wile e ale)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. <b>lili</b> — маленький; <b>suli</b> — большой.<br>
      2. Число идёт <b>после</b> главного слова: <span class="tp">kili tu</span>.<br>
      3. Большие числа строятся сложением: <span class="tp">luka tu</span> = 7.<br>
      4. Порядковые числа — через <b>nanpa</b>: <span class="tp">jan nanpa wan</span>.<br>
      5. <b>ale</b> и <b>ali</b> — взаимозаменяемые варианты «всё».
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">lili</span>?', opts: ['большой', 'маленький', 'много', 'всё'], ans: 1 },
    { q: 'Что означает <span class="tp">suli</span>?', opts: ['маленький', 'большой, важный', 'немного', 'один'], ans: 1 },
    { q: 'Что означает <span class="tp">ale</span>?', opts: ['ничего', 'всё, все', 'немного', 'два'], ans: 1 },
    { q: 'Что означает <span class="tp">nanpa</span>?', opts: ['число, номер', 'буква', 'слово', 'звук'], ans: 0 },
    { q: 'Что означает <span class="tp">luka</span> как число?', opts: ['один', 'два', 'пять', 'десять'], ans: 2 },
    { q: 'Как сказать «ребёнок»?', opts: ['jan lili', 'jan suli', 'jan mute', 'jan ale'], ans: 0 },
    { q: 'Как сказать «взрослый»?', opts: ['jan lili', 'jan suli', 'jan mute', 'jan ale'], ans: 1 },
    { q: 'Как сказать «три»?', opts: ['wan', 'tu', 'tu wan', 'tu tu'], ans: 2 },
    { q: 'Как сказать «первый»?', opts: ['nanpa wan', 'wan nanpa', 'wan', 'nanpa tu'], ans: 0 },
    { q: 'Как сказать «все люди хорошие»?', opts: ['jan ale li pona', 'jan pona li ale', 'ale jan li pona', 'jan li ale pona'], ans: 0 }
  ],
  test: [
    { q: 'Как сказать «пять» через luka?', opts: ['luka', 'tu tu', 'tu wan', 'mute'], ans: 0, explain: 'luka = 5 (рука).' },
    { q: 'Как сказать «семь»?', opts: ['luka tu', 'luka wan', 'luka luka', 'mute'], ans: 0, explain: 'luka tu = 5 + 2 = 7.' },
    { q: 'Что означает <span class="tp">lipu nanpa tu</span>?', opts: ['две страницы', 'вторая страница', 'страница два', 'вторая книга'], ans: 1, explain: 'nanpa tu = второй.' },
    { q: 'Введите «маленький дом»:', type: 'input', ans: 'tomo lili', explain: 'lili = маленький.' },
    { q: 'Введите «все люди»:', type: 'input', ans: 'jan ale', explain: 'jan ale = все люди.' },
    { q: 'Введите «второй человек»:', type: 'input', ans: 'jan nanpa tu', explain: 'nanpa tu = второй.' },
    { q: 'Что означает <span class="tp">mi jo e kili tu wan</span>?', opts: ['у меня два фрукта', 'у меня три фрукта', 'у меня один фрукт', 'у меня пять фруктов'], ans: 1, explain: 'tu wan = 2 + 1 = 3.' },
    { q: 'Разница ale и ali:', opts: ['разные значения', 'одно и то же (варианты)', 'ali = мало', 'ale = ноль'], ans: 1, explain: 'ali — вариант, чтобы не путать с ala.' }
  ],
  builder: [
    { words: ['jan', 'lili', 'li', 'pona'], correct: ['jan', 'lili', 'li', 'pona'], translation: 'ребёнок хороший' },
    { words: ['mi', 'jo', 'e', 'kili', 'tu', 'wan'], correct: ['mi', 'jo', 'e', 'kili', 'tu', 'wan'], translation: 'у меня три фрукта' },
    { words: ['jan', 'ale', 'li', 'kama'], correct: ['jan', 'ale', 'li', 'kama'], translation: 'все люди пришли' },
    { words: ['ona', 'li', 'jan', 'nanpa', 'wan'], correct: ['ona', 'li', 'jan', 'nanpa', 'wan'], translation: 'он первый человек' },
    { words: ['mi', 'wile', 'e', 'ale'], correct: ['mi', 'wile', 'e', 'ale'], translation: 'я хочу всё' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 7: kule — цвета и качества
   ═══════════════════════════════════════════════════════════ */
{
  id: 'tp2-l7',
  title: 'kule',
  desc: 'цвета и описание качеств',
  xp: 20,
  content: `
    <h3>🎯 Что вы изучите в этом уроке</h3>
    <ul>
      <li>Пять базовых цветов: <span class="tp">walo</span>, <span class="tp">pimeja</span>, <span class="tp">loje</span>, <span class="tp">laso</span>, <span class="tp">jelo</span></li>
      <li>Слово <span class="tp">kule</span> — «цвет» в целом</li>
      <li>Как смешивать цвета для получения оттенков</li>
      <li>Как уточнять цвет через контекст: <span class="tp">laso telo</span> vs <span class="tp">laso kasi</span></li>
    </ul>

    <h3>🌍 Цвета в toki pona</h3>
    <p>В toki pona <b>пять</b> базовых цветов. Всё остальное — их комбинации. Это соответствует лингвистическому принципу: языки с малым словарём различают сначала светлое/тёмное, потом красное, потом синее/зелёное, потом жёлтое.</p>

    <h3>📖 Новые слова</h3>
    <table>
      <tr><th>sitelen pona</th><th>Слово</th><th>Значение</th></tr>
      <tr>linja-pona<td class="sp-cell">walo</td><td><b>walo</b></td><td>белый, светлый</td></tr>
      <tr>linja-pona<td class="sp-cell">pimeja</td><td><b>pimeja</b></td><td>чёрный, тёмный, тень</td></tr>
      <tr>linja-pona<td class="sp-cell">loje</td><td><b>loje</b></td><td>красный</td></tr>
      <tr>linja-pona<td class="sp-cell">laso</td><td><b>laso</b></td><td>синий, зелёный</td></tr>
      <tr>linja-pona<td class="sp-cell">jelo</td><td><b>jelo</b></td><td>жёлтый, светло-зелёный</td></tr>
      <tr>linja-pona<td class="sp-cell">kule</td><td><b>kule</b></td><td>цвет, окрашивать, цветной</td></tr>
    </table>

    <h3>🧩 Схема: пять базовых цветов</h3>

    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(100px, 1fr)); gap:10px; margin:16px 0;">
      <div style="background:#FFFFFF; border-radius:12px; padding:16px; text-align:center; color:#0D110F;">
        <div class="tp" style="font-weight:900; font-size:17px;">walo</div>
        <div style="font-size:11px; margin-top:4px; opacity:0.7;">белый</div>
      </div>
      <div style="background:#1a1a1a; border:1px solid var(--border); border-radius:12px; padding:16px; text-align:center; color:#fff;">
        <div class="tp" style="font-weight:900; font-size:17px;">pimeja</div>
        <div style="font-size:11px; margin-top:4px; opacity:0.7;">чёрный</div>
      </div>
      <div style="background:#D32F2F; border-radius:12px; padding:16px; text-align:center; color:#fff;">
        <div class="tp" style="font-weight:900; font-size:17px;">loje</div>
        <div style="font-size:11px; margin-top:4px; opacity:0.9;">красный</div>
      </div>
      <div style="background:#1976D2; border-radius:12px; padding:16px; text-align:center; color:#fff;">
        <div class="tp" style="font-weight:900; font-size:17px;">laso</div>
        <div style="font-size:11px; margin-top:4px; opacity:0.9;">синий / зелёный</div>
      </div>
      <div style="background:#FBC02D; border-radius:12px; padding:16px; text-align:center; color:#1a1a1a;">
        <div class="tp" style="font-weight:900; font-size:17px;">jelo</div>
        <div style="font-size:11px; margin-top:4px; opacity:0.8;">жёлтый</div>
      </div>
    </div>

    <h3>🧩 Схема: смешение цветов</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="font-size:12px; color:var(--muted); margin-bottom:14px; text-transform:uppercase; letter-spacing:1px; text-align:center;">Главный цвет первый, уточняющий второй</div>

      <table style="margin:0;">
        <tr><th>Фраза</th><th>Значение</th><th>Как получилось</th></tr>
        <tr><td><span class="tp">laso jelo</span></td><td>зелёный</td><td>синий + жёлтый</td></tr>
        <tr><td><span class="tp">loje walo</span></td><td>розовый</td><td>красный + белый</td></tr>
        <tr><td><span class="tp">walo pimeja</span></td><td>серый</td><td>белый + чёрный</td></tr>
        <tr><td><span class="tp">laso pimeja</span></td><td>тёмно-синий</td><td>синий + тёмный</td></tr>
        <tr><td><span class="tp">jelo walo</span></td><td>светло-жёлтый</td><td>жёлтый + белый</td></tr>
        <tr><td><span class="tp">pimeja loje</span></td><td>бордовый</td><td>тёмный + красный</td></tr>
      </table>
    </div>

    <div class="lesson-tip">
      <b>Порядок важен:</b> <span class="tp">laso jelo</span> — «синий с желтизной» (зелёный). А <span class="tp">jelo laso</span> — «жёлтый с синевой» (тоже зелёный, но с другим оттенком).
    </div>

    <h3>🧩 Схема: уточнение цвета через контекст</h3>

    <div style="background:var(--input); border:2px solid var(--border); border-radius:14px; padding:22px; margin:16px 0;">
      <div style="font-size:12px; color:var(--muted); margin-bottom:14px; text-transform:uppercase; letter-spacing:1px; text-align:center;">laso — это «и синий, и зелёный». Как различить?</div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <div style="background:var(--card2); border-radius:10px; padding:14px;">
          <div class="tp" style="font-weight:800;">laso telo</div>
          <div style="font-size:12px; color:var(--muted); margin-top:6px;">цвет воды = синий</div>
        </div>
        <div style="background:var(--card2); border-radius:10px; padding:14px;">
          <div class="tp" style="font-weight:800;">laso kasi</div>
          <div style="font-size:12px; color:var(--muted); margin-top:6px;">цвет растения = зелёный</div>
        </div>
      </div>
    </div>

    <h3>📝 Разбор примеров</h3>

    <div class="lesson-example">
      <b>suno li jelo</b> — «солнце жёлтое»<br>
      <span class="ru">suno = солнце. jelo = жёлтый.</span>
    </div>

    <div class="lesson-example">
      <b>telo li laso</b> — «вода синяя»<br>
      <span class="ru">laso без уточнений = синий или зелёный.</span>
    </div>

    <div class="lesson-example">
      <b>kasi li laso jelo</b> — «растение зелёное»<br>
      <span class="ru">laso jelo = «сине-жёлтый» = зелёный.</span>
    </div>

    <div class="lesson-example">
      <b>mi jo e len loje</b> — «у меня красная одежда»<br>
      <span class="ru">len = одежда. loje = красный.</span>
    </div>

    <div class="lesson-example">
      <b>soweli mi li walo</b> — «моя собака белая»<br>
      <span class="ru">soweli mi = моё животное. walo = белый.</span>
    </div>

    <div class="lesson-example">
      <b>pimeja li kama</b> — «наступает тьма»<br>
      <span class="ru">pimeja = тьма. kama = приходить.</span>
    </div>

    <div class="lesson-example">
      <b>len sina li kule seme?</b> — «какого цвета твоя одежда?»<br>
      <span class="ru">kule seme = «цвет какой?»</span>
    </div>

    <h3>🗣️ Диалог 1: покупка одежды</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> sina wile e len kule seme?<br>
      <b>jan B:</b> mi wile e len loje.<br>
      <b>jan A:</b> loje taso li lon. sina wile e loje anu loje walo?<br>
      <b>jan B:</b> loje walo li pona tawa mi.
    </div>
    <p><span class="ru">Перевод: «Какого цвета одежду ты хочешь? — Хочу красную. — Есть только красный. Хочешь красный или розовый? — Розовый мне нравится.»</span></p>

    <h3>🗣️ Диалог 2: о природе</h3>
    <div class="lesson-dialog">
      <b>jan A:</b> kasi sina li kule seme?<br>
      <b>jan B:</b> ona li laso kasi.<br>
      <b>jan A:</b> a! laso kasi li pona. ona li sama kasi mute.<br>
      <b>jan B:</b> lon. kasi laso li pona e ma.
    </div>
    <p><span class="ru">Перевод: «Какого цвета твоё растение? — Зелёное (цвета растения). — О! Зелёный хорош. Он как многие растения. — Да. Зелёные растения украшают землю.»</span></p>

    <h3>✏️ Задание: исправьте ошибку</h3>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ laso kasi telo</span> (в значении «зелёная вода»)<br>
      <span class="ru">Ошибка: не смешивайте уточнения без причины. Для «зелёная вода» — нужна отдельная логика.</span><br>
      <span class="tp">✓ telo laso kasi</span> (вода + зелёный цвет растения)
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ suno jelo li</span><br>
      <span class="ru">Ошибка: нарушен порядок. Сначала подлежащее, потом li.</span><br>
      <span class="tp">✓ suno li jelo</span>
    </div>

    <div class="lesson-example">
      <span style="color:var(--danger)">✕ kule len sina?</span><br>
      <span class="ru">Ошибка: для вопроса нужна seme и порядок S+V+O.</span><br>
      <span class="tp">✓ len sina li kule seme?</span>
    </div>

    <h3>⚠️ Типичные ошибки</h3>
    <table>
      <tr><th>Ошибка</th><th>Правильно</th></tr>
      <tr><td><span style="color:var(--danger)">laso jelo</span> без пояснения в контексте, где нужно «синий»</td><td><span class="tp">laso telo</span> (цвет воды = синий)</td></tr>
      <tr><td>ставить цвет <b>перед</b> словом</td><td>цвет — модификатор, идёт после: <span class="tp">len loje</span></td></tr>
      <tr><td>забывать li при цвете как сказуемом</td><td><span class="tp">suno li jelo</span>, а не <span style="color:var(--danger)">suno jelo</span></td></tr>
    </table>

    <h3>✅ Проверка понимания</h3>
    <ul>
      <li>Как сказать «солнце жёлтое»? <span class="ru">(suno li jelo)</span></li>
      <li>Как сказать «вода синяя»? <span class="ru">(telo li laso)</span></li>
      <li>Что означает <span class="tp">laso jelo</span>? <span class="ru">(зелёный)</span></li>
      <li>Что означает <span class="tp">loje walo</span>? <span class="ru">(розовый)</span></li>
    </ul>

    <h3>💡 Итог урока</h3>
    <div class="lesson-tip">
      <b>Что вы теперь знаете:</b><br>
      1. Пять базовых цветов: <b>walo, pimeja, loje, laso, jelo</b>.<br>
      2. <b>laso</b> = и «синий», и «зелёный». Уточняем через <span class="tp">laso telo</span> / <span class="tp">laso kasi</span>.<br>
      3. Смешивание: главный цвет первым, уточняющий вторым.<br>
      4. <span class="tp">kule</span> — «цвет» вообще; <span class="tp">kule seme</span> = «какого цвета».<br>
      5. Цвета — это модификаторы: <span class="tp">len loje</span>, <span class="tp">soweli pimeja</span>.

      <div style="margin-top:14px; padding-top:14px; border-top:1px dashed var(--border);">
        <b>🎉 Поздравляем! Вы закончили курс nanpa tu.</b> Теперь вы знаете 100+ слов и умеете строить сложные предложения с частицами, модальными глаголами, вопросами, отрицанием, числами и цветами. Впереди — <b>nanpa mute</b>: nimi ku suli, абстрактные понятия, стилистика. <span class="tp">o kama sona mute!</span>
      </div>
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="tp">walo</span>?', opts: ['чёрный', 'белый', 'красный', 'синий'], ans: 1 },
    { q: 'Что означает <span class="tp">pimeja</span>?', opts: ['белый', 'чёрный, тёмный', 'красный', 'зелёный'], ans: 1 },
    { q: 'Что означает <span class="tp">loje</span>?', opts: ['красный', 'синий', 'зелёный', 'жёлтый'], ans: 0 },
    { q: 'Что означает <span class="tp">laso</span>?', opts: ['красный', 'синий, зелёный', 'жёлтый', 'белый'], ans: 1 },
    { q: 'Что означает <span class="tp">jelo</span>?', opts: ['жёлтый', 'красный', 'синий', 'чёрный'], ans: 0 },
    { q: 'Что означает <span class="tp">kule</span>?', opts: ['цвет', 'свет', 'тень', 'форма'], ans: 0 },
    { q: 'Как сказать «солнце жёлтое»?', opts: ['suno li jelo', 'suno jelo', 'jelo li suno', 'suno li kule'], ans: 0 },
    { q: 'Как сказать «вода синяя»?', opts: ['telo li laso', 'telo laso', 'laso telo', 'laso li telo'], ans: 0 },
    { q: 'Что означает <span class="tp">laso jelo</span>?', opts: ['синий', 'жёлтый', 'зелёный', 'белый'], ans: 2 },
    { q: 'Что означает <span class="tp">loje walo</span>?', opts: ['розовый', 'красный', 'белый', 'серый'], ans: 0 }
  ],
  test: [
    { q: 'Что означает <span class="tp">len loje</span>?', opts: ['красная одежда', 'синяя одежда', 'белая одежда', 'новая одежда'], ans: 0, explain: 'loje = красный.' },
    { q: 'Что означает <span class="tp">laso kasi</span>?', opts: ['синий', 'зелёный', 'жёлтый', 'белый'], ans: 1, explain: 'laso kasi = цвет растения.' },
    { q: 'Что означает <span class="tp">laso telo</span>?', opts: ['синий', 'зелёный', 'серый', 'белый'], ans: 0, explain: 'laso telo = цвет воды.' },
    { q: 'Введите «красный цвет»:', type: 'input', ans: 'kule loje', explain: 'kule loje = красный цвет.' },
    { q: 'Введите «солнце жёлтое»:', type: 'input', ans: 'suno li jelo', explain: 'suno li jelo.' },
    { q: 'Введите «чёрный зверь»:', type: 'input', ans: 'soweli pimeja', explain: 'soweli pimeja.' },
    { q: 'Что означает <span class="tp">walo pimeja</span>?', opts: ['серый', 'белый', 'чёрный', 'розовый'], ans: 0, explain: 'walo + pimeja = свето-тёмный = серый.' },
    { q: 'Какого цвета <span class="tp">loje walo</span>?', opts: ['розовый', 'красный', 'белый', 'бордовый'], ans: 0, explain: 'loje walo = красно-белый = розовый.' }
  ],
  builder: [
    { words: ['suno', 'li', 'jelo'], correct: ['suno', 'li', 'jelo'], translation: 'солнце жёлтое' },
    { words: ['mi', 'jo', 'e', 'len', 'loje'], correct: ['mi', 'jo', 'e', 'len', 'loje'], translation: 'у меня красная одежда' },
    { words: ['telo', 'li', 'laso'], correct: ['telo', 'li', 'laso'], translation: 'вода синяя' },
    { words: ['kasi', 'li', 'laso', 'jelo'], correct: ['kasi', 'li', 'laso', 'jelo'], translation: 'растение зелёное' },
    { words: ['soweli', 'mi', 'li', 'walo'], correct: ['soweli', 'mi', 'li', 'walo'], translation: 'моя собака белая' }
  ]
}

];