BhumiGuide Intelligence - sample documents for the readiness checker
====================================================================

WHAT THESE ARE
Fifteen specimen files for testing the "AI document readiness check" on the
Legal Verification page. Every file is watermarked SPECIMEN, contains only
placeholder values (SPECIMEN NAME, XXXX XXXX XXXX, Rs. 0.00), and states on
its face that it is not a real document and has no legal validity.

They are test data. Do not present any of them to an office, bank or authority.

HOW TO USE
1. Open the Legal Verification page.
2. Under "AI document readiness check", click "Choose files to check".
3. Select the 13 files whose names end in _specimen.pdf (Ctrl+A then
   de-select the two demo-failure files listed below).
4. Readiness should read 100% with "Still missing (0)".

THE 9 MANDATORY DOCUMENTS
  aadhaar_card_specimen.pdf              -> Aadhaar Card
  pan_card_specimen.pdf                  -> PAN Card
  passport_photo_specimen.pdf            -> Passport Size Photographs
  address_proof_specimen.pdf             -> Address Proof
  sale_deed_specimen.pdf                 -> Sale Deed
  previous_title_documents_specimen.pdf  -> Previous Title Deeds
  712_extract_specimen.pdf               -> Land Record Extract
  encumbrance_certificate_specimen.pdf   -> Encumbrance Certificate
  property_tax_receipt_specimen.pdf      -> Property Tax Receipt

FOUR OPTIONAL ("if applicable") DOCUMENTS
  mutation_record_specimen.pdf           -> Mutation Records
  khata_certificate_specimen.pdf         -> Khata / Khasra Certificate
  land_survey_map_specimen.pdf           -> Land Survey Documents
  noc_specimen.pdf                       -> No Objection Certificate
These are recognised but do not change the readiness percentage, because
readiness is measured against the mandatory set only.

TWO FILES THAT FAIL ON PURPOSE
  scan_001.pdf           -> no document keyword in the name, so the checker
                            reports "Unrecognised document" and asks you to
                            rename it. Use this to show identification working.
  pan_card_tiny_scan.pdf -> only about 2 KB, so the checker warns that a scan
                            this small is usually too blurred to read at the
                            counter. Use this to show the quality check.

HOW THE CHECKER DECIDES
- It identifies a document from keywords in the FILE NAME, not from the
  contents. Renaming a file changes what it is recognised as.
- First match wins, in the order the keywords are defined. That is why the
  previous-title file is named "previous_title_documents" and not
  "..._title_deeds": any name containing "deed" is read as the Sale Deed.
- Accepted formats: pdf, jpg, jpeg, png.
- Files under 60 KB get a "too blurred" warning; over 8 MB gets a "too large"
  warning.
- Land Record Extract, Encumbrance Certificate and Property Tax Receipt are
  also age-checked. If the file on your disk is more than about 180 days old,
  the checker raises an error saying it should be issued within the last three
  to six months. These files were generated today, so they pass - if you test
  again months from now, re-download them.

Generated for the BhumiGuide Intelligence academic project.
