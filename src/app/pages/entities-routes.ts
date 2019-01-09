import { Routes } from '@angular/router';

export const routes: Routes = [
{
  path: 'Address',
  loadChildren: './Entity/Address/Address.module#AddressModule',
},
{
  path: 'BankAccount',
  loadChildren: './Entity/BankAccount/BankAccount.module#BankAccountModule',
},
{
  path: 'Budget',
  loadChildren: './Entity/Budget/Budget.module#BudgetModule',
},
{
  path: 'BudgetItem',
  loadChildren: './Entity/BudgetItem/BudgetItem.module#BudgetItemModule',
},
{
  path: 'Committee',
  loadChildren: './Entity/Committee/Committee.module#CommitteeModule',
},
{
  path: 'CommitteeMembers',
  loadChildren: './Relationship/CommitteeMembers/CommitteeMembers.module#CommitteeMembersModule',
},
{
  path: 'Condition',
  loadChildren: './Entity/Condition/Condition.module#ConditionModule',
},
{
  path: 'Contact',
  loadChildren: './Entity/Contact/Contact.module#ContactModule',
},
{
  path: 'Contract',
  loadChildren: './Entity/Contract/Contract.module#ContractModule',
},
{
  path: 'ContractTaskItem',
  loadChildren: './Relationship/ContractTaskItem/ContractTaskItem.module#ContractTaskItemModule',
},
{
  path: 'Decision',
  loadChildren: './Entity/Decision/Decision.module#DecisionModule',
},
{
  path: 'Discussion',
  loadChildren: './Entity/Discussion/Discussion.module#DiscussionModule',
},
{
  path: 'DiscussionDocuments',
  loadChildren: './Relationship/DiscussionDocuments/DiscussionDocuments.module#DiscussionDocumentsModule',
},
{
  path: 'DiscussionMembers',
  loadChildren: './Relationship/DiscussionMembers/DiscussionMembers.module#DiscussionMembersModule',
},
{
  path: 'DiscussionTaskItem',
  loadChildren: './Relationship/DiscussionTaskItem/DiscussionTaskItem.module#DiscussionTaskItemModule',
},
{
  path: 'Document',
  loadChildren: './Entity/Document/Document.module#DocumentModule',
},
{
  path: 'FundBudget',
  loadChildren: './Entity/FundBudget/FundBudget.module#FundBudgetModule',
},
{
  path: 'Member',
  loadChildren: './Entity/Member/Member.module#MemberModule',
},
{
  path: 'Organization',
  loadChildren: './Entity/Organization/Organization.module#OrganizationModule',
},
{
  path: 'OrganizationBankAccount',
  loadChildren: './Relationship/OrganizationBankAccount/OrganizationBankAccount.module#OrganizationBankAccountModule',
},
{
  path: 'OrganizationResearchers',
  loadChildren: './Relationship/OrganizationResearchers/OrganizationResearchers.module#OrganizationResearchersModule',
},
{
  path: 'Payment',
  loadChildren: './Entity/Payment/Payment.module#PaymentModule',
},
{
  path: 'PaymentCondition',
  loadChildren: './Entity/PaymentCondition/PaymentCondition.module#PaymentConditionModule',
},
{
  path: 'PaymentConditionDocument',
  loadChildren: './Relationship/PaymentConditionDocument/PaymentConditionDocument.module#PaymentConditionDocumentModule',
},
{
  path: 'Request',
  loadChildren: './Entity/Request/Request.module#RequestModule',
},
{
  path: 'RequestAdditionalFunding',
  loadChildren: './Relationship/RequestAdditionalFunding/RequestAdditionalFunding.module#RequestAdditionalFundingModule',
},
{
  path: 'RequestAdditionalResearcher',
  loadChildren: './Relationship/RequestAdditionalResearcher/RequestAdditionalResearcher.module#RequestAdditionalResearcherModule',
},
{
  path: 'RequestDocuments',
  loadChildren: './Relationship/RequestDocuments/RequestDocuments.module#RequestDocumentsModule',
},
{
  path: 'RequestGuide',
  loadChildren: './Relationship/RequestGuide/RequestGuide.module#RequestGuideModule',
},
{
  path: 'RequestResearchProposal',
  loadChildren: './Relationship/RequestResearchProposal/RequestResearchProposal.module#RequestResearchProposalModule',
},
{
  path: 'RequestTaskItem',
  loadChildren: './Relationship/RequestTaskItem/RequestTaskItem.module#RequestTaskItemModule',
},
{
  path: 'Research',
  loadChildren: './Entity/Research/Research.module#ResearchModule',
},
{
  path: 'ResearchDocuments',
  loadChildren: './Relationship/ResearchDocuments/ResearchDocuments.module#ResearchDocumentsModule',
},
{
  path: 'Researcher',
  loadChildren: './Entity/Researcher/Researcher.module#ResearcherModule',
},
{
  path: 'ResearchProposal',
  loadChildren: './Entity/ResearchProposal/ResearchProposal.module#ResearchProposalModule',
},
{
  path: 'ResearchTaskItem',
  loadChildren: './Relationship/ResearchTaskItem/ResearchTaskItem.module#ResearchTaskItemModule',
},
{
  path: 'ScheduleRequest',
  loadChildren: './Entity/ScheduleRequest/ScheduleRequest.module#ScheduleRequestModule',
},
{
  path: 'TaskItem',
  loadChildren: './Entity/TaskItem/TaskItem.module#TaskItemModule',
},
{
  path: 'TRBank',
  loadChildren: './TR/TRBank/TRBank.module#TRBankModule',
},
{
  path: 'TRBranch',
  loadChildren: './TR/TRBranch/TRBranch.module#TRBranchModule',
},
{
  path: 'TRBudgetItemType',
  loadChildren: './TR/TRBudgetItemType/TRBudgetItemType.module#TRBudgetItemTypeModule',
},
{
  path: 'TRBudgetType',
  loadChildren: './TR/TRBudgetType/TRBudgetType.module#TRBudgetTypeModule',
},
{
  path: 'TRCommittee',
  loadChildren: './TR/TRCommittee/TRCommittee.module#TRCommitteeModule',
},
{
  path: 'TRDecision',
  loadChildren: './TR/TRDecision/TRDecision.module#TRDecisionModule',
},
{
  path: 'TRDepartment',
  loadChildren: './TR/TRDepartment/TRDepartment.module#TRDepartmentModule',
},
{
  path: 'TRDocumentType',
  loadChildren: './TR/TRDocumentType/TRDocumentType.module#TRDocumentTypeModule',
},
{
  path: 'TREntityType',
  loadChildren: './TR/TREntityType/TREntityType.module#TREntityTypeModule',
},
{
  path: 'TRkolKoreh',
  loadChildren: './TR/TRkolKoreh/TRkolKoreh.module#TRkolKorehModule',
},
{
  path: 'TROrganization',
  loadChildren: './TR/TROrganization/TROrganization.module#TROrganizationModule',
},
{
  path: 'TRPaymentCondition',
  loadChildren: './TR/TRPaymentCondition/TRPaymentCondition.module#TRPaymentConditionModule',
},
{
  path: 'TRPersonType',
  loadChildren: './TR/TRPersonType/TRPersonType.module#TRPersonTypeModule',
},
{
  path: 'TRPosition',
  loadChildren: './TR/TRPosition/TRPosition.module#TRPositionModule',
},
{
  path: 'TRRecommendation',
  loadChildren: './TR/TRRecommendation/TRRecommendation.module#TRRecommendationModule',
},
{
  path: 'TRResearch',
  loadChildren: './TR/TRResearch/TRResearch.module#TRResearchModule',
},
{
  path: 'TRSpecialty',
  loadChildren: './TR/TRSpecialty/TRSpecialty.module#TRSpecialtyModule',
},
{
  path: 'TRStatus',
  loadChildren: './TR/TRStatus/TRStatus.module#TRStatusModule',
},
{
  path: 'TRTaskItemStatus',
  loadChildren: './TR/TRTaskItemStatus/TRTaskItemStatus.module#TRTaskItemStatusModule',
},
{
  path: 'TRTaskItemType',
  loadChildren: './TR/TRTaskItemType/TRTaskItemType.module#TRTaskItemTypeModule',
},
{
  path: 'TRTitle',
  loadChildren: './TR/TRTitle/TRTitle.module#TRTitleModule',
},
{
  path: 'TRTypeBudget',
  loadChildren: './TR/TRTypeBudget/TRTypeBudget.module#TRTypeBudgetModule',
},
{
  path: 'TRUnitType',
  loadChildren: './TR/TRUnitType/TRUnitType.module#TRUnitTypeModule',
},
{
  path: 'User',
  loadChildren: './Entity/User/User.module#UserModule',
},

];