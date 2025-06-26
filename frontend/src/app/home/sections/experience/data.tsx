import Image from "next/image";
import {ExperienceInfo} from '@/interfaces'

export const experienceData: ExperienceInfo[] = [
        {
        icon: <Image src="/logo/sylvanus.png" alt="Sylvanus Technologies" width={100} height={100} />,
        title: "Sr. Software Engineer",
        company: "Sylvanus Technologies",
        date: "Oct 2024 - Present",
        link: "https://www.sylvanus.io/",
        content: {
            image: <Image src="/images/experience/sylvanus.png" alt="Sylvanus Technologies" width={5000} height={5000} />,
            description: `
            <div>
                <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px; text-align: justify;">
                    Sylvanus is a company focused on delivering technological solutions for the digital assets market, including investment portfolio consolidation and risk management.
                    The platform enables clients to centralize their investments, analyze risk, manage exchange accounts, and receive AI-driven insights to support decision-making.
                </p>

                <ul style="padding-left: 20px; font-size: 16px; line-height: 1.8; margin: 0;">
                    <li><strong>• Frontend:</strong> Built modern, responsive UIs using React and Next.js, ensuring optimal performance and UX.</li>
                    <li><strong>• Backend:</strong> Developed high-performance microservices in Golang and Python to support real-time data processing and financial computations.</li>
                    <li><strong>• Infrastructure:</strong> Architected and maintained a scalable AWS environment (ECS, ECR, S3, Lambda, SNS, and more), with automated CI/CD pipelines using GitHub Actions. Created a custom CLI to streamline internal deployments and operations.</li>
                    <li><strong>• AI:</strong> Designed and implemented an advanced Retrieval-Augmented Generation (RAG) AI agent using Pydantic AI, integrating PostgreSQL and MongoDB for vector-based retrieval.</li>
                    <li><strong>• Data:</strong> Built robust data pipelines using Apache Spark, Kafka, Airflow, and Superset. Managed data storage and processing using MongoDB, Redis,  and PostgreSQL.</li>
                </ul>
            </div>
            `,
    techStack:{
                backend:[
                    {
                        name: "Python",
                        description: "Primary language for data-intensive services, including real-time ETL, quantitative calculations, and risk analytics—leveraging Python’s rich ecosystem for numerical computing."
                    },
                    {
                        name: "Golang",
                        description: "Chosen for building mission-critical microservices requiring high throughput and low latency. Leveraged Go's native concurrency model (goroutines) to handle parallel tasks efficiently, such as real-time market data aggregation and trade execution."
                    }
                ],
                frontend:[
                    {
                        name: "Next.js",
                        description: "Used for all customer-facing frontends due to its seamless integration with Vercel for automated deployments. We leveraged its React-based framework for UI rendering but did not utilize its backend capabilities."
                    },
                    {
                        name: "React",
                        description: "Used to build internal frontends, including a testing dashboard for QA validation and a real-time monitoring dashboard for system observability. Leveraged React’s component-based architecture for fast iteration and maintainability."  
                    }
                ],
                infrastructure:[
                    {
                        name: "AWS (Non-Serverless)",
                        description: "Core infrastructure built on ECS for containerized microservices. Utilized ALB/NLB for load balancing, VPC for network isolation, Route 53 for DNS, and ECR for container registry. Non-containerized workloads (e.g., legacy services) ran on EC2 instances with auto-scaling."
                    },
                    {
                        name: "AWS (Serverless)",
                        description: "Event-driven processing via Lambda and Step Functions for daily tasks: symbol data collection, trade data aggregation, and batch jobs. Serverless architecture minimized operational overhead while scaling dynamically with demand."
                    },
                    {
                        name: "AWS (General)",
                        description: "S3 for scalable storage (logs, artifacts), Secrets Manager for credential rotation, IAM for granular access control, and CloudWatch for monitoring.  SNS/SQS enabled decoupled service communication."
                    },
                    {
                        name: "Terraform",
                        description: "Single tool for IaC—provisioned AWS resources (ECS, VPC, etc.) and enforced environment parity."
                    },
                    {
                        name: "GitHub Actions",
                        description: "Automated testing, infrastructure deployments (via Terraform), and ECS service rollouts."
                    }
                ],
                ai:[
                    {
                        name: "Pydantic AI",
                        description: "Built an AI-powered decision support agent by augmenting OpenAI’s LLM with structured business knowledge. The system retrieves context from databases, processes it via Pydantic models for validation, and generates insights to guide financial decisions."
                    },
                    {
                        name: "MongoDB (Vector DB)",
                        description: "Stored and indexed vector embeddings from processed financial data, enabling semantic search for the AI agent. MongoDB’s flexible schema allowed efficient retrieval of relevant vectors to enhance response accuracy in risk analysis and investment recommendations."
                    }
                ],
                data:[
                    {
                        name: "Redis",
                        description: "Served as low-latency cache for frequently accessed market data and session management. Enabled real-time trade execution alerts via pub/sub messaging."
                    },
                    {
                        name: "PySpark",
                        description: "Processed large-scale financial datasets (portfolio histories, market ticks) using distributed computing. Automated ETL jobs for risk modeling and batch analytics."
                    },
                    {
                        name: "Kafka",
                        description: "Orchestrated real-time data pipelines for market feeds and trade events. Decoupled microservices with event-driven architecture for scalable processing."
                    },
                    {
                        name: "PostgreSQL",
                        description: "Primary OLTP database for user accounts, transaction records, and portfolio metadata. Enabled complex financial queries with optimized indexing."
                    },
                    {
                        name: "MongoDB",
                        description: "Structured document storage for dynamic financial instruments. Later extended to store vector embeddings for AI-powered semantic search."
                    },
                    {
                        name: "Superset",
                        description: "Self-service analytics platform for internal teams. Created dashboards tracking portfolio performance, risk exposure, and ETL pipeline health."
                    },
                    {
                        name: "Airflow",
                        description: "Used for pipeline orchestration until we migrated to serverless AWS solutions to stop paying high fees to an external managed Airflow provider."
                    }
                ],
            }
        }
        },
        {
        icon: <Image src="/logo/nineminds.jpeg" alt="Sylvanus Technologies" width={100} height={100} />,
        title: "Development Team Lead",
        company: "Nine Minds",
        date: "Jul 2023 - Sep 2024",
        link: "https://www.nineminds.com/",
        content: {
            image: <Image src="/images/experience/nineminds.png" alt="Sylvanus Technologies" width={4000} height={4000} />,
            description: `
<div style="margin-bottom: 40px; font-family: Arial, sans-serif; color: #fff;">

  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
    Nine Minds is building an open-source PSA platform to transform how MSPs manage tickets using AI and modern integrations.
    The goal was to improve usability, enable intelligent ticket resolution with own trainet LLMs, and offer multiple access channels including a web dashboard, Chrome extension, and integrations with Slack, WhatsApp, Teams, and Discord.
  </p>

  <ul style="padding-left: 20px; font-size: 16px; line-height: 1.8; margin: 0;">
        <li><strong>• Frontend:</strong> Built interactive user interfaces using React and Next.js for web dashboards and Chrome browser extensions.</li>
        <li><strong>• Backend:</strong> Developed scalable backend services using Python, and Go for ticket processing and integrations.</li>
        <li><strong>• Infrastructure:</strong> Architected and operated a hybrid infrastructure using Kubernetes and AWS (Route 53, S3, ECR, ECS, Lambda, SNS). Automated CI/CD pipelines using GitHub, Jenkins, and ArgoCD. Created a custom CLI to streamline internal deployments and operations. Integrated and customized open-source tools like Kafka, StackGres, Harbor, MinIO, Keycloak, LINSTOR, and NVIDIA GPU plugins. Extended Traefik functionality with custom Go plugins to meet internal routing and security needs.</li>
        <li><strong>• AI:</strong> Trained and deployed custom autoregressive large language models, including LLaMA 2, for intelligent ticket resolution. Enhanced Hugging Face server functionality using Rust to support internal AI workloads and vector search.</li>
        <li><strong>• Data:</strong> Designed and maintained data pipelines using Apache Spark, Airflow, and Superset. Managed large datasets across Cassandra, MongoDB, PostgreSQL, and Redis. </li>
    </ul>


</div>

`,
            techStack:{
                backend:[
                    {
                        name: "Python",
                        description: "Primary language for data processing and rapid prototyping. Leveraged FastAPI for microservices and Pandas for ticket analysis, enabling quick iterations and market validation. "
                    },
                    {
                        name: "Rust",
                        description: "Integrated Hugging Face's AI models by extending their Rust-based infrastructure. Achieved high-performance inference with memory safety for our LLaMA 2 implementations."
                    },
                    {
                        name: "Golang",
                        description: "Built high-performance services including and Traefik plugins. Utilized goroutines for efficient concurrency handling thousands of MSP workflows."
                    }
                ],
                frontend:[
                    {
                        name: "React",
                        description: "Powered our initial customer-facing interfaces including the flagship dashboard and browser extension. "
                    },
                    {
                        name: "Next.js", 
                        description: "After proving its value in marketing pages, became the choice for Alga MSP's open-source codebase. Enabled seamless API routes and SSR for better SEO while lowering the barrier for community contributions."
                    }
                ],
                infrastructure:[
                    {
                        name: "Kubernetes",
                        description: "Self-hosted production cluster on private cloud servers. Ran all microservices alongside infrastructure components (LINSTOR, MetalLB, MinIO, Harbor) for a complete container platform."
                    },
                    {
                        name: "AWS",
                        description: "Used to supplement on-prem infrastructure for specific needs: Route 53 for DNS management, S3 for backups (including database snapshots), and ECR as our initial container registry. Later migrated image storage to Harbor within our Kubernetes cluster to improve performance during Airflow-initiated container launches for data processing workloads, reducing latency for image pulls during heavy computations."
                    },
                    {
                        "name": "Helm",
                        "description": "Standardized deployment of Alga MSP's microservices and supporting tools through versioned Helm charts. Enabled reproducible environments across development, staging, and production clusters with single-command installations."
                    }
                ],
                ai:[
                    {
                        name: "Custom LLM Training",
                        description: "Developed proprietary language models trained on domain-specific content created by our in-house writing team. Implemented an automated training pipeline using Airflow to schedule periodic retraining. Deployed trained models on our Kubernetes cluster with NVIDIA GPU acceleration, served via customized Hugging Face inference endpoints for optimal performance."
                    },
                    {
                        name: "Snowflake Vectorization",
                        description: "Initially used OpenAI for text vectorization but encountered scalability limits under high traffic. Migrated to Snowflake to maintain full control over resources, enabling reliable vector generation at scale for our AI-powered ticket analysis."
                    }
                ],
                data:[
                    {
                        name: "Cassandra",
                        description: "Deployed a highly available cluster with 3 nodes (one per Kubernetes cluster) for maximum resilience. This multi-cluster architecture guaranteed continuous operation even during full zone outages, while maintaining strong consistency for ticket data integrity."
                    },
                    {
                        name: "Redis",
                        description: "Served as our low-latency cache for session management and real-time ticket status updates. Implemented Redis Streams for processing event notifications across microservices."
                    },
                    {
                        name: "MongoDB",
                        description: "Used for flexible document storage of dynamic ticket metadata and customer configurations. Its schemaless nature accommodated rapid iterations of our data models during early development."
                    },
                    {
                        name: "PostgreSQL",
                        description: "Deployed via StackGres to create Citus-powered clusters for horizontal scaling, with Patroni ensuring high availability. Extended with pgvector to store AI embeddings, enabling hybrid search across structured and vector data."
                    },
                    {
                        name: "PySpark",
                        description: "Processed bulk ticket histories and generated analytics reports using distributed computing. Automated feature engineering for our AI models through scheduled Spark jobs."
                    },
                    {
                        name: "Airflow",
                        description: "Orchestrated our LLM retraining pipelines and periodic data warehouse refreshes. DAGs managed dependencies between Spark jobs, database updates, and model deployments."
                    },
                    {
                        name: "Kafka",
                        description: "Event backbone for real-time ticket updates and AI model inferences. Topics connected microservices while maintaining exactly-once processing semantics for critical workflows."
                    }
                ]
            }
        }
        },
        {
        icon: <Image src="/logo/cvs.png" alt="CVS" width={100} height={100} />,
        title: "Python Developer",
        company: "CVS",
        date: "Dec 2021 - Jul 2023",
        link: "https://www.cvs.com/",
        content: {
            image: <Image src="/images/experience/cvs.jpg" alt="Sylvanus Technologies" width={4000} height={4000} />,
            description: `
<div style="margin-bottom: 40px; font-family: Arial, sans-serif; color: #fff;">

  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
    At CVS Health’s retail division, our team was responsible for building intelligent, data-driven tools to support daily operations across store, and administrative areas. 
  </p>

  <ul style="padding-left: 20px; font-size: 16px; line-height: 1.8; margin: 0; margin-bottom: 20px;">
    <li><strong>• Frontend:</strong> Built an internal-use Angular dashboard to monitor our Docker Containers performance across CVS stores nationwide, enabling real-time visibility.</li>
    
    <li><strong>• Backend:</strong> Developed Flask-based backend services in Python to process data, expose RESTful APIs, and manage communication to external devises like printers in the stores using MQTT (Mosquitto), CUPS, sockets, and REST APIs.</li>
    
    <li><strong>• AI:</strong> Collaborated with the team on computer vision projects to train AI models capable of identifying and classifying pharmaceutical pills. The goal was to automate the packaging process and prepare accurate medication packs for delivery to clients.</li>

    <li><strong>• Data:</strong> Worked with SQL and NoSQL databases to process, store, and analyze high-volume service and monitoring data across distributed systems. Leveraged Azure services for storage, container registry, and databases</li>
    
</ul>

<p> Deployed services using Docker and Docker Compose across multiple internal servers. While CI/CD pipelines were managed by a different team, I was responsible for keeping our service docker compose files updated and building Jenkins automation tasks to update our GitLab repositories, build service Docker images, and push them to Azure Container Registry.</p>


</div>

            `,
            techStack:{
                backend:[
                    {
                        "name": "Python (Flask)",
                        "description": "Developed services processing store data and managing device communication (printers via MQTT/CUPS, REST APIs)."
                    }
                ],
                frontend:[
                    {
                        name: "Angular",
                        description: "Built an internal-use Angular dashboard to monitor our Docker Containers performance across CVS stores nationwide, enabling real-time visibility."
                    }
                ],
                infrastructure:[
                    {
                        name: "Docker",
                        description: "Deployed services using Docker and Docker Compose across multiple internal servers."
                    },
                    {
                        name: "Jenkins",
                        description: "Automated Jenkins pipelines to build and push Docker images to Azure Container Registry."
                    }
                ],
                ai:[
                    {
                        "name": "ResNet50",
                        "description": "Fine-tuned pre-trained ResNet50 model for pharmaceutical pill recognition."
                    },
                    {
                    "name": "PyTorch",
                    "description": "Implemented data augmentation pipelines and custom training loops to optimize model performance for pill identification."
                    }
                ],
                data:[
                    {
                        "name": "MySQL",
                        "description": "Primary relational database for storing and querying high-volume store operations data nationwide."
                    },
                    {
                        "name": "Redis",
                        "description": "Enabled real-time monitoring dashboards with low-latency caching of container performance metrics."
                    },
                    {
                        "name": "MQTT (Mosquitto)",
                        "description": "Lightweight messaging protocol for real-time communication with in-store devices (printers/scanners), handling high-frequency operational data."
                    },
                    {
                        "name": "CUPS",
                        "description": "Managed print job queuing and routing across CVS's nationwide network of label printers."
                    }
                ]
            }
        }
        },
        {
        icon: <Image src="/logo/scc_cyan.svg" alt="SCC" width={70} height={70} />,
        title: "Software Engineer",
        company: "SCC",
        date: "Jan 2018 - Dec 2021",
        link: "https://www.sccleantime.com/",
        content: {
            image: <Image src="/images/experience/scc.png" alt="Sylvanus Technologies" width={4000} height={4000} />,
            description: `
<div style="margin-bottom: 40px; font-family: Arial, sans-serif; color: #fff;">

  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
    South Commercial Cleaning provides cleaning services for homeowners, whole companies, offices, and post-construction sites. I was responsible for building and integrating all the technical systems required to manage, control, and optimize administrative processes, operations, and customer communication.
  </p>

  <ul style="padding-left: 20px; font-size: 16px; line-height: 1.8; margin: 0;">
    <li><strong>• Frontend:</strong> Developed user-facing applications using Angular and React to support internal operations and customer service interactions.</li>

    <li><strong>• Backend:</strong> Designed and developed modular microservices using Python for data-intensive tasks, and Rust and Go for high-performance, low-latency services. Built the entire system following a scalable microservices architecture.</li>

    <li><strong>• Infrastructure:</strong> Build a hybrid infrastructure using both Kubernetes on company-owned servers and AWS cloud services. Used AWS S3 for storage, ECR for image repositories, and ECS to host lightweight container versions in test environments. Integrated Cloudflare for DNS management, networking, and security layers.</li>

    <li><strong>• AI:</strong> Developed a machine learning model using PyTorch and Scikit-Learn to provide customers with instant price estimates based on input parameters, removing the need for phone calls or manual quotes.</li>

    <li><strong>• Data:</strong> Used PostgreSQL for core data storage and Redis for fast-access caching. Integrated Kafka for real-time data streaming across microservices.</li>
  </ul>

</div>
            `,
            techStack:{
                backend:[
                    {
                        name: "Python",
                        description: "Created data processing microservices for ETL and analytics workloads using Python's scientific stack (Pandas, NumPy)."
                    },
                    {
                        name: "Rust",
                        description: "Implemented high-throughput pricing engines in Rusts."
                    },
                    {
                        name: "Golang",
                        description: "Developed low-latency API gateways and service mesh components leveraging Go's native concurrency."
                    }
                ],
                frontend:[
                    {
                        name: "Angular",
                        description: "Built enterprise-grade internal operation tools with Angular's structured framework, ensuring maintainability for complex business workflows."
                    },
                    {
                        name: "React",
                        description: "Developed customer service portals with React, enabling interactive real-time updates for service representatives."
                    }
                ],
                infrastructure:[
                    {
                        name: "Kubernetes",
                        description: "Hybrid cluster deployment across on-prem servers and AWS, achieving 99.95% uptime for core services."
                    },
                    {
                        name: "AWS",
                        description: "Utilized ECS for test environments, S3 for audit logs, and ECR as secondary container registry."
                    },
                    {
                        name: "Cloudflare",
                        description: "Implemented zero-trust networking and DDoS protection for all customer-facing endpoints."
                    }
                ],
                ai:[
                    {
                        name: "PyTorch and Scikit-Learn",
                        description: "Developed a machine learning model using PyTorch and Scikit-Learn to provide customers with instant price estimates based on input parameters, removing the need for phone calls or manual quotes."
                    }
                ],
                data:[
                    {
                        name: "PostgreSQL",
                        description: "Primary OLTP database with time-series partitioning for operational data."
                    },
                    {
                        name: "Kafka",
                        description: "Real-time event streaming between microservices."
                    },
                    {
                        name: "Redis",
                        description: "Used for high-speed caching and real-time event streaming between services."
                    }
                ]
            }
        }
    },
        {
        icon: <Image src="/logo/herragro.png" alt="Herragro S.A" width={100} height={100} />,
        title: "Planning Engineer",
        company: "Herragro S.A",
        date: "Jan 2015 - Nov 2016",
        link: "https://www.herragro.com/",
        content: {
            image: <Image src="/images/experience/herragro.jpeg" alt="Sylvanus Technologies" width={4000} height={4000} />,
            description: `
<div style="margin-bottom: 40px; font-family: Arial, sans-serif; color: #fff;">

  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
    Herragro is a manufacturing company that produces tools for construction, agriculture, and industrial applications. I was responsible for building decision-support models and tools to integrate their new supply chain strategy — Postponement — into production, inventory, and logistics planning. The goal was to synchronize operations and optimize concurrent processes across the organization.
  </p>

  <ul style="padding-left: 20px; font-size: 16px; line-height: 1.8; margin: 0;">
    <li><strong>• Modeling & Forecasting:</strong> Developed mathematical models using MATLAB and Python to support demand forecasting and production planning under uncertainty.</li>
    
    <li><strong>• Planning Tools:</strong> Created three integrated tools to manage sales forecasting, production scheduling, and inventory control. Applied simulation techniques and metaheuristic algorithms to solve complex planning scenarios.</li>
    
    <li><strong>• Technology & Implementation:</strong> Implemented models that aligned with the company's Postponement strategy, enabling real-time coordination between production, storage, and distribution systems.</li>
  </ul>

</div>
            `,
            techStack: {
                backend: [
                    {
                        "name": "MATLAB",
                        "description": "Primary tool for developing advanced mathematical models supporting demand forecasting under uncertainty. Enabled rapid prototyping of simulation algorithms and production optimization techniques before transitioning to production Python implementations."
                    },
                    {
                        "name": "Python",
                        "description": "Implemented production-grade forecasting models and planning tools (Pandas, NumPy, SciPy). Automated complex calculations for sales/production/inventory coordination, and deployed metaheuristic algorithms solving large-scale scheduling problems."
                    }
            ]
        }
        }
    },
];



