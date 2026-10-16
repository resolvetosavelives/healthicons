# Migrating from 2.x to 3.0

Version 3.0 of the `healthicons` package renames many icon files. Most names switched from underscores to hyphens (for example `blood/blood_bag.svg` is now `blood/blood-bag.svg`), and one icon moved to a different category. No icons were removed.

Each rename applies to every version of the icon: `filled` and `outline`, SVG and PNG (including `@2x`), and the 24px versions where they exist. For example, `blood/blood_bag` covers:

```
public/icons/svg/filled/blood/blood_bag.svg       → public/icons/svg/filled/blood/blood-bag.svg
public/icons/svg/outline-24px/blood/blood_bag.svg → public/icons/svg/outline-24px/blood/blood-bag.svg
public/icons/png/filled/blood/blood_bag@2x.png    → public/icons/png/filled/blood/blood-bag@2x.png
```

## Moved to a different category

| 2.x                                              | 3.0                                                  |
| ------------------------------------------------ | ---------------------------------------------------- |
| `devices/discriminating_concentration_bioassays` | `diagnostics/discriminating-concentration_bioassays` |

## All renamed icons (378)

### blood

| 2.x                | 3.0                |
| ------------------ | ------------------ |
| `blood/blood_a_n`  | `blood/blood-a_n`  |
| `blood/blood_a_p`  | `blood/blood-a_p`  |
| `blood/blood_ab_n` | `blood/blood-ab_n` |
| `blood/blood_ab_p` | `blood/blood-ab_p` |
| `blood/blood_b_n`  | `blood/blood-b_n`  |
| `blood/blood_b_p`  | `blood/blood-b_p`  |
| `blood/blood_bag`  | `blood/blood-bag`  |
| `blood/blood_o_n`  | `blood/blood-o_n`  |
| `blood/blood_o_p`  | `blood/blood-o_p`  |
| `blood/blood_rh_n` | `blood/blood-rh_n` |
| `blood/blood_rh_p` | `blood/blood-rh_p` |

### body

| 2.x                               | 3.0                               |
| --------------------------------- | --------------------------------- |
| `body/blood_cells`                | `body/blood-cells`                |
| `body/blood_drop`                 | `body/blood-drop`                 |
| `body/blood_vessel`               | `body/blood-vessel`               |
| `body/cell_nuclei`                | `body/cell-nuclei`                |
| `body/female_reproductive_system` | `body/female-reproductive_system` |
| `body/heart_organ`                | `body/heart-organ`                |
| `body/lymph_nodes`                | `body/lymph-nodes`                |
| `body/penis_alt`                  | `body/penis-alt`                  |
| `body/vagina_alt`                 | `body/vagina-alt`                 |

### conditions

| 2.x                                | 3.0                                |
| ---------------------------------- | ---------------------------------- |
| `conditions/back_pain`             | `conditions/back-pain`             |
| `conditions/cancerous_cell_nuclei` | `conditions/cancerous-cell_nuclei` |
| `conditions/cervical_cancer`       | `conditions/cervical-cancer`       |
| `conditions/chemical_burn`         | `conditions/chemical-burn`         |
| `conditions/chills_fever`          | `conditions/chills-fever`          |
| `conditions/coughing_alt`          | `conditions/coughing-alt`          |
| `conditions/hiv_ind`               | `conditions/hiv-ind`               |
| `conditions/hiv_neg`               | `conditions/hiv-neg`               |
| `conditions/hiv_pos`               | `conditions/hiv-pos`               |
| `conditions/low_vision`            | `conditions/low-vision`            |
| `conditions/pancreatic_cancer`     | `conditions/pancreatic-cancer`     |
| `conditions/prostate_cancer`       | `conditions/prostate-cancer`       |
| `conditions/stomach_cancer`        | `conditions/stomach-cancer`        |
| `conditions/varicose_vein`         | `conditions/varicose-vein`         |
| `conditions/viral_lung_infection`  | `conditions/viral-lung_infection`  |

### contraceptives

