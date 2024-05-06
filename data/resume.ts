export type Project = {
  name: string;
  company: string;
  companyUrl?: string;
  position: string;
  period: string;
  title: string;
  description: string;
  challenge: string;
  skills: string[];
};

export type PInfo = {
  title: string;
  location: string;
  email: string;
  info: string;
};

type Data = {
  name: string;
  personalInfo: PInfo;
  projects: Project[];
  skills: Record<string, string>;
};

const data: Data = {
  name: 'Vicente Espejo',
  personalInfo: {
    title: 'Mathematician to Technical Lead',
    location: 'Seville, Spain',
    email: 'viespejo@gmail.com',
    info: 'Technical Lead with +20 years of experience in software engineering with a solid math brain. Passionate about software design, architecture and programming. Experienced in working with a wide range of technologies and software applications. Linux lover and Vimmer who appreciates open-source development and uses its ideas to shape how I work and the tools I use. I pay close attention to details in everything I do, avoiding unnecessary abstractions and adhering to the principle that simplicity is the ultimate sophistication.',
  },
  skills: {
    'Backend & Frontend':
      'Golang, JavaScript/Typescript, Node.js, Express, NestJS, React, HTML, CSS, MySQL, PostgreSQL, Redis, NATS, MongoDB, ...',
    'Cloud/DevOps':
      'Docker, Kubernetes, Terraform, Ansible, CI/CD pipelines, ...',
    GCP: 'Cloud Build, Cloud Functions, Cloud Run, Cloud SQL, Pub/Sub, Cloud Storage, BigQuery, Firestore, ...',
    'System Design': 'Microservices, RESTful APIs, gRPC, WebSockets, ...',
    Architecture:
      'DDD, Clean Architecture, Event-Driven Architecture, Outbox Pattern, ...',
    'AI/ML': 'LangChain, Vertex AI, PGVector, ...',
    'Data Processing and Analysis': 'Kafka, Druid, CubeJS, ...',
    'OS/Tools': 'GNU/Linux, Git, Neovim, Tmux, Jira, Confluence, ...',
    'AI Daily Tools':
      'Aider, Github Copilot, LLMs (o1/R1 models as architect and Sonnet/4o/Flash as coder-asker), ...',
  },
  projects: [
    {
      name: 'Knowledge Assist',
      company: 'Transcom',
      companyUrl: 'https://www.transcom.com/',
      position: 'Tech Lead',
      period: 'Dec 2023 - Current',
      title: 'RAG System for dynamic knowledge base',
      description:
        'Web based application that allows agents chat with a bot to get the right answer to operational questions. The bot uses a dynamic knowledge base updated by admins by using the same web application.',
      challenge:
        ' managing a dynamic knowledge base to several languages, clients and campaigns, ensuring the system is scalable and reliable, keeping indexing in sync with changes in the documents.',
      skills: [
        'typescript',
        'nestjs',
        'react',
        'mui',
        'mysql',
        'langchain',
        'vertex ai',
        'postgres-pgvector',
        'cloud functions',
        'python',
        'cloud storage',
        'kubernetes',
        'cloud build',
        'terraform',
      ],
    },
    {
      name: 'ADA',
      company: 'Transcom',
      companyUrl: 'https://www.transcom.com/',
      position: 'Tech Lead',
      period: 'Aug 2023- Dec 2023',
      title: 'Agent Development Accelerator using AI',
      description:
        'Innovative training system that leverages AI and LLMs to accelerate the development of call center agents. The system simulates phone conversations between human agents and virtual customers (bots), providing a realistic training environment. It includes configurable customer profiles with varied voices and languages and post-call analysis powered by AI models by evaluating agent performance based on predefined metrics such as sales effectiveness, sentiment analysis, proper introductions, closing notes, and other relevant criteria.',
      challenge:
        "integrating voice capabilities with text-based language models while maintaining realistic dialogue flow, optimizing the pipeline of speech recognition, language model processing, and speech synthesis to achieve low-latency response times, and developing effective prompt engineering strategies to avoid hallucinations and context drift in the AI model's role-playing interpretation.",
      skills: [
        'twilio',
        'cloud functions',
        'python',
        'vertex ai',
        'firestore',
        'bigquery',
      ],
    },
    {
      name: 'Employee Experience',
      company: 'Transcom',
      companyUrl: 'https://www.transcom.com/',
      position: 'Tech Lead',
      period: 'Sep 2022 - Aug 2023',
      title: 'Transcom Bonification System',
      description:
        "Web-based application to manage the annual bonus program at Transcom. Allows managers to define financial and performance goals for subordinates based on key metrics. Enables employees to review goals, terms and conditions, and digitally sign their bonus agreements. The system automates approval workflows involving managers, HR, finance and employees, calculates bonus payouts based on achievement of goals and salaries, and notifies stakeholders at each process step. It handles scenarios such as manager changes, generation of multiples bonus agreements, and annual updates of bonus rules and metrics. Additionally, it is integrated with the company's HR system to automatically retrieve employee data and changes in positions, salaries, and other relevant information.",
      challenge:
        "decoupled microservices architecture, asynchronous communication between services and external company's systems (HR SAP, finance system and Looker), notifications and reminders, multi-stage approval workflows, ensure reliable event publishing and maintain data consistency (outbox pattern), using URLs to represent application state, facilitating link sharing and allowing users to access specific states directly from the notification system and dynamic generation of complex PDF documents, to name same of them.",
      skills: [
        'golang',
        'react',
        'mysql',
        'grpc',
        'microservices',
        'clean architecture',
        'event-driven',
        'outbox pattern',
        'google pubsub',
        'kubernetes',
        'cloud build',
        'looker',
        'bigquery',
        'RABC',
      ],
    },
    {
      name: 'TRex',
      company: 'Transcom',
      companyUrl: 'https://www.transcom.com/',
      position: 'Tech Lead',
      period: 'Jun 2022 - Sep 2022',
      title: 'Avaya CMS Realtime Reporting',
      description:
        'This project involved building a real-time dashboard application to visualize and monitor KPIs and metrics from the Avaya CMS. The dashboard leveraged Avaya RT socket technology to establish a direct connection with the CMS and retrieve data in real-time.',
      challenge:
        'handling the high volume of real-time events streaming from the CMS, transforming the raw data into meaningful KPIs and metrics, and visualizing the data in a user-friendly and interactive dashboard.',
      skills: [
        'golang',
        'javascript',
        'react',
        'kafka',
        'druid',
        'cubejs',
        'kubernetes',
        'bigquery',
      ],
    },
    {
      name: 'Hipoges',
      company: 'Transcom',
      companyUrl: 'https://www.transcom.com/',
      position: 'Tech Lead',
      period: 'Sep 2021 - Jun 2022',
      title:
        'Custom CRM System for Hipoges on top of Gocontact (Spain & Portugal)',
      description:
        'Web-based CRM developed for the Call Center, built on top of Gocontact auto-dialer platform to get telephony integration. This CRM allows to manage the full lifecycle of realestate "Leads" generated from various property listing portals where Hipoges had assets published. The application was designed to efficiently handle a Lead\'s complete journey - from initial capture through final sale of the property or loss of interest - by coordinating the actions of the Call Center and brokers via real-time data synchronization with Hipoges systems (HAMS & Hipoges Work)',
      challenge:
        'enabling real-time integration and data synchronization across multiple external systems necessitated robust APIs and mechanisms to maintain data consistency between platforms (HAMS, Hipoges Work, Gocontact and CRM). Integrating the custom CRM tightly with the Gocontact auto-dialer software while retaining flexibility was likely a technical challenge. Automating the reassignment logic for leads that were not contacted within specified timeframes by brokers added complexity, especially considering the different inbound and outbound queues with varying agent skills, languages, and availability.',
      skills: ['golang', 'react', 'mysql', 'gocontact', 'nginx', 'centos'],
    },
    {
      name: 'Agos Italy',
      company: 'Transcom',
      companyUrl: 'https://www.transcom.com/',
      position: 'Tech Lead',
      period: 'Jul 2021 - Sep 2021',
      title: 'Custom CRM System for Agos on top of Gocontact (Italy)',
      description: `Web-based CRM developed for the Call Center, built on top of Gocontact auto-dialer platform to get telephony integration. Data retrieved stays on premise and is not stored in the cloud on the auto-dialer database. The CRM has an automatized system of loads and exports of data.`,
      challenge:
        'effectively integrate Gocontact campaigns with an on-premises external web application while maintaining security and performance',
      skills: ['golang', 'react', 'mysql', 'gocontact', 'nginx', 'centos'],
    },
    {
      name: 'Orange Collections',
      company: 'Transcom',
      companyUrl: 'https://www.transcom.com/',
      position: 'Tech Lead',
      period: 'Apr 2021 - Jul 2021',
      title: 'Project PRJ-3185: Assisted IVR for Orange/Jazztel Collections',
      description: `Integration between the agents' telephony systems (Altitude) and the Orange/Jazztel payment IVR, allowing agents to seamlessly transfer customers to the IVR while maintaining visibility over the transaction status`,
      challenge:
        'Intermediate web services were built to facilitate the integration between the Orange/Jazztel APIs, the Altitude system, and the Avaya AES telephony platform. Ensure that relevant information was sent in the telephony headers to support the statistical reporting requirements.',
      skills: ['golang', 'altitude scripting', 'nginx', 'centos'],
    },
    {
      name: 'Apple BI TTT Tool',
      company: 'Transcom',
      companyUrl: 'https://www.transcom.com/',
      position: 'Tech Lead',
      period: 'Dec 2020 - Apr 2021',
      title: 'Training Tracking System for Apple classes',
      description: `Web-based application that helps manage Apple's training programs. It tracks attendance by creating sign-in sheets, recording when people miss classes, and showing daily attendance. The system stores details about training, like dates, employee locations, time spent, assistants, people without training, and past training history for each employee. It connects to other systems like SAP to get user information and trainer data. For reporting and analytics, it is integrated with Bquery and Looker.`,
      challenge: '',
      skills: [
        'php',
        'javascript',
        'zend framework',
        'extjs',
        'mysql',
        'nginx',
        'centos',
      ],
    },
    {
      name: 'Altitude Development',
      company: 'Transcom',
      companyUrl: 'https://www.transcom.com/',
      position: 'Tech Lead',
      period: 'Aug 2019 - Dec 2020',
      title: 'New model and foundation for Altitude campaigns',
      description: `Developing a new model and foundation for creating new campaigns within the Altitude platform, leveraging previous experience and best practices in web application development. The new model allows for the creation of new campaigns in a more agile way, with a more flexible and user-friendly interface, and with a more robust and scalable architecture.`,
      challenge:
        'study/analysis of existing production campaigns, workflow simplification, user-friendly interfaces, and integration with external/client APIs via web services',
      skills: ['altitude', 'altitude scripting', 'golang', 'nginx', 'centos'],
    },
    {
      name: 'Altdash',
      company: 'Transcom',
      companyUrl: 'https://www.transcom.com/',
      position: 'Tech Lead',
      period: 'Aug 2018 - Aug 2019',
      title: 'Online dashboard for Altitude campaigns',
      description: `Web-based dashboard connected to Altitude to monitor sales in real-time, kpis, and provide a gamification system for agents.`,
      challenge: `Integration and configuration of the system for different campaigns and agent teams, in sync with Altitude. Visualization with different layouts depending on whether they were displayed on TVs at the call centers or directly on the team leaders' desktops. Control panel for managers to configure targets and rewards for agents.`,
      skills: [
        'golang',
        'javascript',
        'nodejs',
        'react',
        'nats',
        'websocket',
        'mongodb',
        'nginx',
        'centos',
      ],
    },
    {
      name: 'Kontrak HR',
      company: 'Transcom',
      companyUrl: 'https://www.transcom.com/',
      position: 'Tech Lead',
      period: 'Aug 2018 - Aug 2019',
      title: 'Management of contract hour adjustments for employees',
      description: `HR web application for managing increases and decreases in contract hours for employees, as well as facilitating the exchange of these contract hour adjustments with the external payroll processing company. `,
      challenge: `automate the process of sending contract hour adjustments to the payroll processing company, ensuring that the data is accurate and up-to-date, and that the process is secure and reliable.`,
      skills: ['php', 'javascript', 'react', 'mysql', 'nginx', 'centos'],
    },
    {
      name: 'TOM Tool',
      company: 'Transcom',
      companyUrl: 'https://www.transcom.com/',
      position: 'C.C Custom Applications Tech Lead',
      period: 'Before 2018',
      title: 'Transcom Operational Management tool',
      description: `A web-based performance management tool (scorecard) designed for the company's regional and global operations. It implements an ABCD performance ranking model, enabling control, reporting, and maintenance of key metrics. Integrated with the company's HR system, it automatically retrieves operational data, reducing manual data entry and ensuring data consistency. The system allows loaders people to manually upload data from external sounces and managers to edit or correct the data. Applicable to all levels defined within OPS, from CSR to Region. Provides an notifications system for managers to be aware of the performance of their teams and to take action when necessary.`,
      challenge: `integration and synchronization of data, ensuring data consistency, and providing a user-friendly interface for managers to interact with the system. 
      Cache system to improve performance and reduce the load on the database. Notifications system to alert managers of critical situations.
      Agregation of data for herarchy groups and regions in custom ranges of time. Operational groups vs financial/cost groups. Client metrics vs Transcom metrics.`,
      skills: [
        'php',
        'zend framework',
        'python',
        'javascript',
        'extjs',
        'mysql',
        'sqlserver',
        'informix',
        'postgresql',
        'oracle',
        'avaya',
        'BOBJ/SAP',
        'apache',
        'centos',
      ],
    },
    {
      name: 'SValidator',
      company: 'Transcom',
      companyUrl: 'https://www.transcom.com/',
      position: 'C.C Custom Applications Tech Lead',
      period: 'Before 2018',
      title: 'Sales validator system',
      description: `
      A web-based application that allows the validation of sales made by agents in the call center. The system is integrated with the company's CRM and telephony systems (Altitude and Qfiniti), allowing the validation of sales in real-time. It provides a user-friendly interface for the validation team to review sales, listen to call recordings, and validate or reject sales based on predefined criteria. The system also generates reports and statistics on sales validation performance, allowing managers to track the validation team's productivity and efficiency.`,
      challenge: `integration with the recording system to retrieve call recordints, decoding and playing them in the browser. Sincronization between CRM metadata and call recordings, ensuring that the validation team has the necessary information to validate sales and finally, the integration with the CRM to update the validation results.`,
      skills: [
        'php',
        'zend framework',
        'javascript',
        'extjs',
        'mysql',
        'sqlserver',
        'qfiniti',
        'altitude',
        'apache',
        'centos',
      ],
    },
    {
      name: 'Argo',
      company: 'Transcom',
      companyUrl: 'https://www.transcom.com/',
      position: 'C.C Custom Applications Tech Lead',
      period: 'Before 2018',
      title: 'Argumentation system for agents',
      description: `
      A web-based application that provides agents with predefined arguments in the form of a decision tree to help them to resolve customer queries and issues.`,
      challenge: `create a friendly interface for manager to create decision trees and arguments, and for agents to navigate through them, allowing them to go back and forth
      through the tree to adapt to the customer's changing needs.`,
      skills: [
        'php',
        'zend framework',
        'javascript',
        'extjs',
        'mysql',
        'apache',
        'centos',
      ],
    },
    {
      name: 'Virtual Log-In',
      company: 'Transcom',
      companyUrl: 'https://www.transcom.com/',
      position: 'C.C Custom Applications Tech Lead',
      period: 'Before 2018',
      title: 'Log-In System for Non-Telephony Services',
      description: `A web-based application designed to track agent status changes and work times for services that operate without traditional telephony systems. This tool enables non-voice teams to efficiently record their availability, log their activities, and monitor productivity metrics in real-time.`,
      challenge: ``,
      skills: [
        'php',
        'zend framework',
        'javascript',
        'extjs',
        'mysql',
        'apache',
        'centos',
      ],
    },
    {
      name: 'CRM+',
      company: 'Transcom',
      companyUrl: 'https://www.transcom.com/',
      position: 'C.C Custom Applications Tech Lead',
      period: 'Before 2018',
      title: 'Call Classification System',
      description: `A web system to multiple classification of calls which aims to identify times and trends of the actions/requests/transactions performed during calls, providing online visibility of service, allowing us to measure and quantify productivity per tag, employee and group. What makes it different from other classification tools is the way it works. By simply selecting a single tag, you drag an entire branch of the tag tree and its associated information. It avoids having to select multiple levels, which is common in other systems. CRM+ has CTI integration. It allows us to monitor phone events, retrieve call information to identify the customer, and stack untagged calls. You can also associate a helper script per tag to help the agent manage the call, or collect specific service data via a tag-specific form.`,
      challenge: `simplify the tagging process with a type-ahead combo box to select tags from the entire tag tree, searching in full paths rather than just the final tag names. CTI integration to monitor phone events and retrieve call information to identify the customer. Dynamic forms associated with tags to collect specific service data.`,
      skills: [
        'php',
        'zend framework',
        'javascript',
        'extjs',
        'mysql',
        'avaya AES',
        'apache',
        'centos',
      ],
    },
    {
      name: '13 years of projects...I even forgot some of them :)',
      company: 'Transcom mostly and some others',
      companyUrl: 'https://www.transcom.com/',
      position: 'Custom Applications TL Iberia an LATAM',
      period: '2005 - 2018',
      title: '',
      description: ``,
      challenge: ``,
      skills: ['lots of technologies and languages'],
    },
  ],
};

export default data;
