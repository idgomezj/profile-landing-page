sylvanus ="""
Sylvanus is a company focused on delivering technological solutions for the digital assets market, including investment portfolio consolidation and risk management. The platform enables clients to centralize their investments, analyze risk, manage exchange accounts, and receive AI-driven insights to support decision-making.

• Frontend: Built modern, responsive UIs using React and Next.js, ensuring optimal performance and UX.
• Backend: Developed high-performance microservices in Golang and Python to support real-time data processing and financial computations.
• Infrastructure: Architected and maintained a scalable AWS environment (ECS, ECR, S3, Lambda, SNS, and more), with automated CI/CD pipelines using GitHub Actions. Created a custom CLI to streamline internal deployments and operations.
• AI: Designed and implemented an advanced Retrieval-Augmented Generation (RAG) AI agent using Pydantic AI, integrating PostgreSQL and MongoDB for vector-based retrieval.
• Data: Built robust data pipelines using Apache Spark, Kafka, Airflow, and Superset. Managed data storage and processing using MongoDB, Redis, and PostgreSQL.
"""

nine_minds = """
Nine Minds is building an open-source PSA platform to transform how MSPs manage tickets using AI and modern integrations. The goal was to improve usability, enable intelligent ticket resolution with own trainet LLMs, and offer multiple access channels including a web dashboard, Chrome extension, and integrations with Slack, WhatsApp, Teams, and Discord.

Our team was responsible for driving core initiatives across multiple areas:

• Frontend: Built interactive user interfaces using React and Next.js for web dashboards and Chrome browser extensions.

• Backend: Developed scalable backend services using Python, and Go for ticket processing and integrations.

• Infrastructure: Architected and operated a hybrid infrastructure using Kubernetes and AWS (Route 53, S3, ECR, ECS, Lambda, SNS). Automated CI/CD pipelines using GitHub, Jenkins, and ArgoCD. Created a custom CLI to streamline internal deployments and operations. Integrated and customized open-source tools like Kafka, StackGres, Harbor, MinIO, Keycloak, LINSTOR, and NVIDIA GPU plugins. Extended Traefik functionality with custom Go plugins to meet internal routing and security needs.

• AI: Trained and deployed custom autoregressive large language models, including LLaMA 2, for intelligent ticket resolution. Enhanced Hugging Face server functionality using Rust to support internal AI workloads and vector search.

• Data: Designed and maintained data pipelines using Apache Spark, Airflow, and Superset. Managed large datasets across Cassandra, MongoDB, PostgreSQL, and Redis.
"""

cvs = """
At CVS Health’s retail division, our team was responsible for building intelligent, data-driven tools to support daily operations across store, and administrative areas.

• Frontend: Built an internal-use Angular dashboard to monitor our Docker Containers performance across CVS stores nationwide, enabling real-time visibility.

• Backend: Developed Flask-based backend services in Python to process data, expose RESTful APIs, and manage communication to external devises like printers in the stores using MQTT (Mosquitto), CUPS, sockets, and REST APIs.

• AI: Collaborated with the team on computer vision projects to train AI models capable of identifying and classifying pharmaceutical pills. The goal was to automate the packaging process and prepare accurate medication packs for delivery to clients.

• Data: Worked with SQL and NoSQL databases to process, store, and analyze high-volume service and monitoring data across distributed systems. Leveraged Azure services for storage, Container Registry, and databases


Deployed services using Docker and Docker Compose across multiple internal servers. While CI/CD pipelines were managed by a different team, I was responsible for keeping our service docker compose files updated and building Jenkins automation tasks to update our GitLab repositories, build service Docker images, and push them to Azure Container Registry.
"""

scc = """
South Commercial Cleaning provides cleaning services for homeowners, whole companies, offices, and post-construction sites. I was responsible for building and integrating all the technical systems required to manage, control, and optimize administrative processes, operations, and customer communication.

• Frontend: Developed user-facing applications using Angular and React to support internal operations and customer service interactions.

• Backend: Designed and developed modular microservices using Python for data-intensive tasks, and Rust and Go for high-performance, low-latency services. Built the entire system following a scalable microservices architecture.

• Infrastructure: Build a hybrid infrastructure using both Kubernetes on company-owned servers and AWS cloud services. Used AWS S3 for storage, ECR for image repositories, and ECS to host lightweight container versions in test environments. Integrated Cloudflare for DNS management, networking, and security layers.

• AI: Developed a machine learning model using PyTorch and scikit-learn to provide customers with instant price estimates based on input parameters, removing the need for phone calls or manual quotes.

• Data: Used PostgreSQL for core data storage and Redis for fast-access caching. Integrated Kafka for real-time data streaming across microservices.
"""

work_experience = f"""
sylvanus: {sylvanus}
nine_minds: {nine_minds}
cvs: {cvs}
scc: {scc}
"""