| 2.x                                          | 3.0                                          |
| -------------------------------------------- | -------------------------------------------- |
| `contraceptives/contraceptive_diaphragm`     | `contraceptives/contraceptive-diaphragm`     |
| `contraceptives/contraceptive_injection`     | `contraceptives/contraceptive-injection`     |
| `contraceptives/contraceptive_patch`         | `contraceptives/contraceptive-patch`         |
| `contraceptives/contraceptive_voucher`       | `contraceptives/contraceptive-voucher`       |
| `contraceptives/copper_iud`                  | `contraceptives/copper-iud`                  |
| `contraceptives/family_planning`             | `contraceptives/family-planning`             |
| `contraceptives/female_condom`               | `contraceptives/female-condom`               |
| `contraceptives/hormonal_ring`               | `contraceptives/hormonal-ring`               |
| `contraceptives/male_condom`                 | `contraceptives/male-condom`                 |
| `contraceptives/oral_contraception_pillsx21` | `contraceptives/oral-contraception_pillsx21` |
| `contraceptives/oral_contraception_pillsx28` | `contraceptives/oral-contraception_pillsx28` |
| `contraceptives/sayana_press`                | `contraceptives/sayana-press`                |

### devices

| 2.x                                              | 3.0                                                  |
| ------------------------------------------------ | ---------------------------------------------------- |
| `devices/asthma_inhaler`                         | `devices/asthma-inhaler`                             |
| `devices/blood_pressure`                         | `devices/blood-pressure`                             |
| `devices/blood_pressure_2`                       | `devices/blood-pressure_2`                           |
| `devices/blood_pressure_monitor`                 | `devices/blood-pressure_monitor`                     |
| `devices/breast_pump`                            | `devices/breast-pump`                                |
| `devices/clinical_a`                             | `devices/clinical-a`                                 |
| `devices/cochlear_implant`                       | `devices/cochlear-implant`                           |
| `devices/cold_chain`                             | `devices/cold-chain`                                 |
| `devices/contact_lenses`                         | `devices/contact-lenses`                             |
| `devices/dental_hygiene`                         | `devices/dental-hygiene`                             |
| `devices/diabetes_measure`                       | `devices/diabetes-measure`                           |
| `devices/discriminating_concentration_bioassays` | `diagnostics/discriminating-concentration_bioassays` |
| `devices/endotracheal_tube`                      | `devices/endotracheal-tube`                          |
| `devices/hearing_aid`                            | `devices/hearing-aid`                                |
| `devices/intravenous_bag`                        | `devices/intravenous-bag`                            |
| `devices/medical_sample`                         | `devices/medical-sample`                             |
| `devices/medicine_bottle`                        | `devices/medicine-bottle`                            |
| `devices/medicine_mortar`                        | `devices/medicine-mortar`                            |
| `devices/odontology_implant`                     | `devices/odontology-implant`                         |
| `devices/oxygen_tank`                            | `devices/oxygen-tank`                                |
| `devices/patient_band`                           | `devices/patient-band`                               |
| `devices/patient_band_alt`                       | `devices/patient-band_alt`                           |
| `devices/ppe_santizer_alt`                       | `devices/ppe-santizer_alt`                           |
| `devices/pulse_oximeter`                         | `devices/pulse-oximeter`                             |
| `devices/pulse_oximeter_alt`                     | `devices/pulse-oximeter_alt`                         |
| `devices/surgical_sterilization`                 | `devices/surgical-sterilization`                     |
| `devices/test_tubes`                             | `devices/test-tubes`                                 |
| `devices/thermometer_digital`                    | `devices/thermometer-digital`                        |
| `devices/toilet_paper`                           | `devices/toilet-paper`                               |
| `devices/treated_water`                          | `devices/treated-water`                              |
| `devices/ultrasound_scanner`                     | `devices/ultrasound-scanner`                         |
| `devices/urine_sample`                           | `devices/urine-sample`                               |
| `devices/ventilator_alt`                         | `devices/ventilator-alt`                             |
| `devices/virus_lab_research_syringe`             | `devices/virus-lab_research_syringe`                 |
| `devices/virus_lab_research_test_tube`           | `devices/virus-lab_research_test_tube`               |
| `devices/wheelchair_alt`                         | `devices/wheelchair-alt`                             |

