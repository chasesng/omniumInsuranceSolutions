import { onSnapshot, query, collection, getFirestore } from 'firebase/firestore';
import { ref, onUnmounted} from 'vue';
import { app } from '@/configs.js';

const db = getFirestore(app);
export function setupEnquiries() {
  const enquiries = ref([]);

  const enquiryQuery = query(collection(db, 'omniumISSEnquiries'));
  const liveEnquiries = onSnapshot(enquiryQuery, (snapshot) => {
    enquiries.value = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        advisorID: doc.data().advisorID,
        enquiryContent: doc.data().enquiryContent,
        enquiryTitle: doc.data().enquiryTitle,
        finalizedPurchase: doc.data().finalizedPurchase,
        referredPolicyID: doc.data().referredPolicyID,
        replies: doc.data().replies,
        requestDate: doc.data().requestDate,
        senderID: doc.data().senderID,
        status: doc.data().status
      };
    });
  });

  onUnmounted(liveEnquiries);

  return { enquiries };
}

export function setupAssessments() {
  const assessments = ref([]);

  const assessmentQuery = query(collection(db, 'omniumAssessment'));
  const liveAssessment = onSnapshot(assessmentQuery, (snapshot) => {
    assessments.value = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        qnDesc: doc.data().qnDesc,
        qnNumber: doc.data().qnNumber,
        qnOptions_SC_Delimiter: doc.data().qnOptions_SC_Delimiter
      };
    });
  });

  onUnmounted(liveAssessment);

  return { assessments };
}

export function setupPolicies() {
  const policies = ref([]);

  const policyQuery = query(collection(db, 'policiesOfISS'));
  const livePolicies = onSnapshot(policyQuery, (snapshot) => {
    policies.value = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        coverageDetails: doc.data().policy_CoverageDetails,
        duration: doc.data().policy_Duration,
        issueAge: doc.data().policy_IssueAge,
        name: doc.data().policy_Name,
        registeredNumber: doc.data().policy_Number,
        periodType: doc.data().policy_Period,
        policyPremium: doc.data().policy_Premium,
        provider: doc.data().policy_Provider,
        sumInsured: doc.data().policy_SumInsured,
        policyTNC: doc.data().policy_TermsAndConditions,
        type: doc.data().policy_Type,
        policyFrequency: doc.data().premium_Frequency
      };
    });
  });

  onUnmounted(livePolicies);

  return { policies };
}

export function setupUsers() {
  const users = ref([]);

  const userQuery = query(collection(db, 'omniumISSUsers'));
  const liveUsers = onSnapshot(userQuery, (snapshot) => {
    users.value = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        userID: doc.data().userID,
        username: doc.data().username,
        gender: doc.data().gender,
        age: doc.data().age,
        assignmentArray: doc.data().assignmentArray,
        from: doc.data().from,
        occupation: doc.data().occupation,
        emailRef: doc.data().emailRef,
        userType: doc.data().userType,
        dateOfBirth: doc.data().dateOfBirth
      };
    });
  });

  onUnmounted(liveUsers);

  return { users };
}