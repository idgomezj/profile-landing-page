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
        },
        {
        icon: <Image src="/logo/nineminds.jpeg" alt="Sylvanus Technologies" width={100} height={100} />,
        title: "Development Team Lead",
        company: "Nine Minds",
        date: "Jul 2023 - Sep 2024",
        link: "https://www.nineminds.com/",
        content: {
            image: <Image src="/images/experience/nineminds.avif" alt="Sylvanus Technologies" width={4000} height={4000} />,
            description: `
• Led a cross-functional team at Nine Minds to develop cutting-edge AI products, web applications, and browser extensions utilizing Python, Go, Rust, TypeScript, React, and Next.js.

•Hands-on the training of new models based on autoregressive large language models, including LLaMA 2.

• Led the design, implementation, and maintenance of data pipelines using Spark, Airflow, Superset, Cassandra, MongoDB, Redis, Weaviate, and PostgreSQL to meet complex data needs.

• Architected and maintained a hybrid infrastructure leveraging cloud services and self-hosted Kubernetes.
Integrated AWS technologies such as Route 53, S3, ECR, ECS, SNS, and Lambda across all systems to enhance scalability, reliability, and performance.

• Seamlessly integrated external services such as Stripe, Gmail, Discord, Slack, Microsoft Teams, GitHub, Jira, and Cloudflare across all microservices to enhance functionality and user experience.

• Deployed and maintained a comprehensive suite of open-source technologies, including Kafka, StackGres, Harbor, Keycloak, MinIO, NVIDIA plugins, Grafana, LINSTOR, etc.

• Enhanced open-source services to fit our infrastructure and product needs. Two examples are developing new plugins for Traefik in Go and modifying the Hugging Face server in Rust.

• Established and optimized a robust DevOps pipeline utilizing GitHub, Jenkins, ArgoCD, Ansible, and Airflow to facilitate rapid deployment cycles and maintain stringent quality control.

• Developed a CLI tool in Go to streamline management and interaction with Kubernetes clusters, core services, and DevOps processes, significantly improving operational efficiency.
`,
            techStack:{}
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
Develop a trucker and logistics workers educational web app using the following technology: 
Python | FastApi for backend data analysis and Golang for general backend, Angular, and Postgresql. 
This web has been deployed in Heroku for development and AWS for production using mainly Elastic Container Registry, 
Elastic Container Service, S3, Rount 53, and RDS PostgreSQL.`,
            techStack:{}
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
• Developed two web applications using Python (data-intensive tasks) and Go (high-performance services) on microservices architecture.
• Utilized Angular for frontend and PostgreSQL for data storage.
• Deployed on Heroku for development and AWS for production to ensure scalability and robustness. Employing API Gateway, ECS, ECR, S3, Route 53, and RDS.
            `,
            techStack:{}
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
Create the models and tools in MATLAB and PYTHON necessary to integrate the production, 
storage, and logistics chain in the company HERRAGRO S.A. With the aim of managing concurrent work between them. 
For this, three programs and methodologies applicable to: sales forecasts, production planning and planning, 
control and monitoring of inventories were developed.
            `,
            techStack: {}
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