### diagnostics

| 2.x                                                | 3.0                                                |
| -------------------------------------------------- | -------------------------------------------------- |
| `diagnostics/cone_test_on_nets`                    | `diagnostics/cone-test_on_nets`                    |
| `diagnostics/cone_test_on_walls`                   | `diagnostics/cone-test_on_walls`                   |
| `diagnostics/hiv_self_test`                        | `diagnostics/hiv-self_test`                        |
| `diagnostics/intensity_concentration_bioassays`    | `diagnostics/intensity-concentration_bioassays`    |
| `diagnostics/malaria_microscope`                   | `diagnostics/malaria-microscope`                   |
| `diagnostics/malaria_mixed_microscope`             | `diagnostics/malaria-mixed_microscope`             |
| `diagnostics/malaria_pf_microscope`                | `diagnostics/malaria-pf_microscope`                |
| `diagnostics/malaria_pv_microscope`                | `diagnostics/malaria-pv_microscope`                |
| `diagnostics/malaria_testing`                      | `diagnostics/malaria-testing`                      |
| `diagnostics/mosquito_collection`                  | `diagnostics/mosquito-collection`                  |
| `diagnostics/rdt_result`                           | `diagnostics/rdt-result`                           |
| `diagnostics/rdt_result_invalid`                   | `diagnostics/rdt-result_invalid`                   |
| `diagnostics/rdt_result_mixed`                     | `diagnostics/rdt-result_mixed`                     |
| `diagnostics/rdt_result_mixed_invalid`             | `diagnostics/rdt-result_mixed_invalid`             |
| `diagnostics/rdt_result_mixed_invalid_rectangular` | `diagnostics/rdt-result_mixed_invalid_rectangular` |
| `diagnostics/rdt_result_mixed_rectangular`         | `diagnostics/rdt-result_mixed_rectangular`         |
| `diagnostics/rdt_result_neg`                       | `diagnostics/rdt-result_neg`                       |
| `diagnostics/rdt_result_neg_invalid`               | `diagnostics/rdt-result_neg_invalid`               |
| `diagnostics/rdt_result_neg_invalid_rectangular`   | `diagnostics/rdt-result_neg_invalid_rectangular`   |
| `diagnostics/rdt_result_neg_rectangular`           | `diagnostics/rdt-result_neg_rectangular`           |
| `diagnostics/rdt_result_no_test`                   | `diagnostics/rdt-result_no_test`                   |
| `diagnostics/rdt_result_pf`                        | `diagnostics/rdt-result_pf`                        |
| `diagnostics/rdt_result_pf_invalid`                | `diagnostics/rdt-result_pf_invalid`                |
| `diagnostics/rdt_result_pf_invalid_rectangular`    | `diagnostics/rdt-result_pf_invalid_rectangular`    |
| `diagnostics/rdt_result_pf_rectangular`            | `diagnostics/rdt-result_pf_rectangular`            |
| `diagnostics/rdt_result_positive`                  | `diagnostics/rdt-result_positive`                  |
| `diagnostics/rdt_result_pv`                        | `diagnostics/rdt-result_pv`                        |
| `diagnostics/rdt_result_pv_invalid`                | `diagnostics/rdt-result_pv_invalid`                |
| `diagnostics/rdt_result_pv_invalid_rectangular`    | `diagnostics/rdt-result_pv_invalid_rectangular`    |
| `diagnostics/rdt_result_pv_rectangular`            | `diagnostics/rdt-result_pv_rectangular`            |
| `diagnostics/synergist_insecticide_bioassays`      | `diagnostics/synergist-insecticide_bioassays`      |

### emotions

| 2.x                      | 3.0                      |
| ------------------------ | ------------------------ |
| `emotions/loudly_crying` | `emotions/loudly-crying` |
| `emotions/not_ok`        | `emotions/not-ok`        |

### exercise

| 2.x                         | 3.0                         |
| --------------------------- | --------------------------- |
| `exercise/exercise_bicycle` | `exercise/exercise-bicycle` |
| `exercise/walk_supported`   | `exercise/walk-supported`   |

### graphs

