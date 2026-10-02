/// <reference types="vite/client" />
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { PrecisionSection } from '../components/PrecisionSection';
import { 
  Folder, 
  FolderOpen, 
  Brain, 
  Sparkles, 
  Database, 
  Layers, 
  Cpu, 
  Activity, 
  Sliders, 
  TrendingUp, 
  Search, 
  Bot, 
  MessageSquare, 
  MessageCircle, 
  Table, 
  Binary, 
  BarChart, 
  RefreshCw, 
  Link, 
  Zap, 
  Monitor,
  FileCode
} from 'lucide-react';

import pythonIcon from '../assets/skills/python.png';
import javascriptIcon from '../assets/skills/javascript.png';
import javaIcon from '../assets/skills/java.png';
import cppIcon from '../assets/skills/cpp.png';
import cIcon from '../assets/skills/c.png';
import reactIcon from '../assets/skills/react.png';
import tailwindIcon from '../assets/skills/tailwind.png';
import html5Icon from '../assets/skills/html5.png';
import nodejsIcon from '../assets/skills/nodejs.png';
import mysqlIcon from '../assets/skills/mysql.png';
import mlLibrariesIcon from '../assets/skills/ml_libraries.png';
import machineLearningIcon from '../assets/skills/machine_learning.png';
import computerVisionIcon from '../assets/skills/computer_vision.png';
import gitIcon from '../assets/skills/git.png';
import figmaIcon from '../assets/skills/figma.png';
import vscodeIcon from '../assets/skills/vscode.png';

interface Skill {
  name: string;
  details: string;
  deployment: string;
  logo: (className: string) => React.ReactNode;
  logo3d: string;
}

interface SkillCategory {
  index: string;
  title: string;
  desc: string;
  skills: Skill[];
}

interface TreeChild {
  name: string;
  desc: string;
  tools?: string;
}

interface TreeNode {
  name: string;
  children: TreeChild[];
}

const mlTreeData: TreeNode[] = [
  {
    name: 'Machine Learning',
    children: [
      { name: 'Model Training', desc: 'Supervised/Unsupervised models, custom loss functions, training epochs.', tools: 'TensorFlow, Scikit-Learn' },
      { name: 'Model Evaluation', desc: 'Validation loops, ROC/AUC, confusion matrices, bias/variance trade-offs.', tools: 'Scikit-Learn, MLflow' },
      { name: 'Feature Engineering', desc: 'Dimensionality reductions, scaling, hot-encodings, data normalization.', tools: 'Pandas, NumPy' },
      { name: 'Predictive Analytics', desc: 'Time series forecasting, regressions, multi-class classification engines.', tools: 'Scikit-learn, TensorFlow' },
    ]
  },
  {
    name: 'Generative AI',
    children: [
      { name: 'RAG Systems', desc: 'Retrieval-Augmented Generation, vector embeddings indexing, document ingestion.', tools: 'LangChain, ChromaDB' },
      { name: 'AI Agents', desc: 'Multi-agent frameworks, tool usage pipelines, autonomous reflection loops.', tools: 'Multi-Agent, LangChain' },
      { name: 'Prompt Engineering', desc: 'Few-shot prompts, chain-of-thought routing, system instructions tuning.', tools: 'Gemini, Groq, OpenAI' },
      { name: 'LLM Applications', desc: 'Natural language interfaces, function calling, multimodal inputs.', tools: 'OpenRouter, DeepSeek' },
    ]
  },
  {
    name: 'Data Science',
    children: [
      { name: 'Pandas', desc: 'High-performance tabular data frame manipulations and statistical aggregations.', tools: 'Pandas DataFrames' },
      { name: 'NumPy', desc: 'Multi-dimensional array computing, scientific formulas, matrix linear algebra.', tools: 'NumPy Arrays' },
      { name: 'Data Visualization', desc: 'Interactive plots, heatmaps, distribution plots, metrics dashboards.', tools: 'Matplotlib' },
      { name: 'Data Processing', desc: 'Cleaning pipelines, handling missing records, outlier detection.', tools: 'Scikit-Learn Pipelines' },
    ]
  },
  {
    name: 'AI Stack',
    children: [
      { name: 'Groq & Gemini', desc: 'High-speed LPU inference and advanced multimodal reasoning pipelines.', tools: 'Groq, Google Gemini' },
      { name: 'DeepSeek & OpenAI', desc: 'Deep reasoning models, code intelligence, API completion connectors.', tools: 'DeepSeek, OpenAI' },
      { name: 'ChromaDB', desc: 'Vector database storing semantic chunks and embeddings for semantic search.', tools: 'ChromaDB Local' },
      { name: 'Playwright & Tools', desc: 'Browser automation, web testing, and autonomous agentic loops.', tools: 'Playwright, ElevenLabs' },
    ]
  }
];

