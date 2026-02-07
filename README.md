Scoring Methodology for Account Factorial IT Fit Assessment
The following documentation outlines the logic used in the scoring model which evaluates an account’s fit for Factorial IT by assigning weighted points.
I. Scalable Infrastructure Penalty
Quantitative risk is adjusted based on the total volume of managed assets to account for the linear increase in management overhead relative to fleet size.
Weighted Increment: +2.0 per every  ten devices.
Qualifying Parameters: Derived by rounding the total device count to the nearest ten, isolating the number of tens, and multiplying by constant 2.
II. Certification and Compliance Frameworks
Points are aggregated based on the presence of verified regulatory frameworks. Each certification signifies an additional layer of auditing requirement and operational overhead.
Weighted Increment: +2.0 per certification.
Qualifying Parameters: Positive boolean state for NIS2, ISO27001, SOC2, or HIPAA.
III. Operational Environment and Human Resources
The model accounts for the increased security perimeter of decentralised work and the strain on limited personnel.
Remote/Hybrid Infrastructure: +2.0 points if the account operates under a multi-location model.
Personnel Constraints: +2.0 points if the IT staff headcount is ≤ 2, indicating potential resource bottlenecks.
Onboarding Velocity: +2.0 points if annual onboarding volume > 12  people per year. Indicating the need for a standardised process.
IV. Asset Heterogeneity
Increased diversity in hardware and software environments correlates with a broader attack surface and higher management complexity.
Hardware Multiplicity: +2.0 points if the cardinality of the device set is greater than 1, i.e.  |{Laptop, Phone, iPad}| > 1.
Operating System Multiplicity: +2.0 points if the cardinality of the OS set is greater than 1, i.e. |{Windows, iOS, Linux}| > 1.
V. Procedural Automation
The absence of standardized management tools is treated as a risk factor for operational failure and as a clear sign of lack of automation.
Administrative Deficit: +2.0 points if a Ticketing system is absent (indicated by a null boolean state).
