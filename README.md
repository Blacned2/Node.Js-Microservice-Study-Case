# Node.Js-Microservice-Study-Case
Node Js Microservice and Docker-Compose

CASE:
In this project, you are going to develop 2 microservices using Node-JS.
The microservices should be able to create, update, delete and read operations of
the Article and Review Resources. These operations should be done by the RESTful API’s
exposed on the microservices.
Requirements:
1. The microservices should contain Article and Review entities.
2. The Article entity should contain the following properties;
● id
● title
● author
● articleContent
● publishDate
● starCount
● reviews
3. The Review entity should contain the following properties;
● id
● articleId
● reviewer
● reviewContent
● article
4. There might be more than one review per article.
5. When creating a review, the review microservice should check the existence of the article
provided.
6. When deleting an article, the article microservice should check that there should be no
reviews under that article.
7. You can use any docker-compatible database like Postgres, MongoDb, MySQL etc.
8. The microservices and the underlying database should run on docker.
9. It is expected to have unit tests. (You do not need to write unit tests for POJOs like entity
classes)
10. There should be a way to query on Article & Review RESTful API’s to fetch entities
dynamically. By using these dynamic endpoints, we can query entities for all the fields. For this
purpose, you can use OData.