export function Skills() {
  const [isMlTreeOpen, setIsMlTreeOpen] = useState(false);
  const [openSubBranches, setOpenSubBranches] = useState<Record<string, boolean>>({
    'Machine Learning': true,
    'Generative AI': true,
    'Data Science': true,
    'AI Stack': true
  });
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const toggleSubBranch = (branchName: string) => {
    setOpenSubBranches(prev => ({
      ...prev,
      [branchName]: !prev[branchName]
    }));
  };

  const getCategoryIcon = (name: string, isOpen: boolean) => {
    switch (name) {
      case 'Machine Learning':
        return <Brain className="w-4 h-4 text-emerald-400" />;
      case 'Generative AI':
        return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'Data Science':
        return <Database className="w-4 h-4 text-rose-400" />;
      case 'AI Stack':
        return <Layers className="w-4 h-4 text-amber-500" />;
      default:
        return isOpen ? <FolderOpen className="w-4 h-4" /> : <Folder className="w-4 h-4" />;
    }
  };

  const getLeafIcon = (name: string) => {
    switch (name) {
      case 'Model Training': return <Cpu className="w-3.5 h-3.5 text-emerald-400/80" />;
      case 'Model Evaluation': return <Activity className="w-3.5 h-3.5 text-emerald-400/80" />;
      case 'Feature Engineering': return <Sliders className="w-3.5 h-3.5 text-emerald-400/80" />;
      case 'Predictive Analytics': return <TrendingUp className="w-3.5 h-3.5 text-emerald-400/80" />;
      case 'RAG': return <Search className="w-3.5 h-3.5 text-amber-400/80" />;
      case 'AI Agents': return <Bot className="w-3.5 h-3.5 text-amber-400/80" />;
      case 'Prompt Engineering': return <MessageSquare className="w-3.5 h-3.5 text-amber-400/80" />;
      case 'Conversational AI': return <MessageCircle className="w-3.5 h-3.5 text-amber-400/80" />;
      case 'Pandas': return <Table className="w-3.5 h-3.5 text-rose-400/80" />;
      case 'NumPy': return <Binary className="w-3.5 h-3.5 text-rose-400/80" />;
      case 'Data Visualization': return <BarChart className="w-3.5 h-3.5 text-rose-400/80" />;
      case 'Data Processing': return <RefreshCw className="w-3.5 h-3.5 text-rose-400/80" />;
      case 'LangChain': return <Link className="w-3.5 h-3.5 text-amber-500/80" />;
      case 'OpenAI': return <Sparkles className="w-3.5 h-3.5 text-amber-500/80" />;
      case 'ChromaDB': return <Database className="w-3.5 h-3.5 text-amber-500/80" />;
      case 'FastAPI': return <Zap className="w-3.5 h-3.5 text-amber-500/80" />;
      case 'Streamlit': return <Monitor className="w-3.5 h-3.5 text-amber-500/80" />;
      default: return <FileCode className="w-3.5 h-3.5 text-sohub-grey" />;
    }
  };

  const renderCategoryNode = (node: TreeNode, side: 'left' | 'right') => {
    const isOpen = !!openSubBranches[node.name];
    let colorClass = 'hover:border-sohub-white/40';
    let iconColor = 'text-sohub-grey';
    
    if (node.name === 'Machine Learning') {
      colorClass = 'hover:border-emerald-500/50 hover:bg-emerald-500/5';
      iconColor = 'text-emerald-400';
    } else if (node.name === 'Generative AI') {
      colorClass = 'hover:border-amber-500/50 hover:bg-amber-500/5';
      iconColor = 'text-amber-400';
    } else if (node.name === 'Data Science') {
      colorClass = 'hover:border-rose-500/50 hover:bg-rose-500/5';
      iconColor = 'text-rose-400';
    } else if (node.name === 'AI Stack') {
      colorClass = 'hover:border-amber-500/50 hover:bg-amber-500/5';
      iconColor = 'text-amber-500';
    }

    return (
      <div className="space-y-4">
        {/* Category Trigger card */}
        <div 
          onMouseEnter={() => setHoveredCategory(node.name)}
          onMouseLeave={() => setHoveredCategory(null)}
          className={`group relative bg-gradient-to-br from-sohub-dark-grey/65 to-sohub-black/95 border border-sohub-dark-grey p-4 rounded-none transition-all duration-300 ${colorClass}`}
        >
          <button
            onClick={() => toggleSubBranch(node.name)}
            className="w-full flex items-center justify-between gap-3 text-sohub-white font-bold cursor-pointer select-none"
          >
            <div className="flex items-center gap-2">
              <div className={`p-1 bg-sohub-dark-grey/40 border border-sohub-dark-grey rounded-none ${iconColor}`}>
                {getCategoryIcon(node.name, isOpen)}
              </div>
              <span className="text-[10px] tracking-widest">{node.name.toUpperCase()}</span>
            </div>
            <span className="text-[9px] text-sohub-grey font-mono font-normal">({node.children.length})</span>
          </button>
        </div>

        {/* Child leaves list with stable CSS connector lines */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden space-y-1.5 relative pl-4"
            >
              <div className="flex flex-col items-start space-y-1.5">
                {node.children.map((child, cIdx) => {
                  const isLast = cIdx === node.children.length - 1;
                  let leafAccentClass = '';
                  let leafHoverGlow = '';
                  
                  if (node.name === 'Machine Learning') {
                    leafAccentClass = 'border-l-2 border-l-emerald-400';
                    leafHoverGlow = 'hover:border-emerald-500/35 hover:shadow-[0_0_12px_rgba(52,211,153,0.12)]';
                  } else if (node.name === 'Generative AI') {
                    leafAccentClass = 'border-l-2 border-l-amber-400';
                    leafHoverGlow = 'hover:border-amber-500/35 hover:shadow-[0_0_12px_rgba(251,191,36,0.12)]';
                  } else if (node.name === 'Data Science') {
                    leafAccentClass = 'border-l-2 border-l-rose-400';
                    leafHoverGlow = 'hover:border-rose-500/35 hover:shadow-[0_0_12px_rgba(251,113,133,0.12)]';
                  } else if (node.name === 'AI Stack') {
                    leafAccentClass = 'border-l-2 border-l-amber-500';
                    leafHoverGlow = 'hover:border-amber-500/35 hover:shadow-[0_0_12px_rgba(245,158,11,0.12)]';
                  }

                  return (
                    <div
                      key={child.name}
                      className={`group/node relative py-1.5 pl-6 pr-3 border border-sohub-dark-grey/30 bg-sohub-black/85 transition-all duration-200 cursor-pointer w-full rounded-none font-mono ${leafAccentClass} ${leafHoverGlow}`}
                    >
                      {/* Vertical line indicator */}
                      {isLast ? (
                        <div className="absolute left-2.5 top-0 h-[50%] w-[1px] bg-sohub-dark-grey/30 group-hover/node:bg-sohub-white/40 transition-colors pointer-events-none" />
                      ) : (
                        <div className="absolute left-2.5 top-0 bottom-0 w-[1px] bg-sohub-dark-grey/30 group-hover/node:bg-sohub-white/40 transition-colors pointer-events-none" />
                      )}
                      {/* Horizontal line stub */}
                      <div className="absolute left-2.5 top-1/2 w-3.5 h-[1px] bg-sohub-dark-grey/30 group-hover/node:bg-sohub-white/40 transition-colors pointer-events-none" />

                      <div className="flex items-center gap-2">
                        {getLeafIcon(child.name)}
                        <span className="text-sohub-white text-[9.5px] font-semibold">{child.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const categories: SkillCategory[] = [
    {
      index: '01',
      title: 'Languages',
      desc: 'Core syntax and algorithmic fundamentals for building clean compilation loops.',
      skills: [
        { 
          name: 'C', 
          details: 'Procedural logic structure, hardware-level memory mapping, pointer manipulations, and static layouts.', 
          deployment: 'Memory-Constrained Hardware Implementations, Algorithms',
          logo3d: cIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 100 100" fill="none" stroke="#A8B9CC" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="50" cy="50" r="40" stroke="#A8B9CC" />
              <path d="M62 35c-7-7-16-9-24-4s-10 14-6 24 13 13 22 9" stroke="#A8B9CC" />
            </svg>
          )
        },
        { 
          name: 'C++', 
          details: 'Low-level memory architectures, algorithm optimization, systems compilation, and data structures.', 
          deployment: 'High-Performance Computational Algorithms, DSA',
          logo3d: cppIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 100 100" fill="none" stroke="#00599C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="50" cy="50" r="40" stroke="#00599C" />
              <path d="M52 32c-10 0-18 8-18 18s8 18 18 18" stroke="#00599C" />
              <path d="M60 50h12m-6-6v12m12-6h12m-6-6v12" stroke="#00599C" />
            </svg>
          )
        },
        { 
          name: 'Python', 
          details: 'Scientific computing, AI/ML pipelines, computer vision logic, and backend API scripting.', 
          deployment: 'AI/ML Inference Pipelines, Agentic Frameworks, Data Processing',
          logo3d: pythonIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 110 110">
              <path d="M52.1 1.7C27 .5 25.4 3 25.4 9.1v7h27.3v3.7H25.4c-13 .1-19 5-19 18.2s0 20.3 0 20.3c0 10.3 4.3 17 14.8 17H28V67.8c0-8.2 6.6-14.8 14.8-14.8h27.4V25.6c0-13.7-2-22.1-18.1-23.9zm-8.8 8.1c2 0 3.7 1.6 3.7 3.7s-1.6 3.7-3.7 3.7-3.7-1.6-3.7-3.7 1.7-3.7 3.7-3.7z" fill="#3776AB" />
              <path d="M57.9 108.3c25.1 1.2 26.7-1.3 26.7-7.4v-7H57.3v-3.7h27.3c13-.1 19-5 19-18.2s0-20.3 0-20.3c0-10.3-4.3-17-14.8-17H82v7.5c0 8.2-6.6 14.8-14.8 14.8H39.8v27.4c0 13.7 2 22.1 18.1 23.9zm8.8-8.1c-2 0-3.7-1.6-3.7-3.7s1.6-3.7 3.7-3.7 3.7 1.6 3.7 3.7-1.6 3.7-3.7 3.7z" fill="#FFE052" />
            </svg>
          )
        },
        { 
          name: 'Java', 
          details: 'Object-oriented programming, robust backend systems, multithreading control structures, and enterprise compilation.', 
          deployment: 'JVM-Based Production Systems, Enterprise Architectures',
          logo3d: javaIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 100 100" fill="none" strokeWidth="2.5">
              <path d="M25 35c0 15 10 25 25 25s25-10 25-25H25z" fill="#E24A26" fillOpacity="0.1" stroke="#E24A26" />
              <path d="M75 40c8 0 10-10 0-10" stroke="#E24A26" />
              <path d="M20 65c10 5 40 5 60 0" stroke="#0073B7" strokeWidth="3" />
              <path d="M40 25c1-5-1-10 1-15M50 25c1-5-1-10 1-15M60 25c1-5-1-10 1-15" stroke="#0073B7" />
            </svg>
          )
        },
        { 
          name: 'JavaScript', 
          details: 'Dynamic web interfaces, asynchronous event handling, and interactive DOM architectures.', 
          deployment: 'Client-Side Web Logic, Async Event Loops, Browser Engine Execution',
          logo3d: javascriptIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 100 100">
              <rect width="100" height="100" rx="8" fill="#F7DF1E" />
              <path d="M43.7 75c.3 4.2 2.6 6.8 6.7 6.8 4.2 0 6.6-2.1 6.6-6.9V45.2h6.7V75c0 8.7-4.8 13-13.2 13-7.8 0-12.8-4-13.5-13h6.7zm24.1-1.3c1 4.5 4.3 8.1 9.9 8.1 5.3 0 8.4-2.8 8.4-7.2 0-4.6-3.4-6.2-9.4-8.8l-3.2-1.4c-8.6-3.7-12-7.5-12-15.1 0-8.3 6.3-14.5 15.6-14.5 8.7 0 14.7 4.9 15.6 12.8h-6.7c-.8-4.4-3.5-6.7-8.9-6.7-4.7 0-7.3 2.6-7.3 6.6 0 4.2 2.6 5.8 8.1 8.2l3.2 1.4c9.9 4.3 13.3 8.3 13.3 15.9 0 9-6.7 15-16.9 15-10.4 0-16.6-5.4-17.7-14.8h6.7z" fill="#000000" />
            </svg>
          )
        },
        { 
          name: 'SQL', 
          details: 'Relational data querying, joins, transactional integrity, index optimization, and aggregation.', 
          deployment: 'Relational Database Queries, Constraints, Schema Modeling',
          logo3d: mysqlIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 100 100" fill="none" stroke="#00758F" strokeWidth="2.5">
              <ellipse cx="50" cy="25" rx="35" ry="12" fill="#00758F" fillOpacity="0.1" />
              <path d="M15 25v16c0 6.6 15.7 12 35 12s35-5.4 35-12V25" fill="#00758F" fillOpacity="0.1" />
              <path d="M15 41v16c0 6.6 15.7 12 35 12s35-5.4 35-12V41" fill="#F29111" fillOpacity="0.1" stroke="#F29111" />
              <path d="M15 57v16c0 6.6 15.7 12 35 12s35-5.4 35-12V57" fill="#00758F" fillOpacity="0.1" />
            </svg>
          )
        },
      ]
    },
    {
      index: '02',
      title: 'Frontend',
      desc: 'Crafting responsive client layers with smooth interactions and premium web layouts.',
      skills: [
        { 
          name: 'HTML5', 
          details: 'Semantic document formatting, web accessibility standards (ARIA), and SEO structure.', 
          deployment: 'Semantic Document Formats, Web Accessibility (WCAG 2.1)',
          logo3d: html5Icon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="none">
              <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" fill="#E34F26" />
              <path d="M12 1.8v20.4l6.9-1.9L20.3 1.8H12z" fill="#EF652A" />
              <path d="M12 11.2H7.6l-.3-3.3H12V4.6H4l.9 10h7.1v-3.4zM12 18l-.1.1-3.8-1-.2-2.7H4.6l.5 5.6 6.9 1.9V18z" fill="#EBEBEB" />
              <path d="M12 4.6h8l-.7 8.3H12v-3.4h4.1l-.3 3.3-3.8 1v3.3l6.9-1.9.9-10.6H12V4.6z" fill="#FFFFFF" />
            </svg>
          )
        },
        { 
          name: 'CSS3', 
          details: 'Advanced CSS layouts, Flexbox, Grid, custom properties, animations, and transitions.', 
          deployment: 'Modern Layout Specifications, Responsive Viewports',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#264DE4">
              <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0z" />
              <path d="M12 1.8v20.4l6.9-1.9L20.3 1.8H12z" fill="#2965F1" />
              <path d="M12 11.2H7.6l-.3-3.3H12V4.6H4l.9 10h7.1v-3.4zM12 18l-.1.1-3.8-1-.2-2.7H4.6l.5 5.6 6.9 1.9V18z" fill="#EBEBEB" />
              <path d="M12 4.6h8l-.7 8.3H12v-3.4h4.1l-.3 3.3-3.8 1v3.3l6.9-1.9.9-10.6H12V4.6z" fill="#FFFFFF" />
            </svg>
          )
        },
        { 
          name: 'Tailwind CSS', 
          details: 'Utility-first styling, design token systems, container queries, and dark/light modes.', 
          deployment: 'GPU-Accelerated Utility Classes, Fluid Breakpoint Tokens',
          logo3d: tailwindIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="none">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#38BDF8" />
            </svg>
          )
        },
        { 
          name: 'React.js', 
          details: 'Declarative component hierarchies, custom state hooks, context providers, and DOM diffing.', 
          deployment: 'Production Web Applications, Interactive Component Trees',
          logo3d: reactIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 100 100" fill="none" stroke="#61DAFB" strokeWidth="3">
              <circle cx="50" cy="50" r="6" fill="#61DAFB" stroke="none" />
              <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" />
              <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(60 50 50)" stroke="#61DAFB" />
              <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(120 50 50)" stroke="#61DAFB" />
            </svg>
          )
        },
        { 
          name: 'Next.js', 
          details: 'Server-side rendering, App Router architecture, API endpoints, and dynamic route streaming.', 
          deployment: 'Full-Stack Web Deployments, Vercel Edge Serverless',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 180 180" fill="none">
              <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                <circle cx="90" cy="90" r="90" fill="#fff"/>
              </mask>
              <g mask="url(#next-mask)">
                <circle cx="90" cy="90" r="90" fill="#000"/>
                <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_next)"/>
                <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_next)"/>
              </g>
              <defs>
                <linearGradient id="paint0_linear_next" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_next" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          )
        },
      ]
    },
    {
      index: '03',
      title: 'Backend',
      desc: 'Structuring performant APIs and robust server systems to power enterprise applications.',
      skills: [
        { 
          name: 'Java', 
          details: 'Enterprise backend services, multi-threaded worker routines, and object-oriented pipelines.', 
          deployment: 'Production Services, High-Performance Workflows',
          logo3d: javaIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 100 100" fill="none" strokeWidth="2.5">
              <path d="M25 35c0 15 10 25 25 25s25-10 25-25H25z" fill="#E24A26" fillOpacity="0.1" stroke="#E24A26" />
              <path d="M75 40c8 0 10-10 0-10" stroke="#E24A26" />
              <path d="M20 65c10 5 40 5 60 0" stroke="#0073B7" strokeWidth="3" />
            </svg>
          )
        },
        { 
          name: 'Spring Boot', 
          details: 'Spring Boot 3, Maven dependency injection, JPA/Hibernate persistence, and enterprise security.', 
          deployment: 'Enterprise Microservices, Standalone Production REST Backends',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#6DB33F">
              <path d="M21.5 8.7L13.3.6C12.9.2 12.4 0 12 0s-.9.2-1.3.6L2.5 8.7C1.7 9.5 1.7 10.7 2.5 11.5L4.8 13.8C5.6 14.6 6.8 14.6 7.6 13.8L9.9 11.5C10.7 10.7 10.7 9.5 9.9 8.7L9 7.8 12 4.8l7.6 7.6-3 3-1.4-1.4c-.8-.8-2-.8-2.8 0s-.8 2 0 2.8l2.8 2.8c.8.8 2 .8 2.8 0l4.5-4.5c.8-.8.8-2 0-2.8z"/>
            </svg>
          )
        },
        { 
          name: 'REST APIs', 
          details: 'Stateless HTTP routing, JSON schemas, authentication filters, status codes, and API contracts.', 
          deployment: 'Microservice Endpoints, Webhook Gateways',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2">
              <rect x="2" y="2" width="20" height="8" rx="2" />
              <rect x="2" y="14" width="20" height="8" rx="2" />
              <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
              <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
            </svg>
          )
        },
        { 
          name: 'Node.js', 
          details: 'Event-driven asynchronous I/O, Express middleware architectures, and server routines.', 
          deployment: 'Backend Gateway Routers, REST API Servers',
          logo3d: nodejsIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 100 100" fill="#339933">
              <path d="M50 8l-38 22v44l38 22 38-22v-44zm0 80l-31-18v-36l31 18zm0-42.5l-31-18 31-18 31 18z" />
            </svg>
          )
        },
        { 
          name: 'FastAPI', 
          details: 'Asynchronous Python API development, Pydantic type validation, and OpenAPI documentation.', 
          deployment: 'High-Performance ML Model Serving, Async Microservices',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#009688">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.8 17.6v-5.2H8.4L13.2 4.4v5.2h2.8L11.2 17.6z"/>
            </svg>
          )
        },
        { 
          name: 'Flask', 
          details: 'Lightweight WSGI web framework, Jinja2 templating, and rapid prototype backend services.', 
          deployment: 'Microservice Gateways, Rapid Python Prototyping',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8">
              <path d="M9 3h6m-3 0v4m0 0a6 6 0 0 1 6 6v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7a6 6 0 0 1 6-6z" />
            </svg>
          )
        },
        { 
          name: 'Django', 
          details: 'Batteries-included web framework, ORM models, migrations, authentication, and admin panel.', 
          deployment: 'Full-Stack Python Applications, ORM Data Stores',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#092E20">
              <rect width="24" height="24" rx="4" fill="#092E20"/>
              <path d="M7 6h3v7.5c0 1.5-.7 2.3-2 2.3-.4 0-.7-.1-1-.2v-2.2c.2.1.4.1.6.1.4 0 .6-.2.6-.7V6zm5 0h3v12h-3V6zm5 4h3v8h-3v-8z" fill="#44B78B"/>
            </svg>
          )
        },
      ]
    },
    {
      index: '04',
      title: 'Databases',
      desc: 'Managing relational tables, document stores, and vector embeddings for high-throughput apps.',
      skills: [
        { 
          name: 'MySQL', 
          details: 'ACID transactions, indexed tables, relational foreign keys, and complex query optimizations.', 
          deployment: 'Relational Database Schemas, Transactional Persistence',
          logo3d: mysqlIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 100 100" fill="none" stroke="#00758F" strokeWidth="2.5">
              <ellipse cx="50" cy="25" rx="35" ry="12" fill="#00758F" fillOpacity="0.1" />
              <path d="M15 25v16c0 6.6 15.7 12 35 12s35-5.4 35-12V25" fill="#00758F" fillOpacity="0.1" />
              <path d="M15 41v16c0 6.6 15.7 12 35 12s35-5.4 35-12V41" fill="#F29111" fillOpacity="0.1" stroke="#F29111" />
              <path d="M15 57v16c0 6.6 15.7 12 35 12s35-5.4 35-12V57" fill="#00758F" fillOpacity="0.1" />
            </svg>
          )
        },
        { 
          name: 'PostgreSQL', 
          details: 'Advanced open-source relational database, JSONB support, indexing, and complex joins.', 
          deployment: 'Production Enterprise Database, Spatial & Relational Queries',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#336791">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          )
        },
        { 
          name: 'MongoDB', 
          details: 'Document-oriented database, flexible BSON schemas, aggregation pipelines, and clustering.', 
          deployment: 'NoSQL Data Stores, Real-Time Collaborative Web Backends',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#47A248">
              <path d="M12 0C11.5 4.5 7 8 7 13.5 7 17.5 9 21 12 24c3-3 5-6.5 5-10.5C17 8 12.5 4.5 12 0zm-.1 18.2V7.1c.3.5.7 1 1 1.6v9.5c-.3 0-.7 0-1 0z"/>
            </svg>
          )
        },
        { 
          name: 'ChromaDB', 
          details: 'Open-source vector embedding store for AI applications, similarity search, and RAG pipelines.', 
          deployment: 'Semantic Vector Search Index, Context Retrieval Ingestion',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="none">
              <circle cx="8" cy="8" r="4" fill="#F59E0B" />
              <circle cx="16" cy="8" r="4" fill="#10B981" />
              <circle cx="12" cy="16" r="4" fill="#3B82F6" />
            </svg>
          )
        },
      ]
    },
    {
      index: '05',
      title: 'AI / ML & Generative AI',
      desc: 'Deploying intelligence systems, RAG pipelines, and processing complex datasets.',
      skills: [
        { 
          name: 'NumPy', 
          details: 'Multi-dimensional array computing, matrix algebra, Fourier transforms, and numerical methods.', 
          deployment: 'Mathematical Computations, Array Transformations',
          logo3d: mlLibrariesIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#013243">
              <rect width="24" height="24" rx="4" fill="#013243"/>
              <path d="M5 6h2.5l4.5 8.5V6h3v12h-2.5L8 9.5V18H5V6z" fill="#4DABCF"/>
            </svg>
          )
        },
        { 
          name: 'Pandas', 
          details: 'Data frames manipulation, time series analysis, missing record handling, and tabular aggregations.', 
          deployment: 'Dataset Preprocessing, Data Cleansing Layers',
          logo3d: mlLibrariesIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#150458">
              <rect width="24" height="24" rx="4" fill="#150458"/>
              <path d="M7 6h3v12H7zm7 0h3v12h-3z" fill="#E70488"/>
            </svg>
          )
        },
        { 
          name: 'Scikit-learn', 
          details: 'Supervised classification, regression, clustering, model validation loops, and feature extraction.', 
          deployment: 'Predictive Modeling, Dimensionality Reduction',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="none">
              <circle cx="8" cy="12" r="6" fill="#F89939" fillOpacity="0.8"/>
              <circle cx="16" cy="12" r="6" fill="#3499CD" fillOpacity="0.8"/>
            </svg>
          )
        },
        { 
          name: 'Matplotlib', 
          details: 'Static, animated, and interactive data visualizations, distribution plots, and performance charts.', 
          deployment: 'Metrics Plotting, Model Diagnostics Visuals',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2">
              <line x1="3" y1="20" x2="21" y2="20" />
              <polyline points="4 16 9 10 14 14 20 6" />
            </svg>
          )
        },
        { 
          name: 'TensorFlow', 
          details: 'Deep neural networks, computational graph training, convolutional layers, and model inferencing.', 
          deployment: 'Neural Network Architectures, Computer Vision Models',
          logo3d: machineLearningIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#FF6F00">
              <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.5l6.5 3.6L12 11.7 5.5 8.1 12 4.5z"/>
            </svg>
          )
        },
        { 
          name: 'RAG', 
          details: 'Retrieval-Augmented Generation architectures combining vector stores and contextual prompt injection.', 
          deployment: 'Custom Knowledge Base Chatbots, Document Query Engines',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <path d="M11 8v6M8 11h6"/>
            </svg>
          )
        },
        { 
          name: 'Generative AI', 
          details: 'LLM reasoning pipelines, embeddings generation, multimodal inputs, and prompt engineering.', 
          deployment: 'Production GenAI Systems, Creative Assistant Tools',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2">
              <path d="M12 2l2.5 5.5L20 10l-5.5 2.5L12 18l-2.5-5.5L4 10l5.5-2.5L12 2z"/>
              <path d="M19 16l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z"/>
            </svg>
          )
        },
        { 
          name: 'LLM Applications', 
          details: 'Large language model application engineering, context window management, and structured JSON outputs.', 
          deployment: 'Specialized Enterprise AI Chatbots, Analytics Copilots',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
              <rect x="3" y="4" width="18" height="16" rx="3"/>
              <line x1="7" y1="9" x2="17" y2="9"/>
              <line x1="7" y1="13" x2="13" y2="13"/>
            </svg>
          )
        },
        { 
          name: 'AI Agents', 
          details: 'Autonomous multi-agent architectures, tool calling, memory recall, and iterative reflection loops.', 
          deployment: 'Desktop Task Automation, Multi-Agent Collaboration Frameworks',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2">
              <rect x="4" y="6" width="16" height="12" rx="2"/>
              <circle cx="9" cy="12" r="1.5" fill="#EC4899"/>
              <circle cx="15" cy="12" r="1.5" fill="#EC4899"/>
              <path d="M12 2v4M8 20v2M16 20v2"/>
            </svg>
          )
        },
      ]
    },
    {
      index: '06',
      title: 'AI & Developer Tools',
      desc: 'Harnessing frontier LLM providers, audio synthesis, and automated test runners.',
      skills: [
        { 
          name: 'Groq', 
          details: 'Ultra-low-latency LPU inference for high-speed streaming LLM completions.', 
          deployment: 'High-Throughput Real-Time Text Inference',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#F55036">
              <rect width="24" height="24" rx="4" fill="#F55036"/>
              <path d="M7 12h10M12 7v10" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          )
        },
        { 
          name: 'Gemini', 
          details: 'Google Gemini Pro multimodal model APIs, long context windows, and code analysis.', 
          deployment: 'Multimodal Vision/Text Ingestion, Grounded Research Tools',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#4285F4">
              <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"/>
            </svg>
          )
        },
        { 
          name: 'OpenRouter', 
          details: 'Unified API routing and fallback architecture across multiple frontier AI model providers.', 
          deployment: 'Model Aggregation Gateways, Dynamic LLM Fallbacks',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <circle cx="4" cy="12" r="2"/>
              <circle cx="20" cy="12" r="2"/>
              <line x1="6" y1="12" x2="9" y2="12"/>
              <line x1="15" y1="12" x2="18" y2="12"/>
            </svg>
          )
        },
        { 
          name: 'DeepSeek', 
          details: 'Deep reasoning models, code intelligence, and mathematical optimization.', 
          deployment: 'High-Accuracy Technical Reasoning, Code Synthesis',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#0284C7">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.48 0-4.5-2.02-4.5-4.5S10.52 7.5 13 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z"/>
            </svg>
          )
        },
        { 
          name: 'Hugging Face', 
          details: 'Open-source model hub, Transformers pipelines, model fine-tuning, and datasets.', 
          deployment: 'Pre-Trained Transformer Checkpoints, Model Benchmarking',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#FFD21E">
              <circle cx="12" cy="12" r="10" fill="#FFD21E"/>
              <circle cx="9" cy="10" r="1.5" fill="#000"/>
              <circle cx="15" cy="10" r="1.5" fill="#000"/>
              <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
          )
        },
        { 
          name: 'ElevenLabs', 
          details: 'Voice synthesis, realistic text-to-speech audio streaming, and voice cloning integration.', 
          deployment: 'Conversational Voice AI Outputs, Real-Time Audio Assistants',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
              <line x1="4" y1="8" x2="4" y2="16"/>
              <line x1="9" y1="4" x2="9" y2="20"/>
              <line x1="14" y1="7" x2="14" y2="17"/>
              <line x1="19" y1="10" x2="19" y2="14"/>
            </svg>
          )
        },
        { 
          name: 'Cohere', 
          details: 'Enterprise embeddings, Rerank pipelines, and contextual document search models.', 
          deployment: 'Reranking Search Results, Semantic Chunk Embeddings',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#39594C">
              <rect width="24" height="24" rx="6" fill="#39594C"/>
              <circle cx="12" cy="12" r="5" fill="#D1E8E2"/>
            </svg>
          )
        },
        { 
          name: 'OpenAI', 
          details: 'GPT models, function calling, vision processing, Whisper audio, and embeddings.', 
          deployment: 'Frontier LLM Reasoning, Code Generation APIs',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#10A37F">
              <path d="M22.28 9.37a5.98 5.98 0 0 0-.52-4.94 6.07 6.07 0 0 0-6.52-2.8A6.02 6.02 0 0 0 4.3 3.65a6.04 6.04 0 0 0-2.8 6.52 5.98 5.98 0 0 0 .52 4.94 6.07 6.07 0 0 0 6.52 2.8 6.02 6.02 0 0 0 10.94-2.02 6.04 6.04 0 0 0 2.8-6.52z"/>
            </svg>
          )
        },
        { 
          name: 'Playwright', 
          details: 'Automated browser testing, web scraping, and reliable end-to-end task automation.', 
          deployment: 'Browser Automation Routines, E2E Integration Testing',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#2EAD33">
              <circle cx="9" cy="12" r="6" fill="#45BA4B"/>
              <circle cx="15" cy="12" r="6" fill="#E23E3E" fillOpacity="0.85"/>
            </svg>
          )
        },
      ]
    },
    {
      index: '07',
      title: 'Tools & Platforms',
      desc: 'Leveraging modern toolchains, cloud infrastructures, and design systems.',
      skills: [
        { 
          name: 'Git', 
          details: 'Version control, branching workflows, stash management, merge conflict resolution.', 
          deployment: 'Source Code History, Branch Management',
          logo3d: gitIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 100 100" fill="#F05032">
              <path d="M91.8 45.4L54.6 8.2c-2.4-2.4-6.4-2.4-8.8 0L37 17l8.2 8.2c2.4-.6 5-.2 7.1 1.3 2.1 1.5 3.3 3.9 3.5 6.3l9.4 9.4c2.4.2 4.8 1.4 6.3 3.5 2 2.7 1.8 6.4-.7 8.9s-6.2 2.7-8.9.7c-2.1-1.5-3.3-3.9-3.5-6.3L49 44.8c-.2-2.4-1.4-4.8-3.5-6.3-2.1-1.5-4.8-1.9-7.1-1.3L30 29 8.2 50.8c-2.4 2.4-2.4 6.4 0 8.8l37.2 37.2c2.4 2.4 6.4 2.4 8.8 0l37.6-37.6c2.4-2.4 2.4-6.4 0-8.8z" />
            </svg>
          )
        },
        { 
          name: 'GitHub', 
          details: 'Remote repositories, collaborative PR reviews, GitHub Actions CI/CD automation.', 
          deployment: 'Team Repositories, Automated Workflows',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#FFFFFF">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          )
        },
        { 
          name: 'Vercel', 
          details: 'Serverless deployment, edge network optimizations, instant CI/CD preview builds.', 
          deployment: 'Production Web Hosting, Global Edge CDN Routing',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#FFFFFF">
              <path d="M12 1L24 22H0L12 1Z"/>
            </svg>
          )
        },
        { 
          name: 'Google Cloud', 
          details: 'Vertex AI pipelines, Dataproc Spark execution, Dataflow, and Cloud Storage buckets.', 
          deployment: 'Enterprise Cloud AI Infra, Cloud Storage & Compute',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#4285F4">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
            </svg>
          )
        },
        { 
          name: 'AWS', 
          details: 'AWS core cloud concepts, S3 storage, EC2 compute instances, IAM roles, and pricing.', 
          deployment: 'Cloud Practitioner Certified Infrastructure',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#FF9900">
              <path d="M13.9 14.2c-.8.8-1.9 1.2-3.1 1.2s-2.3-.4-3.1-1.2c-.8-.8-1.2-1.9-1.2-3.1s.4-2.3 1.2-3.1c.8-.8 1.9-1.2 3.1-1.2s2.3.4 3.1 1.2c.8.8 1.2 1.9 1.2 3.1s-.4 2.3-1.2 3.1zm4.8 4.2c-2.6 1.8-6.1 2.8-9.8 2.8-5.3 0-10-2-13.6-5.4-.3-.3-.3-.7 0-1 .3-.3.8-.3 1 0 3.4 3.1 7.7 5 12.6 5 3.3 0 6.5-.9 8.9-2.5.4-.3.9-.2 1.2.2.3.4.1.9-.3 1.1zm2.3-1.9c-.3-.4-1.3-.4-2.6-.2-.3 0-.4-.2-.3-.5.7-1.3 1.4-2.7 1.3-2.9-.1-.2-.8.1-1.9.8-.3.2-.5.1-.6-.1-.3-.6-.6-1.2-1-1.8-.2-.3-.1-.5.2-.6 1.5-.7 3.3-1.1 3.8-.7.6.5.6 2.3.1 4.2-.1.5-.4.8-.7.8-.1 0-.2-.1-.3-.3z"/>
            </svg>
          )
        },
        { 
          name: 'Figma', 
          details: 'High-fidelity wireframing, interactive prototypes, component auto-layouts, and design tokens.', 
          deployment: 'UI/UX Mockup Pipelines, Visual Component Specifications',
          logo3d: figmaIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 38 57" fill="none">
              <path d="M19 0v19h-9.5a9.5 9.5 0 1 1 9.5-19z" fill="#F24E1E"/>
              <path d="M19 19v19H9.5a9.5 9.5 0 1 1 9.5-19z" fill="#A259FF"/>
              <path d="M9.5 38H19v9.5a9.5 9.5 0 1 1-9.5-9.5z" fill="#0ACF83"/>
              <path d="M19 19H28.5a9.5 9.5 0 1 1-9.5 9.5V19z" fill="#1ABCFE"/>
              <path d="M19 0h9.5A9.5 9.5 0 1 1 19 9.5V0z" fill="#FF7262"/>
            </svg>
          )
        },
        { 
          name: 'Canva', 
          details: 'Visual asset design, vector graphic composition, pitch deck assets, and presentation layouts.', 
          deployment: 'Design Assets, Presentation Graphics',
          logo3d: '',
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="#00C4CC">
              <circle cx="12" cy="12" r="10" fill="#00C4CC"/>
              <path d="M12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5c1.4 0 2.7-.6 3.5-1.5l-1.4-1.4c-.5.6-1.3.9-2.1.9-1.7 0-3-1.3-3-3s1.3-3 3-3c.8 0 1.6.3 2.1.9l1.4-1.4C14.7 7.6 13.4 7 12 7z" fill="#FFFFFF"/>
            </svg>
          )
        },
      ]
    }
  ];



  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 relative flex flex-col gap-12">
        
        {/* Header Title with Asymmetric Diagnostics bar (Flex layout) */}
        <div className="relative z-10 border-b border-sohub-dark-grey pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-sohub-grey font-mono font-bold block mb-2">
              SYSTEM_CORES // INTERACTIVE_SCHEMATIC
            </span>
            <h1 className="text-4xl md:text-7xl font-display-title font-extrabold uppercase leading-none text-sohub-white">
              SKILLS
            </h1>
          </div>
        </div>



        {/* CORE TECH STACK (Sequential Flow of Flex Lanes) */}
        <div className="relative z-10 flex flex-col gap-10">
          {categories.map((category) => (
            <div 
              key={category.title} 
              className="border border-sohub-dark-grey bg-sohub-black/30 p-6 flex flex-col gap-6"
            >
              {/* Top Row: Category metadata and logos */}
              <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10">
                {/* Left Column (Metadata) - Flex item */}
                <div className="w-full md:w-1/4 flex flex-col justify-between min-h-[90px]">
                  <div className="space-y-1">
                    <span className="font-mono text-sohub-grey text-[10px] font-bold block">SEC_0{category.index}</span>
                    <h2 className="text-xl font-extrabold uppercase tracking-wider text-sohub-white font-display">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-[10px] font-mono text-sohub-grey leading-relaxed mt-2 md:mt-0 max-w-[28ch]">
                    {category.desc}
                  </p>
                </div>

                {/* Right Column (Conveyor / Flex Logos) - Flex item */}
                <div className="flex-1 flex flex-wrap gap-5 items-center">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="relative flex flex-col items-center justify-center cursor-pointer group w-18 md:w-20 py-2.5 border border-transparent hover:border-sohub-dark-grey/40 hover:bg-sohub-black/50 transition-all duration-200"
                    >
                      {/* Logo Backplate with custom blur glow */}
                      <motion.div
                        whileHover={{ scale: 1.12 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                        className="relative w-11 h-11 flex items-center justify-center"
                      >
                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-60 blur-[6px] transition-all duration-300 pointer-events-none scale-90">
                          {skill.logo("w-full h-full")}
                        </div>
                        {skill.logo3d ? (
                          <img 
                            src={skill.logo3d} 
                            alt={`${skill.name} Logo`}
                            className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] group-hover:drop-shadow-[0_5px_8px_rgba(0,0,0,0.6)] transition-all duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <div className="relative z-10 w-full h-full flex items-center justify-center filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                            {skill.logo("w-8 h-8")}
                          </div>
                        )}
                      </motion.div>
                      
                      <span className="text-[9px] font-mono font-bold tracking-wider text-sohub-grey group-hover:text-sohub-white mt-2 uppercase transition-colors duration-200 text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialization Tree Expansion inside AI & ML Category */}
              {(category.title === 'AI & ML' || category.title.includes('AI / ML')) && (
                <div className="w-full border-t border-sohub-dark-grey/50 pt-6 flex flex-col">
                  <div>
                    <button
                      onClick={() => setIsMlTreeOpen(!isMlTreeOpen)}
                      className="flex items-center gap-2.5 text-[9px] font-mono font-bold tracking-widest text-sohub-white bg-sohub-dark-grey/40 hover:bg-sohub-dark-grey/70 border border-sohub-dark-grey px-4 py-2.5 transition-all cursor-pointer select-none"
                    >
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                      {isMlTreeOpen ? 'COLLAPSE SCHEMATIC_TREE' : 'INITIALIZE SCHEMATIC_TREE'}
                    </button>
                  </div>

                  <AnimatePresence>
                    {isMlTreeOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden mt-6 flex flex-col w-full"
                      >
                        <span className="text-[9px] font-mono text-sohub-grey block border-b border-sohub-dark-grey/40 pb-2 uppercase mb-4">
                          SYS_SCHEMATIC // TOP_DOWN_FLOWMAP
                        </span>

                        {/* Top-Down Schematic Graph Container */}
                        <div className="relative w-full border border-sohub-dark-grey bg-sohub-black/40 p-6 pt-10 pb-12 flex flex-col items-center overflow-hidden">
                          
                          {/* Radial overlay glowing backgrounds */}
                          
                          {/* Radial overlay glowing backgrounds */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

                          {/* Center Rotating Core Hub at Top */}
                          <div className="relative z-10 flex flex-col items-center mb-6 select-none">
                            <div className="relative group">
                              <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full scale-125" />
                              <div className="relative w-16 h-16 border border-sohub-dark-grey bg-sohub-black/95 flex flex-col items-center justify-center text-center p-2 shadow-xl hover:border-sohub-white transition-colors duration-300">
                                <Brain className="w-5 h-5 text-sohub-white mb-0.5 animate-pulse" />
                                <span className="text-[7.5px] font-mono font-bold tracking-widest text-sohub-white">AI_CORE</span>
                              </div>
                            </div>
                          </div>

                          {/* Orthogonal splitting circuit path (Desktop only) */}
                          <div className="hidden md:block w-full h-[60px] relative z-0">
                            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                              <defs>
                                <filter id="branch-neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                              </defs>
                              
                              {/* Static line tracks */}
                              <path d="M 500 0 V 30 H 150 V 60" fill="none" stroke="rgba(156,163,175,0.08)" strokeWidth="1.5" />
                              <path d="M 500 0 V 30 H 383 V 60" fill="none" stroke="rgba(156,163,175,0.08)" strokeWidth="1.5" />
                              <path d="M 500 0 V 30 H 616 V 60" fill="none" stroke="rgba(156,163,175,0.08)" strokeWidth="1.5" />
                              <path d="M 500 0 V 30 H 850 V 60" fill="none" stroke="rgba(156,163,175,0.08)" strokeWidth="1.5" />

                              {/* Active glowing path traces */}
                              <path 
                                d="M 500 0 V 30 H 150 V 60" 
                                fill="none" 
                                stroke={hoveredCategory === 'Machine Learning' ? 'rgba(52, 211, 153, 0.95)' : 'rgba(52, 211, 153, 0.15)'} 
                                strokeWidth={hoveredCategory === 'Machine Learning' ? '2' : '1'} 
                                filter={hoveredCategory === 'Machine Learning' ? 'url(#branch-neon-glow)' : 'none'}
                                className="pulse-left-path transition-all duration-300"
                              />
                              <path 
                                d="M 500 0 V 30 H 383 V 60" 
                                fill="none" 
                                stroke={hoveredCategory === 'Generative AI' ? 'rgba(251, 191, 36, 0.95)' : 'rgba(251, 191, 36, 0.15)'} 
                                strokeWidth={hoveredCategory === 'Generative AI' ? '2' : '1'} 
                                filter={hoveredCategory === 'Generative AI' ? 'url(#branch-neon-glow)' : 'none'}
                                className="pulse-right-path transition-all duration-300"
                              />
                              <path 
                                d="M 500 0 V 30 H 616 V 60" 
                                fill="none" 
                                stroke={hoveredCategory === 'Data Science' ? 'rgba(251, 113, 133, 0.95)' : 'rgba(251, 113, 133, 0.15)'} 
                                strokeWidth={hoveredCategory === 'Data Science' ? '2' : '1'} 
                                filter={hoveredCategory === 'Data Science' ? 'url(#branch-neon-glow)' : 'none'}
                                className="pulse-left-path transition-all duration-300"
                              />
                              <path 
                                d="M 500 0 V 30 H 850 V 60" 
                                fill="none" 
                                stroke={hoveredCategory === 'AI Stack' ? 'rgba(245, 158, 11, 0.95)' : 'rgba(245, 158, 11, 0.15)'} 
                                strokeWidth={hoveredCategory === 'AI Stack' ? '2' : '1'} 
                                filter={hoveredCategory === 'AI Stack' ? 'url(#branch-neon-glow)' : 'none'}
                                className="pulse-right-path transition-all duration-300"
                              />
                            </svg>
                          </div>

                          {/* Desktop Coordinates-Mapped Row (Using precise offsets to align with SVG endpoints) */}
                          <div className="hidden md:block relative w-full h-[320px] mt-2 z-10">
                            {/* Category 1: Machine Learning (Centered at 15%) */}
                            <div className="absolute left-[15%] -translate-x-1/2 top-0 w-[21%]">
                              {renderCategoryNode(mlTreeData[0], 'left')}
                            </div>
                            {/* Category 2: Generative AI (Centered at 38.33%) */}
                            <div className="absolute left-[38.33%] -translate-x-1/2 top-0 w-[21%]">
                              {renderCategoryNode(mlTreeData[1], 'right')}
                            </div>
                            {/* Category 3: Data Science (Centered at 61.66%) */}
                            <div className="absolute left-[61.66%] -translate-x-1/2 top-0 w-[21%]">
                              {renderCategoryNode(mlTreeData[2], 'left')}
                            </div>
                            {/* Category 4: AI Stack (Centered at 85%) */}
                            <div className="absolute left-[85%] -translate-x-1/2 top-0 w-[21%]">
                              {renderCategoryNode(mlTreeData[3], 'right')}
                            </div>
                          </div>

                          {/* Mobile Layout Timeline (Vertical Flex stack) */}
                          <div className="block md:hidden relative w-full mt-4 pl-4 z-10 border-l border-sohub-dark-grey/40 flex flex-col gap-6">
                            {mlTreeData.map((node) => (
                              <div key={node.name} className="w-full">
                                {renderCategoryNode(node, 'right')}
                              </div>
                            ))}
                          </div>
                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

            </div>
          ))}
        </div>



      </div>

      <PrecisionSection />

      {/* Inline diagnostic keyframe animations */}
      <style>{`
        @keyframes pulse-left-flow {
          0% {
            stroke-dashoffset: 28;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes pulse-right-flow {
          0% {
            stroke-dashoffset: -28;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .pulse-left-path {
          stroke-dasharray: 6 22;
          animation: pulse-left-flow 1.2s linear infinite;
        }
        .pulse-right-path {
          stroke-dasharray: 6 22;
          animation: pulse-right-flow 1.2s linear infinite;
        }
      `}</style>
    </PageTransition>
  );
}