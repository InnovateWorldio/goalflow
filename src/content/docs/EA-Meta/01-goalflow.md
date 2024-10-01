---
title: GoalFlow
description: GoalFlow
---

GoalFlow is designed to be a single application that can replace multiple common apps within one single app while providing sets of additional features used to help users achieve their goals faster, easier, at lower cost, and with less risk.

Beyond most traditional personal and org use cases, GoalFlow has the capability to be used as an App Builder expanding its use cases. Some of these additional use cases are listed in the [Use Cases](/content/docs/EA-Meta/02-use-cases.md) section.

Below is a subset of the features that GoalFlow will provide:

## Unified Platform

### Core Features

The base of the platform is build on top of:

- lists
- items (using a single items collection/table to be used for multiple purposes via item types)
- standard fields (a common set of fields associated will all items)
- custom fields (allowing different item types to have different fields)
- lists views (tables, kanban, gannt, cards, roadmaps, calendar, bpmn, etc)
- dynamic forms (allowing the creation of custom forms for different item types)
- documents (notes, wiki, diagrams, files)
- workspaces (individuals, organizations, communities)
- navigation items (pages, spaces, folders, lists, docs) used to structure workspaces
- roles and permissions (set on workspace, navigation items, etc)

### ERP Modules

These base features are able to be combined to create sets of modules that are commonly associated with ERP (Enterprise Resource Planning) Systems such as:

- Financial Management
  - General Ledger management
  - Accounts Payable/Receivable
  - Budgeting and Forecasting
  - Financial Reporting and Analysis
  - Fixed Asset Management
  - Tax Management and Compliance
- Human Resources (HR) Management
  - Employee Data Management
  - Payroll Processing (this system will not handle the actual payment processing, just the data and integration with other systems)
  - Recruitment and Onboarding
  - Time and Attendance Tracking
  - Performance Management
  - Employee Self-Service
- Supply Chain Management (SCM)
  - Inventory Management
  - Procurement and Supplier Management
  - Order Fulfillment and Distribution
  - Demand Planning and Forecasting
  - Warehouse Management
- Manufacturing and Production
  - Production Planning and Scheduling
  - Bill of Materials (BOM) Management
  - Work Order Management
  - Quality Control and Assurance
  - Equipment Maintenance
- Sales and Customer Relationship Management (CRM)
  - Lead and Opportunity Management
  - Sales Order Processing
  - Customer Service and Support
  - Pricing and Discount Management
  - Contract and Subscription Management
- Portfolio Item Management (Projects, Products, Services, Campaigns, Initiatives, etc)
  - Planning and Scheduling
  - Resource Allocation
  - Budgeting and Cost Control
  - Progress Tracking and Reporting
  - Risk Management
- Customer Service and Support
  - Help Desk Management
  - Service Request Tracking
  - Support Knowledge Base Management
  - Field Service Management
- Business Intelligence (BI) and Analytics
  - Data Collection and Integration
  - Reporting and Dashboard Creation
  - Data Analysis and Insights
  - Predictive Analytics
- Compliance and Risk Management
  - Regulatory Compliance Monitoring
  - Audit Trail and Reporting
  - Risk Assessment and Mitigation
  - Document Management

### Base Workspace Configuration

When a new user or organization is created, a base workspace is created for them.

This base workspace is pre-configured with a set of default lists, list items, fields, views, forms, documents, and other resources to get the user started on their journey.

The general navigation items of the default workspace are:

- Dashboard: Page
- Inbox: List
- Alignment: Folder
  - Philosophy: Document
  - Areas: List
  - Goals: List
  - Strategies: List
  - Tactics: List
- Planning: Folder
  - Decision Making: List
  - Risk: List
  - Estimates: List
  - OKRs: List
  - Roadmap: List
- Portfolio: Folder
  - Projects: List
  - Products: List
  - Services: List
  - Campaigns: List
  - Initiatives: List
- Life/Work Administration: Folder
  - Here is were a set of the ERP modules will be created.
- Wellbeing: Folder
  - Health: List
  - Mind: List
  - Habits: List
  - Relationships: List
  - Leisure: List
  - Journal: List
- Time Management: Folder
  - Routines: List
  - Time Blocks: List
  - Schedule: List
  - Events: List
- Productivity: GTD
  - Process: List
  - Organize: List
  - Reviews: List
- Knowledge: Folder
  - Notes: List
  - Wiki: List
  - Diagrams: List
  - Files: List
- Settings: Page

### Operations

When a Portfolio Item is opened, sets of common ERP modules become available to work on within the Item.

All of the items in the ERP modules are pre-configured with the appropriate fields, views, forms, documents, and other resources to get the user started on their journey.

## Workflows

### General Workflow Concepts

Workflows are a series of steps that are used to achieve a goal. They are effective processes that can be used to achieve a desired outcome.

### BPMN Elements

Workflows are created using BPMN (Business Process Modeling Notation) elements composed of:

- events (start, end, intermediate, signal, timer, etc)
- activities (sub-processes, activity tasks, etc)
- behaviors (loops, parallel, sequence, etc)
- gateways (parallel, exclusive, inclusive, complex, etc)
- artifacts (documents, data, messages, etc)

### Flows

The elements of a workflow are connected using the concepts of nodes and edges.

Nodes are the individual elements of a workflow and edges are the connections between them.

