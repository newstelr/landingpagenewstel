
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Interface for form data
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt?: number;
  sessionId?: string;
  status?: 'partial' | 'submitted';
}

// Generate a random session ID for tracking the same user across multiple visits
export const generateSessionId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// Get or create session ID
export const getSessionId = (): string => {
  let sessionId = localStorage.getItem('formSessionId');
  if (!sessionId) {
    sessionId = generateSessionId();
    localStorage.setItem('formSessionId', sessionId);
  }
  return sessionId;
};

// Save partial form data (when user is typing)
export const savePartialFormData = async (formData: Partial<ContactFormData>): Promise<void> => {
  try {
    const sessionId = getSessionId();
    const docRef = doc(db, "partialSubmissions", sessionId);
    
    await setDoc(docRef, {
      ...formData,
      sessionId,
      createdAt: Date.now(),
      status: 'partial',
      lastUpdated: Date.now(),
    }, { merge: true });
    
    console.log("Partial form data saved to Firebase");
  } catch (error) {
    console.error("Error saving partial form data to Firebase:", error);
  }
};

// Save complete form submission
export const saveFormSubmission = async (formData: ContactFormData): Promise<void> => {
  try {
    const sessionId = getSessionId();
    
    // First, save to submissions collection
    await addDoc(collection(db, "submissions"), {
      ...formData,
      sessionId,
      createdAt: Date.now(),
      status: 'submitted',
    });
    
    console.log("Form submission saved to Firebase");
  } catch (error) {
    console.error("Error saving form submission to Firebase:", error);
    throw error;
  }
};
