import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/barcelona/cotton-house-hotel-barcelona-xlarge.jpg"
                    title="Cotton House Hotel"
                    location="Barcelona, Catalonia, Spain"
                    description="Renowned designer Lázaro Rosa-Violán has worked his theatrical, baroque magic on this neoclassical, 19th-century building, once home to the cotton-makers’ guild. Artfully desilvered floor-to-ceiling mirrors reflect vast sprays of cotton bolls and white sofas, and a majestic 1950s suspended spiral staircase rises from the vestibule. In a year, the Cotton House has set a new benchmark for hotel design and immaculate service. In L’Atelier, a salon lined with bolts of cotton, guests can choose from swatches of super-soft fabric and ask that a tailor measure them up for a shirt. Next door, in the coffered, frescoed library, they can pull up a turquoise armchair by the fire and request a cocktail from a discreet navy-clad waitress. The Batuar restaurant does not disappoint, either, with Catalan-inspired dishes given creative pizzazz and served, in summer, on a colonial-styled terrace shaded by date palms and parasols. Upstairs, a plunge pool and daybeds offer an oasis from which to admire the spires of the Sagrada Família. Double rooms from £175."
                    price="£188/night"
                />
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/Hampshire/limewood-hotel-new-xlarge.jpg"
                    title="Lime Wood"
                    location="New Forest, Hampshire, England"
                    description="It’s all about attention to detail at this ravishing, deeply luxurious New Forest lair. Oak doors are thick; paint finishes rich; floor lights come on as you walk into the bathroom from your quietly opulent bedroom; stylised sitting rooms, one with billiard table, melt one into another, pale lemon into lilac into sage green, each with an open fire. In the sybaritic Herb House spa, guests can take in the forest views from the massive sauna and eat inspired raw food in the Raw & Cured café. Lime Wood is also home to Hartnett Holder & Co, a heaven-sent partnership between that most grounded of celebrity chefs, Angela Hartnett, and Lime Wood’s own Luke Holder. Their Italian-influenced forest dishes and sharing plates are served in a richly coloured velvety dining room that’s as glam as it’s laid-back. It’s how we want to live today, and Lime Wood has captured the mood. Its setting at the heart of 145 square miles of ancient heath and woodland only enhances its standing as the epitome of chic rural luxury. Double rooms from £315."
                    price="£395/night"
                />
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/scandanavia/sweden/ett-hem-stockholm-garden-seating-xlarge.jpg"
                    title="Ett Hem"
                    location="Stockholm, Sweden"
                    description="It’s not easy to offer immaculate service and be disarmingly down to earth at the same time, but staff at the 12 -room Ett Hem in Stockholm’s leafy embassy district manage the trick with aplomb. The name means “home” – in this case, a stylish temple to Nordic cosiness. Housed in a mansion built in 1910, the hotel’s design shows how it might have looked in its day, with candlelit, parquet-floored drawing rooms furnished with contemporary and vintage Scandinavian furniture – one with a grand piano for all to play – that lead into a book-lined dining room. There are plenty of places to curl up, dine or both. The food is exceptional: the chefs – several escapees from Michelin-starred restaurants – rustle up local, seasonal meals on request (beef tartare kimchi was a favourite) in front of guests at the kitchen table. There’s also a pretty conservatory, terraced garden and Swedish sauna. Each bedroom is decadent and unique, with an antique porcelain-tiled wood burner here, a vast free-standing tub there. Double rooms from £300."
                    price="£357/night"
                />
            </div>
            <div className="home__section">
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/fermes-de-marie-xlarge.jpg"
                    title="Les Fermes de Marie"
                    location="Megève, Rhône-Alpes, France"
                    description="As Jean-Louis and Jocelyne Sibuet strolled in the mountains above stylish Megève, they were captivated by the rustic charm of the ancient timber chalets peppering the Alpine pastures. Several years later, in 1989, the duo launched their first Megève hotel, Les Fermes de Marie, made of materials from those very chalets, transported a short walk from the heart of Megève and painstakingly restored. Reminiscent of a rural hamlet, linked by meandering footpaths and burbling streams, the nine chalets contain 70 cosy rooms and suites, three restaurants, a ski shop and the original cowshed-chic spa. In the outdoor hot tub, guests soak ski-tired legs, contemplating the blanket of snow settled over wide timber eaves, the fragrant pine swags and neatly stacked logs cut for the countless open fires that warm the hotel’s restaurants, inviting snugs and free-standing chalets. The smallest of the chalets, Mont Blanc, is surely one of the world’s finest suites: picture-perfect, with its own garden, a homely sitting room with a vast open fire and a romantic double room. Double rooms from £298."
                    price="£306/night"
                />
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/hotel-cap-eden-roc-xlarge.jpg"
                    title="Hotel du Cap-Eden-Roc"
                    location="Cap d'Antibes, Côte d'Azur, France"
                    description="A throwback to the F Scott Fitzgerald era, this grand 19th-century mansion on Cap d’Antibes has 117 rooms and two villas with sumptuous Louis XV and XVI furnishings, gilded mirrors and chandeliers. The gastronomic Eden-Roc Restaurant has just been renovated and serves classics such as roasted sea bass and lobster with tarragon; the Grill offers Provençal-style gambas at the seafront pavilion. Set among nine hectares of landscaped gardens, there are five clay tennis courts, a Sisley spa and a seawater pool cut into the natural rock. A seafront diving board and overwater trapeze launch bathers into the Mediterranean and there is a jetty for guests arriving by boat. Best of all are the 33 beach cabins where the illustrious and notorious come to hide: Marc Chagall used to paint on these clifftops, Roger Moore waterskied here and Johnny Weissmuller used to do his signature Tarzan yell as he dived into the sea. Double rooms from £400."
                    price="£595/night"
                />
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/four-seasons-gresham-palace-xlarge.jpg"
                    title="Four Seasons Hotel Gresham Palace"
                    location="Budapest, Hungary"
                    description="If service is a hallmark of a great hotel, then Gresham Palace can be said to deliver. A guest wanting to propose to his girlfriend in style asked for her to be given a wake-up call by a bell boy dressed as a Hungarian Hussar. (She said yes.) If style is another criterion, this magnificent building, originally the creation of the London-based Gresham Life Assurance Society and a meeting place for Budapest’s affluent and arty, has it in abundance. A €100m renovation in 2004 brought the building back to its fin-de-siècle prime, complete with art-nouveau flourishes, zsolnay tiles and wrought-iron Peacock Gates, and added some extra Four Seasons pizzazz. When it comes to location, Gresham Palace’s position on the Danube, directly overlooking the twinkling lights of the Chain Bridge, also earns it 10 out of 10. The wow factor begins the moment guests set foot in the hotel’s spectacular lobby, extends to the Kollázs Brasserie & Bar and continues right through to the wake-up call the following morn. Double rooms from £240."
                    price="£303/night"
                />
            </div>
            <div className="home__section">
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/ireland1/ballyfin-county-laois-ireland-bathroom2-xlarge.jpg"
                    title="Ballyfin"
                    location="County Laois, Ireland"
                    description="One of Ireland’s most lavish neoclassical houses, Ballyfin stands in its own 614-acre demesne, full of delights, including lake (with glorious new water feature), water cascade, Victorian fernery, Edwardian rockery and walled garden, not to mention the tower, which has panoramic views of the Slieve Bloom mountains from the top. A Downton-esque knot of neatly uniformed staff awaits each arriving guest, setting the tone for service that is old school, yet full of Irish warmth. The reception rooms are filled with superb antiques and paintings and there is a classically styled indoor pool and two treatment rooms . Every bedroom is gorgeous, in classic Irish country-house style. Perhaps the loveliest is Lady Caroline Coote, with its graceful Empire-style ceiling, but it’s hard to choose. Five more have recently been added, making 20, from the lake-view Lady Kildare, with its delicate chinoiserie, to the subtle Indian accents of Lady Mornington. As for the food, it lives up to the surroundings. Standards are sky-high; this is the sort of place where one jarring note would spoil the show – but it never does. Double rooms from £407."
                    price="£700/night"
                />
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/gritti-palace-xlarge.jpg"
                    title="The Gritti Palace"
                    location="Venice, Veneto, Italy"
                    description="If we want everything to stay as it is, everything needs to change. So says Tancredi in the great twilight-of-the-aristocracy novel Il Gattopardo. It could be the motto of historic Venetian grande dame The Gritti Palace, whose recent £36.5m top-to-toe restoration was designed to make everything look the same – just even more opulently stylish. One example: every sparkling teardrop pendant of every vintage chandelier was detached, repaired or replaced and polished by Murano artisans. The upgrade is most keenly felt in the 82 rooms, their antique décor and fine Rubelli silk fabrics freshened up by designer Chuck Chewning, without forfeiting any romance. Personable GM Paolo Lorenzoni is one of the best in the country – courteous, ever-present, quick to respond to problems – and the staff, in their impeccable vintage liveries, are role models in a city that doesn’t always get service right. A waterside breakfast on the terrace overlooking the shimmering Grand Canal has to be one of the great Venetian experiences – it knocks a Bellini in Harry’s Bar into a cocked hat. Double rooms from £310."
                    price="£585/night"
                />
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/italy-50-best/castello-di-casole-italy-xlarge.jpg"
                    title="Belmond Castello di Casole"
                    location="Casole d'Elsa, Tuscany, Italy"
                    description="Luchino Visconti knew a spectacular set when he saw one, and in the 1960s, at the height of his film-making fame, he choose this 10th-century hilltop Tuscan estate as his country retreat. In a land of sublime views, the 360-degree prospect over the countryside between San Gimignano and Siena is unparalleled. Four years ago, the castle and the cluster of buildings around it were converted into a hotel, while the old farmhouses scattered around the surrounding vineyards, olive groves and flower meadows have been restored as luxury villas. The owners – Timbers Resorts – have done a superb job: the 50-odd bedrooms retain their original beamed ceilings, terracotta floors and exposed stonework, while antique furniture is combined with sumptuous Italian fabrics and topnotch facilities. Ristorante Tosca – which spills into the central courtyard – hits the right note with outstanding regionally inspired dishes, homemade pastas, local meats and estate-produced olive oils and wine. An Essere Spa and a lavish pool top the list of facilities in this idyllic, immaculately run hotel. Double rooms from £382."
                    price="£642/night"
                />
            </div>
            <div className="home__section">
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/provence/Bastide-de-Gordes-Provence-summary-xlarge.jpg"
                    title="La Bastide de Gordes"
                    location="Gordes, Provence, France"
                    description="Provençal’s tough past has long provided the setting for the well-heeled and tasteful. Hill-topping villages. Castles. Ramparts. Rip out the ruffians and they’re ripe for luxury. Thus, the Bastide de Gordes, clamped to the cliff-side of France’s most fashionable perched village. Here, among tight streets and steep stairways, be French media stars, the more discreet billionaires, and visitors for whom Provence needs cushioning into a five-star experience. The Bastide is their place. Last year’s £18-million re-fit transformed a fine hotel into a world beater. It’s old façades unfold down the drop, where once the ramparts were, in a series of stone terraces bearing grey-green Med vegetation, two swimming pools and sunlit hideaways. Views to the Luberon hills mesmerise. Within, 40 rooms and suites recall the sumptuous side of the 18th-century. Corridors and stairs, rich with treasures, rarely arrive at the same place twice. Manorial salons impose elegance. Young staff, dressed as if for a fête c.1912, have the bounce and smiles of a US musical comedy. And down below there is the Sisley spa. Posh eating is in the hands of Michelin-man Pierre Gagnaire; there’s a cheaper brasserie along the same terrace. As you finish the rosé, replete, Provence is at your feet. It’s been there a long time. It will wait. Double rooms from £141."
                    price="£469/night"
                />
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/italy/liguria/belmond-hotel-splendido-restaurant-xlarge.jpg"
                    title="Belmond Hotel Splendido"
                    location="Portofino, Liguria, Italy"
                    description="Portofino is a theatrically pretty fishing village on the Ligurian Riviera, where traditional wooden boats and venerable churches sit beside mighty superyachts and shiny outposts of Pucci and Gucci. Lording over this tripperish scene is the indisputably splendid Belmond Hotel Splendido, set high on a hillside, with a glorious wisteria-cloaked façade, terraced gardens with infinity pool, and an abiding sense that this really is one of the great hotels of Italy. Rex Harrison started it all when he bought a villa nearby in the 1950s, and although this former Benedictine monastery is now filled with photographs of its many glamorous guests, there’s little stuffiness. Life here is all about a lazy lunch on the panoramic terrace, with its lemon trees and views over Portofino Bay, as genial, long-serving staff in café-crème jackets deliver dreamy dishes such as ravioli with walnut sauce and baked sea bream. The 67 charming rooms and suites are spread over five floors. Most have a balcony and sea view – perfect for throwing open the shutters on a sunny morning and feeling in love with life. Double rooms from £407."
                    price="£591/night"
                />
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/d-hotel-maris-xlarge.jpg"
                    title="D-Maris Bay"
                    location="Marmaris, Turquoise Coast, Turkey"
                    description="Surrounded by dramatic volcanic rocks and hillsides lush with almond trees, D-Hotel Maris stands in an unblemished nature reserve and looks towards the Aegean and Mediterranean. Repeat guests know to request a harbour-facing room for the best views and to make a point of sailing those turquoise-tinted waters aboard the resort’s 100ft yacht Pasa. Kayaking, diving and more can also be arranged at the watersports centre, five beaches provide variety and a spa offers refuge on rare rainy days. On summer evenings, dinner can be taken at an alfresco outpost of London’s Japanese restaurant Zuma or one of five other dining options. Wherever guests end up, service is sincere, the crowd sophisticated and the atmosphere carefree. An additional bonus is that it’s just a two-hour drive, or 25-minute helicopter transfer, from Dalaman airport. Double rooms from £220."
                    price="£287/night"
                />
            </div>
            <div className="home__section">
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/villa-feltrinelli-lake-garda-xlarge.jpg"
                    title="Grand Hotel a Villa Feltrinelli"
                    location="Lake Garda, Italy"
                    description="Lake Como is perhaps the best known of the Italian lakes, but it’s Garda that is home to the region’s finest hotel. Formerly the retreat of lumber magnate Faustino Feltrinelli’s sons, Villa Feltrinelli was home to Mussolini from 1943 to 1945 during the Republic of Salò. The turreted wedding-cake pink villa is immersed in eight acres of gardens shaded by olive, oak and magnolia trees on the lake’s western shore. With only 21 rooms, decorated with antiques and historic prints, overnighting here is like staying at a friend’s country home. On a summer’s afternoon there’s nothing like a game of croquet on the green, unwinding by the pool or strolling in the lemon garden. With a staff ratio of three to one, service is second to none. And with two Michelin stars, Stefano Baiocco makes creative dishes that blend prized ingredients with food from Italy’s cucina povera. There’s no need to dash to breakfast as it’s served all day, and can be enjoyed anywhere, just as it would be at a friend’s house. Double rooms from £798."
                    price="£957/night"
                />
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Russia/Moscow/four-seasons-hotel-moscow-luxury-2-xlarge.jpg"
                    title="Four Seasons Hotel Moscow"
                    location="Moscow, Russia"
                    description="A mixture of Stalin-era design, cinematic views and contemporary Western styling have transformed this 21st-century reimagining of the former Hotel Moskva (1935-2004 ) into a world-class wonder. Four Seasons took over the landmark building in 2014 after a multimillion-pound reconstruction, thereby securing one of the most exclusive addresses – between the Kremlin and State Duma – in the city. This proximity to power adds to the illusion of living like a moneyed local, a notion fuelled by shimmering chandeliers, spa treatments that feature flakes of 24-carat gold, and marble-clad corridors that echo to the click of killer heels en route to the low-lit cocktail bar. The sense of hedonism reaches a climax in the Kremlin-facing suites, where the views of Red Square and St Basil’s Cathedral make these the ultimate post-clubbing party pads. Double rooms from £213."
                    price="£337/night"
                />
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/claridges-xlarge.jpg"
                    title="Claridge's"
                    location="Mayfair, London, England"
                    description="If there’s one hotel that would make a perfect, spoiling gift, it’s Claridge’s. Once the staid and stately base for royalty and dowager duchesses, it is today at a pinnacle in its 160-year history. Slip past the celebrity-spotters outside, through the revolving door and into the glacial marble-floored Front Hall, once a turning circle for horse-drawn carriages. Take the wrought-iron lift, with sofa and attendant, to your room or suite, perhaps designed by David Linley or Diane von Fürstenberg. In the wonderful chrome and marble art-deco bathroom, luxuriate in the sunken tub, which fills in seconds. See and be seen at breakfast or tea in the ravishing foyer or for champagne in the showy Claridge’s Bar, or slip into Simon Rogan’s sylvan restaurant, Fera, or the shadowy Fumoir for cocktails. Underpinned by continuity and depth of service, Claridge’s is a ribbon-tied gift box of a gorgeous, glamorous hotel. Double rooms from £420."
                    price="£499/night"
                />
            </div>
            <div className="home__section">
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/la-reserve-paris-xlarge.jpg"
                    title="La Réserve Paris Hotel and Spa"
                    location="Paris, France"
                    description="This Jacques Garcia-designed hotel feels more like the palatial home of a Parisian millionaire (such as its last owner, Pierre Cardin) than a hotel. Located in the eighth arrondissement, in a row of grand Haussman-era houses, it oozes bourgeois decadence, its antique-filled living spaces walled in ruby silk, its gilded library adorned with leather-bound tomes, its floors scattered with Persian rugs. Its rooms, though, are light, luxe and considered. Walls and doors are solid and soundproofed. Lights can be turned off with one simple switch. Beds are swathed in crisp Quagliotti linen and bathrooms lined in white Carerra marble. The views, from wrought-iron balconies, are as romantic as the best in Paris: over the copper Pantheon domes towards the Eiffel Tower. Should any guest consider leaving their suite, there’s a candelit spa downstairs, slick, elegantly attired staff to arrange excursions, and fine-dining menus by hot chef Jerome Banctel to sample. It’s the discreet place for high society to meet, so prices are high. But it’s so deliciously French that that only response is a Gallic shrug. Doubles from £547."
                    price="£722/night"
                />
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/abadia-retuerta-xlarge.jpg"
                    title="Abadía Retuerta LeDomaine"
                    location="Valladolid, Castilla y Léon, Spain"
                    description="Lying in the bath, gazing across vineyards to the mountains beyond while sipping a glass of velvety Abadía Retuerta wine, is a pretty good way to sink into the LeDomaine experience. A Romanesque abbey in the Ribera del Duero region is the spectacular setting for one of Spain’s most sumptuous hotels. Although it dates back to the 12th century, this is very much a 21st-century place, with a Michelin-starred restaurant in the former refectory and a spa where treatments are based on a guest’s taste in wine. Although the building and the surrounding estate are vast, there are only 30 rooms and suites, mostly created from the former monks’ cells, with newer options in the stables. Members of staff outnumber guests but are invariably unobtrusive. Personal butlers are on call whenever anything is needed. The former cloister garden is now a soothing spot for languid breakfasts, while the chapter house has been turned into a bar for after-dinner drinks. The church is an intimate venue for a wedding – and no one would want to go anywhere else for a honeymoon. Double rooms from £310."
                    price="£408/night"
                />
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/finca-cortesin-marbella-xlarge.jpg"
                    title="Finca Cortesin Hotel Golf & Spa"
                    location="Malaga, Andalucia, Spain"
                    description="It is all about cool calmness at Finca Cortesín, an Andalusian idyll where jasmine and roses scent the air. In the foothills of the Sierra Bermeja, between Marbella and Sotogrande, this is the Costa del Sol without the glitz but with a lot of understated glamour. Set in a vast estate with one of the best golf courses in Spain and a superb spa, it is actually less than a decade old but looks like a traditional country house, thanks to the renowned interior designer Duarte Pinto Coelho, who sourced antiques from Spain, Portugal, Morocco and beyond. There are 67 suites and villas with four bedrooms, all with plenty of space and peace. From the moment guests arrive, they sense that everything will be taken care of as they sink into a chair in the shade of an ancient olive tree or dive into one of the pools – there are four, including one down at the Beach Club. The Kabuki Raw restaurant has just gained a Michelin star and the Mediterranean cuisine at El Jardín de Lutz deserves one too. Double rooms from £280."
                    price="£433/night"
                />
            </div>
            <div className="home__section">
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/laucala-xlarge.jpg"
                    title="Laucala Island"
                    location="Fiji"
                    description="This 3,500-acre private island has been owned by two multi-millionaires (Malcolm Forbes and Red Bull’s Dietrich Mateschitz) who have turned a natural paradise into a holiday heaven. Amid flower-strewn forests, there’s a David McLay Kidd golf course, a thatched spa in the cool jungly forest, stables of thoroughbred horses, a panoply of pools, and a dive centre with 14 boats and a submarine. Five restaurants serve delicious dishes from teppanyaki wagyu beef to exquisite morsels created using ingredients from the island’s farm. With only 25 villas – the most romantic perched above crashing waves and the biggest set atop the island’s peak – each guest feels as if they have the island to themselves. Every inch is looked after by 350 Fijian staff who, when they aren’t smiling or proffering fresh fruit juice or a martini, are delivering warm banana cake or just-cleaned shoes before vanishing to leave you watching distant waves phosphoresce in the moonlight. Double rooms from £4,000."
                    price="£3,600/night"
                />
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/australia/queensland/whitsundays/qualia-whitsundays-australia-p-xlarge.jpg"
                    title="Qualia"
                    location="Whitsundays, Queensland, Australia"
                    description="When architect Chris Beckingham designed Qualia, the 60-pavilion resort perched on the northernmost point of Hamilton Island, his brief was to “draw the outside in”. When “outside” is the tip of the World Heritage-listed Great Barrier Reef, home to the world’s largest coral-reef ecosystem, this meant capturing the glorious natural profusion of the island. Handcrafted from wood and stone, the buildings blend into the natural terrain as effortlessly as a koala curled in a gumtree. All the exquisitely appointed pavilions face the water, with uninterrupted views over the Coral Sea, and some have their own private plunge pools. This is a self-contained haven with relaxation at its heart, so guests are provided with their own golf buggies to move around the manicured grounds between two restaurants serving fine Australian cuisine, a cocktail bar, two pools and a private beach, library and spa with a wide range of treatments. Slow mornings might be spent strolling on the beach by a glittering sea or just lying in on soft, downy beds. Double rooms from £500."
                    price="£741/night"
                />
                <Card 
                    source="https://www.telegraph.co.uk/content/dam/Travel/hotels/articles/fifty-best-hotels/amansara-xlarge.jpg"
                    title="Amansara"
                    location="Siem Reap, Cambodia"
                    description="Amansara was originally a 1960s French modernist villa commissioned by King Sihanouk as a summer retreat for his VIP guests. The Aman group restored the building in 2002 and later brought its signature minimalist style to bear on a spa, a lap pool and 12 new suites furnished with terrazzo floors, hardwood fittings, sandstone reliefs and private courtyard plunge pools. This refreshed architectural gem is now run with sparkling efficiency by Sally Baughen and her staff and provides a perfect sanctuary from the booming streets of downtown Siem Reap. More importantly, the hotel lies on the threshold of the Unesco World Heritage Site, home to Angkor Wat and the jungle-clad ruins of the Khmer Empire. Guests are provided with their own tuk-tuk and driver to explore the rich heritage on their minimalistic doorstep. After a day of temple-trotting, visitors are welcomed back by the cheery hotel staff with afternoon tea served to the sounds of traditional Khmer music in the swish Sixties dining room. Mid-century architecture meets 10th-century culture – a heavenly combination. Double rooms from £609."
                    price="£1,306/night"
                />
            </div>
        </div>
    )
}

export default Home
