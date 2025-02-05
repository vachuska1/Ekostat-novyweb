document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelectorAll('.navbar a');
    const pageTitle = document.getElementById('pageTitle');
    const textContent1 = document.getElementById('textContent1');
    const textContent2 = document.getElementById('textContent2');
const textContent3 = document.getElementById('textContent3');
const textContent4 = document.getElementById('textContent4');
const textContent5 = document.getElementById('textContent5');
const textContent6 = document.getElementById('textContent6');
const textContent7 = document.getElementById('textContent7');
const textContent8 = document.getElementById('textContent8');
const textContent9 = document.getElementById('textContent9');
const textContent10 = document.getElementById('textContent10');
const textContent11 = document.getElementById('textContent11');
const textContent12 = document.getElementById('textContent12');
const textContent13 = document.getElementById('textContent13');
const textContent14 = document.getElementById('textContent14');
const textContent15 = document.getElementById('textContent15');
const textContent16 = document.getElementById('textContent16');
const textContent17 = document.getElementById('textContent17');
const textContent18 = document.getElementById('textContent18');
const textContent19 = document.getElementById('textContent19');


    const contentTexts = {
        'O nás': {
            title: 'O nás',
            text1: 'Specializujeme se na udržitelnou výstavbu, racionální využití přirodních zdrojů a vybraných odpadů.'
        },
        'Sídlo společnosti': {
            title: 'Sídlo společnosti',
            text1: 'Ekostat a.s.',
            text2: 'Mánesova 459/46',
            text3: '37001 České Budějovice'
        },
        'Kancelář a laboratoř': {
            title: 'Kancelář a laboratoř',
            text1: 'Mayerova 1067',
            text2: '34101 Horažďovice',
            text3: 'tel.: 602305209',
            text4: 'e-mail: vachuska@ekostat.cz'
        },
        'Výrobní závod': {
            title: 'Výrobní závod',
            text1: 'Dubská ulice, areál POLDI Kladno',
            text2: '27201 Kladno',
            text3: 'tel.: 602305209',
            text4: 'e-mail: vachuska@ekostat.cz'
        },
        'Technologie': {
            title: 'Technologie',
            text1: "Společnost EKOSTAT a.s. se zabývá využitím širokému okruhu odpadních materiálů. Největší pozornost věnujeme zpracování prašných anorganických odpadů, stavebních a demoličních odpadů a odpadních plastů. Stavíme na moderních řešeních, která vedou v průmyslu výroby stavebních hmot a zpracování odpadů ke snižování nákladů a zároveň ke snižování spotřeby přírodních neobnovitelných zdrojů. Opíráme se o vlastní, více jak 20leté zkušenosti v oblasti zpracování vybraných odpadů a jejich praktické využití. Našim cílem je přispívat k udržitelné výrobě stavebních materiálů, a to nejenom efektivním využitím dostupných odpadních materiálů, spoluprací s výrobci stavebních hmot a municipalitami, ale také cílenou osvětou. Navrhujeme konkrétní řešení uplatnění odpadních materiálů, a to nejenom pro zákazníky v ČR, ale i v zahraničí.",
            textContent18: "ahoj"
        },
        'Výroba betonu': {
            title: 'Výroba betonu',
            text1: 'Naše společnost je moderní a inovativní firmou, která se kromě jiného specializuje i na výrobu betonu a stavebních směsí. Využíváme nejnovější technologie a dostupné inovace, abychom dosáhli nejvyšší kvality našich výrobků.',
            text2: 'Jedním z našich klíčových prvků je využití vlastních inovací ve výrobě betonu. Neustále pracujeme na vývoji nových receptur a postupů, které zlepšují vlastnosti betonu a stavebních směsí. To nám umožňuje produkovat výrobky s vysokou pevností, odolností a stabilitou.',
            text3: 'Dalším faktorem, který nás odlišuje, je využití moderních materiálů, jako jsou alternativní pojiva, disperní armatura, kompozitní výztuže a další materiály.',
            text4: 'Navíc se snažíme využívat dostupné inovace v oblasti udržitelné výroby. Snažíme se minimalizovat naše ekologické stopy a zavádět ekologicky šetrné postupy. Používáme recyklované a odpadní materiály, minimalizujeme odpad a snižujeme emise, abychom přispěli k udržitelnému vývoji stavebního průmyslu.',
            text5: 'Celkově je naším cílem poskytovat nejvyšší kvalitu a inovace ve výrobě betonu a stavebních směsí. Spolupracujeme s architekty, stavebními firmami a developery, abychom se podíleli na realizaci moderních a udržitelných stavebních projektů. Díky našim inovacím jsme schopni nabídnout výrobky, které splňují nejvyšší technické požadavky a přispívají k efektivní a odolné výstavbě.',
        },
        'Granulace': {
            title: 'Granulace',
            text1: 'Naše společnost se specializuje na granulaci prašných odpadních materiálů pomocí inovativních technologií, které jsme vyvinuli. Granulace je proces, při kterém se tvoří pevné granule z odpadních materiálů, což zvyšuje jejich hodnotu a usnadňuje jejich recyklaci nebo další využití.',
            text2: 'Co nás odlišuje od ostatních společností je naše schopnost využívat vlastní inovace, které jsme vyvinuli, abychom dosáhli maximální účinnosti při granulaci. Naše zařízení jsou navržena tak, aby minimalizovala ztráty materiálu a energie, a zároveň maximalizovala výstup granulů.',
            text3: 'Další výhodou naší společnosti je, že využíváme dostupné inovace, což znamená, že se zaměřujeme na využití technologií a materiálů, které jsou již k dispozici na trhu. Tímto způsobem zajišťujeme, že naše zařízení jsou provozuschopná a snadno udržovatelná.',
            text4: 'Naše společnost je také zaměřena na udržitelnost a ochranu životního prostředí. Díky granulaci odpadních materiálů snižujeme jejich objem a umožňujeme jejich efektivní využití. Tím přispíváme k ochraně přírodních zdrojů a snižování environmentální zátěže.',
            text5: 'Snažíme se být lídrem v oblasti granulace odpadních materiálů a poskytovat našim zákazníkům nejefektivnější a ekologicky šetrné řešení. Díky našim vlastním inovacím a využívání dostupných technologií jsme schopni dosáhnout vynikajících výsledků a zvýšit hodnotu odpadních materiálů.',
        },
        'Drcení materiálů': {
            title: 'Drcení materiálů',
            text1: 'Naše společnost je lídrem v oblasti drcení odpadních materiálů a využívá nejmodernější technologie k jejich zpracování. Specializujeme se zejména na drcení plastů, dřeva a stavebního materiálu.',
            text2: 'Naším cílem je pomáhat snižovat množství odpadu na skládkách a přispívat k udržitelnému využití zdrojů. Díky našim zařízením a vysoce efektivním metodám drcení jsme schopni odpadní materiál zpracovat do formy, která je vhodná pro další recyklaci či využití.',
            text3: 'Plasty jsou jedním z největších problémů, kterým čelíme v oblasti odpadů. Jsou vyrobeny z ropných produktů a jejich rozklad trvá desítky či dokonce stovky let. Naše technologie umožňuje drcení plastových odpadů na menší částice, které lze následně využít v různých druzích výrobků, jako jsou například nové plastové a plastbetonové výrobky či palivo pro energetická zařízení.',
            text4: 'Dřevo je dalším materiálem, který se často dostává na skládky. Naše zařízení umožňuje drcení dřeva na třísky či piliny, které lze využít jako palivo pro vytápění či výrobu dřevěných materiálů, jako jsou například dřevěné desky či palubky.',
            text5: 'Stavební materiál, jako jsou například cihly, beton či sklo, je také častým odpadem, který je zpravidla obtížně recyklovatelný. Naše technologie umožňuje drcení a zpracování těchto materiálů na menší částice, které lze následně využít jako stavební materiál pro nové projekty či jako výplň pro stavby.',
            text6: 'Spolupracujeme s různými sektory a přizpůsobujeme naše technologie jejich individuálním potřebám. Naše zařízení jsou navržena tak, aby byla efektivní a šetrná k životnímu prostředí. Jsme hrdí na to, že přispíváme k udržitelnému využívání zdrojů a pomáháme snižovat negativní dopady odpadu na planetu.', 
        },
        'Spoluprace s obcemi': {
            title: 'Spolupráce s obcemi',
            nadpis1: "Koncepce, strategie, analýzy:",
            text1: 'Poskytujeme odborné poradenské služby obcím a městům, podporujeme ekonomický a sociální rozvoj regionu. Pro obce, města a mikroregiony zpracováváme strategie, programy rozvoje, koncepce, analýzy.',
            nadpis2: "Mezinárodní spolupráce:",
            text2: 'Máme zkušenost s účastí a říezním mezinárodních projektů v oblastech turismu, zachování přírodního a kulturního bohatství, odpadového hospodářství a lokální ekjonomiky.',
            nadpis3: "Networking:",
            text3: 'Propojujeme zástupce samospráv s odborníky z různých organizací a úřadů, s pracovníky vládních institucí.',
            nadpis4: "Příprava a administrace projektů:",
            text4: 'Zajišťujeme přípravu projektových žžádostí a administraci projektů.',
            nadpis5: "",
            text5: '',
        },
        'Strategické dokumenty obcí': {
            title: 'Strategické dokumenty obcí',
            text1: 'Navrhujeme a zpracováváme strategické dokumenty obcí, měst a regionů od roku 2021. Zaměřujeme se na rozvoj regionů a v portfoliu nabízíme včetně konzultací:',
            nadpis2: '  ●  Strategické rozvojové dokumenty obcí, měst a regionů v návaznosti na komplexní řešení',
            text2: '',
            nadpis3: '  ●  Strategické dokumenty rozvoje lokální ekonomiky',
            text3: '',
            nadpis4: '  ●  Analýzy a návrhy realizace dopravní a potravinové obslužnosti obcí',
            text4: '',
            nadpis5: '  ●  Zpracování analýz pro efektivní nakládání s odpady',
            text5: '',
            nadpis6: '  ●  Zastupování obcí při jednáních s odpadovými společnostmi',
            text6: '',
            nadpis7: '  ●  Návrhy realizace a rekonstrukce sběrných dvorů a sběrných míst',
            text7: '',
            nadpis8: '  ●  Strategické rozvojové dokumenty turistického ruchu',
            text8: '',
            nadpis9: '',
            text9: 'Naší specializací je řízení činnosti mikroregionů a dobrovolných svazků obcí v součinnosti s dílčími cíli jednotlivých obcí a měst, tak aby docházelo ke komplexnímu rozvoji prostoru občanů a podnikatelů, ve kterém žijí a podnikají a který je pro ně nejpříjemnějším místem existence.',
            
        },
        'Nakládání s odpady': {
            title: 'Nakládání s odpady',
            nadpis1: "",
            text1: 'Navrhujeme přímé řešení likvidace odpadů odběratelskými společnostmi a navrhujeme materiálové řešení uplatnění všech tříděných složek komunálního odpadů ve vztahu na budování lokální ekonomiky.',
            nadpis2: "",
            text2: 'Pro obce a města navrhujeme autonomní systémy nakládání s odpady. Nesoustředíme se pouze na analýzy produkce odpadů, navrhujeme spádově vhodné sběrné nádoby, sběrná místa i samotné sběrné dvory. Moderní způsob nakládání s odpady doplňujeme vzdělávacími a motivačními systémy tak, aby bylo nakládání s odpady efektivní, co nejméně nákladné a spravedlivé pro všechny, kdo se ho účastní.',
            nadpis3: "",
            text3: 'Naším cílem je motivovat občany a společnosti, aby mnohem více, a přitom přirozeným způsobem nakládali s odpadem, měli povědomí o jeho skutečných nákladech. Města a obce se snažíme motivovat k tomu, aby se snažily využívat svých možností a zájmu občanů a podnikatelských subjektů k podpoře snižování množství odpadů a jeho přímého zpracování, v rámci podpory lokální ekonomiky.',
            nadpis4: "  ●  Zpracování analýz pro efektivní nakládání s odpady",
            text4: '',
            nadpis5: "  ●  Zastupování obcí při jednáních s odpadovými společnostmi",
            text5: '',
            nadpis6: "  ●  Návrhy realizace a rekonstrukce sběrných dvorů a sběrných míst",
            text6: '',

        },
        'Lokální ekonomika': {
            title: 'Lokální ekonomika',
            nadpis1: "Vytváříme na základě profesionálních analýz návody řešení pro podporu zavádění lokální ekonomiky pro obce a regiony, které jsou velice přínosné, zejména, pokud se tyto návody opírají o skutečná ověření, která byly v rámci už realizována.",
            text1:"",
            nadpis2:"",
            text2: 'Význam podpory místních samospráv je pro rozvoj lokální ekonomiky klíčový. V podmínkách ČR, potažmo státech střední Evropy není historie koncepční podpory lokální ekonomiky významná a je prosazována zejména zkušenými regionálními politiky, kteří správně chápou její význam, a kromě vlastních iniciativ využívají příkladů dobré praxe úspěšných projektů lokální ekonomiky v jiných obcích a regionech. Tak velké množství zastupitelů, jaké je v ČR, je velmi obtížné průběžně vzdělávat v oblasti LEK v podmínkách čtyřletého funkčního období, zejména, pokud obce a regiony čelí dalším výzvám, které jsou komunikovány historicky v delším časovém horizontu a jsou pro ně mnohem větší hrozbou (absence kanalizace, vodovodů, odpadového hospodářství, …).',
            nadpis3: "",
            text3: "Globalizace vyčerpává svůj potenciál, zaznamenává postupně stagnaci hospodářského růstu, nárůst nezaměstnanosti, nárůst státního zadlužení. Přechod od tradičních výrob na výroby digitalizované a automatizované zvyšuje cenu pracovní síly a zvyšuje nezaměstnanost. Nastupuje trend od globalizace k automatizaci a regionalizaci ekonomických činností. Přesto se političtí představitelé „brání“ významné podpoře decentralizace a relokalizace, a proto je také v současnosti spolupráce mezi místní samosprávou a podniky a vzdělávacími institucemi tak nevýrazná a neefektivní.",
            nadpis4: "",
            text4: "Probíhá relokalizace (návrat do kontextu lokálních podmínek s cílem snížit rizika spojená s globálními řetězci, nástup řetězců zákaznických, poptávkových) a souběžně rurbanizace (budování „městeček“ na venkově, e-towns, která se profilují online službami). Daný region je v těchto konceptech nahlížen primární zdroj kulturních, ekologických a ekonomických hodnot, jejichž správa je klíčovým faktorem pro trvale udržitelný rozvoj.",
            nadpis5:"Existují čtyři základní pilíře nastartování lokální ekonomiky:",
            text5: "",
            nadpis6:"  ●  Vůle zabývat se lokální ekonomikou",
            text6:"",
            nadpis7:"  ●  Znalost prostředí a určení směru podpory lokální ekonomiky. (Idea – víme co)",
            text7:"",
            nadpis8:"  ●  Realizace záměru, nastavení síťování stakeholderů regionu a infomačních kanálů na základě potenciálu daného místa. (Cesta – víme jak)",
            text8:"",
            nadpis9:"  ●  Podpora a údržba, pravidelný networking, sdílení výsledků a jejich komunikace",
            text9:"",
            nadpis10:" Zpracováváme veškeré analýzy a strategické dokumenty spojené se zaváděním lokální ekonomiky v obcích a regionech, včetně vyhodnocení jejich dopadu.",
            text10:"",
            nadpis11:"",
            text11:"Při zavádění hodnocení lokální ekonomiky v obcích a regionech využíváme identifikace současné ekonomické situace a analýzy silných a slabých stránek místní ekonomiky. Kromě toho musí být zpracována strategie pro zlepšení a růst této ekonomiky. Zároveň je nezbytné vytvořit srozumitelné komunikační prostředí, které definuje rozvoj například elektronických komunikačních sítí v centrech měst a obcí, případně jednotné komunikační prostředí pro celý region.",
            nadpis12:"",
            text12:"Proces hodnocení analýzy místní ekonomiky zahrnuje srovnávací zpracování a dostupné informace, včetně identifikace překryvů geografických, ekonomických, technických a demografických vstupů. Kromě toho je důležité provést SWOT analýzu, která slouží jako nástroj pro posouzení silných a slabých stránek obce, vnějších příležitostí a nebezpečí. Tento proces pomáhá určit nejlepší strategii pro růst a zlepšení ekonomiky obce a regionu.",
            nadpis13:"",
            text13:"Hodnocení místní ekonomiky obce a regionu musí zahrnovat také analýzu vnějších vlivů, jako jsou politické, ekonomické, sociální, technické a ekologické faktory. Je nezbytné plánovat regionální a lokální rozvoj systematicky a mít strategii pro další postup. Proces hodnocení místní ekonomiky může být také použit pro optimalizaci procesů a postupů v obecní správě. Aby bylo možné dosáhnout úspěchu, musí být tato strategie v souladu s hlavními strategickými dokumenty na místní a regionální úrovni.",
            nadpis14:"",
            text14:"Z tohoto hodnocení se pak vyvozuje, zda budou potřebná opatření prováděna ze strany obcí a mikroregionů Měly by být zpracovány další rozvojové strategie, například plán investic a rozvoje do infrastruktury, poskytnutí podpůrných opatření lokálním podnikatelským subjektům, podpora malým a středním podnikům a zvýhodnění například alokací lokálních drobných zdrojů. Další strategie dále souvisí s ochranou životního prostředí, jako je například snížení spotřeby energií a přírodních zdrojů, snížení emisí skleníkových plynů a zachování biodiverzity. V této souvislosti může být rovněž užitečné, aby obce podporovaly ekologickou produkci potravin a dalších produktů. Tato strategie může dále zahrnovat zajišťování a poskytování finančních prostředků na rozvojové programy a ekonomický růst. Při poskytování finančních prostředků na rozvoj místní ekonomiky nebo na podporu podnikání je nezbytné, aby se do procesu zahrnuli různé subjekty v rámci obcí a regionů. Podpora může pocházet z městského úřadu, místních firem, dobrovolných svazků obcí, obcí nebo od jiných partnerů. Dodržování obecně platných zákonů a pravidel je jeden z nejdůležitějších prvků úspěšného rozvoje. Pro účinnou implementaci projektu lokálního rozvoje ekonomiky je třeba také zaručit jeho úspěšnou propagaci a získat podporu občanů obce a celého regionu.",
        },
        'Enviroment': {
            title: 'Enviroment',
            nadpis1: "",
            text1:"Zabýváme se využitím regionálně vzniklých prašných odpadů, stavebních a demoličních odpadů a vybraných druhů tříděných složek komunálního odpadu.",
            nadpis2:"",
            text2: 'Dopady řešení využití prašných odpadních materiálů jsou rozsáhlé a významné. V současné době jsou jejich původci - provozovatelé kamenolomů postaveni v souvislosti s řešením otázky prašných odpadních materiálů před několik zásadních překážek.',
            nadpis3: "",
            text3: "Z jedné strany jsou původci odprašků pod velkým tlakem zákazníků, kteří vyžadují kvalitní surovinu – přírodní kámen nejenom podle platných norem, ale někdy i podle vlastních požadavků. To zvyšuje nároky na provozní odsávání. Nemalým tlakům jsou zpracovatelé vystaveni i nárokům vyplývajících z dodržování pracovních podmínek. Tyto faktory potenciálně zvyšují množství odprašků.",
            nadpis4: "",
            text4: "Na druhé straně je ještě pohled enviromentální. Snižování využití množství odprašků a stavebních a demoličních odpadů zvyšuje spotřebu těžených neobnovitelných přírodních zdrojů, případně řešení jejich následného zbytečného skládkování a zbytečného převozu na dlouhé vzdálenosti. Prozatím ještě nejsou náklady spojené s těžbou přírodních surovin a se skládkováním odprašků tak vysoké jako v zahraničí, ale u některých původců tvoří tyto náklady nezanedbatelnou část. I když se odprašky skládkují do doby jejich využití prozatímně přímo v kamenolomech, dochází postupně k jejich kumulaci. To může mít následně negativní dopad na zdraví pracovníků, místních obyvatel a další náklady, které jsou spojené s jejich převážením, protože v kamenolomech blokují další těžbu.",
            nadpis5:"",
            text5: "Vybrané složky komunálního odpadu jako je papír, plasty, odpadní dřevo a popel je můžné na regionálí úrovni a v rámci lokální ekonomiky vhodně využít a to jak ekonomicky, tak i k rozvoji samotného regionu. Přepracování vybraných složek komunálního odpadu v rámci regionu významně přispívá ke snižování nákladů spojených s likvidací odpadů, k motivování občanů vedoucí ke snižování produkce množství odpadů a specializované výrobě nových výrobků se širokým použitím.",
            nadpis6: 'Inovace',
            text6: 'Naše společnost se specializuje na inovace ve stavebnictví a odpadovém hospodářství. Jsme specialsté poskytující technologie a řešení, která pomáhají transformovat stavební průmysl a minimalizovat jeho negativní dopady na životní prostředí.',
            text7: 'Naše inovativní přístupy zahrnují využití obnovitelných materiálů, snižování energetické náročnosti, efektivní využívání odpadů a recyklaci odpadových materiálů. Pracujeme nejen s velkými stavebními firmami, ale také s malými a středními podniky.',
            text8: 'Nabízíme řešení pro všechny fáze stavebního procesu, naše technologie a know-how umožňují efektivní využívání zdrojů, minimalizaci odpadu a zlepšení celkových ekonomických výsledků projektů.',
            text9: 'Spolupracujeme také s veřejným sektorem a institucemi, abychom podpořili zavádění udržitelných stavebních postupů a odpadového hospodářství na státní, regionální a místní úrovni. Společně se snažíme vytvořit prostředí, které je šetrné k životnímu prostředí a přispívá k dlouhodobé udržitelnosti naší společnosti.',
            text10: 'Naše představení je zaměřeno na inovace, udržitelnost a dlouhodobé spolupráce zejména na regionální úrovni a rozvoji lokální ekonomiky. Jsme hrdí na naši práci a na to, že pomáháme přetvořit prostor ve kterém žijeme do udržitelnější podoby.'
        
        },
        'Inovace': {
            title: 'Inovace',
            text1: 'Naše společnost se specializuje na inovace ve stavebnictví a odpadovém hospodářství. Jsme specialsté poskytující technologie a řešení, která pomáhají transformovat stavební průmysl a minimalizovat jeho negativní dopady na životní prostředí.',
            text2: 'Naše inovativní přístupy zahrnují využití obnovitelných materiálů, snižování energetické náročnosti, efektivní využívání odpadů a recyklaci odpadových materiálů. Pracujeme nejen s velkými stavebními firmami, ale také s malými a středními podniky.',
            text3: 'Nabízíme řešení pro všechny fáze stavebního procesu, naše technologie a know-how umožňují efektivní využívání zdrojů, minimalizaci odpadu a zlepšení celkových ekonomických výsledků projektů.',
            text4: 'Spolupracujeme také s veřejným sektorem a institucemi, abychom podpořili zavádění udržitelných stavebních postupů a odpadového hospodářství na státní, regionální a místní úrovni. Společně se snažíme vytvořit prostředí, které je šetrné k životnímu prostředí a přispívá k dlouhodobé udržitelnosti naší společnosti.',
            text5: 'Naše představení je zaměřeno na inovace, udržitelnost a dlouhodobé spolupráce zejména na regionální úrovni a rozvoji lokální ekonomiky. Jsme hrdí na naši práci a na to, že pomáháme přetvořit prostor ve kterém žijeme do udržitelnější podoby.'
        },
        'Výrobky, fotogalerie': {
            title: 'Výrobky, fotogalerie',
            text1: 'Zde budou výrobky'
        },
        'Download': {
            title: 'Ke stažení',
            textContent18: 'TL/Kompozitní sítě a vlákna Ceník 12024.pdf',
            textContent19: 'TL/Čedičová kompozitní síť TL CZ 5_2022.pdf',
            textContent20: 'TL/Čedičové vlákno CarboBasalt TL CZ 10_2023.pdf',
            textContent21: 'TL/Čedičové vlákno TL CZ 3_2022.pdf',
            textContent22: 'TL/Makrovlákno ARMOTEC TL CZ 9_2022.pdf',

            textContent23: 'TL/Polypropylénové vlákno TL CZ 4_2022.pdf',
        },
    }
   