export const projectsData: ExperienceInfo[] = [
    {
    icon: <Image src="/logo/atcargo.png" alt="Atcargo" width={100} height={100} />,
    title: "Web Developer",
    company: "American Trucking Cargo",
    date: "Oct 2024 - Present",
    link: "https://atcargousa.com/",
    content: {
        image: <Image src="/images/experience/atcargo.png" alt="Atcargo" width={5000} height={5000} />,
        description: `- **Frontend**: Built modern UIs with React and Next.js.

- **Backend**: Developed high-performance services in Golang and Python.


- **Infrastructure**: Designed and maintained AWS-based architecture (ECS, ECR, S3, Lambda, SNS, and more), with CI/CD pipelines built using GitHub Actions. Created a custom CLI to streamline deployment and operations.



- **AI**: Engineered an advanced RAG AI Agent using Pydantic AI, with vector-based retrieval leveraging PostgreSQL and MongoDB.`,
        techStack:{
            backend:[
                {
                    name:"python",
                    description: "ivan sdlhds dljfsd flksd flsdjflksdjflks dljsdlkfjslkdjfsldk jfslkdj"
                },
                {
                    name:"golang",
                    description: "ivan"
                },
            ],
            frontend:[
                {
                    name:"python",
                    description: "ivan sdlhds dljfsd flksd flsdjflksdjflks dljsdlkfjslkdjfsldk jfslkdj"
                },
            ],
            infrastructure:[
                {
                    name:"python",
                    description: "ivan sdlhds dljfsd flksd flsdjflksdjflks dljsdlkfjslkdjfsldk jfslkdj"
                },
            ],
            ai:[
                {
                    name:"python",
                    description: "ivan sdlhds dljfsd flksd flsdjflksdjflks dljsdlkfjslkdjfsldk jfslkdj"
                },
            ],
            data:[
                {
                    name:"python",
                    description: "ivan sdlhds dljfsd flksd flsdjflksdjflks dljsdlkfjslkdjfsldk jfslkdj"
                },
            ],
        }
    }
    }
];