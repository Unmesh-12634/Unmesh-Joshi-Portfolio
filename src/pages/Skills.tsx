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
      { name: 'Model Training', desc: 'Supervised/Unsupervised models, custom loss functions, training epochs.', tools: 'TensorFlow, PyTorch' },
      { name: 'Model Evaluation', desc: 'Validation loops, ROC/AUC, confusion matrices, bias/variance trade-offs.', tools: 'Scikit-Learn, MLflow' },
      { name: 'Feature Engineering', desc: 'Dimensionality reductions, scaling, hot-encodings, data normalization.', tools: 'Pandas, NumPy' },
      { name: 'Predictive Analytics', desc: 'Time series forecasting, regressions, multi-class classification engines.', tools: 'XGBoost, Prophet' },
    ]
  },
  {
    name: 'Generative AI',
    children: [
      { name: 'RAG', desc: 'Retrieval-Augmented Generation, vector embeddings indexing, document ingestion.', tools: 'LlamaIndex, LangChain' },
      { name: 'AI Agents', desc: 'Multi-agent frameworks, tool usage pipelines, autonomous reflection loops.', tools: 'CrewAI, AutoGen' },
      { name: 'Prompt Engineering', desc: 'Few-shot prompts, chain-of-thought routing, system instructions tuning.', tools: 'GPT-4o, Claude 3.5' },
      { name: 'Conversational AI', desc: 'Natural language interfaces, context memory structures, streaming compilation.', tools: 'Vercel AI SDK' },
    ]
  },
  {
    name: 'Data Science',
    children: [
      { name: 'Pandas', desc: 'High-performance tabular data frame manipulations and statistical aggregations.', tools: 'Pandas DataFrames' },
      { name: 'NumPy', desc: 'Multi-dimensional array computing, scientific formulas, matrix linear algebra.', tools: 'NumPy Arrays' },
      { name: 'Data Visualization', desc: 'Interactive plots, heatmaps, distribution plots, metrics dashboards.', tools: 'Matplotlib, Seaborn' },
      { name: 'Data Processing', desc: 'Cleaning pipelines, handling missing records, outlier detection.', tools: 'Scikit-Learn Pipelines' },
    ]
  },
  {
    name: 'AI Stack',
    children: [
      { name: 'LangChain', desc: 'Modular chains orchestrator, model connectors, memory adapters.', tools: 'LangChain JS/Py' },
      { name: 'OpenAI', desc: 'API completions integration, multi-modal reasoning models, embeddings.', tools: 'OpenAI SDK' },
      { name: 'ChromaDB', desc: 'Vector database storing semantic chunks and embeddings for semantic search.', tools: 'ChromaDB Local' },
      { name: 'FastAPI', desc: 'High-performance backend API routing for serving ML model inference.', tools: 'Uvicorn, FastAPI' },
      { name: 'Streamlit', desc: 'Rapid prototyping dashboards for testing and validating AI agent loops.', tools: 'Streamlit Web' },
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
          name: 'Python', 
          details: 'Scientific computing, TensorFlow ML pipelines, computer vision logic, and pipeline scripting.', 
          deployment: 'AI/ML Inference Pipelines, Vertex AI Agents, OpenCV Local Gateways',
          logo3d: pythonIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 110 110">
              <path d="M52.1 1.7C27 .5 25.4 3 25.4 9.1v7h27.3v3.7H25.4c-13 .1-19 5-19 18.2s0 20.3 0 20.3c0 10.3 4.3 17 14.8 17H28V67.8c0-8.2 6.6-14.8 14.8-14.8h27.4V25.6c0-13.7-2-22.1-18.1-23.9zm-8.8 8.1c2 0 3.7 1.6 3.7 3.7s-1.6 3.7-3.7 3.7-3.7-1.6-3.7-3.7 1.7-3.7 3.7-3.7z" fill="#3776AB" />
              <path d="M57.9 108.3c25.1 1.2 26.7-1.3 26.7-7.4v-7H57.3v-3.7h27.3c13-.1 19-5 19-18.2s0-20.3 0-20.3c0-10.3-4.3-17-14.8-17H82v7.5c0 8.2-6.6 14.8-14.8 14.8H39.8v27.4c0 13.7 2 22.1 18.1 23.9zm8.8-8.1c-2 0-3.7-1.6-3.7-3.7s1.6-3.7 3.7-3.7 3.7 1.6 3.7 3.7-1.6 3.7-3.7 3.7z" fill="#FFE052" />
            </svg>
          )
        },
        { 
          name: 'JavaScript', 
          details: 'Dynamic web interfaces, asynchronous runtime async/await chains, and responsive event handling.', 
          deployment: 'Client-Side Web Application Logic, Asynchronous Event Loops, DOM Manipulations',
          logo3d: javascriptIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 100 100">
              <rect width="100" height="100" rx="8" fill="#F7DF1E" />
              <path d="M43.7 75c.3 4.2 2.6 6.8 6.7 6.8 4.2 0 6.6-2.1 6.6-6.9V45.2h6.7V75c0 8.7-4.8 13-13.2 13-7.8 0-12.8-4-13.5-13h6.7zm24.1-1.3c1 4.5 4.3 8.1 9.9 8.1 5.3 0 8.4-2.8 8.4-7.2 0-4.6-3.4-6.2-9.4-8.8l-3.2-1.4c-8.6-3.7-12-7.5-12-15.1 0-8.3 6.3-14.5 15.6-14.5 8.7 0 14.7 4.9 15.6 12.8h-6.7c-.8-4.4-3.5-6.7-8.9-6.7-4.7 0-7.3 2.6-7.3 6.6 0 4.2 2.6 5.8 8.1 8.2l3.2 1.4c9.9 4.3 13.3 8.3 13.3 15.9 0 9-6.7 15-16.9 15-10.4 0-16.6-5.4-17.7-14.8h6.7z" fill="#000000" />
            </svg>
          )
        },
        { 
          name: 'Java', 
          details: 'Object-oriented programming, robust backend systems, multithreading control structures, and enterprise compilation.', 
          deployment: 'JVM-Based Production Systems, Distributed Enterprise Architectures',
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
          name: 'C++', 
          details: 'Low-level memory architectures, algorithm optimization, systems compilation, and data structures.', 
          deployment: 'High-Performance Computational Algorithms, Backend Systems Engineering',
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
          name: 'C', 
          details: 'Procedural logic structure, hardware-level memory mapping, pointer manipulations, and static layouts.', 
          deployment: 'Memory-Constrained Hardware Implementations, Embedded Systems',
          logo3d: cIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 100 100" fill="none" stroke="#A8B9CC" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="50" cy="50" r="40" stroke="#A8B9CC" />
              <path d="M62 35c-7-7-16-9-24-4s-10 14-6 24 13 13 22 9" stroke="#A8B9CC" />
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
          name: 'React / Next.js', 
          details: 'Virtual DOM optimization, modular custom hooks, Server/Client components, and routing loops.', 
          deployment: 'Production Client Interfaces, Server Side Render (SSR) Vercel & Netlify Nodes',
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
          name: 'CSS / Tailwind', 
          details: 'Fluid layouts, mobile-first breakpoint systems, modern CSS tokens, and custom animations.', 
          deployment: 'Mobile-First Visual Layouts, GPU-Accelerated Layout Engines & Animations',
          logo3d: tailwindIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="none">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#38BDF8" />
            </svg>
          )
        },
        { 
          name: 'HTML5', 
          details: 'Semantic layout tags, web accessibility standards (ARIA), and SEO index preparation.', 
          deployment: 'Semantic Document Formats, Web Accessibility (WCAG 2.1) Nodes & SEO tags',
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
      ]
    },
    {
      index: '03',
      title: 'Backend',
      desc: 'Structuring performant APIs and robust query systems to power client applications.',
      skills: [
        { 
          name: 'Node.js / Express', 
          details: 'Event-driven server threads, custom middlewares, secured RESTful API endpoints.', 
          deployment: 'Secure Backend Gateway Routers, REST API Servers, JWT Token Authenticators',
          logo3d: nodejsIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 100 100" fill="#339933">
              <path d="M50 8l-38 22v44l38 22 38-22v-44zm0 80l-31-18v-36l31 18zm0-42.5l-31-18 31-18 31 18z" />
            </svg>
          )
        },
        { 
          name: 'MySQL / SQL', 
          details: 'Structured schemas, transactional queries, indexing optimizations, and data relationships.', 
          deployment: 'Relational Database Schemas, Transactional Query Controls, SQL Table Indices',
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
      index: '04',
      title: 'AI & ML',
      desc: 'Deploying intelligence systems and processing complex datasets for smart integrations.',
      skills: [
        { 
          name: 'ML Libraries', 
          details: 'Data frames parsing (Pandas), matrix arrays computing (NumPy), and scientific algorithms.', 
          deployment: 'Data Analysis Pipelines, Statistical Matrix Processing, Data Cleansing Layers',
          logo3d: mlLibrariesIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#150458" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z" fill="#150458" fillOpacity="0.15" />
              <path d="M6 6h10" stroke="#FFE052" strokeWidth="2" />
              <path d="M6 10h10" stroke="#3776AB" strokeWidth="2" />
              <path d="M6 14h6" stroke="#3776AB" strokeWidth="2" />
            </svg>
          )
        },
        { 
          name: 'Machine Learning', 
          details: 'Supervised regression / classification algorithms, TensorFlow pipeline model training.', 
          deployment: 'Model Training Routines, Multi-Class Inference Pipelines, TensorFlow Integrations',
          logo3d: machineLearningIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FF6F00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill="#FF6F00" fillOpacity="0.1" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="#FFA000" strokeWidth="1.8" />
              <line x1="12" y1="22.08" x2="12" y2="12" stroke="#FF6F00" strokeWidth="1.8" />
            </svg>
          )
        },
        { 
          name: 'Computer Vision', 
          details: 'Visual feed pixel matrix transformations, custom filters, and object tracking with OpenCV.', 
          deployment: 'Live Bounding Box Detections, Image Matrix Scaling, Video Frame Analytics',
          logo3d: computerVisionIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12c3-6 7.5-9 9-9s6 3 9 9c-3 6-7.5 9-9 9s-6-3-9-9z" stroke="#5C3EE6" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="4" fill="#00E676" stroke="#00E676" />
              <circle cx="12" cy="12" r="1.5" fill="#FF1744" />
            </svg>
          )
        },
      ]
    },
    {
      index: '05',
      title: 'Tools',
      desc: 'Leveraging modern toolchains to maintain version histories and high-fidelity mockups.',
      skills: [
        { 
          name: 'Git / GitHub', 
          details: 'Branch merging, commit histories tracking, dynamic pull request reviews, and actions.', 
          deployment: 'Version Control Repositories, Git Workflows, GitHub Actions Automated Pipelines',
          logo3d: gitIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 100 100" fill="#F05032">
              <path d="M91.8 45.4L54.6 8.2c-2.4-2.4-6.4-2.4-8.8 0L37 17l8.2 8.2c2.4-.6 5-.2 7.1 1.3 2.1 1.5 3.3 3.9 3.5 6.3l9.4 9.4c2.4.2 4.8 1.4 6.3 3.5 2 2.7 1.8 6.4-.7 8.9s-6.2 2.7-8.9.7c-2.1-1.5-3.3-3.9-3.5-6.3L49 44.8c-.2-2.4-1.4-4.8-3.5-6.3-2.1-1.5-4.8-1.9-7.1-1.3L30 29 8.2 50.8c-2.4 2.4-2.4 6.4 0 8.8l37.2 37.2c2.4 2.4 6.4 2.4 8.8 0l37.6-37.6c2.4-2.4 2.4-6.4 0-8.8z" />
            </svg>
          )
        },
        { 
          name: 'Figma', 
          details: 'High-fidelity wireframing, layout system prototyping, component token layouts.', 
          deployment: 'Visual Interface Prototyping, Component Design Tokens, Layout Specification Mockups',
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
          name: 'VS Code', 
          details: 'Workspace configurations, terminal integration, shortcut efficiency, debugger tools.', 
          deployment: 'Workspace IDE Optimization, Source Code Debugging, Terminal Compilers',
          logo3d: vscodeIcon,
          logo: (className: string) => (
            <svg className={className} viewBox="0 0 100 100" fill="#007ACC">
              <path d="M82.8 17.5L59 3c-1.8-1.1-4.2-.7-5.5.9L26.6 37 9.8 24.3c-1.5-1.1-3.6-1-4.9.4L1.3 29c-1.1 1.2-1.1 3 .1 4.1L18 47.8 1.4 61.2c-1.2 1.1-1.2 2.9-.1 4.1l3.6 4.3c1.3 1.4 3.4 1.5 4.9.4L26.6 57.3l26.9 33.1c1.3 1.6 3.7 2 5.5.9L82.8 77c1.4-.9 2.2-2.5 2.2-4.2V21.7c0-1.7-.8-3.3-2.2-4.2zM63 70.8L38.4 47.8l24.6-23v46z" />
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
                        
                        <img 
                          src={skill.logo3d} 
                          alt={`${skill.name} Logo`}
                          className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] group-hover:drop-shadow-[0_5px_8px_rgba(0,0,0,0.6)] transition-all duration-300"
                          loading="lazy"
                        />
                      </motion.div>
                      
                      <span className="text-[9px] font-mono font-bold tracking-wider text-sohub-grey group-hover:text-sohub-white mt-2 uppercase transition-colors duration-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialization Tree Expansion inside AI & ML Category */}
              {category.title === 'AI & ML' && (
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