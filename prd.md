# BhumiGuide Intelligence — Product Requirements Document (PRD)

## 1. Product Overview

BhumiGuide Intelligence is a full-stack web application designed to help Indian buyers navigate the land and property purchase journey with fewer surprises. The product combines location-aware procedure guidance, document checklists, office information, charge estimation, AI-driven Q&A, and legal document-readiness support in one workflow.

The app is built as a practical decision-support tool for users who are confused about:
- which steps are required for their land purchase
- what documents are needed for their state and transaction type
- how much stamp duty / registration costs may apply
- which government offices they may need to visit
- how to verify whether their document set is complete before payment

## 2. Problem Statement

Property buying in India is highly fragmented and highly location-specific. The same land purchase can require different paperwork, permissions, and authorities depending on:
- state and district
- rural vs urban land
- inherited vs direct-sale ownership
- agricultural vs residential/commercial use
- owner type (individual, company, partnership firm)

Most users do not know the exact process, can miss critical documents, and often rely on informal advice. This creates delays, legal risk, and transaction friction.

BhumiGuide aims to reduce that uncertainty by giving users a structured, district-aware buying journey rather than a generic checklist.

## 3. Product Goals

### Primary goals
- Make the land buying procedure understandable and actionable for first-time buyers
- Personalize the process based on user location and transaction situation
- Help users collect the right documents before purchase or registration
- Give indicative cost guidance for stamp duty and registration
- Support legal verification by identifying missing or outdated files
- Offer AI assistance for plain-language guidance in local-language contexts

### Secondary goals
- Store user progress and preferences across sessions
- Help users return to previous work and see their checklist status
- Support office discovery for relevant departments
- Provide a foundation for future expansion into legal workflow automation

## 4. Target Users

### Primary users
- First-time home buyers
- Buyers of agricultural or residential plots
- Land investors and family buyers
- People buying property in a district/state they are not familiar with

### Secondary users
- Lawyers and consultants who want a quick overview for clients
- Real-estate intermediaries who need a structured process summary
- Users comparing property options across locations

## 5. Core User Needs

1. I want to know the exact land-buying process for my location.
2. I want to know what documents I must collect before paying for a property.
3. I want to know which offices and departments are involved.
4. I want an estimate of the expected charges and fees.
5. I want a quick way to check if my document set is complete.
6. I want an AI assistant to answer practical questions in simple language.
7. I want to save my progress and continue later.

## 6. Product Scope

### In scope
- State/district/taluka based land buying guidance
- Smart Procedure Generator based on buyer conditions
- Procedure steps with office, time, fee, and rationale
- Document checklist with mandatory and conditional requirements
- Charges and registration rules by state
- AI legal assistant with rule-based fallback and optional live model integration
- Authenticated account experience with saved progress
- File upload and document readiness analysis
- Multi-language UI/translation support

### Out of scope
- Real government record verification or live litigation data integration
- Actual legal case evaluation or title conclusiveness
- Real-time government office booking or API integration
- Full e-signing or document submission workflow
- Live mapping/route optimization beyond placeholder or Google Maps links

## 7. User Experience and Core Flows

### Flow 1: Select location and get the procedure
1. User selects state, district, and taluka.
2. App loads local procedure steps and office data.
3. User can personalize the procedure using the Smart Procedure Generator.
4. App shows the recommended journey with conditional steps added.

### Flow 2: Review required documents
1. User opens the document checklist.
2. App shows categories, descriptions, and document purpose.
3. User marks documents as collected.
4. Progress is saved to the account if logged in.

### Flow 3: Estimate charges
1. User opens the charges section.
2. App displays indicative stamp duty and registration values for the selected state.
3. User can compare expected costs and understand what is being calculated.

### Flow 4: Ask the AI Assistant
1. User selects a location and optionally a profile summary.
2. User asks a question in plain language.
3. AI responds with practical guidance grounded in state-specific context.
4. If live model credentials are unavailable, the app falls back to a rule-based answer engine.

### Flow 5: Run legal verification readiness check
1. User enters property type, survey number, and owner name.
2. User uploads scanned files or sample files.
3. App identifies likely document types and highlights missing or stale files.
4. User can save the verification record to their account.