| 2.x                         | 3.0                         |
| --------------------------- | --------------------------- |
| `graphs/chart_bar`          | `graphs/chart-bar`          |
| `graphs/chart_bar_stacked`  | `graphs/chart-bar_stacked`  |
| `graphs/chart_line`         | `graphs/chart-line`         |
| `graphs/chart_line_stacked` | `graphs/chart-line_stacked` |
| `graphs/chart_pie`          | `graphs/chart-pie`          |

### medications

| 2.x                                   | 3.0                                   |
| ------------------------------------- | ------------------------------------- |
| `medications/blister_pills_oval_x1`   | `medications/blister-pills_oval_x1`   |
| `medications/blister_pills_oval_x14`  | `medications/blister-pills_oval_x14`  |
| `medications/blister_pills_oval_x16`  | `medications/blister-pills_oval_x16`  |
| `medications/blister_pills_oval_x4`   | `medications/blister-pills_oval_x4`   |
| `medications/blister_pills_round_x1`  | `medications/blister-pills_round_x1`  |
| `medications/blister_pills_round_x14` | `medications/blister-pills_round_x14` |
| `medications/blister_pills_round_x16` | `medications/blister-pills_round_x16` |
| `medications/blister_pills_round_x4`  | `medications/blister-pills_round_x4`  |
| `medications/pill_1`                  | `medications/pill-1`                  |
| `medications/pills_2`                 | `medications/pills-2`                 |
| `medications/pills_3`                 | `medications/pills-3`                 |
| `medications/pills_4`                 | `medications/pills-4`                 |

### nutrition

| 2.x                           | 3.0                           |
| ----------------------------- | ----------------------------- |
| `nutrition/alcohol_cessation` | `nutrition/alcohol-cessation` |
| `nutrition/baby_formula`      | `nutrition/baby-formula`      |
| `nutrition/gluten_free`       | `nutrition/gluten-free`       |
| `nutrition/hot_meal`          | `nutrition/hot-meal`          |
| `nutrition/lactose_free`      | `nutrition/lactose-free`      |
| `nutrition/sodium_free`       | `nutrition/sodium-free`       |
| `nutrition/sugar_alt`         | `nutrition/sugar-alt`         |
| `nutrition/unhealthy_food`    | `nutrition/unhealthy-food`    |

### objects

| 2.x                             | 3.0                             |
| ------------------------------- | ------------------------------- |
| `objects/award_trophy`          | `objects/award-trophy`          |
| `objects/bandage_adhesive`      | `objects/bandage-adhesive`      |
| `objects/credit_card`           | `objects/credit-card`           |
| `objects/desktop_app`           | `objects/desktop-app`           |
| `objects/health_worker_form`    | `objects/health-worker_form`    |
| `objects/i_certificate_paper`   | `objects/i-certificate_paper`   |
| `objects/i_utensils`            | `objects/i-utensils`            |
| `objects/insurance_card`        | `objects/insurance-card`        |
| `objects/money_bag`             | `objects/money-bag`             |
| `objects/prescription_document` | `objects/prescription-document` |
| `objects/rdt_result_out_stock`  | `objects/rdt-result_out_stock`  |
| `objects/register_book`         | `objects/register-book`         |
| `objects/running_water`         | `objects/running-water`         |
| `objects/stock_out`             | `objects/stock-out`             |

### people