document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".navbar a");

    // Nastavíme položku "Home" jako výchozí aktivní
    menuItems[0].classList.add("active");

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", function () {
            // Odstraníme třídu "active" od všech položek menu
            menuItems.forEach(function (item) {
                item.classList.remove("active");
            });

            // Přidáme třídu "active" k aktivní položce menu
            menuItem.classList.add("active");
        });
    });
});
function toggleMenu() {
    var menu = document.querySelector('.navbar ul');
    menu.classList.toggle('show');
}
window.onclick = function() {
    // Volání funkce toggleMenu() po načtení stránky
    toggleMenu();
};

const pdfLink1 = document.createElement('a');
pdfLink1.innerText = 'Kompozitní sítě a vlákna Ceník 12024';
pdfLink1.target = '_blank'; // Otevře odkaz v novém okně/záložce

const pdfLink2 = document.createElement('a');
pdfLink2.innerText = 'Čedičová kompozitní síť TL CZ 5';
pdfLink2.target = '_blank'; 

const pdfLink3 = document.createElement('a');
pdfLink3.innerText = 'Čedičové vlákno CarboBasalt TL CZ 10';
pdfLink3.target = '_blank'; 

const pdfLink4 = document.createElement('a');
pdfLink4.innerText = 'Čedičové vlákno TL CZ 3';
pdfLink4.target = '_blank'; 

