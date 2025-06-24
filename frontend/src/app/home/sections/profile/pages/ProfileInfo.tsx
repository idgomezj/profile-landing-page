import { memo } from "react";

const ProfileInfo = memo(() => (
  <div className="max-w-md p-6 space-y-6">
    <h2 className="text-4xl font-bold -mt-4">Profile</h2>

    <p className="text-xl text-gray-700 font-medium">
      Sr. Software Engineer — AI, Data Engineering, and Full Stack Development
    </p>

    <div className="space-y-4 text-gray-600 leading-relaxed text-justify text-md">
      <p>
        I&apos;m a full-stack engineer with a passion for learning and building with modern technologies. I bring strong experience across backend systems using Python, Golang, and Rust, paired with solid frontend development in Angular, React, and Next.js. I deploy and scale services on AWS using DevOps tools such as Docker, GitHub Actions, Jenkins, Airflow, and ArgoCD.
      </p>

      <p>
        My data expertise includes applied analytics for business intelligence, and hands-on AI development in areas like forecasting, computer vision, and natural language processing. I&apos;ve worked with autoregressive large language models like LLaMA 2 and developed Retrieval-Augmented Generation systems using Pydantic AI and vector databases.
      </p>

      <p>
        On the infrastructure side, I have led the setup and orchestration of scalable environments using Kubernetes and Terraform on AWS. I integrate external APIs, open-source platforms, and internal solutions into production-ready systems.
      </p>

      <p>
        My academic foundation spans Physics Engineering, Industrial Engineering, and a Master of Engineering, complemented by post-graduate qualifications in Finance and Operations. This multidisciplinary background gives me the edge to align technical execution with strategic business outcomes.
      </p>
    </div>
  </div>
));

ProfileInfo.displayName = "ProfileInfo";

export default ProfileInfo;
