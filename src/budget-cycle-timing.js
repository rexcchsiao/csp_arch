// Budget Cycle & Procurement Timing Intelligence
// Added 2026-03-29 by CoCo: Helps sales team time engagements to customer budget cycles
// Purpose: Reduce sales cycle from 9 months to 3-4 months by engaging at the right time

export const budgetCycleTiming = {
  headline: "Budget Cycle Intelligence: When to Engage Each Customer Type",
  coreInsight: "Software procurement follows predictable budget cycles. Engaging at the wrong time = 6-12 month delay. Engaging at the right time = 3-4 month sales cycle.",
  
  cycles: [
    {
      customerType: "Tier-2 CSP / Cloud Provider",
      fiscalYearEnd: "December",
      budgetPreparation: "June-August (prior year)",
      budgetApproval: "September-November",
      procurementWindow: "Q4 (Oct-Dec) for next-year deployment",
      engagementStrategy: "Start technical validation in Q2, POC in Q3, commercial negotiation in Q4",
      urgency: "If you miss Q4 budget window, next opportunity is 12 months later",
      foxconnPlay: "Position Remote Ops as 'operational efficiency' budget (OPEX) rather than CapEx; easier approval than hardware"
    },
    {
      customerType: "Enterprise (Fortune 500)",
      fiscalYearEnd: "December (60%) or March (40%)",
      budgetPreparation: "3-4 months before FY end",
      budgetApproval: "2-3 months before FY end",
      procurementWindow: "2-3 months before FY end (use-it-or-lose-it budgets)",
      engagementStrategy: "Identify fiscal year-end, engage 6-8 months prior with POC, close 2-3 months before FY end",
      urgency: "December FYE companies: engage by June. March FYE companies: engage by September.",
      foxconnPlay: "RAG Appliance fits 'AI transformation' budget theme; Remote Ops fits 'operational excellence' theme"
    },
    {
      customerType: "Financial Services (Banks, Insurance)",
      fiscalYearEnd: "December",
      budgetPreparation: "Q2-Q3",
      budgetApproval: "Q3-Q4",
      procurementWindow: "Q4 (Oct-Dec) or Q1 (Jan-Mar)",
      regulatoryDriver: "EU AI Act compliance (2026), model risk management requirements",
      engagementStrategy: "Tie to regulatory deadlines; compliance budgets have higher approval priority",
      urgency: "Compliance-driven budgets can bypass normal cycles if regulatory deadline is imminent",
      foxconnPlay: "Sovereign AI + Model Provenance services directly address EU AI Act technical documentation requirements"
    },
    {
      customerType: "Government / Public Sector",
      fiscalYearEnd: "December or March (varies by country)",
      budgetPreparation: "6-9 months before FY end",
      budgetApproval: "3-6 months before FY end",
      procurementWindow: "End of fiscal year (use-it-or-lose-it) or start of new fiscal year",
      specialConsideration: "Public tender process adds 3-6 months; sovereign AI requirements accelerate approval",
      engagementStrategy: "Engage during budget formulation phase; provide technical specifications for tender",
      urgency: "Once tender is published, it's too late to influence; must engage 12+ months before deployment",
      foxconnPlay: "Sovereign AI + air-gap capabilities align with national security objectives; faster approval path"
    },
    {
      customerType: "Hyperscaler Strategic Accounts",
      fiscalYearEnd: "December (most)",
      budgetPreparation: "Continuous (rolling budgets)",
      procurementWindow: "Quarterly (aligned with datacenter expansion cycles)",
      engagementStrategy: "Align with their datacenter construction timeline; software deployment typically 3-6 months before hardware commissioning",
      urgency: "Must align with their construction schedule; missing window = 6-12 month delay",
      foxconnPlay: "Remote Ops + Dispatch Readiness reduces their operational burden; position as 'operational de-risking'"
    }
  ],

  salesTactics: {
    accelerateApproval: [
      "Pilot program with 90-day guarantee (reduces perceived risk)",
      "Tie to regulatory deadlines (EU AI Act, model risk management)",
      "Show TCO comparison vs. status quo (quantify cost of delay)",
      "Leverage 'use-it-or-lose-it' budget timing (Q4 for most enterprises)"
    ],
    redFlags: [
      "Engaging after budget is finalized (wait 6-12 months)",
      "No clear budget owner identified (software often falls between IT/infrastructure/AI teams)",
      "Expecting procurement to drive decision (software needs business case, not just price)",
      "Ignoring fiscal year-end timing (most companies have 2-3 month freeze before FY end)"
    ],
    greenFlags: [
      "Prospect asks about 'deployment timeline' or 'time to value' (implies budget awareness)",
      "Mentions 'fiscal year-end' or 'budget cycle' in conversation",
      "Requests compliance documentation or regulatory alignment info",
      "Includes operations/SRE team in discussions (not just procurement)"
    ]
  },

  boardMessage: "Sales cycle timing is as important as product readiness. Engaging prospects aligned to their budget cycles reduces sales cycle from 9 months to 3-4 months. Software team must work with sales to identify budget timing early in qualification."
};

export default budgetCycleTiming;