const pdfLink5 = document.createElement('a');
pdfLink5.innerText = 'Makrovlákno ARMOTEC TL CZ 9';
pdfLink5.target = '_blank'; 

const pdfLink6 = document.createElement('a');
pdfLink6.innerText = 'Polypropylénové vlákno TL CZ 4';
pdfLink6.target = '_blank'; 

const pdfLink7 = document.createElement('a');
pdfLink7.innerText = 'Certifikát čedičové vlákno CBG CarboBasalt';
pdfLink7.target = '_blank'; 

const pdfLink8 = document.createElement('a');
pdfLink8.innerText = 'Certifikát čedičová kompozitní síť';
pdfLink8.target = '_blank'; 

const pdfLink9 = document.createElement('a');
pdfLink9.innerText = 'Certificate Composite basalt mesh';
pdfLink9.target = '_blank'; 

navbarLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const dataContent = link.getAttribute('data-content');
        const content = contentTexts[dataContent];

        pageTitle.innerText = content.title;

        for (let i = 1; i <= 18; i++) {
            const textContentElement = eval(`textContent${i}`);
            const contentKey = `text${i}`;
            const nadpisKey = `nadpis${i}`;

            if (content[nadpisKey]) {
                textContentElement.innerHTML = `<strong>${content[nadpisKey]}</strong><br>${content[contentKey]}`;
            } else {
                textContentElement.innerText = content[contentKey] || '';
            }
        }

        navbarLinks.forEach(function (navLink) {
            navLink.classList.remove('active');
        });
        link.classList.add('active');

        if (dataContent === 'Download') {
            // Aktualizace odkazů na PDF na záložce ke stažení
            pdfLink1.href = 'TL/Kompozitní sítě a vlákna Ceník 12024.pdf';
            pdfLink2.href = 'TL/Čedičová kompozitní síť TL CZ 5_2022.pdf';
            pdfLink3.href = 'TL/Čedičové vlákno CarboBasalt TL CZ 10_2023.pdf';
            pdfLink4.href = 'TL/Čedičové vlákno TL CZ 3_2022.pdf';
            pdfLink5.href = 'TL/Makrovlákno ARMOTEC TL CZ 9_2022.pdf';
            pdfLink6.href = 'TL/Polypropylénové vlákno TL CZ 4_2022.pdf';
            pdfLink7.href = 'TL/Certifikát čedičové vlákno CBG CarboBasalt';
            pdfLink8.href = 'TL/Certifikát čedičová kompozitní síť';
            pdfLink9.href = 'TL/Certificate Composite basalt mesh';
            textContent18.innerHTML = ''; // Vymaže předchozí obsah, aby se neopakoval
            textContent18.appendChild(pdfLink1); // Přidá odkaz na PDF 1
            textContent18.appendChild(document.createElement('br'));
            textContent18.appendChild(document.createElement('br'))
            textContent18.appendChild(document.createElement('br'));
            textContent18.appendChild(pdfLink2); // Přidá odkaz na PDF 2
            textContent18.appendChild(document.createElement('br'));
            textContent18.appendChild(document.createElement('br'))
            textContent18.appendChild(pdfLink8);
            textContent18.appendChild(document.createElement('br'));
            textContent18.appendChild(document.createElement('br'))
            textContent18.appendChild(document.createElement('br'));
            textContent18.appendChild(pdfLink3); // Přidá odkaz na PDF 3
            textContent18.appendChild(document.createElement('br'));
            textContent18.appendChild(document.createElement('br'))
            textContent18.appendChild(pdfLink7);
            textContent18.appendChild(document.createElement('br'));
            textContent18.appendChild(document.createElement('br'))
            textContent18.appendChild(pdfLink9);
            textContent18.appendChild(document.createElement('br'));
            textContent18.appendChild(document.createElement('br'))
            textContent18.appendChild(document.createElement('br'));
            textContent18.appendChild(pdfLink4); // Přidá odkaz na PDF 4
            textContent18.appendChild(document.createElement('br'));
            textContent18.appendChild(document.createElement('br'))
            textContent18.appendChild(document.createElement('br'));
            textContent18.appendChild(pdfLink5); // Přidá odkaz na PDF 5
            textContent18.appendChild(document.createElement('br'));
            textContent18.appendChild(document.createElement('br'))
            textContent18.appendChild(document.createElement('br'));
            textContent18.appendChild(pdfLink6);
             // Přidá odkaz na PDF 6
        } else {
            // Skryje odkazy na PDF na ostatních záložkách
            textContent18.innerHTML = '';
        }
    });
});
})
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
    var submenus = document.getElementsByClassName("submenu");
    for (var i = 0; i < submenus.length; i++) {
        submenus[i].classList.remove("show");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll('.navbar .menu-item');

    menuItems.forEach(function (item) {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.classList.add('show'); // Přidat třídu 'show' pro podpoložky
            item.addEventListener('click', function (event) {
                event.stopPropagation(); // Zastavit propagaci události, aby se menu nezavřelo po kliknutí na podpoložku
                submenu.classList.toggle('show');
            });
        }
        item.addEventListener('click', function () {
            var href = this.querySelector('a').getAttribute('href');
            window.location.href = href;
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const pdfLinks = document.querySelectorAll('.text-content a'); // Vyberete všechny odkazy na PDF

    // Skryjete všechny názvy "Technické listy" a odkazy na PDF při načtení stránky
    pdfLinks.forEach(function (pdfLink) {
        pdfLink.innerText = ''; // Smažete text u odkazu
        pdfLink.style.display = 'none'; // Skryjete odkaz
    });

    const navbarLinks = document.querySelectorAll('.navbar ul.menu-items a'); // Vyberete všechny odkazy v navigačním menu
    const pageTitle = document.getElementById('pageTitle'); // Element pro název stránky

    navbarLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const dataContent = link.getAttribute('data-content');

            // Skryjete všechny názvy "Technické listy" a odkazy na PDF před výběrem záložky
            pdfLinks.forEach(function (pdfLink) {
                pdfLink.innerText = ''; // Smažete text u odkazu
                pdfLink.style.display = 'none'; // Skryjete odkaz
            });

            if (dataContent === 'Download') {
                // Zobrazíte odkazy na PDF pouze na záložce "Ke stažení"
                pdfLinks.forEach(function (pdfLink) {
                    pdfLink.innerText = 'Ke stažení'; // Aktualizujete text na odkazu
                    pdfLink.style.display = 'block'; // Zobrazíte odkaz
                });
            }

            // Aktualizujete název stránky
            const contentTitle = link.getAttribute('data-title');
            pageTitle.innerText = contentTitle;

            // Přidáte/nebo aktualizujete zobrazení obsahu podle potřeby
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });
});
function toggleMenu2() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show'); // Přidá nebo odebere třídu 'show' pro zobrazení/skrytí menu

    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('show'); // Přidá nebo odebere třídu 'show' pro zobrazení/skrytí položek menu
}

// Připojení události kliknutí na ikonu menu
const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', toggleMenu2);