| 2.x                                    | 3.0                                    |
| -------------------------------------- | -------------------------------------- |
| `people/agriculture_worker`            | `people/agriculture-worker`            |
| `people/agriculture_worker_alt`        | `people/agriculture-worker_alt`        |
| `people/baby_0203_alt`                 | `people/baby-0203_alt`                 |
| `people/baby_0203m`                    | `people/baby-0203m`                    |
| `people/baby_0306m`                    | `people/baby-0306m`                    |
| `people/baby_female_0203m_alt`         | `people/baby-female_0203m_alt`         |
| `people/baby_female_0306m`             | `people/baby-female_0306m`             |
| `people/baby_female_0609m`             | `people/baby-female_0609m`             |
| `people/baby_male_0203m_alt`           | `people/baby-male_0203m_alt`           |
| `people/baby_male_0306m`               | `people/baby-male_0306m`               |
| `people/baby_male_0609m`               | `people/baby-male_0609m`               |
| `people/boy_0105y`                     | `people/boy-0105y`                     |
| `people/boy_1015y`                     | `people/boy-1015y`                     |
| `people/call_centre`                   | `people/call-centre`                   |
| `people/child_care`                    | `people/child-care`                    |
| `people/child_cognition`               | `people/child-cognition`               |
| `people/child_program`                 | `people/child-program`                 |
| `people/city_worker`                   | `people/city-worker`                   |
| `people/clean_hands`                   | `people/clean-hands`                   |
| `people/community_healthworker`        | `people/community-healthworker`        |
| `people/construction_worker`           | `people/construction-worker`           |
| `people/crisis_response_center_person` | `people/crisis-response_center_person` |
| `people/doctor_female`                 | `people/doctor-female`                 |
| `people/doctor_male`                   | `people/doctor-male`                   |
| `people/domestic_worker`               | `people/domestic-worker`               |
| `people/domestic_worker_alt`           | `people/domestic-worker_alt`           |
| `people/exercise_yoga`                 | `people/exercise-yoga`                 |
| `people/factory_worker`                | `people/factory-worker`                |
| `people/female_and_male`               | `people/female-and_male`               |
| `people/female_sex_worker`             | `people/female-sex_worker`             |
| `people/girl_0105y`                    | `people/girl-0105y`                    |
| `people/girl_1015y`                    | `people/girl-1015y`                    |
| `people/group_discussion_meeting`      | `people/group-discussion_meeting`      |
| `people/group_discussion_meetingx3`    | `people/group-discussion_meetingx3`    |
| `people/health_worker`                 | `people/health-worker`                 |
| `people/i_groups_perspective_crowd`    | `people/i-groups_perspective_crowd`    |
| `people/i_training_class`              | `people/i-training_class`              |
| `people/male_and_female`               | `people/male-and_female`               |
| `people/male_sex_worker`               | `people/male-sex_worker`               |
| `people/mental_disorders`              | `people/mental-disorders`              |
| `people/military_worker`               | `people/military-worker`               |
| `people/miner_worker`                  | `people/miner-worker`                  |
| `people/miner_worker_alt`              | `people/miner-worker_alt`              |
| `people/neuro_surgery`                 | `people/neuro-surgery`                 |
| `people/old_man`                       | `people/old-man`                       |
| `people/old_woman`                     | `people/old-woman`                     |
| `people/pediatric_surgery`             | `people/pediatric-surgery`             |
| `people/plantation_worker`             | `people/plantation-worker`             |
| `people/plantation_worker_alt`         | `people/plantation-worker_alt`         |
| `people/pregnant_0812w`                | `people/pregnant-0812w`                |
| `people/pregnant_2426w`                | `people/pregnant-2426w`                |
| `people/pregnant_32w`                  | `people/pregnant-32w`                  |
| `people/pregnant_3638w`                | `people/pregnant-3638w`                |
| `people/security_worker`               | `people/security-worker`               |
| `people/speech_language_therapy`       | `people/speech-language_therapy`       |
| `people/travel_alt`                    | `people/travel-alt`                    |
| `people/truck_driver`                  | `people/truck-driver`                  |
| `people/wash_hands`                    | `people/wash-hands`                    |
| `people/water_sanitation`              | `people/water-sanitation`              |
| `people/world_care`                    | `people/world-care`                    |
| `people/young_people`                  | `people/young-people`                  |

### places

| 2.x                                  | 3.0                                  |
| ------------------------------------ | ------------------------------------ |
| `places/ambulatory_clinic`           | `places/ambulatory-clinic`           |
| `places/emergency_operations_center` | `places/emergency-operations_center` |
| `places/emergency_post`              | `places/emergency-post`              |
| `places/forest_persons`              | `places/forest-persons`              |
| `places/home_alt`                    | `places/home-alt`                    |
| `places/letrina_alt`                 | `places/letrina-alt`                 |
| `places/market_stall`                | `places/market-stall`                |
| `places/ministry_of_health`          | `places/ministry-of_health`          |
| `places/palm_branches_roof`          | `places/palm-branches_roof`          |
| `places/proper_roof`                 | `places/proper-roof`                 |
| `places/rural_post`                  | `places/rural-post`                  |
| `places/rural_post_alt`              | `places/rural-post_alt`              |
| `places/temple_alt`                  | `places/temple-alt`                  |

