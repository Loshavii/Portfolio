
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Linkedin, Github, Mail, ArrowUp, Code, Terminal, Monitor ,FolderGit } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const navigation = [
    { name: 'Home', href: '#home', icon: <Monitor className="w-5 h-5 mr-2" /> },
    { name: 'About', href: '#about', icon: <Terminal className="w-5 h-5 mr-2" /> },
    { name: 'Education', href: '#education', icon: <Code className="w-5 h-5 mr-2" /> },
    { name: 'Skills', href: '#skills', icon: <Code className="w-5 h-5 mr-2" /> },
    { name: 'Project', href: '#projects', icon: <FolderGit className="w-5 h-5 mr-2" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="w-5 h-5 mr-2" /> },
  ];

  const socialLinks = [
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: 'https://www.linkedin.com/in/loshavii-arulramesh',
      color: 'hover:text-blue-500'
    },
    { 
      icon: <Github className="w-6 h-6" />, 
      href: 'https://github.com/Loshavii',
      color: 'hover:text-purple-500'
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      href: 'mailto:larulramesh@gmail.com',
      color: 'hover:text-red-500'
    },
  ];

  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white min-h-screen overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="fixed inset-0 z-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2
            }}
            animate={{ 
              x: [
                Math.random() * window.innerWidth, 
                Math.random() * window.innerWidth, 
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight, 
                Math.random() * window.innerHeight, 
                Math.random() * window.innerHeight
              ]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
          />
        ))}
      </div>

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold"
            >
              Loshavii <span className="text-cyan-400">Arulramesh</span>
            </motion.h1>
            
            {/* Desktop Navigation */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex items-center space-x-8"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-sm hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4 space-y-4"
              >
                {navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center py-2 hover:text-cyan-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        id="home" 
        className="relative pt-32 pb-20 px-6 z-10"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div variants={itemVariants} className="flex-1">
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl font-bold mb-4"
              >
                Hi, It's <span className="text-cyan-400">Loshavii</span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl mb-6"
              >
                Student Developer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="text-gray-300 mb-8 max-w-2xl"
              >
                Hi! I'm Loshavii, a creative and hardworking web developer with a passion for designing and
                building user-centric websites. My work focuses on creating intuitive and dynamic user
                experiences.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex gap-4"
              >
                {['Hire Me', "Let's Talk"].map((text, index) => (
                  <motion.a
                    key={text}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={index === 0 ? "mailto:larulramesh@gmail.com" : "#contact"}
                    className={`
                      px-6 py-3 rounded-full transition-all duration-300
                      ${index === 0 
                        ? 'bg-cyan-400 text-black hover:bg-cyan-300' 
                        : 'border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black'
                      }
                    `}
                  >
                    {text}
                  </motion.a>
                ))}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="flex gap-4 mt-8"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className={`
                      p-3 border-2 border-cyan-400 rounded-full 
                      transition-all duration-300 ${link.color}
                    `}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="flex-1 max-w-md group"
            >
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <img
                  src={require('./loshavii.png')} 
                  alt="Profile"
                  className="rounded-full w-auto h-auto object-cover shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="bg-slate-800 py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 max-w-md"
          >
            <motion.img
              src={require('./loshavii.png')} 
              alt="About"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full w-96 h-96 object-cover shadow-lg shadow-cyan-400/20 transition-transform duration-300"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold mb-6 animate-pulse">Student Developer</h3>
            <p className="text-gray-300 mb-8">
            I am a student developer with a solid foundation in computer science, proficient in Python, HTML, and CSS, with a strong interest in web development and UI/UX design. I enjoy building web applications using frameworks and am passionate about Figma, constantly exploring innovative ways to enhance user experiences. My career goals include becoming a Full Stack Web Developer, leading tech teams, or starting my own tech company.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition-colors"
            >
              Read More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>


    <section id="education" className="py-20 px-6">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">
      Education & <span className="text-cyan-400">Experience</span>
    </h2>        
    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      {/* Education Column */}
      <div>
        <h3 className="text-2xl font-bold mb-8 text-cyan-400 border-b-2 border-cyan-400 pb-4">
          Education
        </h3>
        <div className="relative pl-8 border-l-2 border-cyan-400">
          <div className="mb-12">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-400 rounded-full">
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </span>
            <h4 className="text-xl font-bold mb-2">Uki Coding School</h4>
            <span className="text-cyan-400 text-sm">2024</span>
            <p className="mt-4 text-gray-300">
              Currently enrolled at Uki Coding School, focusing on Full Stack Web development.
              The curriculum covers HTML, CSS, JavaScript, Java, React, and Node.js.
            </p>
          </div>            
          <div className="mb-12">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-400 rounded-full">
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </span>
            <h4 className="text-xl font-bold mb-2">Technical College</h4>
            <span className="text-cyan-400 text-sm">2023</span>
            <p className="mt-4 text-gray-300">
              Pursued NVQ-4 Certification in ICT Technician at Technical College of Jaffna.
              Gained proficiency in programming languages and Microsoft Office management.
            </p>
          </div>

          <div className="mb-12">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-400 rounded-full">
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </span>
            <h4 className="text-xl font-bold mb-2">High School</h4>
            <span className="text-cyan-400 text-sm">2021</span>
            <p className="mt-4 text-gray-300">
              Attended J/Uduvil Girls' College, excelled in mathematics, art, and computer science.
              Participated in various extracurricular activities.
            </p>
          </div>
        </div>
      </div>

      {/* Experience Column */}
      <div>
        <h3 className="text-2xl font-bold mb-8 text-cyan-400 border-b-2 border-cyan-400 pb-4">
          Professional Experience
        </h3>
        <div className="relative pl-8 border-l-2 border-cyan-400">
          {/* <div className="mb-12">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-400 rounded-full">
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </span>
            <h4 className="text-xl font-bold mb-2">Web Development Intern</h4>
            <span className="text-cyan-400 text-sm">2023 - Present</span>
            <p className="mt-4 text-gray-300">
              Worked with a local tech startup to develop responsive web applications using React and Node.js.
              Collaborated with senior developers to implement new features and improve existing codebase.
              Gained hands-on experience in agile development methodologies and version control with Git.
            </p>
          </div> */}

          <div className="mb-12">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-400 rounded-full">
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </span>
            <h4 className="text-xl font-bold mb-2">IT Support Technician</h4>
            <span className="text-cyan-400 text-sm">2023</span>
            <p className="mt-4 text-gray-300">
            I completed an internship as a computer technician, gaining valuable hands-on
                            experience in diagnosing and resolving microsoft office issues. During this
                            internship, I worked with a team to public communications with letters and database
                            access.
            </p>
          </div>

          {/* <div className="mb-12">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-400 rounded-full">
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </span>
            <h4 className="text-xl font-bold mb-2">Freelance Web Designer</h4>
            <span className="text-cyan-400 text-sm">2021 - 2022</span>
            <p className="mt-4 text-gray-300">
              Created custom websites for local small businesses and entrepreneurs.
              Designed responsive and user-friendly interfaces using HTML, CSS, and basic JavaScript.
              Managed client communications and delivered projects within specified timelines.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</section>


             {/* Skills Section */}
      <section id="skills" className="bg-slate-800 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Technical Skills */}
            <div className="bg-slate-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-6">
                {['Microsoft Office', 'Visual Basic', 'Adobe Photoshop', 'HTML', 'CSS', 'MERN Stack', 'Figma'].map((skill) => (
                  <div key={skill} className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interpersonal Skills */}
            <div className="bg-slate-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-8 text-center">Interpersonal Skills</h3>
              <div className="grid grid-cols-2 gap-6">
                {['Creativity', 'Communication', 'Team Work', 'Leadership'].map((skill) => (
                  <div key={skill} className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-gray-900">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">
      My <span className="text-cyan-400">Projects</span>
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Project 1 */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
        <div className="relative">
          <img 
            src={require('./fitzhore.png')} 
            alt="Project Thumbnail" 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-cyan-400">
            Fitness Website
          </h3>
          <p className="text-gray-300 mb-4">
          Fitzhore is a dynamic platform connecting fitness enthusiasts with certified coaches. Users can set goals, explore coaches, book sessions, and track progress, while coaches manage profiles, packages, and payments. Admins oversee registrations, disputes, and platform reports. Built with React.js, Node.js, Express.js, MongoDB, and JWT authentication, Fitzhore ensures a secure, seamless, and professional fitness experience.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://your-project-live-link.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md hover:bg-cyan-500 transition duration-300"
            >
              Live Demo
            </a>
            <a 
              href="https://github.com/yourusername/project-repo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-md hover:bg-cyan-400 hover:text-gray-900 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
        <div className="relative">
          <img 
            src={require('./portfolio.png')} 
            alt="Project Thumbnail" 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-cyan-400">
            Personal Portfolio
          </h3>
          <p className="text-gray-300 mb-4">
          A modern portfolio showcasing skills, projects, and experience, built with React.js and Tailwind CSS. The site features responsive design, smooth animations, project highlights, a professional timeline, and contact integration with GitHub and LinkedIn, demonstrating expertise in web development and design.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://your-portfolio-link.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md hover:bg-cyan-500 transition duration-300"
            >
              Live Demo
            </a>
            <a 
              href="https://github.com/yourusername/portfolio-repo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-md hover:bg-cyan-400 hover:text-gray-900 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
        <div className="relative">
        <img 
            src={require('./Live stream.png')} 
            alt="Project Thumbnail" 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-cyan-400">
            LiveStream Hub
          </h3>
          <p className="text-gray-300 mb-4">
          An interactive live streaming app connecting creators and audiences in real-time. Built with React.js, Node.js, and WebRTC, it features live chat, user authentication, session scheduling, and high-quality, low-latency streaming for a seamless experience.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://your-task-app-link.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md hover:bg-cyan-500 transition duration-300"
            >
              Live Demo
            </a>
            <a 
              href="https://github.com/yourusername/task-app-repo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-md hover:bg-cyan-400 hover:text-gray-900 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
      {/* Project 4 */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
        <div className="relative">
          <img 
            src={require('./Chatapp.png')} 
            alt="Project Thumbnail" 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-cyan-400">
            Chat App
          </h3>
          <p className="text-gray-300 mb-4">
          A real-time individual chat app built with React.js and Vite. It features seamless messaging, user authentication, and instant notifications, providing a fast and responsive communication experience.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://your-project-live-link.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md hover:bg-cyan-500 transition duration-300"
            >
              Live Demo
            </a>
            <a 
              href="https://github.com/yourusername/project-repo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-md hover:bg-cyan-400 hover:text-gray-900 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project 5 */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
        <div className="relative">
          <img 
            src={require('./Quiz app.png')} 
            alt="Project Thumbnail" 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-cyan-400">
          QuizMaster
          </h3>
          <p className="text-gray-300 mb-4">
          A quiz app built with React.js and Vite, offering an interactive and engaging way to test knowledge. Users can answer multiple-choice questions, track scores, and view results instantly. The app features a smooth, fast experience with Vite’s optimized build system, ensuring quick load times and a responsive design.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://your-portfolio-link.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md hover:bg-cyan-500 transition duration-300"
            >
              Live Demo
            </a>
            <a 
              href="https://github.com/yourusername/portfolio-repo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-md hover:bg-cyan-400 hover:text-gray-900 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project 6 */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
        <div className="relative">
        <img 
            src={require('./foodieapp.png')} 
            alt="Project Thumbnail" 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-cyan-400">
          Foodie App
          </h3>
          <p className="text-gray-300 mb-4">
          The Foodie App is a user-friendly platform built with React and styled using Tailwind CSS, offering an interactive experience for exploring recipes, ordering food, and sharing culinary tips. Its sleek, mobile-optimized design ensures seamless navigation, making it perfect for food enthusiasts and home cooks seeking convenience and inspiration.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://your-task-app-link.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md hover:bg-cyan-500 transition duration-300"
            >
              Live Demo
            </a>
            <a 
              href="https://github.com/yourusername/task-app-repo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-md hover:bg-cyan-400 hover:text-gray-900 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

        {/* Project 7 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
        <div className="relative">
        <img 
            src={require('./UI UX .jpeg')} 
            alt="Project Thumbnail" 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-cyan-400">
          Figma Project 1
          </h3>
          <p className="text-gray-300 mb-4">
          Explore my collection of UI/UX designs crafted with Figma, showcasing a diverse range of projects, from web applications to mobile interfaces. Each design emphasizes user-centric experiences, intuitive navigation, and modern aesthetics. These projects reflect my passion for creativity, attention to detail, and commitment to delivering exceptional user experiences.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://www.figma.com/team_invite/redeem/zFPdf8Btnuemb9jamSTpE3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md hover:bg-cyan-500 transition duration-300"
            >
              View Projects
            </a>
            
          </div>
        </div>
      </div>

        {/* Project 7 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
        <div className="relative">
        <img 
            src={require('./ui.jpeg')} 
            alt="Project Thumbnail" 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-cyan-400">
          Figma Project 2
          </h3>
          <p className="text-gray-300 mb-4">
          Explore my collection of UI/UX designs crafted with Figma, showcasing a diverse range of projects, from web applications to mobile interfaces. Each design emphasizes user-centric experiences, intuitive navigation, and modern aesthetics. These projects reflect my passion for creativity, attention to detail, and commitment to delivering exceptional user experiences.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://www.figma.com/team_invite/redeem/MD6WvmXuG0WyYpgIpBKBcS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md hover:bg-cyan-500 transition duration-300"
            >
              View Projects
            </a>
            
          </div>
        </div>
      </div>

    </div>

    {/* All Projects Button */}
    <div className="text-center mt-12">
      <a 
        href="https://github.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-md text-lg font-semibold hover:bg-cyan-500 transition duration-300 inline-block"
      >
        View All Projects
      </a>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 bg-transparent border-2 border-cyan-400 rounded-lg focus:outline-none focus:border-cyan-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 bg-transparent border-2 border-cyan-400 rounded-lg focus:outline-none focus:border-cyan-300"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full p-4 bg-transparent border-2 border-cyan-400 rounded-lg focus:outline-none focus:border-cyan-300"
              />
              <input
                type="text"
                placeholder="Email Subject"
                className="w-full p-4 bg-transparent border-2 border-cyan-400 rounded-lg focus:outline-none focus:border-cyan-300"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 bg-transparent border-2 border-cyan-400 rounded-lg focus:outline-none focus:border-cyan-300"
            ></textarea>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>


            {/* Footer */}
            <footer className="bg-slate-800 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400">
              Copyright © 2024 by Loshavii | All Rights Reserved.
            </p>
            <a
              href="#home"
              className="mt-4 md:mt-0 p-2 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors"
            >
              <ArrowUp className="w-5 h-5 text-black" />
            </a>
          </div>
        </div>
      </footer>
      {/* Rest of the sections would follow a similar pattern of animation */}
      {/* I've shown the full implementation for the Hero section to demonstrate the approach */}
      
      {/* You would continue with similar motion components for other sections */}
    </motion.div>
  );
};

export default Portfolio;