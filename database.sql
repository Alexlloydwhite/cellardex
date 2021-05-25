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
	"user_id" INT REFERENCES "user"
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
('Grilled Cheese', 'Cahors', 'whether youre nine or ninty-nine, the soft, creamy, buttery-crisp, steaming-hot joy of grilled cheese is universal. And the bread-and-cheese sleeve of crunchy ooze is simple enough even for those who cant boil an egg to execute. A cheese sandwich of such immense staying power wwants a red wine with generous reserves of supple tannin, fruity pop, and firm body to slice and dice the greasy startch and fatty dairy. The red wine is Malbex- not from Argentina but from southwestern France. In Cahors, the wines are distinct from the Southern Hemisphere versions you might know. Where the Argentine edition has a velvetty texture that might wimper at the onslaught of melted lipids, Cahors has a bitter chew that eats through them like a wood chipper. These rustic wines have more tart in the form of dark fruits like plum and blackberry, and their tannins are taut as Simon Cowells brow. Its a savory little package with grilled cheese that makes me buckle at the knees.');

SELECT * FROM pairing;