### Flow 6: User account and persistence
1. User signs up/logs in.
2. Progress, document checkmarks, profile, notifications, and activity are stored.
3. User can revisit the app and continue from saved state.

## 8. Functional Requirements

### Authentication
- Users can register with email and password.
- Users can log in with Google OAuth identity.
- JWT-based session handling should be used for protected API routes.
- Email verification OTP flow should be supported for user accounts.

### Location and procedure
- System should load location data for Indian states, districts, and talukas.
- Procedure should vary by selected region and buyer context.
- Conditional steps should appear when the case indicates inheritance, joint ownership, urban status, loans, or company involvement.

### Document management
- Document list must include title, purpose, office, and mandatory status.
- Users can toggle document completion states.
- Document readiness evaluation should warn about missing or outdated files.

### Charges
- Charges view should display state-specific indicative registration and stamp duty percentages.
- Costs should be presented as a planning estimate, not legal advice.

### AI Assistant
- AI assistant should answer questions using user location and profile context.
- It should support language switching and respond in the selected language when possible.
- It should gracefully fall back to rule-based logic when a live model is unavailable.

### Legal verification
- The app must allow uploading files for verification.
- It should identify document categories based on filename heuristics.
- It should detect missing mandatory documents and likely stale or invalid files.
- It should save upload records tied to the account.

### Progress persistence
- User progress should persist and sync to backend storage.
- Notifications and activity feed should be retained for the account.

## 9. Non-Functional Requirements

### Performance
- Frontend should load quickly and display the main app without blocking on backend initialization.
- Backend endpoints should respond within normal web-app thresholds for this use case.

### Security
- Passwords must be hashed before storage.
- JWT tokens must be required for protected routes.
- Upload endpoints must validate user auth and limit files reasonably.
- Sensitive data should be stored in a secure environment and not hard-coded into production settings.

### Reliability
- Server should gracefully handle missing database or AI key configuration.
- Rule-based logic must continue to work when live AI is unavailable.
- Seed data should be idempotent and safe to re-run.

### Usability
- App should be mobile-friendly and responsive.
- Selected language should flow across UI and AI assistant outputs.
- Users should receive clear feedback when a task fails or data is missing.

### Accessibility
- Buttons, inputs, and interactive elements should support keyboard access.
- Focus states and readable contrast should be maintained.

## 10. Data Model Highlights

The current implementation uses MongoDB collections including:
- User
- Progress
- ReferenceData
- ProcedureStep
- DocumentInfo
- VerificationRecord

These models support:
- authenticated users
- saved progress and preferences
- location and procedure reference data
- document metadata and requirements
- uploaded verification records

## 11. Success Metrics

The product can be considered successful if it helps users:
- understand the procedure for their region faster than using generic online content
- identify missing documents before buying property
- increase completion of checklist and progression in the buying workflow
- save progress and return to the process over multiple sessions
- ask practical property questions in plain language and receive useful responses

## 12. Risks and Assumptions

### Risks
- Indicative state charges and office data may not match official legal requirements in all cases.
- AI-generated answers may be incomplete without strong local ground truth data.
- Real government verification cannot be fully automated without deeper official integrations.

### Assumptions
- The app should be used as a decision-support and preparation tool, not as a legal authority.
- Users are comfortable with a prototype or early-stage product that uses approximate guidance and simulated checks.
- The app can evolve from reference-based logic into more formal government and legal data integrations.

## 13. Future Roadmap

### Near-term
- Improve region-specific logic and richer document rules
- Add better office data and map integration
- Improve AI prompting for more grounded local guidance
- Expand logged-in dashboard analytics

### Medium-term
- Add property comparison tools and financing guidance
- Integrate official or partner data sources for office and charge validation
- Add more advanced verification workflows for legal professionals

### Long-term
- Build a more complete land transaction lifecycle assistant
- Support document workflow management and customer dashboards
- Expand to broader Indian property and title assistance use cases

## 14. Summary

BhumiGuide Intelligence is a land-purchase guidance platform that turns a highly fragmented, context-heavy process into a structured workflow. It blends reference data, AI support, personalized progression, and practical document verification to help users make more informed decisions before they buy property.

The current implementation is a strong MVP and foundation for a more robust legal-tech product built around trust, locality, and real-world property transactions.
