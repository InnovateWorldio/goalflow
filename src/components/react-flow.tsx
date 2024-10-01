import React, { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  type Node,
  type Edge,
  Position,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { AnimatedSVGEdge } from "./animated-svg-edge";

// Add this import at the top of your file
import styles from "./ReactFlow.module.css";

const initialNodes: Node[] = [
  // Inputs
  {
    id: "A",
    sourcePosition: Position.Right,
    type: "input",
    data: { label: "Unified Platform" },
    position: { x: 0, y: 0 },
  },
  {
    id: "B",
    sourcePosition: Position.Right,
    type: "input",
    data: { label: "Organizational Workspace Template" },
    position: { x: 0, y: 100 },
  },
  {
    id: "C",
    sourcePosition: Position.Right,
    type: "input",
    data: { label: "Advanced AI Integration" },
    position: { x: 0, y: 200 },
  },
  {
    id: "D",
    sourcePosition: Position.Right,
    type: "input",
    data: { label: "Customization and Flexibility" },
    position: { x: 0, y: 300 },
  },
  {
    id: "E",
    sourcePosition: Position.Right,
    type: "input",
    data: { label: "Vectorization of Data" },
    position: { x: 0, y: 400 },
  },
  {
    id: "F",
    sourcePosition: Position.Right,
    type: "input",
    data: { label: "Process Visualization Tools" },
    position: { x: 0, y: 500 },
  },
  {
    id: "G",
    sourcePosition: Position.Right,
    type: "input",
    data: { label: "Multiple Views and Templates" },
    position: { x: 0, y: 600 },
  },

  // Outputs
  {
    id: "H",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: "Reduction in Tool Requirements" },
    position: { x: 400, y: 0 },
  },
  {
    id: "I",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: "Centralized Data Repository" },
    position: { x: 400, y: 100 },
  },
  {
    id: "J",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: "Reduced Configuration Time" },
    position: { x: 400, y: 200 },
  },
  {
    id: "K",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: "Enhanced Information Retrieval" },
    position: { x: 400, y: 300 },
  },
  {
    id: "L",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: "Improved Process Management" },
    position: { x: 400, y: 400 },
  },
  {
    id: "M",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: "Increased Customization" },
    position: { x: 400, y: 500 },
  },
  {
    id: "N",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: "AI-Assisted Workflow Management" },
    position: { x: 400, y: 600 },
  },

  // Outcomes
  {
    id: "O",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: "Time Savings" },
    position: { x: 800, y: 100 },
  },
  {
    id: "P",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: "Cost Savings" },
    position: { x: 800, y: 200 },
  },
  {
    id: "Q",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: "Increased Productivity" },
    position: { x: 800, y: 300 },
  },
  {
    id: "R",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: "Enhanced Efficiency" },
    position: { x: 800, y: 400 },
  },
  {
    id: "S",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: "Improved Organizational Alignment" },
    position: { x: 800, y: 500 },
  },
  {
    id: "T",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: { label: "Scalability and Adaptability" },
    position: { x: 800, y: 600 },
  },

  // Goal
  {
    id: "U",
    targetPosition: Position.Left,
    data: { label: "Maximize Impact on Wellbeing" },
    position: { x: 1200, y: 300 },
  },
];

const initialEdges: Edge[] = [
  // Connections from Inputs to Outputs
  { id: "e-A-H", source: "A", target: "H", type: "default", animated: true },
  { id: "e-A-I", source: "A", target: "I", type: "default", animated: true },
  { id: "e-B-J", source: "B", target: "J", type: "default", animated: true },
  { id: "e-C-N", source: "C", target: "N", type: "default", animated: true },
  { id: "e-D-M", source: "D", target: "M", type: "default", animated: true },
  { id: "e-E-K", source: "E", target: "K", type: "default", animated: true },
  { id: "e-F-L", source: "F", target: "L", type: "default", animated: true },
  { id: "e-G-M", source: "G", target: "M", type: "default", animated: true },

  // Connections from Outputs to Outcomes
  { id: "e-H-O", source: "H", target: "O", type: "default", animated: true },
  { id: "e-H-P", source: "H", target: "P", type: "default", animated: true },
  { id: "e-I-Q", source: "I", target: "Q", type: "default", animated: true },
  { id: "e-J-O", source: "J", target: "O", type: "default", animated: true },
  { id: "e-K-Q", source: "K", target: "Q", type: "default", animated: true },
  { id: "e-L-R", source: "L", target: "R", type: "default", animated: true },
  { id: "e-M-S", source: "M", target: "S", type: "default", animated: true },
  { id: "e-N-Q", source: "N", target: "Q", type: "default", animated: true },

  // Connections from Outcomes to Goal
  { id: "e-O-U", source: "O", target: "U", type: "default", animated: true },
  { id: "e-P-U", source: "P", target: "U", type: "default", animated: true },
  { id: "e-Q-U", source: "Q", target: "U", type: "default", animated: true },
  { id: "e-R-U", source: "R", target: "U", type: "default", animated: true },
  { id: "e-S-U", source: "S", target: "U", type: "default", animated: true },
  { id: "e-T-U", source: "T", target: "U", type: "default", animated: true },
];

const edgeTypes = {
  animatedSvg: AnimatedSVGEdge,
};

const reactFlowStyles = {
  width: "100%",
  height: 500,
};

export function ReactFlowComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={reactFlowStyles} className={styles.reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        minZoom={0.5}
        maxZoom={2}
        defaultViewport={{ x: 0, y: 0, zoom: 0.7 }}
        attributionPosition="bottom-left"
      >
        <Controls />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