Nodes are primarily connected via:

- edges for sequential workflows
- conditional edges for decision making

### Workflow Visualization

With the assignment of the BPMN elements and the Flows, the workflow can be visualized.

This visualizaiton makes it easy to understand the workflow and to identify the steps and decisions that are made.

The visualizations are generated using a custom implementation of [ReactFlow](https://reactflow.dev/).

These visualizations will also allow for viewing executions of a workflow in real-time.

## Templates

Templates are pre-configured workflows that are designed to be used as a starting point for a new workflow.

### Default Templates

Default templates will be created for common workflows that are associated with business functions associated with the ERP modules.

### Customization

Users will be able to customize the templates to better fit their needs.
Each user or org may have their own set of processes that involve different tools and activities.

### Collaborative Template Library

Users will be able to share templates with each other at various levels such as:

- public (available to all users)
- org (available to all users in the organization)
- workspace (available to all users in the workspace)
- folder (available to all users in the folder)
- list (available to all users in the list)
- item (available to all users in the item)

This makes it easy to quickly find and use a template that is relevant to the user's current context.

## Workflow Automations

Workflow automations are a set of features that allow for the automation of workflows.

These automations are designed to be simple to create and use, yet powerful enough to handle complex workflows.

### Workflow Automation Structure

These are structured as:

- Triggers
  - Triggers are events that cause a workflow to start.
- Conditions
  - Conditions are used to determine if an action should be taken.
- Actions
  - Actions are the steps that are taken in a workflow in an activity.
  - The work the following:
    - receive inputs generally from a previous node,
    - validate the inputs
    - process the inputs using a Tool (the equivalent of a function in a programming language)
    - validate the outputs
    - produce outputs which may be used by subsequent nodes.
- Mappings
  - Mappings are used to map the received inputs to the appropriate Tool and map the outputs (response) from the Tool to the appropriate subsequent node.

### Manual Automation Creation

Manual automation creation is the process of creating a workflow manually.

This is done through the use of the workflow editor.

The workflow editor provides a visual interface for creating and editing workflows.

## AI Automation Agents

AI Automation Agents are a set of features that allow for the automation of workflows using AI.

### Item Generation Agents

Item Generation Agents are AI agents that are designed to generate items in a list.

They help to reduce the time it takes to create a new item in a list by automatically populating the item with the appropriate fields.

### Workflow Generation Agents

Workflow Generation Agents are AI agents that are designed to generate workflows in a workspace.

They help to reduce the time it takes to create a new workflow in a workspace by automatically populating the workflow with the appropriate triggers, conditions, actions, and mappings. This includes the creation of the BPMN elements and the flow of the workflow.

### Workflow Execution Agents

Workflow Execution Agents are AI agents that are designed to execute workflows in a workspace.

They help to reduce the time it takes to execute a workflow in a workspace by automatically populating the workflow with the appropriate triggers, conditions, actions, and mappings.

## Knowledge Management

The platform will include a knowledge management system that will allow for the creation of a knowledge base.

This will include a search engine, a recommendation system, and a collaborative system.

### Notes, Wiki, Diagrams, Files

These are the core knowledge artifacts that are used to create a knowledge base.

## AI Knowledge Generation Agents

AI Knowledge Generation Agents are AI agents that are designed to generate knowledge in a workspace.

They help to reduce the time it takes to create a new knowledge item in a workspace by automatically populating the knowledge item with the appropriate data.

### Internal Knowledge Access

They are able to access information from:

- Knowledge Base Items
- Workspace Items
- Workflows

## External Knowledge Access

They are able to access information from external sources such as:

- Web Pages
- APIs
- RSS Feeds
- Other

## Additional Feature

Many additional features will be built on top of the platform such as:

- Chats
- Calendars
- Accessing Web Apps as Tools within Workflows
- Automating Web Apps Activities within Workflows
- Accessing OS Tools by using the display information to determine clicks to automate and entering text to automate typing.
- App building

Much more!

## GoalFlow

Through the use of the platform, users will be able to achieve their goals faster, easier, at lower cost, and with less risk.

Each of their goals can be aligned starting with their philosophy all the way down to the individual activities for each workflow.

- The default structure helps guide the alignment process and provides a common structure for all users to use.
- The inclusion of the ERP modules helps to ensure that all of the necessary aspects of the goals are able to be tracked and managed from the administrative level and operations level.
- The collaborative templates library helps to ensure that the users can find the workflows appropriate for each use case.
- The automations help to ensure that the workflows are able to be executed quickly and efficiently.
- The knowledge management system helps to ensure that the users can access the information they need to achieve their goals.
- The AI Agents help with everything from generating items, to generating workflows, to generating knowledge, to generating external content, to automating everything.

These benefits are only the start and lead to additional benefits such as:

- Reduced time for onboarding and training
- Lower employee expenses
- Reduced decision fatigue
- Increased productivity
- Reduced time to achieve goals
- Reduced cost to achieve goals
- Reduced risk in achieving goals
- Increased success in achieving goals
- Increased happiness and wellbeing

## Effective Altruism and GoalFlow

The above benefits of GoalFlow area helpful to any user.

In the case of Effective Altruism these benefits are amplified because

- they help EA orgs to achieve more impact with their resources
- they help individual EA members manage and align their work to achieve more impact with their time
