# cs5610-f20-server-node-tianledong

##### Sample data in MongoDb

*quizzes collection*
```
[
 { "_id" : ObjectId("5fc03f2569b8eff2b8156c84"), "title" : "Quiz 1", "questions" : ["5fc0406969b8eff2b8156c8d", "5fc0406969b8eff2b8156c8e", "5fc0406969b8eff2b8156c8f"]},
 { "_id" : ObjectId("5fc03f2569b8eff2b8156c85"), "title" : "Quiz 2", "questions": ["5fc0406969b8eff2b8156c90", "5fc0406969b8eff2b8156c91"]},
 { "_id" : ObjectId("5fc03f2569b8eff2b8156c86"), "title" : "Quiz 3", "questions" : ["5fc0406969b8eff2b8156c92"]}
 ]
```

*questions collection*
```
[
 {
 	"_id" : ObjectId("5fc0406969b8eff2b8156c8d"),
 	"title" : "JPA True False",
 	"quizId" : "5fc03f2569b8eff2b8156c84",
 	"question" : "JPA stands for Java Persistence API",
 	"correct" : "true",
 	"type" : "TRUE_FALSE"
 },
 {
 	"_id" : ObjectId("5fc0406969b8eff2b8156c8e"),
 	"title" : "JPA Multiple Choice",
 	"quizId" : "5fc03f2569b8eff2b8156c84",
 	"question" : "What does JPA stand for?",
 	"correct" : "Java Persistence API",
 	"type" : "MULTIPLE_CHOICE",
 	"choices" : [
 		"Java Pseudo API",
 		"Java Persistence API",
 		"JSON Persistence API",
 		"JavaScript Persistence API"
 	]
 },
 {
 	"_id" : ObjectId("5fc0406969b8eff2b8156c8f"),
 	"title" : "JSON True False",
 	"quizId" : "5fc03f2569b8eff2b8156c84",
 	"question" : "JSON stands for Java Object Notation",
 	"correct" : "false",
 	"type" : "TRUE_FALSE"
 },
 {
 	"_id" : ObjectId("5fc0406969b8eff2b8156c90"),
 	"title" : "JSON Multiple Choice",
 	"quizId" : "5fc03f2569b8eff2b8156c85",
 	"question" : "What does JSON stand for?",
 	"correct" : "JavaScript Object Notation",
 	"type" : "MULTIPLE_CHOICE",
 	"choices" : [
 		"JavaScript Object Notation",
 		"JavaScript Object Normalization",
 		"Java Object Normalization",
 		"Java Object Notation"
 	]
 },
 {
 	"_id" : ObjectId("5fc0406969b8eff2b8156c91"),
 	"title" : "CSS True False",
 	"quizId" : "5fc03f2569b8eff2b8156c85",
 	"question" : "CSS stands for Cascading Style Sheet",
 	"correct" : "true",
 	"type" : "TRUE_FALSE"
 },
 {
 	"_id" : ObjectId("5fc0406969b8eff2b8156c92"),
 	"title" : "CSS Multiple Choice",
 	"quizId" : "5fc03f2569b8eff2b8156c86",
 	"question" : "What does CSS stand for?",
 	"correct" : "Cascading Style Sheet",
 	"type" : "MULTIPLE_CHOICE",
 	"choices" : [
 		"Class Style Sheet",
 		"Cascading Screen Style",
 		"Cascading Style Sheet",
 		"Cascading Style Screen"
 	]
 }
 ]
```