### ppe

| 2.x                      | 3.0                      |
| ------------------------ | ------------------------ |
| `ppe/disinfecting_wipes` | `ppe/disinfecting-wipes` |
| `ppe/ppe_apron`          | `ppe/ppe-apron`          |
| `ppe/ppe_face_mask`      | `ppe/ppe-face_mask`      |
| `ppe/ppe_face_shield`    | `ppe/ppe-face_shield`    |
| `ppe/ppe_gloves`         | `ppe/ppe-gloves`         |
| `ppe/ppe_goggles`        | `ppe/ppe-goggles`        |
| `ppe/ppe_gown`           | `ppe/ppe-gown`           |
| `ppe/ppe_mask_n95`       | `ppe/ppe-mask_n95`       |
| `ppe/ppe_sanitizer`      | `ppe/ppe-sanitizer`      |
| `ppe/ppe_suit`           | `ppe/ppe-suit`           |

### shapes

| 2.x                               | 3.0                               |
| --------------------------------- | --------------------------------- |
| `shapes/circle_large`             | `shapes/circle-large`             |
| `shapes/circle_medium`            | `shapes/circle-medium`            |
| `shapes/circle_small`             | `shapes/circle-small`             |
| `shapes/information_campaign`     | `shapes/information-campaign`     |
| `shapes/square_large`             | `shapes/square-large`             |
| `shapes/square_medium`            | `shapes/square-medium`            |
| `shapes/square_small`             | `shapes/square-small`             |
| `shapes/star_large`               | `shapes/star-large`               |
| `shapes/star_medium`              | `shapes/star-medium`              |
| `shapes/star_small`               | `shapes/star-small`               |
| `shapes/triangle_inverted_large`  | `shapes/triangle-inverted_large`  |
| `shapes/triangle_inverted_medium` | `shapes/triangle-inverted_medium` |
| `shapes/triangle_inverted_small`  | `shapes/triangle-inverted_small`  |
| `shapes/triangle_large`           | `shapes/triangle-large`           |
| `shapes/triangle_medium`          | `shapes/triangle-medium`          |
| `shapes/triangle_small`           | `shapes/triangle-small`           |

### specialties

| 2.x                                   | 3.0                                   |
| ------------------------------------- | ------------------------------------- |
| `specialties/accident_and_emergency`  | `specialties/accident-and_emergency`  |
| `specialties/biochemistry_laboratory` | `specialties/biochemistry-laboratory` |
| `specialties/burn_unit`               | `specialties/burn-unit`               |
| `specialties/coronary_care_unit`      | `specialties/coronary-care_unit`      |
| `specialties/critical_care`           | `specialties/critical-care`           |
| `specialties/discharge_lounge`        | `specialties/discharge-lounge`        |
| `specialties/ears_nose_and_throat`    | `specialties/ears-nose_and_throat`    |
| `specialties/finance_dept`            | `specialties/finance-dept`            |
| `specialties/general_surgery`         | `specialties/general-surgery`         |
| `specialties/hematology_laboratory`   | `specialties/hematology-laboratory`   |
| `specialties/human_resoruces`         | `specialties/human-resoruces`         |
| `specialties/intensive_care_unit`     | `specialties/intensive-care_unit`     |
| `specialties/medical_records`         | `specialties/medical-records`         |
| `specialties/outpatient_department`   | `specialties/outpatient-department`   |
| `specialties/pain_managment`          | `specialties/pain-managment`          |
| `specialties/physical_therapy`        | `specialties/physical-therapy`        |
| `specialties/social_work`             | `specialties/social-work`             |
| `specialties/speech_language_therapy` | `specialties/speech-language_therapy` |
| `specialties/vascular_surgery`        | `specialties/vascular-surgery`        |

### symbols

