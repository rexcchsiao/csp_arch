// Crisis Communication Playbook: Handling Setbacks Transparently (Added 2026-03-23 by CoCo)
// Purpose: Address board concern "What happens when the pilot hits a snag?" with pre-written communication templates
// Reality: No software deployment is perfect. The difference between success and failure is how you communicate and resolve issues.
export const crisisCommunicationPlaybook = {
  headline: "Crisis Communication Playbook: Handling Pilot Setbacks Transparently",
  corePrinciple: "Bad news must travel fast. Surprises kill trust. Transparency + action plan = maintained credibility.",
  escalationLevels: [
    {
      level: "Level 1: Minor Issue (No Customer Impact)",
      trigger: "Bug found in lab, no customer impact, <4 hour fix",
      communication: "Internal Slack #software-pilot channel, weekly customer sync mention",
      template: "**Issue:** [Brief description]\n**Impact:** None (lab-only)\n**Root Cause:** [Technical cause]\n**Fix:** [Solution]\n**ETA:** [Time]\n**Status:** ✅ Resolved",
      example: "**Issue:** K8s scheduler memory leak in test environment\n**Impact:** None (lab-only, caught before deployment)\n**Root Cause:** Resource limit misconfiguration in Helm chart\n**Fix:** Updated resource limits, added monitoring alert\n**ETA:** Resolved in 2 hours\n**Status:** ✅ Resolved"
    },
    {
      level: "Level 2: Moderate Issue (Temporary Customer Impact)",
      trigger: "Service degradation <2 hours, affects <20% of workloads, remote-fixable",
      communication: "Email to customer technical lead within 30 minutes, Slack alert, weekly sync deep-dive",
      template: "**Subject:** [Foxconn Remote Ops] Incident Report - [Date] - [Brief Description]\n\n**Summary:**\nAt [time], we detected [issue] affecting [scope]. Our team responded within [time] and implemented a fix at [time]. Total downtime: [duration].\n\n**Impact:**\n- Affected systems: [list]\n- Duration: [start] to [end] ([duration])\n- Customer impact: [description]\n\n**Root Cause:**\n[Technical explanation in plain language]\n\n**Resolution:**\n[What we did to fix]\n\n**Prevention:**\n[What we're doing to prevent recurrence]\n\n**Next Steps:**\n- [Action item 1] - Owner: [name] - ETA: [date]\n- [Action item 2] - Owner: [name] - ETA: [date]\n\nWe apologize for the disruption. Our team is committed to maintaining the reliability you expect from Foxconn Remote Ops."
    },
    {
      level: "Level 3: Critical Issue (SLA Breach)",
      trigger: "Service outage >2 hours, affects >20% of workloads, requires escalation to C-level",
      communication: "Phone call to customer CTO within 30 minutes, email within 1 hour, daily updates until resolution",
      escalationPath: [
        { time: "T+0:30", action: "Phone call to customer CTO from Foxconn Software Product Lead" },
        { time: "T+1:00", action: "Written incident report sent to customer technical team" },
        { time: "T+4:00", action: "If unresolved, escalate to Foxconn VP-level" },
        { time: "T+8:00", action: "If unresolved, escalate to Foxconn CEO; daily update to customer CTO" },
        { time: "T+24:00", action: "If unresolved, Foxconn CEO calls customer CEO; discuss compensation" },
        { time: "Resolution", action: "Post-incident review within 5 business days; credit note issued within 10 business days" }
      ],
      compensationFramework: {
        sla99_9: "If uptime <99.9% in a month: 10% credit for that month's Remote Ops subscription",
        sla99_99: "If uptime <99.99% in a month: 25% credit for that month's Remote Ops subscription",
        criticalOutage: "If critical outage >8 hours: 50% credit for that month + NT$ 500K service credit",
        repeatedIncidents: "If 3+ Level 3 incidents in 90 days: Customer can terminate contract with full refund of remaining term"
      }
    },
    {
      level: "Level 4: Existential Threat (Pilot Failure Risk)",
      trigger: "Customer considering termination, loss of confidence, escalation to board level",
      communication: "Foxconn CEO to customer CEO within 24 hours, in-person meeting within 48 hours, joint action plan",
      foxconnInternalActions: [
        "CEO-to-CEO call within 24 hours",
        "In-person meeting at customer site within 48 hours",
        "Dedicated SWAT team (3-5 engineers) on-site until resolution",
        "Daily status reports to customer CEO/CTO",
        "Weekly executive steering committee meeting",
        "Third-party audit if customer requests"
      ],
      recoveryMetrics: {
        responseTime: "CEO-to-CEO within 24 hours",
        actionPlan: "Joint recovery plan within 48 hours",
        resolution: "Critical issues resolved within 7 days",
        trustRebuilding: "Weekly executive check-ins for 90 days post-recovery"
      }
    }
  ],
  boardMessage: "No software deployment is perfect. The difference between a recoverable setback and a lost customer is transparent communication + decisive action. This playbook ensures Foxconn responds to crises with professionalism and accountability.",
  usage: "Train all customer-facing team members on escalation levels and communication templates. Practice crisis scenarios in internal drills.",
  metrics: {
    level1_target: "100% resolved within 4 hours, 0 customer complaints",
    level2_target: "100% reported within 30 minutes, 95% resolved within 4 hours",
    level3_target: "100% escalated to C-level within 30 minutes, SLA credit issued within 10 business days",
    level4_target: "CEO-to-CEO within 24 hours, customer retention rate >80% post-crisis"
  }
};

export default crisisCommunicationPlaybook;
