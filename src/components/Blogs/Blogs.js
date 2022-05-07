import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="blogs-info font-mono">
      <h1>Difference between javascript and Node Js?</h1>
      <h2>JavaScript</h2>
      <p>
        1. JavaScript is a programming language. It is running in any web
        browser with a proper browser engine.
      </p>
      <p>
        2. Mainly using for any client-side activity for a web application, like
        possible attribute validation or refreshing the page in a specific
        interval or provide some dynamic changes in web pages without refreshing
        the page.
      </p>
      <h2>Node Js</h2>
      <p>
        1. It is running in any web browser with a proper browser engine. It is an
        interpreter and environment for JavaScript with some specific useful
        libraries which JavaScript programming can use separately.
      </p>
      <p>
       2. It mainly used for accessing or performing any non-blocking operation of
        any operating system, like creating or executing a shell script or
        accessing any hardware-specific information or running any backend job.
      </p>
      <h1>When should you use Node Js and when should you use Mongodb?</h1>
      <p>
      Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind..
      </p>
      <p>
        As a document database, MongoDB makes it easy for developers to store
        structured or unstructured data. It uses a JSON-like format to store
        documents. This format directly maps to native objects in most modern
        programming languages, making it a natural choice for developers, as
        they don't need to think about normalizing data.
      </p>
      <h1>Differences between Sql and Nosql databases.?</h1>
      <h2>Sql</h2>
      <p>1. SQL databases are relational</p>
      <p>
        2. SQL databases use structured query language and have a predefined
        schema
      </p>
      <p>3. SQL databases are better for multi-row transactions</p>
      <h2>No Sql</h2>
      <p>1. NoSQL databases are non-relational.</p>
      <p>2. NoSQL databases have dynamic schemas for unstructured data.</p>
      <p>3. NoSQL is better for unstructured data like documents or JSON.</p>
      <h1>What is the purpose of jwt and how does it work?</h1>
      <p>
        JWTs differ from other web tokens in that they contain a set of claims.
        Claims are used to transmit information between two parties. What these
        claims are depends on the use case at hand. For example, a claim may
        assert who issued the token, how long it is valid for, or what
        permissions the client has been granted. A JWT is a string made up of
        three parts, separated by dots, and serialized using base64. In the most
        common serialization format, compact serialization, the JWT looks
        something like this: xxxxx.yyyyy.zzzzz.
      </p>
    </div>
  );
};

export default Blogs;
