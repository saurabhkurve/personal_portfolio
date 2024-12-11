import React, { useState } from "react";

const Blog = () => {
  const [showAll, setShowAll] = useState(false);

  const blogPosts = [
    {
      title: "Java String Manipulation: Common Methods You Should Know",
      summary:
        "A comprehensive guide to mastering string manipulation in Java, covering essential techniques to process, format, and analyze text effectively. Learn how leveraging Java’s robust string handling capabilities can enhance your coding efficiency, streamline workflows, and address complex challenges with confidence.",
      date: "December 10, 2024",
      link: "https://dev.to/saurabhkurve/java-string-manipulation-common-methods-you-should-know-li3",
      image:
        "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rnel98slrajfs2wgx5zf.jpg",
      label: "New",
    },
    {
      title: "8 Traits to Stand Out at Work",
      summary:
        "This blog emphasizes eight essential traits to stand out in today’s job market: staying curious and adaptable, showing initiative, being dependable and honest, communicating clearly, embracing continuous learning, and demonstrating empathy. These qualities build trust, foster strong connections, and showcase your value as a reliable, innovative professional ready to lead and collaborate in dynamic environments.",
      date: "November 13, 2024",
      link: "https://dev.to/saurabhkurve/8-traits-to-stand-out-at-work-ckh",
      image:
        "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ytn71fyxbq7urgaxbcok.jpg"
    },
    {
      title: "Building a Custom Framework in Java: From Dependency Injection to AOP",
      summary:
        "This blog guides you in building a custom Java framework with basic Dependency Injection (DI) and Aspect-Oriented Programming (AOP) for learning purposes. It covers implementing a simple DI container and AOP for logging, demonstrating how this lightweight framework can be useful for small projects or as an educational tool to understand Java frameworks better.",
      date: "November 10, 2024",
      link: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5gq04cwklc21l6tg439o.jpg",
      image:
        "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9880d5ubuokfouamxvb3.jpg"
    },
    {
      title: "Demystifying Java Bytecode : A Peek Under the Hood of the JVM",
      summary:
        "Effective understanding of Java bytecode empowers developers to optimize performance and gain insights into JVM execution, enhancing cross-platform compatibility and efficiency. This guide breaks down bytecode structure, JVM interpretation, and best practices in performance tuning, using tools like javap and ASM to elevate debugging and low-level optimization skills.",
      date: "November 08, 2024",
      link: "https://dev.to/saurabhkurve/demystifying-java-bytecode-a-peek-under-the-hood-of-the-jvm-3gn8",
      image:
        "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/51p00kvfqrl5anackzft.jpg",
    },
    {
      title: "Microservices with SpringBoot",
      summary:
        "Spring Boot enables Java developers to build scalable, resilient microservices by breaking complex systems into modular, independently deployable units. It simplifies development with tools for service discovery, API gateways, security, and tracing, making it ideal for high-demand applications like e-commerce and finance.",
      date: "November 02, 2024",
      link: "https://dev.to/saurabhkurve/microservices-with-springboot-51aa",
      image:
        "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/02myltn26jjwo3241ypp.jpg",
      popular: true,
    },
    {
      title: "Best Practices and Pitfalls in Java Exception Handling",
      summary:
        "Effective exception handling in Java is key to building resilient, maintainable applications by ensuring that errors are managed gracefully rather than causing abrupt crashes. This guide covers best practices like using specific exceptions, logging errors, and avoiding common pitfalls to keep code clean and error-resistant.",
      date: "October 30, 2024",
      link: "https://dev.to/saurabhkurve/best-practices-and-pitfalls-in-java-exception-handling-37dk",
      image:
        "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7v0x3213sp686tmguua4.jpg",
      popular: true,
    },
    {
      title: "Top 10 Best Practices for Writing Clean Code",
      summary:
        "A guide on essential practices for writing clean, maintainable code, including using meaningful names, keeping functions small, avoiding deep nesting, adhering to DRY principles, handling errors effectively, writing unit tests, and minimizing dependencies to enhance readability, scalability, and ease of maintenance.",
      date: "October 23, 2024",
      link: "https://dev.to/saurabhkurve/top-10-best-practices-for-writing-clean-code-1pmj",
      image:
        "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nidvboud16m59wdj9c6l.jpg",
    },
    {
      title: "Surpass Overconfidence: Your Coding Journey Awaits",
      summary:
        "An encouraging guide on overcoming feelings of inadequacy in coding, highlighting the importance of consistent practice, embracing challenges, focusing on personal growth, and recognizing that coding is a long-term journey, not a race.",
      date: "October 17, 2024",
      link: "https://dev.to/saurabhkurve/surpass-overconfidence-your-coding-journey-awaits-3o4b",
      image:
        "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i9wcqdo1ymezas3nlqpq.jpg",
    },
    {
      title: "Top 5 Sites to Ace Your Tech Interviews ",
      summary:
        "A guide to the top five platforms for software engineers to practice coding, prepare for technical interviews, and enhance their chances of landing top tech jobs through structured learning, mock interviews, and peer support.",
      date: "October 15, 2024",
      link: "https://dev.to/saurabhkurve/top-5-sites-to-ace-your-tech-interviews-295e",
      image:
        "https://res.cloudinary.com/dzkwltgyd/image/upload/v1729014901/glif-run-outputs/l52kdr0j8m6reozc3aoo.jpg",
    },
    {
      title: "The Power of Lifelong Learning in Tech",
      summary:
        "A vital exploration of why continuous learning is essential for software engineers to adapt to rapid technological changes, enhance problem-solving skills, and drive career growth.",
      date: "September 05, 2024",
      link: "https://dev.to/saurabhkurve/the-power-of-lifelong-learning-in-tech-3pd2",
      image:
        "https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fkib5p3t0o5afc6jbj89c.jpg",
    },
    {
      title: "16 Essential Problem-Solving Patterns",
      summary:
        "A guide to 16 essential Data Structures and Algorithms (DSA) patterns, complete with Java examples and use cases, to enhance problem-solving skills in software development.",
      date: "September 04, 2024",
      link: "https://dev.to/saurabhkurve/16-essential-problem-solving-patterns-31p2",
      image:
        "https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fsc53zfv0jkweqssjp6uy.jpg",
      popular: true,
    },
    {
      title: "Syntax of Success",
      summary:
        "A collection of inspiring quotes for software engineers that highlights the importance of simplicity, clarity, testing, and teamwork in the programming process.",
      date: "August 30, 2024",
      link: "https://dev.to/saurabhkurve/syntax-of-success-4nj6",
      image:
        "https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fktkb6eo5sw3383nmj730.jpg",
    },
    {
      title: "JavaScript vs TypeScript",
      summary:
        "A concise comparison of JavaScript and TypeScript, highlighting their key differences, use cases, and advantages for efficient web development.",
      date: "August 29, 2024",
      link: "https://dev.to/saurabhkurve/javascript-vs-typescript-e1b",
      image:
        "https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2j7b8nfyy48p47yet4j8.jpg",
    },
    {
      title: "Data Structures & Algorithms: A Beginner's Guide",
      summary:
        "A beginner-friendly roadmap to mastering Data Structures and Algorithms (DSA), guiding you from foundational concepts to advanced techniques, practice strategies, and real-world project applications.",
      date: "August 27, 2024",
      link: "https://dev.to/saurabhkurve/data-structures-algorithms-a-beginners-guide-km6",
      image:
        "https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2nce40jcietkify5lm7k.jpg",
      popular: true,
    },
    {
      title: "Fix the Bug, Ditch the Blame",
      summary:
        "A comprehensive guide to avoiding blame and fostering teamwork when fixing bugs in software development.",
      date: "August 27, 2024",
      link: "https://dev.to/saurabhkurve/fix-the-bug-ditch-the-blame-4kjd",
      image:
        "https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0dutcr1sob6wkr1xsgdj.jpg",
    },
    {
      title: "Lesser-Known HTML Attributes: Examples and Use Cases",
      summary:
        "An overview of lesser-known HTML attributes that improve user experience, security, and performance, with examples and practical use cases.",
      date: "August 26, 2024",
      link: "https://dev.to/saurabhkurve/lesser-known-html-attributes-examples-and-use-cases-161j",
      image:
        "https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F6jyyhpqt6mqvlgvwbxhw.jpg",
      popular: true,
    },
    {
      title: "Predicting DSA Solutions Using Constraints",
      summary:
        "A comprehensive guide to predicting optimal DSA solutions by analyzing problem constraints and input sizes.",
      date: "August 26, 2024",
      link: "https://dev.to/saurabhkurve/predicting-dsa-solutions-using-constraints-4jnf",
      image:
        "https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F495kwctgc51ma8mue5r5.jpg",
    },
    {
      title: "Microservices vs. Monolithic Architecture",
      summary:
        "A comprehensive for understanding differences between microservices and monolithic application.",
      date: "August 23, 2024",
      link: "https://dev.to/saurabhkurve/microservices-vs-monolithic-architecture-2jn3",
      image:
        "https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fg1y2w9rgrerqj5m3t1mh.jpg",
    },
  ];

  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 6);

  return (
    <div id="blog" className="w-full min-h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Blogs
          </p>
          <p className="py-4">
            Welcome to my blog. Here are some of my latest posts.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center py-8">
          {visiblePosts.map((post, index) => (
            <div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-105 duration-500 p-4 w-full flex flex-col justify-between relative"
            >
              {post.popular && (
                <span className="absolute top-0 left-0 bg-pink-600 text-white px-2 py-1 text-xs  rounded-br-lg  font-bold">
                  Popular
                </span>
              )}
              {post.label && (
                <span className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br-lg font-bold">
                  {post.label}
                </span>
              )}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold">{post.title}</h3>
              <p className="py-2">{post.summary}</p>
              <p className="text-sm text-gray-400">{post.date}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
        {!showAll && blogPosts.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