| 2.x                                   | 3.0                                   |
| ------------------------------------- | ------------------------------------- |
| `symbols/FHIR_logo`                   | `symbols/FHIR-logo`                   |
| `symbols/alert_circle`                | `symbols/alert-circle`                |
| `symbols/alert_triangle`              | `symbols/alert-triangle`              |
| `symbols/arm_circumference`           | `symbols/arm-circumference`           |
| `symbols/artificial_intelligence`     | `symbols/artificial-intelligence`     |
| `symbols/assembly_point`              | `symbols/assembly-point`              |
| `symbols/award_ribbon`                | `symbols/award-ribbon`                |
| `symbols/bio_pharma`                  | `symbols/bio-pharma`                  |
| `symbols/body_mass_index`             | `symbols/body-mass_index`             |
| `symbols/breeding_sites`              | `symbols/breeding-sites`              |
| `symbols/cardiogram_e`                | `symbols/cardiogram-e`                |
| `symbols/clinical_f`                  | `symbols/clinical-f`                  |
| `symbols/clinical_fe`                 | `symbols/clinical-fe`                 |
| `symbols/community_meeting`           | `symbols/community-meeting`           |
| `symbols/contact_support`             | `symbols/contact-support`             |
| `symbols/death_alt`                   | `symbols/death-alt`                   |
| `symbols/death_alt2`                  | `symbols/death-alt2`                  |
| `symbols/dhis2_logo`                  | `symbols/dhis2-logo`                  |
| `symbols/eco_care`                    | `symbols/eco-care`                    |
| `symbols/excel_logo`                  | `symbols/excel-logo`                  |
| `symbols/geo_location`                | `symbols/geo-location`                |
| `symbols/guide_dog`                   | `symbols/guide-dog`                   |
| `symbols/head_circumference`          | `symbols/head-circumference`          |
| `symbols/health_alt`                  | `symbols/health-alt`                  |
| `symbols/health_data_security`        | `symbols/health-data_security`        |
| `symbols/health_data_sync`            | `symbols/health-data_sync`            |
| `symbols/health_literacy`             | `symbols/health-literacy`             |
| `symbols/healthcare_it`               | `symbols/healthcare-it`               |
| `symbols/heart_cardiogram`            | `symbols/heart-cardiogram`            |
| `symbols/high_bars`                   | `symbols/high-bars`                   |
| `symbols/high_level`                  | `symbols/high-level`                  |
| `symbols/hospital_symbol`             | `symbols/hospital-symbol`             |
| `symbols/i_documents_accepted`        | `symbols/i-documents_accepted`        |
| `symbols/i_documents_denied`          | `symbols/i-documents_denied`          |
| `symbols/i_exam_multiple_choice`      | `symbols/i-exam_multiple_choice`      |
| `symbols/i_exam_qualification`        | `symbols/i-exam_qualification`        |
| `symbols/i_note_action`               | `symbols/i-note_action`               |
| `symbols/i_schedule_school_date_time` | `symbols/i-schedule_school_date_time` |
| `symbols/icd_10`                      | `symbols/icd-10`                      |
| `symbols/icd_11`                      | `symbols/icd-11`                      |
| `symbols/icd_9`                       | `symbols/icd-9`                       |
| `symbols/insecticide_resistance`      | `symbols/insecticide-resistance`      |
| `symbols/lab_search`                  | `symbols/lab-search`                  |
| `symbols/low_bars`                    | `symbols/low-bars`                    |
| `symbols/low_level`                   | `symbols/low-level`                   |
| `symbols/magic_wand`                  | `symbols/magic-wand`                  |
| `symbols/magnifying_glass`            | `symbols/magnifying-glass`            |
| `symbols/medical_advice`              | `symbols/medical-advice`              |
| `symbols/medical_search`              | `symbols/medical-search`              |
| `symbols/medium_bars`                 | `symbols/medium-bars`                 |
| `symbols/medium_level`                | `symbols/medium-level`                |
| `symbols/network_4g`                  | `symbols/network-4g`                  |
| `symbols/network_5g`                  | `symbols/network-5g`                  |
| `symbols/openMRS_logo`                | `symbols/openMRS-logo`                |
| `symbols/paved_road`                  | `symbols/paved-road`                  |
| `symbols/paved_road_alt`              | `symbols/paved-road_alt`              |
| `symbols/pharmacy_alt`                | `symbols/pharmacy-alt`                |
| `symbols/provider_fst`                | `symbols/provider-fst`                |
| `symbols/qr_code`                     | `symbols/qr-code`                     |
| `symbols/question_circle`             | `symbols/question-circle`             |
| `symbols/question_triangle`           | `symbols/question-triangle`           |
| `symbols/running_water_alt`           | `symbols/running-water_alt`           |
| `symbols/secure_communication`        | `symbols/secure-communication`        |
| `symbols/sexual_reproductive_health`  | `symbols/sexual-reproductive_health`  |
| `symbols/simple_logo`                 | `symbols/simple-logo`                 |
| `symbols/smoking_cessation`           | `symbols/smoking-cessation`           |
| `symbols/smoking_cessation_alt`       | `symbols/smoking-cessation_alt`       |
| `symbols/social_distancing`           | `symbols/social-distancing`           |
| `symbols/social_distancing_alt`       | `symbols/social-distancing_alt`       |
| `symbols/ui_folder`                   | `symbols/ui-folder`                   |
| `symbols/ui_folder_family`            | `symbols/ui-folder_family`            |
| `symbols/ui_menu`                     | `symbols/ui-menu`                     |
| `symbols/ui_menu_grid`                | `symbols/ui-menu_grid`                |
| `symbols/ui_preferences`              | `symbols/ui-preferences`              |
| `symbols/ui_secure`                   | `symbols/ui-secure`                   |
| `symbols/ui_settings`                 | `symbols/ui-settings`                 |
| `symbols/ui_user_profile`             | `symbols/ui-user_profile`             |
| `symbols/ui_zoom`                     | `symbols/ui-zoom`                     |
| `symbols/ui_zoom_in`                  | `symbols/ui-zoom_in`                  |
| `symbols/ui_zoom_out`                 | `symbols/ui-zoom_out`                 |
| `symbols/un_paved_road`               | `symbols/un-paved_road`               |
| `symbols/virus_alt`                   | `symbols/virus-alt`                   |
| `symbols/virus_patient`               | `symbols/virus-patient`               |
| `symbols/virus_research_alt`          | `symbols/virus-research_alt`          |
| `symbols/waist_circumference`         | `symbols/waist-circumference`         |
| `symbols/water_treatment`             | `symbols/water-treatment`             |

