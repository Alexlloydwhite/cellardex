CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "pairing" (
	id SERIAL PRIMARY KEY,
	"wine" VARCHAR (1000) NOT NULL,
	"food" VARCHAR (1000) NOT NULL,
	"description" VARCHAR(10000) NOT NULL
);

CREATE TABLE "saved_pairing" (
	id SERIAL PRIMARY KEY,
	"pairing_id" INT REFERENCES "pairing",
	"user_id" INT REFERENCES "user",
	UNIQUE("pairing_id")
);

CREATE TABLE "user_insights" (
	id SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"wine" VARCHAR (200) NOT NULL,
	"thoughts" VARCHAR (10000) NOT NULL,
	"location" VARCHAR (200) NOT NULL,
	"enjoyed_with" VARCHAR (100),
	"image" VARCHAR (10000) NOT NULL
);

INSERT INTO pairing (food, wine, description) VALUES
('99-cent-pizza', 'Montepulciano dAbruzzo', 'Cheap slices always have plenty of red sauce tomato acid, and you want a wine with a good amount of acid, too, so tit wont taste flat or strangely sweet in comparison to the pizza. The fatty mozzarella is even more reason to pick a crisp, sharp wine. Monepulciano, which is a grape grown all over Italy, is naturally wine in acidity and a dear friend to the budget slice. The vivid, plummy, medium-bodied red is notable for its aromatic herbs- oreganno and pepper in particular - which seamlessly fill out the flavor deficits, namely blandness, that come with pizza that costs as much as breath savers. These wines are best server with a slight chill, so drop them in the fridge first!'),
('Grilled Cheese', 'Cahors', 'whether youre nine or ninty-nine, the soft, creamy, buttery-crisp, steaming-hot joy of grilled cheese is universal. And the bread-and-cheese sleeve of crunchy ooze is simple enough even for those who cant boil an egg to execute. A cheese sandwich of such immense staying power wwants a red wine with generous reserves of supple tannin, fruity pop, and firm body to slice and dice the greasy startch and fatty dairy. The red wine is Malbex- not from Argentina but from southwestern France. In Cahors, the wines are distinct from the Southern Hemisphere versions you might know. Where the Argentine edition has a velvetty texture that might wimper at the onslaught of melted lipids, Cahors has a bitter chew that eats through them like a wood chipper. These rustic wines have more tart in the form of dark fruits like plum and blackberry, and their tannins are taut as Simon Cowells brow. Its a savory little package with grilled cheese that makes me buckle at the knees.'),
('Packaged Ramen', 'Alsace Pinot Gris', 'All ramen is dominated by rich, savory flavors. This kind of unbridled unami calls for a wine with both a touch of residual sweetness and a truckload of acidity to level the flavor. Alsatian Pinot Gris is often off-dry, which translates to "a little sweet," with a light sugar element that will temper the broths saltiness by softening its intensity. Because you also need a wine with enough body and texture to avoid falling flat against the broth, Pinot Gris, with its glorious ability to sing a high, bright note while remaining grounded in richness and weight, is the ultimate ramen lover. With its easy texture, high acidity, and soft sweetness, its positioned to get the most out of the many toppings you see in high-end ramen. It can manage all the fatty, savory, and bitter you throw at it, particularly all at once.'),
('Kentucky Fried Chicken', 'Brut Champagne', 'There is no bad time to drink Champagne. This is a universal truth that needs no undoing. The only question becomes: What do you want to eat with if? When Champages are made, they go through a process called autolysis, during which the wine spends time sur lie. This is a French phrase that is a much more beautiful way of saying the wine was aged on the dead yeast thats left over after fermentation ends. The liquid in each bottle eventually takes on the flavors of that yeast - its the toasted brioche that comes through when you smell and taste good champagne. Those bread flavors also align with the golden goodness of fried chicken, and im honor bound to stand behind the colonels original recipe here. The secret spice blend is packed with savory, umami-driven pleasures, which along with the chicken grease call out for Champagnes natural acidity. The bubbles bring home the crunch of the skin and coating. As for the Champagne, look for brut multiple vintage(burt meaning dry, and multiple vintage, or MV, meaning a blend of grapes from different years, also known as Non-Vintage, or NV). This is the style every Champagne house hands its hat on, and because it makes up a majority of thsoe houses production, its easy to find.'),
('BBQ Brisket & Ribs', 'Cote-Rotie', 'The rhone Valley is a diverse, dynamic region that stretches approximately 120 miles north to south and can be cut in half both geographically and stylistically.  The southern part makes wines that are based on the grape Grenache and can have a lot of other red and whites grapes blended in. But the north, its all about the magnificent red grape we call Syrah. Within the Northern Rhone, there are five smaller applications - each with its own distinct characteristics and idiosyncrasies - that use Syrah as their base. What makes Cote-Rotie such a unicorn among them is actually explained in its name. In English, it translates to "the roasted slope," because the steep inclines where the wines grow face south toward the Rhone River and get a lot of sunshine. That allows the grapes to ripen to their full and most powerfully tannic potential, and the resulting expression yields a robust set of aromas and flavors like olives, white pepper, bacon fat, and black fruits of all kinds, along with a distinct smokiness thats a dead ringer for charcoal. No matter what type of barbecue you love, these wines will get the very most out of every juicy, smoky hunk. The appellation is small and prestigious, so the wines start on the pricy side and only go up from there. but Cote-Rotie is so consistently good, you get what you pay for.');