### typography

| 2.x                        | 3.0                        |
| -------------------------- | -------------------------- |
| `typography/question_mark` | `typography/question-mark` |

### vehicles

| 2.x                                 | 3.0                                 |
| ----------------------------------- | ----------------------------------- |
| `vehicles/basic_motorcycle`         | `vehicles/basic-motorcycle`         |
| `vehicles/cross_country_motorcycle` | `vehicles/cross-country_motorcycle` |
| `vehicles/mobile_clinic`            | `vehicles/mobile-clinic`            |
| `vehicles/small_plane`              | `vehicles/small-plane`              |
| `vehicles/vespa_motorcycle`         | `vehicles/vespa-motorcycle`         |

### zoonoses

| 2.x                         | 3.0                         |
| --------------------------- | --------------------------- |
| `zoonoses/animal_bat`       | `zoonoses/animal-bat`       |
| `zoonoses/animal_chicken`   | `zoonoses/animal-chicken`   |
| `zoonoses/animal_cow`       | `zoonoses/animal-cow`       |
| `zoonoses/animal_donkey`    | `zoonoses/animal-donkey`    |
| `zoonoses/animal_mosquitos` | `zoonoses/animal-mosquitos` |
| `zoonoses/animal_pig`       | `zoonoses/animal-pig`       |
| `zoonoses/animal_rat`       | `zoonoses/animal-rat`       |
| `zoonoses/animal_snake`     | `zoonoses/animal-snake`     |
| `zoonoses/animal_spider`    | `zoonoses/animal-spider`    |
| `zoonoses/animal_tick`      | `zoonoses/animal-tick`      |
