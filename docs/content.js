/* CUI. Extracted locally from the supplied source pair. */
window.GUIDE = {
  "source": {
    "title": "Maintenance MRO Scheduler Instructor Guide",
    "date": "07 August 2026",
    "version": "4.0",
    "classification": "CUI",
    "category": "CTI",
    "dissemination": "F, DL ONLY",
    "controller": "DAF · AFLCMC/GBM",
    "pdf": "assets/source/guide.pdf",
    "sha256": "89f6c58e4ff7a06e182cc852999e2260b963be3e8a5d6e85b5cecda554029592",
    "pdfSha256": "be265c9cbf7583136de9974b4506961a63dca561cd704b25380b8ebc79e63801"
  },
  "records": [
    {
      "id": "guide-overview",
      "kind": "home",
      "title": "MRO Operations Guide",
      "category": "Guide contents",
      "summary": "Procedures, Oracle references, and practice material from the Scheduler Instructor Guide.",
      "pages": [
        2
      ],
      "sourceTitle": "Table of Contents"
    },
    {
      "id": "search-for-a-service-request",
      "kind": "procedure",
      "title": "Search for a Service Request",
      "sourceTitle": "Search for a Service Request",
      "lesson": 1,
      "category": "Requesting and Inducting Items",
      "topic": "Requesting an Item",
      "sourceStart": 358,
      "sourceEnd": 375,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Find Service Requests",
          "text": "On the Oracle Home page, navigate to (1) MROi Depot Repair > (2) Service Request > (3) Service Requests > (4) Find Service Requests.",
          "html": "On the Oracle Home page, navigate to (1)<strong> MROi Depot Repair</strong> &gt; (2) <strong>Service Request</strong> &gt; (3) <strong>Service Requests</strong> &gt; (4) <strong>Find Service Requests</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-001-p20.webp",
              "page": 20,
              "box": [
                52,
                303.06999999999994,
                411.50100000000003,
                457.15
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 20.",
              "width": 1199,
              "height": 514
            }
          ],
          "page": 20,
          "sourceParagraph": 363
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-002-p20.webp",
              "page": 20,
              "box": [
                52,
                484.72,
                279.211,
                636.46
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 20.",
              "width": 758,
              "height": 506
            }
          ],
          "page": 20,
          "sourceParagraph": 365
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Service Requests",
          "text": "The ‘Find Service Requests’ form displays. Enter the (1) Number and click the (2) Search button.",
          "html": "The ‘Find Service Requests’ form displays. Enter the (1) <strong>Number</strong> and click the (2) <strong>Search</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-003-p21.webp",
              "page": 21,
              "box": [
                52,
                174.71000000000004,
                370.331,
                398.24
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 21.",
              "width": 1062,
              "height": 746
            }
          ],
          "page": 21,
          "sourceParagraph": 367
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "The Service Request displays",
          "text": "The Service Request displays. Select the + icon at the top of the page to maximize the header.",
          "html": "The Service Request displays. Select the <strong>+</strong> icon at the top of the page to maximize the header.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-004-p21.webp",
              "page": 21,
              "box": [
                52,
                425.81,
                374.781,
                638.45
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 21.",
              "width": 1076,
              "height": 709
            }
          ],
          "page": 21,
          "sourceParagraph": 369
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "On the expanded header page, select the DFF.",
          "text": "On the expanded header page, select the DFF.",
          "html": "On the expanded header page, select the <strong>DFF</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-005-p22.webp",
              "page": 22,
              "box": [
                52,
                163.41000000000008,
                413.641,
                391.23
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 22.",
              "width": 1206,
              "height": 760
            }
          ],
          "page": 22,
          "sourceParagraph": 371
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Additional Information",
          "text": "The ‘Additional Information’ form displays.",
          "html": "The ‘Additional Information’ form displays.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-006-p22.webp",
              "page": 22,
              "box": [
                52,
                407.5,
                411.11100000000005,
                599.61
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 22.",
              "width": 1198,
              "height": 641
            }
          ],
          "page": 22,
          "sourceParagraph": 373
        }
      ],
      "prerequisites": [
        "Customers and items exist in database."
      ],
      "purpose": "The steps below illustrate how to search for and view an SR.",
      "role": "MROi Planner and MROi Workloader",
      "mvp": "",
      "pages": [
        20,
        21,
        22
      ],
      "part": null,
      "summary": "Search for and view an SR.",
      "related": [
        "create-service-order-with-or-without-end-item-type-of-engine",
        "view-service-order"
      ]
    },
    {
      "id": "create-service-order-with-or-without-end-item-type-of-engine",
      "kind": "procedure",
      "title": "Create Service Order with or without End-Item Type of Engine",
      "sourceTitle": "Create Service Order with or without End-Item Type of Engine",
      "lesson": 1,
      "category": "Requesting and Inducting Items",
      "topic": "Requesting an Item",
      "sourceStart": 376,
      "sourceEnd": 397,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Service Order",
          "text": "On the Oracle Home page, navigate to (1) MROi Depot Repair > (2) Depot Repair > (3) Service Order.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Depot Repair</strong> &gt; (2) <strong>Depot Repair</strong> &gt; (3) <strong>Service Order</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-007-p23.webp",
              "page": 23,
              "box": [
                52,
                253.99,
                413.171,
                420.18
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 23.",
              "width": 1204,
              "height": 554
            }
          ],
          "page": 23,
          "sourceParagraph": 381
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-008-p23.webp",
              "page": 23,
              "box": [
                52,
                447.78999999999996,
                286.851,
                604.53
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 23.",
              "width": 783,
              "height": 523
            }
          ],
          "page": 23,
          "sourceParagraph": 383
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Service Requests",
          "text": "The ‘Find Service Requests’ form displays. Enter the (1) Request Number, then click the (2) Find button. The Results section expands with the queried request. Click the (3) OK button.",
          "html": "The ‘Find Service Requests’ form displays. Enter the (1) <strong>Request Number</strong>, then click the (2) <strong>Find</strong> button. The Results section expands with the queried request. Click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-009-p24.webp",
              "page": 24,
              "box": [
                52,
                186.01999999999998,
                404.171,
                464.45
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 24.",
              "width": 1174,
              "height": 929
            }
          ],
          "page": 24,
          "sourceParagraph": 385
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Service Orders",
          "text": "The ‘Service Orders’ form displays. To create a new SO, from the toolbar, click the Add Row icon to add a new line in the Service Order Information section.",
          "html": "The ‘Service Orders’ form displays. To create a new SO, from the toolbar, click the <strong>Add Row</strong> icon to add a new line in the Service Order Information section.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-010-p25.webp",
              "page": 25,
              "box": [
                52,
                174.72000000000003,
                320.821,
                361.78
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 25.",
              "width": 897,
              "height": 624
            }
          ],
          "page": 25,
          "sourceParagraph": 386
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Step 5",
          "text": "On the details tab, enter the (1) PSSD, (2) Service Description, and (3) Priority. Click in the SO (4) DFF.",
          "html": "On the details tab, enter the (1) <strong>PSSD</strong>, (2) <strong>Service Description</strong>, and (3) <strong>Priority</strong>. Click in the SO (4) <strong>DFF</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-011-p25.webp",
              "page": 25,
              "box": [
                52,
                389.35,
                412.951,
                641.55
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 25.",
              "width": 1204,
              "height": 841
            }
          ],
          "page": 25,
          "sourceParagraph": 388
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Repair Orders",
          "text": "The ‘Repair Orders’ pop-up window appears. Enter (1) % in the Interface Partner field and press the enter key. The ‘Interface Partner’ pop-up window appears. Select (2) D035K and click the (3) OK button.",
          "html": "The ‘Repair Orders’ pop-up window appears. Enter (1) <strong>%</strong> in the Interface Partner field and press the enter key. The ‘Interface Partner’ pop-up window appears. Select (2) <strong>D035K </strong>and click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-012-p26.webp",
              "page": 26,
              "box": [
                52,
                186.01,
                415.481,
                440.73
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 26.",
              "width": 1212,
              "height": 850
            }
          ],
          "page": 26,
          "sourceParagraph": 390
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "Repair Orders",
          "text": "The ‘Repair Orders’ pop-up window refreshes with additional fields available based on the selected Interface Partner. Enter the (1) Ownership Purpose Code, the (2) Delivery Priority Code, and the (3) Location. Click the (4) OK button.",
          "html": "The ‘Repair Orders’ pop-up window refreshes with additional fields available based on the selected Interface Partner. Enter the (1) <strong>Ownership Purpose Code</strong>, the (2) <strong>Delivery Priority Code</strong>, and the (3) <strong>Location</strong>. Click the (4) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-013-p27.webp",
              "page": 27,
              "box": [
                52,
                186.01999999999998,
                412.87100000000004,
                439.18
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 27.",
              "width": 1203,
              "height": 844
            }
          ],
          "page": 27,
          "sourceParagraph": 392
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Service Orders",
          "text": "The ‘Service Orders’ form refreshes with a system generated SO Number. Notice that the fourth to the last position of the SO number is an E for an End-Item type of engine. Click on the (1) Save icon. The ‘Create Installed Base Instance’ pop-up window appears. Click the (2) Save As Is button then click the (3) [X] to close the form.",
          "html": "The ‘Service Orders’ form refreshes with a system generated SO Number. Notice that the fourth to the last position of the SO number is an E for an End-Item type of engine. Click on the (1) <strong>Save</strong> icon. The ‘Create Installed Base Instance’ pop-up window appears. Click the (2) <strong>Save As Is</strong> button then click the (3) <strong>[X]</strong> to close the form.",
          "details": [
            {
              "text": "Note: If updates are required, it can be accomplished prior to closing the form and make note to save any changes.",
              "html": "<em><strong>Note:</strong></em><em> If updates are required, it can be accomplished prior to closing the form and make note to save any changes.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-014-p28.webp",
              "page": 28,
              "box": [
                52,
                225.99,
                413.12100000000004,
                481.28
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 28.",
              "width": 1204,
              "height": 851
            }
          ],
          "page": 28,
          "sourceParagraph": 394
        }
      ],
      "prerequisites": [
        "An SR exists for the associated item."
      ],
      "purpose": "The steps below illustrate how to create an SO.",
      "role": "MROi Scheduler",
      "mvp": "4.1",
      "pages": [
        23,
        24,
        25,
        26,
        27,
        28
      ],
      "part": null,
      "summary": "Create an SO.",
      "related": [
        "view-service-order",
        "end-item-induction-management-of-items-subject-to-repair-mistr"
      ]
    },
    {
      "id": "view-service-order",
      "kind": "procedure",
      "title": "View Service Order",
      "sourceTitle": "View Service Order",
      "lesson": 1,
      "category": "Requesting and Inducting Items",
      "topic": "Requesting an Item",
      "sourceStart": 398,
      "sourceEnd": 415,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Service Order",
          "text": "On the Oracle Home page, navigate to (1) MROi Depot Repair > (2) Depot Repair > (3) Service Order.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Depot Repair </strong>&gt; (2) <strong>Depot Repair</strong> &gt; (3) <strong>Service Order</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-015-p29.webp",
              "page": 29,
              "box": [
                52,
                255.5,
                404.101,
                454.96
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 29.",
              "width": 1174,
              "height": 665
            }
          ],
          "page": 29,
          "sourceParagraph": 403
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-016-p29.webp",
              "page": 29,
              "box": [
                52,
                482.53999999999996,
                295.541,
                644
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 29.",
              "width": 812,
              "height": 539
            }
          ],
          "page": 29,
          "sourceParagraph": 405
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Service Requests",
          "text": "The ‘Find Service Requests’ form displays. Enter (either by scanning the DD Form 1348-1A End-item document number (EIDN) barcode or manually typing) the (1) Service Order and click the (2) Find button. Click the (3) OK button",
          "html": "The ‘Find Service Requests’ form displays. Enter (either by scanning the DD Form 1348-1A End-item document number (EIDN) barcode or manually typing) the (1) <strong>Service Order</strong> and click the (2) <strong>Find</strong> button. Click the (3) <strong>OK</strong> button",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-017-p30.webp",
              "page": 30,
              "box": [
                52,
                186.01999999999998,
                314.481,
                396.49
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 30.",
              "width": 875,
              "height": 702
            }
          ],
          "page": 30,
          "sourceParagraph": 407
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Service Orders",
          "text": "The ‘Service Orders’ form appears. Refresh the SO by pressing Ctrl + F11 on the keyboard.",
          "html": "The ‘Service Orders’ form appears. Refresh the SO by pressing Ctrl + F11 on the keyboard.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-018-p30.webp",
              "page": 30,
              "box": [
                52,
                424.21000000000004,
                319.031,
                613.59
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 30.",
              "width": 891,
              "height": 632
            }
          ],
          "page": 30,
          "sourceParagraph": 409
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Service Orders",
          "text": "The ‘Service Orders’ form displays. On the Details tab, click in the (1) DFF. The ‘Repair Orders’ pop-up window appears. Review the data and click the (2) [X] to close the form. On the ‘Service Orders’ form, click on the (3) Logistics tab.",
          "html": "The ‘Service Orders’ form displays. On the Details tab, click in the (1) <strong>DFF</strong>. The ‘Repair Orders’ pop-up window appears. Review the data and click the (2) <strong>[X]</strong> to close the form. On the ‘Service Orders’ form, click on the (3) <strong>Logistics</strong> tab. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-019-p31.webp",
              "page": 31,
              "box": [
                52,
                186.01999999999998,
                409.351,
                408.14
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 31.",
              "width": 1192,
              "height": 741
            }
          ],
          "page": 31,
          "sourceParagraph": 411
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "The Logistics tab opens to view the SO logistic details.",
          "text": "The Logistics tab opens to view the SO logistic details.",
          "html": "The Logistics tab opens to view the SO logistic details.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-020-p31.webp",
              "page": 31,
              "box": [
                52,
                424.40999999999997,
                336.05100000000004,
                623.46
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 31.",
              "width": 947,
              "height": 664
            }
          ],
          "page": 31,
          "sourceParagraph": 413
        }
      ],
      "prerequisites": [
        "An SR exists for the associated item."
      ],
      "purpose": "The steps below illustrate how to view an SO.",
      "role": "MROi Scheduler",
      "mvp": "4.1",
      "pages": [
        29,
        30,
        31
      ],
      "part": null,
      "summary": "View an SO.",
      "related": [
        "end-item-induction-management-of-items-subject-to-repair-mistr",
        "end-item-induction-non-mistr"
      ]
    },
    {
      "id": "end-item-induction-management-of-items-subject-to-repair-mistr",
      "kind": "procedure",
      "title": "End-Item Induction (Management of Items Subject to Repair (MISTR))",
      "sourceTitle": "End-Item Induction (Management of Items Subject to Repair (MISTR))",
      "lesson": 1,
      "category": "Requesting and Inducting Items",
      "topic": "Requesting an Item",
      "sourceStart": 416,
      "sourceEnd": 478,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Service Order",
          "text": "A D7M transaction is received from D035K, where a newly created SO is provided. On the Oracle Home page, navigate to (1) MROi Depot Repair > (2) Depot Repair > (3) Service Order.",
          "html": "A D7M transaction is received from D035K, where a newly created SO is provided. On the Oracle Home page, navigate to (1)<strong> MROi Depot Repair</strong> &gt; (2) <strong>Depot Repair</strong> &gt; (3) <strong>Service Order</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-021-p32.webp",
              "page": 32,
              "box": [
                52,
                348.95,
                374.951,
                572.8199999999999
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 32.",
              "width": 1077,
              "height": 747
            }
          ],
          "page": 32,
          "sourceParagraph": 422
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-022-p33.webp",
              "page": 33,
              "box": [
                52,
                174.72000000000003,
                277.101,
                325.07
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 33.",
              "width": 751,
              "height": 502
            }
          ],
          "page": 33,
          "sourceParagraph": 424
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Service Requests",
          "text": "The ‘Find Service Requests’ form appears. Enter (either by scanning the DD Form 1348-1A EIDN barcode or manually typing) the (1) Service Order and then click the (2) Find button. The Results section expands with queried request. Click the (3) OK button.",
          "html": "The ‘Find Service Requests’ form appears. Enter (either by scanning the DD Form 1348-1A EIDN barcode or manually typing) the (1) <strong>Service Order </strong>and then click the (2) <strong>Find</strong> button. The Results section expands with queried request. Click the (3) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: The SO number is the EIDN that is received from D035K. Each SO number is unique and can only be used once for inducting an End-Item MISTR.",
              "html": "<em><strong>Note:</strong></em><em> The </em><em>SO</em><em> number is the EIDN that is received from D035K. Each </em><em>SO</em><em> number is unique and can only be used once for inducting an End-Item MISTR. </em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-023-p33.webp",
              "page": 33,
              "box": [
                52,
                403.93,
                308.361,
                631.9
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 33.",
              "width": 855,
              "height": 760
            }
          ],
          "page": 33,
          "sourceParagraph": 426
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Service Orders",
          "text": "On the ‘Service Orders’ form, click on the (1) Service Order DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Review the information, then click the (2) [X] to close the ‘Repair Orders’ window.",
          "html": "On the ‘Service Orders’ form, click on the (1) <strong>Service Order </strong>DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Review the information, then click the (2) <strong>[X]</strong> to close the ‘Repair Orders’ window<em>.</em>",
          "details": [
            {
              "text": "Note: For informational awareness, but not systematically required, Schedulers may confirm that the following automated values are populated: Interface Transaction Type: D7MIC (D7M Inbound Create) and Interface Transaction Status: S (Success).",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> For informational awareness</em><em>,</em><em> but not systematically required, Schedulers may confirm</em><em> that the following </em><em>automated </em><em>values are populated: Interface Transaction Type: D7MIC (D7M Inbound Create) and Interface Transaction Status: S (Success).</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-024-p34.webp",
              "page": 34,
              "box": [
                52,
                225.99,
                380.99100000000004,
                445.65
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 34.",
              "width": 1097,
              "height": 733
            }
          ],
          "page": 34,
          "sourceParagraph": 429
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Repair Order Product Transactions",
          "text": "Click on the (1) Logistics tab. On the return line, scroll to the right and click within the (2) Repair Order Product Transactions DFF. The ‘Repair Order Product Transactions’ pop-up window appears. Confirm that the advice code has a value of RA, then click the (3) OK button.",
          "html": "Click on the (1) <strong>Logistics</strong> tab. On the return line, scroll to the right and click within the (2) <strong>Repair Order Product Transactions </strong>DFF. The ‘Repair Order Product Transactions’ pop-up window appears. Confirm that the advice code has a value of RA, then click the (3) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: RA - Receipt Acknowledgment.",
              "html": "<em><strong>Note: </strong></em><em>RA</em><em> </em><em>- Receipt Acknowledgment.</em>",
              "type": "note"
            },
            {
              "text": "Tip: If an Advice code is not RA, the interface validation logic will prevent an SO from being created.",
              "html": "<em><strong>Tip:</strong></em><em> If an Advice code is not RA, the interface validation logic will prevent an SO from being created.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-025-p35.webp",
              "page": 35,
              "box": [
                52,
                243.36,
                410.601,
                482.67
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 35.",
              "width": 1196,
              "height": 798
            }
          ],
          "page": 35,
          "sourceParagraph": 432
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Step 6",
          "text": "On the return line, select the (1) Process Trans check box, then select the (2) Automate order processing steps through check box. Select the (3) Book Order radio button, then click the (4) Process button to book the line.",
          "html": "On the return line, select the (1) <strong>Process Trans</strong> check box, then select the (2) <strong>Automate order processing steps through </strong>check box. Select the (3) <strong>Book Order </strong>radio button, then click the (4) <strong>Process</strong> button to book the line.",
          "details": [
            {
              "text": "Notes: The return line is the captured information related to the end item induction. The status of the return line will always be entered for an end item induction (MISTR).",
              "html": "<em><strong>Note</strong></em><em><strong>s</strong></em><em><strong>: </strong></em><em>The return line is the captured information related to the end item induction. The status of the return line will always be entered for an end item induction (MISTR).</em>",
              "type": "paragraph"
            },
            {
              "text": "The ship line is the captured information related to the turn in of the end-item.",
              "html": "<em>The ship line is the captured information related to the turn in of the end</em><em>-</em><em>item.</em>",
              "type": "paragraph"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-026-p36.webp",
              "page": 36,
              "box": [
                52,
                232.05999999999995,
                414.81100000000004,
                352.53
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 36.",
              "width": 1210,
              "height": 402
            }
          ],
          "page": 36,
          "sourceParagraph": 436
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "The status of the return line should update to Booked",
          "text": "The status of the return line should update to Booked. On the return line, select the Process Trans check box.",
          "html": "The status of the return line should update to Booked. On the return line, select the <strong>Process Trans</strong> check box.",
          "details": [
            {
              "text": "Notes: Click the Refresh Logistics button to refresh the page if the status does not update immediately.",
              "html": "<em><strong>Note</strong></em><em><strong>s</strong></em><strong>:</strong> <em>Click the Refresh Logistics button to refresh the page if </em><em>the </em><em>status does not update immediately.</em>",
              "type": "paragraph"
            },
            {
              "text": "When a return line is in ‘Booked’ status, it means the item is ready to be worked on/received, which creates a ‘Order Num’/sales order. The status is a prerequisite to send out D7 interface.",
              "html": "<em>When a return line is in ‘Booked’ status, it means the item is ready to be worked on/received, which creates a ‘Order Num’/sales order. The status is a prerequisite to send out D7 interface. </em>",
              "type": "paragraph"
            },
            {
              "text": "When the ship line is in ‘Booked’ status, it creates the same ‘Order Num’/sales order as the return line but has a different ‘Line Num’, which means the Scheduler has started the process of shipping the item. The status is a prerequisite to send out D6 interface.",
              "html": "<em>When </em><em>the </em><em>ship line is in ‘Booked’ status, it creates the same ‘Order Num’/sales order as the return line but has a different ‘Line Num’, which means the Scheduler has started the process of shipping the item. The status is a prerequisite to send out D6 interface.</em>",
              "type": "paragraph"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-027-p36.webp",
              "page": 36,
              "box": [
                52,
                488.95,
                414.81100000000004,
                604.45
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 36.",
              "width": 1210,
              "height": 386
            }
          ],
          "page": 36,
          "sourceParagraph": 440
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "From the Actions drop-down, select (1) Receive, then click the (2) Go button.",
          "text": "From the Actions drop-down, select (1) Receive, then click the (2) Go button.",
          "html": "From the Actions drop-down, select (1) <strong>Receive</strong>, then click the (2) <strong>Go</strong> button.",
          "details": [
            {
              "text": "Note: Receive - Is when the Scheduler begins the process of receiving the end item into inventory which creates a receipt in MRO.",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> Receive - Is when the Scheduler begins the process of receiving the end item into inventory which creates a receipt in MRO</em><em>.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-028-p37.webp",
              "page": 37,
              "box": [
                52,
                192.091,
                414.81100000000004,
                281.9
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 37.",
              "width": 1210,
              "height": 300
            }
          ],
          "page": 37,
          "sourceParagraph": 446
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "Find Expected Receipts",
          "text": "The ‘Find Expected Receipts’ form displays. Click the Find button.",
          "html": "The ‘Find Expected Receipts’ form displays. Click the <strong>Find </strong>button. ",
          "details": [
            {
              "text": "Note: The RMA Num is the same as the Order Num (shown in Step 8) on the Logistics Return Line in the SO.",
              "html": "<em><strong>Not</strong></em><em><strong>e</strong></em><em><strong>:</strong></em><em> The RMA Num is the same as the Order </em><em>N</em><em>um (shown in Step 8) on the Logistics Return Line in the </em><em>SO</em><em>.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-029-p37.webp",
              "page": 37,
              "box": [
                52,
                327.0,
                379.781,
                602.5
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 37.",
              "width": 1093,
              "height": 919
            }
          ],
          "page": 37,
          "sourceParagraph": 449
        },
        {
          "number": 10,
          "sourceNumber": 10,
          "title": "Receipts",
          "text": "The ‘Receipts’ form displays. Select the (1) check box next to the line being received then scroll to the right of the form to the Subinventory field. Click on the (2) Subinventory LOV.",
          "html": "The ‘Receipts’ form displays. Select the (1) <strong>check box</strong> next to the line being received then scroll to the right of the form to the Subinventory field. Click on the (2) <strong>Subinventory </strong>LOV.",
          "details": [
            {
              "text": "Note: The ‘Receipt Header’ form displays in front of the ‘Receipts’ form; move the ‘Receipt Header’ form to access the ‘Receipts’ form.",
              "html": "<em><strong>Note: </strong></em><em>The </em><em>‘Receipt Header’ form displays in front of the ‘Receipts’ form; move the ‘Receipt Header’ form to access the ‘Receipts’ form.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-030-p38.webp",
              "page": 38,
              "box": [
                52,
                214.69000000000005,
                413.05999999999995,
                362.14
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 38.",
              "width": 1204,
              "height": 492
            }
          ],
          "page": 38,
          "sourceParagraph": 452
        },
        {
          "number": 11,
          "sourceNumber": 11,
          "title": "Subinventories",
          "text": "The ‘Subinventories’ pop-up window appears. Select the applicable (1) Subinventory, then click the (2) OK button.",
          "html": "The ‘Subinventories’ pop-up window appears. Select the applicable (1) <strong>Subinventory</strong>, then click the (2) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-031-p38.webp",
              "page": 38,
              "box": [
                52,
                390.28,
                399.261,
                613.88
              ],
              "alt": "Annotated Oracle screenshot for source step 11, guide page 38.",
              "width": 1158,
              "height": 746
            }
          ],
          "page": 38,
          "sourceParagraph": 455
        },
        {
          "number": 12,
          "sourceNumber": 12,
          "title": "Stock Locators",
          "text": "Click on the (1) Locator LOV. The ‘Stock Locators’ pop-up window appears. Click the (2) Combinations button.",
          "html": "Click on the (1) <strong>Locator</strong> LOV. The ‘Stock Locators’ pop-up window appears. Click the (2) <strong>Combinations</strong> button.",
          "details": [
            {
              "text": "Note: Stock Locator - Exact location where item sits in inventory.",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> Stock Locator </em><em>-</em><em> Exact location where item sits in inventory.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-032-p39.webp",
              "page": 39,
              "box": [
                52,
                192.08000000000004,
                414.81100000000004,
                407.68
              ],
              "alt": "Annotated Oracle screenshot for source step 12, guide page 39.",
              "width": 1210,
              "height": 719
            }
          ],
          "page": 39,
          "sourceParagraph": 457
        },
        {
          "number": 13,
          "sourceNumber": 13,
          "title": "Enter Reduction Criteria for Long-List",
          "text": "The ‘Enter Reduction Criteria for Long-List’ pop-up window appears with all the fields as blue. Enter (1) % into all the fields. Then click the (2) OK button.",
          "html": "The ‘Enter Reduction Criteria for Long-List’ pop-up window appears with all the fields as blue. Enter (1) <strong>%</strong> into all the fields. Then click the (2) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: If the selected receipt already has a value in the Project and Task fields, the Combinations will result in an error stating: “No entries found for the LOV.” Select the Cancel button on the combination window below, then enter the Building, Area, Sub Area, then click the OK button.",
              "html": "<em><strong>Note:</strong></em> <em>If</em><em> the selected receipt already has a value in the Project and Task fields,</em><em> the Combinations </em><em>will result</em><em> in an error stating</em><em>:</em><em> “No</em><em> entries found for</em><em> </em><em>the LOV.”</em><em> </em><em>Select the C</em><em>ancel</em><em> button on</em><em> the combination window below</em><em>, then</em><em> enter the Building, Area, Sub Area, then click the OK button.</em>",
              "type": "note"
            },
            {
              "text": "Tip: The % wildcard can be used in the search tool to simulate any other character(s) in a string.",
              "html": "<em><strong>Tip:</strong></em><em> The % wildcard can be used in the search tool to simulate any other character(s) in a string</em>.",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-033-p40.webp",
              "page": 40,
              "box": [
                52,
                254.70000000000005,
                414.81100000000004,
                415.81
              ],
              "alt": "Annotated Oracle screenshot for source step 13, guide page 40.",
              "width": 1210,
              "height": 538
            }
          ],
          "page": 40,
          "sourceParagraph": 459
        },
        {
          "number": 14,
          "sourceNumber": 14,
          "title": "Stock Locators",
          "text": "The ‘Stock Locators’ window refreshes with the results. Click on the applicable (1) Stock Locator, then click the (2) OK button.",
          "html": "The ‘Stock Locators’ window refreshes with the results. Click on the applicable (1) <strong>Stock Locator</strong>, then click the (2) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-034-p40.webp",
              "page": 40,
              "box": [
                52,
                443.95000000000005,
                414.81100000000004,
                604.15
              ],
              "alt": "Annotated Oracle screenshot for source step 14, guide page 40.",
              "width": 1210,
              "height": 534
            }
          ],
          "page": 40,
          "sourceParagraph": 463
        },
        {
          "number": 15,
          "sourceNumber": 15,
          "title": "Receipts",
          "text": "On the ‘Receipts’ form, click the Lot - Serial button.",
          "html": "On the ‘Receipts’ form, click the <strong>Lot - Serial </strong>button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-035-p41.webp",
              "page": 41,
              "box": [
                52,
                163.40999999999997,
                362.901,
                364.93
              ],
              "alt": "Annotated Oracle screenshot for source step 15, guide page 41.",
              "width": 1037,
              "height": 672
            }
          ],
          "page": 41,
          "sourceParagraph": 465
        },
        {
          "number": 16,
          "sourceNumber": 16,
          "title": "Serial Entry",
          "text": "The ‘Serial Entry’ form displays. Enter the (1) Start Serial Number, then press the tab key on the keyboard. The serial number will populate into the End Serial Number box. Click the (2) Done button. Click on the (3) Save icon.",
          "html": "The ‘Serial Entry’ form displays. Enter the (1) <strong>Start</strong> <strong>Serial Number, </strong>then press the tab key on the keyboard. The serial number will populate into the End Serial Number box. Click the (2) <strong>Done </strong>button. Click on the (3) <strong>Save</strong> icon.",
          "details": [
            {
              "text": "Tip: The serial number should be found on the item’s box.",
              "html": "<em><strong>Tip</strong></em><strong>:</strong> <em>The serial number should be found on the item’s box.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-036-p41.webp",
              "page": 41,
              "box": [
                52,
                421.18,
                296.951,
                618.75
              ],
              "alt": "Annotated Oracle screenshot for source step 16, guide page 41.",
              "width": 817,
              "height": 659
            }
          ],
          "page": 41,
          "sourceParagraph": 467
        },
        {
          "number": 17,
          "sourceNumber": 17,
          "title": "Service Orders",
          "text": "Return to the ‘Service Orders’ form. Click on the Logistics tab and view the return line to confirm that the status reflects: Received.",
          "html": "Return to the ‘Service Orders’ form. Click on the <strong>Logistics</strong> tab and view the return line to confirm that the status reflects: Received.<strong> </strong>",
          "details": [
            {
              "text": "Note: Click the Refresh Logistics button if the status has not updated.",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> Click the Refresh Logistics button if the status has not updated.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-037-p42.webp",
              "page": 42,
              "box": [
                52,
                192.09000000000003,
                330.791,
                378.54
              ],
              "alt": "Annotated Oracle screenshot for source step 17, guide page 42.",
              "width": 930,
              "height": 622
            }
          ],
          "page": 42,
          "sourceParagraph": 470
        },
        {
          "number": 18,
          "sourceNumber": 18,
          "title": "Note",
          "text": "After the item is received, from the menu, select (1) Actions > (2) End Item Receipt Acknowledgement (D7M RA-CL). A ‘Note’ pop-up window appears, stating the concurrent request has been launched to update the service order. Click the (3) OK button.",
          "html": "After the item is received, from the menu, select (1) <strong>Actions</strong> &gt; (2) <strong>End Item Receipt Acknowledgement (D7M RA-CL). </strong>A ‘Note’ pop-up window appears, stating the concurrent request has been launched to update the service order. Click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-038-p42.webp",
              "page": 42,
              "box": [
                52,
                428.98,
                356.511,
                644
              ],
              "alt": "Annotated Oracle screenshot for source step 18, guide page 42.",
              "width": 1016,
              "height": 717
            }
          ],
          "page": 42,
          "sourceParagraph": 473
        },
        {
          "number": 19,
          "sourceNumber": 19,
          "title": "Repair Orders",
          "text": "Refresh the SO by pressing Ctrl + F11 on the keyboard. Click on the (1) Service Order DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Review the information, then click the (2) [X] to close the ‘Repair Orders’ window.",
          "html": "Refresh the SO by pressing Ctrl + F11 on the keyboard. Click on the (1) <strong>Service Order </strong>DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’<strong> </strong>pop-up window appears. Review the information, then click the (2) <strong>[X]</strong> to close the ‘Repair Orders’ window<em>.</em>",
          "details": [
            {
              "text": "Note: For informational awareness, but not systematically required, Schedulers may confirm that the following automated values are populated: Interface Transaction Type: D7MO (D7M Outbound) and Interface Transaction Status: S (Success).",
              "html": "<em><strong>Note</strong></em><em>: For informational awareness</em><em>,</em><em> but not systematically required, Schedulers may confirm that the following automated values are populated</em>: <em>Interface Transaction Type: D7MO (D7M Outbound) and Interface Transaction Status: S (Success).</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-039-p43.webp",
              "page": 43,
              "box": [
                52,
                237.28999999999996,
                385.55100000000004,
                460.06
              ],
              "alt": "Annotated Oracle screenshot for source step 19, guide page 43.",
              "width": 1112,
              "height": 743
            }
          ],
          "page": 43,
          "sourceParagraph": 475
        }
      ],
      "prerequisites": [
        "An SR is created with D035K as the customer and an SO is provided by D035K."
      ],
      "purpose": "Schedulers will be able to view a newly created SO from an inbound express driven induction (D7M inbound interface) sent by D035K. A receipt is created against the induction line and the Receipt Acknowledgement Outbound Interface (D7MO) is kicked off, setting the Advice Code to RA. MRO will retain the Action Suffix Code as Clear (CL) on the SO’s logistic line DFF.",
      "role": "MROi Scheduler",
      "mvp": "4.1",
      "pages": [
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43
      ],
      "part": null,
      "summary": "Schedulers will be able to view a newly created SO from an inbound express driven induction (D7M inbound interface) sent by D035K. A receipt is created against the induction line and the Receipt Acknowledgement Outbound Interface (D7MO) is kicked off, setting the Advice Code to RA. MRO will retain the Action Suffix Code as Clear (CL) on the SO’s logistic line DFF.",
      "related": [
        "end-item-induction-non-mistr",
        "send-d7-wash-post-outbound-transaction-to-d035k-for-engine-item-type"
      ]
    },
    {
      "id": "end-item-induction-non-mistr",
      "kind": "procedure",
      "title": "End-Item Induction (Non-MISTR)",
      "sourceTitle": "End-Item Induction (Non-MISTR)",
      "lesson": 1,
      "category": "Requesting and Inducting Items",
      "topic": "Requesting an Item",
      "sourceStart": 479,
      "sourceEnd": 532,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Service Order",
          "text": "On the Oracle Home page, navigate to (1) MROi Depot Repair > (2) Depot Repair > (3) Service Order.",
          "html": "On the Oracle Home page, navigate to (1)<strong> MROi Depot Repair</strong> &gt; (2) <strong>Depot Repair</strong> &gt; (3) <strong>Service Order</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-040-p44.webp",
              "page": 44,
              "box": [
                52,
                302.22999999999996,
                375.671,
                526.5899999999999
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 44.",
              "width": 1079,
              "height": 748
            }
          ],
          "page": 44,
          "sourceParagraph": 483
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-041-p45.webp",
              "page": 45,
              "box": [
                52,
                173.19000000000005,
                247.96099999999998,
                304.47
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 45.",
              "width": 654,
              "height": 438
            }
          ],
          "page": 45,
          "sourceParagraph": 485
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Service Requests",
          "text": "The ‘Find Service Requests’ form displays. Enter (either by scanning the DD Form 1348-1A EIDN barcode or manually typing) the (1) Service Order and then click the (2) Find button. The Results section expands with queried request. Click the (3) OK button.",
          "html": "The ‘Find Service Requests’ form displays. Enter (either by scanning the DD Form 1348-1A EIDN barcode or manually typing) the (1) <strong>Service Order </strong>and then click the (2) <strong>Find</strong> button. The Results section expands with queried request. Click the (3) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: You will be unable to perform this job aid (JA) on SOs that were previously used for End-Item Induction (Non-MISTR). The SO number is the EIDN that is received from D035K.",
              "html": "<em><strong>Note:</strong></em><em> You will be unable to perform this</em><em> job aid (</em><em>JA</em><em>)</em><em> on </em><em>SOs that were previously used for End-Item Induction (Non-MISTR). The SO number is the EIDN that is received from D035K. </em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-042-p45.webp",
              "page": 45,
              "box": [
                52,
                390.07,
                327.911,
                627.6800000000001
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 45.",
              "width": 920,
              "height": 793
            }
          ],
          "page": 45,
          "sourceParagraph": 487
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Service Orders",
          "text": "The ‘Service Orders’ form displays. In the Service Order Information section, select the applicable (1) SO Num then click on the (2) Logistics tab. On the Return line, scroll to the right and click within the (3) Repair Order Product Transactions DFF. The ‘Repair Orders Product Transactions’ pop-up window appears. In the Supply Condition Code field enter (4) F. Next click the (5) OK button, then click on the (6) Save icon.",
          "html": "The ‘Service Orders’ form displays. In the Service Order Information section, select the applicable (1) <strong>SO Num</strong> then click on the (2) <strong>Logistics</strong> tab. On the Return line, scroll to the right and click within the (3) <strong>Repair Order Product Transactions </strong>DFF. The ‘Repair Orders Product Transactions’ pop-up window appears. In the Supply Condition Code field enter (4) <strong>F</strong>. Next click the (5) <strong>OK </strong>button, then click on the (6) <strong>S</strong><strong>ave</strong> icon.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-043-p46.webp",
              "page": 46,
              "box": [
                52,
                218.39999999999998,
                414.81100000000004,
                473.76
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 46.",
              "width": 1210,
              "height": 852
            }
          ],
          "page": 46,
          "sourceParagraph": 490
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Note",
          "text": "From the menu, select (1) Actions > (2) Request End-Item to initiate the D7 outbound Interface. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) OK button.",
          "html": "From the menu, select (1) <strong>Actions</strong> &gt; (2) <strong>Request End-Item </strong>to initiate the D7 outbound Interface. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-044-p47.webp",
              "page": 47,
              "box": [
                52,
                184.5,
                415.18100000000004,
                446.77
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 47.",
              "width": 1211,
              "height": 875
            }
          ],
          "page": 47,
          "sourceParagraph": 492
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Service Orders",
          "text": "Return to the ‘Service Orders’ form. Refresh the SO by pressing Ctrl + F11 on the keyboard, then click on the (1) Service Order DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Review the information, then click the (2) [X] to close the ‘Repair Orders’ window.",
          "html": "Return to the ‘Service Orders’ form. Refresh the SO by pressing Ctrl + F11 on the keyboard, then click on the (1) <strong>Service Order </strong>DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Review the information, then click the (2) <strong>[X]</strong> to close the ‘Repair Orders’ window<em>.</em>",
          "details": [
            {
              "text": "Note: For informational awareness, but not systematically required, Schedulers may confirm that the following automated values are populated: Interface Transaction Type: D7O (D7 Outbound) and Interface Transaction Status: S (Success). This indicates that the D7 outbound has been successfully initiated, where D035K will receive and process the transaction. In response, D035K sends MRO a D7M transaction.",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> </em><em>For informational awareness</em><em>,</em><em> but not systematically required, Schedulers may confirm that the following automated values are populated:</em><em> Interface Transaction Type: D7O (D7 Outbound) and Interface Transaction Status: S (Success). This indicates that the </em><em>D7 outbound has been successfully initiated, where D035K will receive and process the transaction. In response, D035K sends MRO a D7M transaction. </em>",
              "type": "list"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-045-p48.webp",
              "page": 48,
              "box": [
                52,
                256.86,
                414.271,
                502.0
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 48.",
              "width": 1208,
              "height": 818
            }
          ],
          "page": 48,
          "sourceParagraph": 494
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "Service Orders",
          "text": "Return to the ‘Service Orders’ form. Refresh the SO by pressing Ctrl + F11 on the keyboard, then click on the (1) Service Order DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Review the information, then click the (2) [X] to close the ‘Repair Orders’ window.",
          "html": "Return to the ‘Service Orders’ form. Refresh the SO by pressing Ctrl + F11 on the keyboard, then click on the (1) <strong>Service Order </strong>DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Review the information, then click the (2) <strong>[X]</strong> to close the ‘Repair Orders’ window<em>.</em>",
          "details": [
            {
              "text": "Note: For informational awareness, but not systematically required, Schedulers may confirm that the following automated values are populated: Interface Transaction Type: D7MIU (D7M Inbound Update) and Interface Transaction Status: S (Success).",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> </em><em>For informational awareness</em><em>,</em><em> but not systematically required, Schedulers may confirm that the following automated values are populated:</em><em> Interface Transaction Type: D7MIU (D7M Inbound Update) and Interface Transaction Status: S (Success).</em>",
              "type": "list"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-046-p49.webp",
              "page": 49,
              "box": [
                52,
                234.25,
                397.69100000000003,
                467.62
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 49.",
              "width": 1153,
              "height": 778
            }
          ],
          "page": 49,
          "sourceParagraph": 497
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Repair Orders Product Transactions",
          "text": "Click on the (1) Logistics tab. On the return line, scroll to the right and click within the (2) Repair Order Product Transactions DFF. The ‘Repair Orders Product Transactions’ pop-up window appears. Confirm that the Advice Code has a value of RA, then click the (3) OK button.",
          "html": "Click on the (1) <strong>Logistics</strong> tab. On the return line, scroll to the right and click within the (2) <strong>Repair Order Product Transactions </strong>DFF. The ‘Repair Orders Product Transactions’ pop-up window appears. Confirm that the Advice Code has a value of RA, then click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-047-p50.webp",
              "page": 50,
              "box": [
                52,
                195.79999999999995,
                414.81100000000004,
                438.64
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 50.",
              "width": 1210,
              "height": 810
            }
          ],
          "page": 50,
          "sourceParagraph": 500
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "On the Return line, select the (1) Process Trans check box",
          "text": "On the Return line, select the (1) Process Trans check box. Select (2) Receive from the Actions drop-down menu, then click the (3) Go button.",
          "html": "On the Return line, select the (1) <strong>Process Trans</strong> check box. Select (2) <strong>Receive</strong> from the Actions drop-down menu, then click the (3) <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-048-p50.webp",
              "page": 50,
              "box": [
                52,
                463.18,
                414.81100000000004,
                578.45
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 50.",
              "width": 1210,
              "height": 385
            }
          ],
          "page": 50,
          "sourceParagraph": 502
        },
        {
          "number": 10,
          "sourceNumber": 10,
          "title": "Find Expected Receipts",
          "text": "The ‘Find Expected Receipts’ form displays. Click the Find button.",
          "html": "The ‘Find Expected Receipts’ form displays. Click the <strong>Find </strong>button.",
          "details": [
            {
              "text": "Note: The RMA Num is the same as the Order Num on the Logistics Return Line in the SO (refer to Step 9).",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> The RMA Num is the same as the Order </em><em>Num</em><em> on the Logistics Return Line in the </em><em>SO</em><em> (refer to Step </em><em>9</em><em>).</em>",
              "type": "list"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-049-p51.webp",
              "page": 51,
              "box": [
                52,
                189.04999999999995,
                310.841,
                406.49
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 51.",
              "width": 863,
              "height": 725
            }
          ],
          "page": 51,
          "sourceParagraph": 504
        },
        {
          "number": 11,
          "sourceNumber": 11,
          "title": "Receipt Header",
          "text": "Move or minimize the ‘Receipt Header’ form to view the ‘Receipts’ form behind it. On the ‘Receipts’ form, Select the (1) check box next to the line being received then scroll to the right of the form to the Subinventory field. Click on the (2) Subinventory LOV.",
          "html": "Move or minimize the ‘Receipt Header’ form to view the ‘Receipts’ form behind it. On the ‘Receipts’ form, Select the (1) <strong>check</strong><strong> </strong><strong>box</strong> next to the line being received then scroll to the right of the form to the Subinventory field. Click on the (2) <strong>Subinventory</strong> LOV.",
          "details": [
            {
              "text": "Note: The ‘Receipt Header’ form displays in front of the ‘Receipts’ form; move the ‘Receipt Header’ form to access the ‘Receipts’ form.",
              "html": "<em><strong>Note</strong></em><em><strong>: </strong></em><em>The </em><em>‘Receipt Header’ form displays in front of the ‘Receipts’ form</em><em>;</em><em> move</em><em> the</em><em> </em><em>‘</em><em>Receipt Header’ </em><em>form</em><em> to access the ‘Receipts’ form.</em>",
              "type": "list"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-050-p52.webp",
              "page": 52,
              "box": [
                52,
                222.95000000000005,
                390.63,
                380.07
              ],
              "alt": "Annotated Oracle screenshot for source step 11, guide page 52.",
              "width": 1129,
              "height": 524
            }
          ],
          "page": 52,
          "sourceParagraph": 507
        },
        {
          "number": 12,
          "sourceNumber": 12,
          "title": "Subinventories",
          "text": "The ‘Subinventories’ pop-up window appears. Select the applicable (1) Subinventory, then click the (2) OK button.",
          "html": "The ‘Subinventories’ pop-up window appears. Select the applicable (1) <strong>S</strong><strong>ubinventory</strong>, then click the (2) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: All end items will be received into Receiving Subinventory.",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> All end items will be received into </em><em>Receiving </em><em>Subinventory. </em>",
              "type": "list"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-051-p52.webp",
              "page": 52,
              "box": [
                52,
                420.47,
                357.841,
                617.78
              ],
              "alt": "Annotated Oracle screenshot for source step 12, guide page 52.",
              "width": 1020,
              "height": 658
            }
          ],
          "page": 52,
          "sourceParagraph": 510
        },
        {
          "number": 13,
          "sourceNumber": 13,
          "title": "Stock Locators",
          "text": "Click on the (1) Locator LOV. The ‘Stock Locators’ pop-up window appears. Click the (2) Combinations button.",
          "html": "Click on the (1) <strong>Locator</strong> LOV. The ‘Stock Locators’ pop-up window appears. Click the (2) <strong>Combinations</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-052-p53.webp",
              "page": 53,
              "box": [
                52,
                173.19000000000005,
                414.81100000000004,
                388.79
              ],
              "alt": "Annotated Oracle screenshot for source step 13, guide page 53.",
              "width": 1210,
              "height": 719
            }
          ],
          "page": 53,
          "sourceParagraph": 513
        },
        {
          "number": 14,
          "sourceNumber": 14,
          "title": "Enter Reduction Criteria for Long-List",
          "text": "The ‘Enter Reduction Criteria for Long-List’ pop-up window appears with all the fields as blue. Enter a (1) % into all the fields and then click the (2) OK button.",
          "html": "The ‘Enter Reduction Criteria for Long-List’ pop-up window appears with all the fields as blue. Enter a (1) <strong>%</strong> into all the fields and then click the (2) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: If the selected receipt already has a value in the Project and Task fields, the Combinations will result in an error stating: “No entries found for the LOV.” Select the Cancel button on the combination window below, then enter the Building, Area, Sub Area, and click the OK button.",
              "html": "<em><strong>Note:</strong></em> <em>If</em><em> the selected receipt already has a value in the Project and Task fields,</em><em> the Combinations </em><em>will result</em><em> in an error stating</em><em>:</em><em> </em><em>“</em><em>No</em><em> entries found for</em><em> </em><em>the LOV</em><em>.”</em><em> </em><em>Select the C</em><em>ancel</em><em> button on</em><em> the combination window below</em><em>, then</em><em> enter the Building, Area, Sub Area, </em><em>and</em><em> click the OK button.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-053-p53.webp",
              "page": 53,
              "box": [
                52,
                463.09000000000003,
                292.851,
                613.16
              ],
              "alt": "Annotated Oracle screenshot for source step 14, guide page 53.",
              "width": 803,
              "height": 501
            }
          ],
          "page": 53,
          "sourceParagraph": 515
        },
        {
          "number": 15,
          "sourceNumber": 15,
          "title": "Stock Locators",
          "text": "The ‘Stock Locators’ window refreshes with the results. Select the applicable (1) Stock Locator, then click the (2) OK button.",
          "html": "The ‘Stock Locators’ window refreshes with the results. Select the applicable (1) <strong>Stock Locator</strong>, then click the (2) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-054-p54.webp",
              "page": 54,
              "box": [
                52,
                173.19000000000005,
                414.81100000000004,
                333.39
              ],
              "alt": "Annotated Oracle screenshot for source step 15, guide page 54.",
              "width": 1210,
              "height": 534
            }
          ],
          "page": 54,
          "sourceParagraph": 518
        },
        {
          "number": 16,
          "sourceNumber": 16,
          "title": "Receipts",
          "text": "Click the Lot - Serial button on the ‘Receipts’ form.",
          "html": "Click the <strong>Lot</strong><strong> </strong><strong>-</strong><strong> </strong><strong>Serial </strong>button on the ‘Receipts’ form. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-055-p54.webp",
              "page": 54,
              "box": [
                52,
                346.97,
                414.81100000000004,
                581.62
              ],
              "alt": "Annotated Oracle screenshot for source step 16, guide page 54.",
              "width": 1210,
              "height": 783
            }
          ],
          "page": 54,
          "sourceParagraph": 520
        },
        {
          "number": 17,
          "sourceNumber": 17,
          "title": "Serial Entry",
          "text": "The ‘Serial Entry’ form displays. Enter the (1) Start Serial Number then press the tab key. The serial number will populate into the End Serial Number field. Click the (2) Done button. Click on the (3) Save icon.",
          "html": "The ‘Serial Entry’ form displays. Enter the (1) <strong>Start</strong> <strong>S</strong><strong>erial </strong><strong>N</strong><strong>umber</strong><strong> </strong>then press the tab key. The serial number will populate into the End Serial Number field. Click the (2) <strong>Done </strong>button. Click on the (3) <strong>Save</strong> icon.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-056-p55.webp",
              "page": 55,
              "box": [
                52,
                184.5,
                293.301,
                379.15
              ],
              "alt": "Annotated Oracle screenshot for source step 17, guide page 55.",
              "width": 805,
              "height": 649
            }
          ],
          "page": 55,
          "sourceParagraph": 522
        },
        {
          "number": 18,
          "sourceNumber": 18,
          "title": "Service Orders",
          "text": "Return to the ‘Service Orders’ form. Click on the Logistics tab to confirm that the Status on the Return line reflects: Received.",
          "html": "Return to the ‘Service Orders’ form. Click on the <strong>Logistics</strong> tab to confirm that the Status on the Return line reflects: Received.<strong> </strong>",
          "details": [
            {
              "text": "Note: Click the Refresh Logistics button if the status has not updated.",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> Click </em><em>the </em><em>Refresh Logistics</em><em> button if the status has not updated</em><em>.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-057-p55.webp",
              "page": 55,
              "box": [
                52,
                419.58000000000004,
                372.68100000000004,
                635.4
              ],
              "alt": "Annotated Oracle screenshot for source step 18, guide page 55.",
              "width": 1069,
              "height": 720
            }
          ],
          "page": 55,
          "sourceParagraph": 524
        },
        {
          "number": 19,
          "sourceNumber": 19,
          "title": "Note",
          "text": "After the item is received. From the menu, select (1) Actions > (2) End-Item Receipt Acknowledgement (D7M RA-CL) to initiate the receipt acknowledgement. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) OK button.",
          "html": "After the item is received. From the menu, select (1) <strong>Actions</strong> &gt; (2) <strong>End-Item Receipt Acknowledgement (D7M RA-CL) </strong>to initiate the receipt acknowledgement. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-058-p56.webp",
              "page": 56,
              "box": [
                52,
                195.79999999999995,
                412.101,
                455.75
              ],
              "alt": "Annotated Oracle screenshot for source step 19, guide page 56.",
              "width": 1201,
              "height": 867
            }
          ],
          "page": 56,
          "sourceParagraph": 527
        },
        {
          "number": 20,
          "sourceNumber": 20,
          "title": "Repair Orders",
          "text": "Refresh the SO by pressing Ctrl + F11 on the keyboard, then click on the (1) Service Order DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Review the information, then click the (2) [X] to close the ‘Repair Orders’ window.",
          "html": "Refresh the SO by pressing Ctrl + F11 on the keyboard, then click on the (1) <strong>Service Order </strong>DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Review the information, then click the (2) <strong>[X]</strong> to close the ‘Repair Orders’ window<em>.</em>",
          "details": [
            {
              "text": "Note: For informational awareness, but not systematically required, Schedulers may confirm that the following automated values are populated: Interface Transaction Type: D7MO (D7M Outbound) and Interface Transaction Status: S (Success).",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> For informational awareness</em><em>,</em><em> but not systematically required, Schedulers may confirm that the following automated values are populated: Interface Transaction Type: D7MO (D7M Outbound) and Interface Transaction Status: S (Success).</em>",
              "type": "list"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-059-p57.webp",
              "page": 57,
              "box": [
                52,
                234.25,
                414.81100000000004,
                477.21
              ],
              "alt": "Annotated Oracle screenshot for source step 20, guide page 57.",
              "width": 1210,
              "height": 810
            }
          ],
          "page": 57,
          "sourceParagraph": 529
        }
      ],
      "prerequisites": [
        "An SR and associated SO are created with D035K as the customer, delivery priority code with a value of six, an existing location, and both a logistics return and ship line."
      ],
      "purpose": "Schedulers will be able to send a D7 outbound interface to D035K and then receive an inbound D7M response from D035K that contains an advice code of RA, and the Receipt Acknowledgement Outbound Interface (D7MO) is kicked off, setting the advice code to RA.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57
      ],
      "part": null,
      "summary": "Schedulers will be able to send a D7 outbound interface to D035K and then receive an inbound D7M response from D035K that contains an advice code of RA, and the Receipt Acknowledgement Outbound Interface (D7MO) is kicked off, setting the advice code to RA.",
      "related": [
        "send-d7-wash-post-outbound-transaction-to-d035k-for-engine-item-type",
        "receive-end-item-into-inventory"
      ]
    },
    {
      "id": "send-d7-wash-post-outbound-transaction-to-d035k-for-engine-item-type",
      "kind": "procedure",
      "title": "Send D7 Wash Post Outbound Transaction to D035K (for Engine Item Type)",
      "sourceTitle": "Send D7 Wash Post Outbound Transaction to D035K (for Engine Item Type)",
      "lesson": 1,
      "category": "Requesting and Inducting Items",
      "topic": "Requesting an Item",
      "sourceStart": 533,
      "sourceEnd": 574,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Service Order",
          "text": "On the Oracle Home page, navigate to (1) MROi Depot Repair > (2) Depot Repair > (3) Service Order.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Depot Repair</strong> &gt; (2) <strong>Depot Repair</strong><strong> </strong>&gt; (3) <strong>Service</strong><strong> Order</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-060-p58.webp",
              "page": 58,
              "box": [
                52,
                260.73,
                399.591,
                457.68
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 58.",
              "width": 1159,
              "height": 657
            }
          ],
          "page": 58,
          "sourceParagraph": 537
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-061-p58.webp",
              "page": 58,
              "box": [
                52,
                482.24,
                273.651,
                644
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 58.",
              "width": 739,
              "height": 540
            }
          ],
          "page": 58,
          "sourceParagraph": 539
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Service Requests",
          "text": "The ‘Find Service Requests’ form appears. Enter (either by scanning the DD Form 1348-1A EIDN barcode or manually typing) the (1) Service Order and then click the (2) Find button. The Results section expands with the queried request. Click the (3) OK button.",
          "html": "The ‘Find Service Requests’ form appears. Enter (either by scanning the DD Form 1348-1A EIDN barcode or manually typing) the (1) <strong>Service Order </strong>and then click the (2) <strong>Find</strong> button. The Results section expands with the queried request. Click the (3) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: You will be unable to perform this JA on SOs that were previously used to send D7 WP. The service order number is the EIDN that is received from D035K.",
              "html": "<em><strong>Note:</strong></em><em> You will be unable to perform this </em><em>JA</em><em> on </em><em>SOs that were previously used to send D7 WP. The service order number is the EIDN that is received from D035K.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-062-p59.webp",
              "page": 59,
              "box": [
                52,
                222.95000000000005,
                417.49100000000004,
                513.3399999999999
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 59.",
              "width": 1219,
              "height": 968
            }
          ],
          "page": 59,
          "sourceParagraph": 541
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Service Orders",
          "text": "The ‘Service Orders’ form displays. Refresh the form by pressing the Ctrl + F11 keys on the keyboard and paste the (1) Service Order Number in the SO Num field. To requery the SO press the Ctrl + F11 keys on the keyboard.",
          "html": "The ‘Service Orders’ form displays. Refresh the form by pressing the Ctrl + F11 keys on the keyboard and paste the (1) <strong>Service Order Number</strong> in the SO Num field. To requery the SO press the Ctrl + F11 keys on the keyboard.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-063-p60.webp",
              "page": 60,
              "box": [
                52,
                184.5,
                317.891,
                371.52
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 60.",
              "width": 887,
              "height": 624
            }
          ],
          "page": 60,
          "sourceParagraph": 544
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "The appropriate Service Order displays",
          "text": "The appropriate Service Order displays. Click on the (1) Logistics tab.",
          "html": "The appropriate Service Order displays. Click on the (1) <strong>Logistics</strong> tab.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-064-p60.webp",
              "page": 60,
              "box": [
                52,
                384.76,
                386.081,
                617.51
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 60.",
              "width": 1114,
              "height": 776
            }
          ],
          "page": 60,
          "sourceParagraph": 546
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Repair Order Product Transactions",
          "text": "The Logistics Tab displays. To verify that the induction came in, scroll to the right and click within the (1) Repair Order Product Transactions DFF on the Return Line between the Picking Rule and Add to Order fields. The ‘Repair Order Product Transactions’ pop-up window appears. In the Supply Condition Code field, enter (2) F (meaning unserviceable, but reparable condition), then click the (3) OK button. Click on the (4) Save icon.",
          "html": "The Logistics Tab displays. To verify that the induction came in, scroll to the right and click within the (1) <strong>Repair Order Product </strong><strong>T</strong><strong>ransactions</strong><strong> </strong>DFF on the Return Line between the Picking Rule and Add to Order fields.<em> </em>The ‘Repair Order Product Transactions’ pop-up window appears. In the Supply Condition Code field, enter (2) <strong>F</strong> (meaning unserviceable, but reparable condition), then click the (3) <strong>OK</strong> button. Click on the (4) <strong>Save </strong>icon. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-065-p61.webp",
              "page": 61,
              "box": [
                52,
                218.39999999999998,
                334.771,
                412.67
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 61.",
              "width": 943,
              "height": 648
            }
          ],
          "page": 61,
          "sourceParagraph": 548
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "Note",
          "text": "On the menu, select (1) Actions > (2) Engine Induction Signal (D7WMP) to initiate the D7MOWP Outbound. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) OK button.",
          "html": "On the menu, select (1) <strong>Actions</strong> &gt; (2) <strong>Engine</strong><strong> Induction Signal (D7WMP)</strong> to initiate the D7MOWP Outbound. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-066-p61.webp",
              "page": 61,
              "box": [
                52,
                448.92999999999995,
                325.62100000000004,
                642.14
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 61.",
              "width": 913,
              "height": 645
            }
          ],
          "page": 61,
          "sourceParagraph": 550
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Service Orders",
          "text": "Return to the ‘Service Orders’ form. Refresh the SO by pressing the Ctrl+F11 on the keyboard, then click on the (1) Service Order DFF at the bottom-right portion of the Details tab. The ‘Repair Orders’ form displays. Click the (2) OK button to close the ‘Repair Orders’ form.",
          "html": "Return to the ‘Service Orders’ form. Refresh the SO by pressing the Ctrl+F11 on the keyboard, then click on the (1) <strong>Service Order</strong> DFF at the bottom-right portion of the Details tab. The ‘Repair Orders’ form displays. Click the (2) <strong>OK</strong> button to close the ‘Repair Orders’ form.",
          "details": [
            {
              "text": "Note: For informational awareness but not systematically required, Schedulers may confirm that the following automated values are populated: Interface Transaction Type: D7MOWP (D7M Engine Induction) and Interface Transaction Status: S (Success). Click the OK button to return to the ‘Service Orders’ form.",
              "html": "<em><strong>Note</strong></em><em>: For informational awareness but not systematically required, Schedulers may confirm that the following automated values are populated</em><em>: Interface Transaction Type: D7MOWP (D7M Engine Induction) and Interface Transaction Status: S (Success).</em><em><strong> </strong></em><em>Click the </em><em><strong>OK</strong></em><em> button to return to the ‘Service Orders’ form.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-067-p62.webp",
              "page": 62,
              "box": [
                52,
                245.55999999999995,
                423.531,
                465.28
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 62.",
              "width": 1239,
              "height": 733
            }
          ],
          "page": 62,
          "sourceParagraph": 552
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "Click on the (1) Logistics tab",
          "text": "Click on the (1) Logistics tab. On the return line, scroll to the right and click in the (2) Repair Order Product Transactions DFF. Verify that the following values are populated: Advice Code: 2J, Action Suffix Code: WP (Wash Post inventory balance – Adjust due-ins). Click the (3) OK button.",
          "html": "Click on the (1) <strong>Logistics</strong> tab. On the return line, scroll to the right and click in the (2) <strong>Repair Order Product Transactions </strong>DFF. Verify that the following values are populated: Advice Code: <strong>2J</strong>, Action Suffix Code: <strong>WP</strong> (Wash Post inventory balance – Adjust due-ins). Click the (3) <strong>OK</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-068-p63.webp",
              "page": 63,
              "box": [
                52,
                195.79999999999995,
                336.911,
                393.98
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 63.",
              "width": 950,
              "height": 661
            }
          ],
          "page": 63,
          "sourceParagraph": 555
        },
        {
          "number": 10,
          "sourceNumber": 10,
          "title": "Select the (1) Process Trans check box next to the Return line",
          "text": "Select the (1) Process Trans check box next to the Return line. Click on the (2) Actions drop-down and select (3) Receive. Click the (4) Go button to receive the item.",
          "html": "Select the (1) <strong>Process Trans</strong><strong> </strong>check box next to the Return line. Click on the (2) <strong>Actions</strong> drop-down and select (3) <strong>Receive</strong>. Click the (4) <strong>Go</strong> button to receive the item.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-069-p63.webp",
              "page": 63,
              "box": [
                52,
                429.82000000000005,
                325.99100000000004,
                622.08
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 63.",
              "width": 914,
              "height": 641
            }
          ],
          "page": 63,
          "sourceParagraph": 557
        },
        {
          "number": 11,
          "sourceNumber": 11,
          "title": "Find Expected Receipts",
          "text": "The ‘Find Expected Receipts’ form displays. Click the Find button.",
          "html": "The ‘Find Expected Receipts’ form displays. Click the <strong>Find</strong> button.",
          "details": [
            {
              "text": "Note: The RMA Num is the same as the Order number on the Logistics Return Line in the Service Order (refer to Step 10).",
              "html": "<em><strong>Note</strong></em><em>: The RMA Num is the same as the Order number on the Logistics Return Line in the Service Order (refer to Step 1</em><em>0</em><em>).</em>",
              "type": "list"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-070-p64.webp",
              "page": 64,
              "box": [
                52,
                189.04999999999995,
                305.711,
                366.88
              ],
              "alt": "Annotated Oracle screenshot for source step 11, guide page 64.",
              "width": 846,
              "height": 593
            }
          ],
          "page": 64,
          "sourceParagraph": 559
        },
        {
          "number": 12,
          "sourceNumber": 12,
          "title": "Receipts",
          "text": "The ‘Receipts’ form displays. Verify that the following fields that are populated are accurate.",
          "html": "The ‘Receipts’ form displays. Verify that the following fields that are populated are accurate.",
          "details": [
            {
              "text": "Note: The ‘Receipt Header’ form displays in front of the ‘Receipts’ form; move the ‘Receipt Header’ form to access the ‘Receipts’ form.",
              "html": "<em><strong>Note</strong></em><em><strong>: </strong></em><em>The </em><em>‘Receipt Header’ form displays in front of the ‘Receipts’ form</em><em>;</em><em> move</em><em> the</em><em> </em><em>‘</em><em>Receipt Header’ </em><em>form</em><em> to access the ‘Receipts’ form.</em>",
              "type": "list"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-071-p64.webp",
              "page": 64,
              "box": [
                52,
                418.58000000000004,
                369.421,
                638.6800000000001
              ],
              "alt": "Annotated Oracle screenshot for source step 12, guide page 64.",
              "width": 1059,
              "height": 734
            }
          ],
          "page": 64,
          "sourceParagraph": 562
        },
        {
          "number": 13,
          "sourceNumber": 13,
          "title": "Stock Locators",
          "text": "Scroll to the right of the form to the Stock Locator field. Enter (1) % in the Locator field. The ‘Stock Locators’ pop-up window appears. Select the applicable (2) Stock Locator and click the (3) OK button.",
          "html": "Scroll to the right of the form to the Stock Locator field. Enter (1) <strong>%</strong> in the Locator field. The ‘Stock Locators’ pop-up window appears. Select the applicable (2) <strong>Stock Locator</strong> and click the (3) <strong>OK</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-072-p65.webp",
              "page": 65,
              "box": [
                52,
                184.5,
                363.391,
                400.08
              ],
              "alt": "Annotated Oracle screenshot for source step 13, guide page 65.",
              "width": 1038,
              "height": 719
            }
          ],
          "page": 65,
          "sourceParagraph": 565
        },
        {
          "number": 14,
          "sourceNumber": 14,
          "title": "Receipts",
          "text": "On the ‘Receipts’ form, click the (1) Lot - Serial button.",
          "html": "On the ‘Receipts’ form, click the (1) <strong>Lot - Serial </strong>button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-073-p65.webp",
              "page": 65,
              "box": [
                52,
                413.34,
                354.791,
                621.42
              ],
              "alt": "Annotated Oracle screenshot for source step 14, guide page 65.",
              "width": 1010,
              "height": 694
            }
          ],
          "page": 65,
          "sourceParagraph": 567
        },
        {
          "number": 15,
          "sourceNumber": 15,
          "title": "Serial Entry",
          "text": "The ‘Serial Entry’ form displays. Enter the (1) Start Serial Number then click tab key. The serial number will populate into the End Serial Number box. Click the (2) Done button. Click on the (3) Save icon.",
          "html": "The ‘Serial Entry’ form displays. Enter the (1) <strong>Start</strong> <strong>S</strong><strong>erial </strong><strong>N</strong><strong>umber</strong><strong> </strong>then click tab key. The serial number will populate into the End Serial Number box. Click the (2) <strong>Done </strong>button. Click on the (3) <strong>Save</strong> icon.",
          "details": [
            {
              "text": "Note: After clicking the Save button, close out of remaining windows and navigate back to the ‘Service Orders’ form.",
              "html": "<em><strong>Note:</strong></em> <em>After clicking the Save button, close out of remaining windows and navigate back to the ‘Service Orders’ form.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-074-p66.webp",
              "page": 66,
              "box": [
                52,
                211.65999999999997,
                259.951,
                385.4
              ],
              "alt": "Annotated Oracle screenshot for source step 15, guide page 66.",
              "width": 694,
              "height": 580
            }
          ],
          "page": 66,
          "sourceParagraph": 569
        },
        {
          "number": 16,
          "sourceNumber": 16,
          "title": "Service Orders",
          "text": "The ‘Service Orders’ form displays. Click the Refresh Logistics button to update the service instance related information. Notice that the Status on the Return line changed from Booked to Received.",
          "html": "The ‘Service Orders’ form displays. Click the <strong>Refresh Logistics</strong> button to update the service instance related information. Notice that the Status on the Return line changed from Booked to Received.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-075-p66.webp",
              "page": 66,
              "box": [
                52,
                421.7,
                314.971,
                603.37
              ],
              "alt": "Annotated Oracle screenshot for source step 16, guide page 66.",
              "width": 877,
              "height": 606
            }
          ],
          "page": 66,
          "sourceParagraph": 572
        }
      ],
      "prerequisites": [
        "An SR exists with an end item type of engine and an SO number is associated that has a service type of Receipt-Ship Only."
      ],
      "purpose": "Users can send a D7 Outbound Wash Post (WP) (for Engines) to D035K before or after receiving an engine for repair.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66
      ],
      "part": null,
      "summary": "Users can send a D7 Outbound Wash Post (WP) (for Engines) to D035K before or after receiving an engine for repair.",
      "related": [
        "receive-end-item-into-inventory",
        "create-unit-configuration"
      ]
    },
    {
      "id": "receive-end-item-into-inventory",
      "kind": "procedure",
      "title": "Receive End-Item into Inventory",
      "sourceTitle": "Receive End-Item into Inventory",
      "lesson": 1,
      "category": "Requesting and Inducting Items",
      "topic": "Inducting an Item",
      "sourceStart": 576,
      "sourceEnd": 672,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Service Order",
          "text": "On the Oracle Home page, navigate to (1) MROi Depot Repair > (2) Depot Repair > (3) Service Order.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Depot Repair</strong> &gt; (2) <strong>Depot Repair</strong> &gt; (3) <strong>Service Order</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-076-p67.webp",
              "page": 67,
              "box": [
                52,
                396.52,
                406.341,
                568.4300000000001
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 67.",
              "width": 1182,
              "height": 574
            }
          ],
          "page": 67,
          "sourceParagraph": 581
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-077-p68.webp",
              "page": 68,
              "box": [
                52,
                177.75,
                285.521,
                349.18
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 68.",
              "width": 779,
              "height": 572
            }
          ],
          "page": 68,
          "sourceParagraph": 589
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Service Requests",
          "text": "The ‘Find Service Requests’ form appears. Enter (either by scanning the DD Form 1348-1A EIDN barcode or manually typing) the (1) Service Order and then click the (2) Find button. The Results section expands with queried request. Click the (3) OK button.",
          "html": "The ‘Find Service Requests’ form appears. Enter (either by scanning the DD Form 1348-1A EIDN barcode or manually typing) the (1) <strong>Service Order</strong> and then click the (2) <strong>Find</strong> button. The Results section expands with queried request. Click the (3) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: Each SO number is unique and can only be used once for receiving an end-item into inventory.",
              "html": "<em><strong>Note: </strong></em><em>Each </em><em>SO</em><em> number is unique and can only be used once for receiving an end-item into inventory.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-078-p69.webp",
              "page": 69,
              "box": [
                52,
                227.40999999999997,
                341.081,
                436.63
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 69.",
              "width": 964,
              "height": 698
            }
          ],
          "page": 69,
          "sourceParagraph": 595
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Service Orders",
          "text": "The ‘Service Orders’ form displays. Scroll down on the sidebar to the right to locate the appropriate SO Num to use.",
          "html": "The ‘Service Orders’ form displays. Scroll down on the sidebar to the right to locate the appropriate <strong>S</strong><strong>O </strong><strong>Num</strong> to use.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-079-p69.webp",
              "page": 69,
              "box": [
                52,
                463.90999999999997,
                319.851,
                644
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 69.",
              "width": 893,
              "height": 601
            }
          ],
          "page": 69,
          "sourceParagraph": 598
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Click on the (1) Logistics tab",
          "text": "Click on the (1) Logistics tab. Click the (2) Process Trans check box to the left of the Return Line. Click on the (3) Actions drop-down and select (4) Receive. Click the (5) Go button.",
          "html": "Click on the (1) <strong>Logistics</strong> tab. Click the (2) <strong>Process Trans</strong> check box to the left of the Return Line. Click on the (3) <strong>Actions</strong> drop-down and select (4) <strong>Receive</strong>. Click the (5) <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-080-p70.webp",
              "page": 70,
              "box": [
                52,
                186.99,
                368.091,
                397.03
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 70.",
              "width": 1054,
              "height": 701
            }
          ],
          "page": 70,
          "sourceParagraph": 602
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Find Expected Receipts",
          "text": "The ‘Find Expected Receipts’ form displays. Click the Find button.",
          "html": "The ‘Find Expected Receipts’ form displays. Click the <strong>Find </strong>button.",
          "details": [
            {
              "text": "Note: The RMA number is the same number as the Order Num on the Logistics Return Line in the SO (refer to Step 5).",
              "html": "<em><strong>Note:</strong></em><em> The RMA number is the same number as the Order Num on the Logistics Return Line in the </em><em>SO</em><em> (</em><em>r</em><em>efer to Step 5).</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-081-p70.webp",
              "page": 70,
              "box": [
                52,
                440.74,
                286.171,
                639.0699999999999
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 70.",
              "width": 781,
              "height": 662
            }
          ],
          "page": 70,
          "sourceParagraph": 614
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "Receipts",
          "text": "The ‘Receipts’ form displays along with the ‘Receipt Header’ pop-up window. Move the ‘Receipt Header’ window to the right. Scroll to the right of the form to the Subinventory field. Click on the (1) Subinventory LOV. The ‘Subinventories’ pop-up window appears. Select the applicable (2) Subinventory, then click the (3) OK button.",
          "html": "The ‘Receipts’ form displays along with the ‘Receipt Header’ pop-up window. Move the ‘Receipt Header’ window to the right. Scroll to the right of the form to the Subinventory field. Click on the (1) <strong>Subinventory </strong>LOV. The ‘Subinventories’ pop-up window appears. Select the applicable (2) <strong>Subinventory</strong>, then click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-082-p71.webp",
              "page": 71,
              "box": [
                52,
                199.11,
                414.81100000000004,
                362.12
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 71.",
              "width": 1210,
              "height": 544
            }
          ],
          "page": 71,
          "sourceParagraph": 619
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Stock Locators",
          "text": "Click in the (1) Locator field. The ‘Stock Locators’ pop-up window appears. Click the (2) Combinations button.",
          "html": "Click in the (1) <strong>Locator</strong> field. The ‘Stock Locators’ pop-up window appears. Click the (2) <strong>Combinations</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-083-p71.webp",
              "page": 71,
              "box": [
                52,
                389.15,
                414.81100000000004,
                604.8199999999999
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 71.",
              "width": 1210,
              "height": 719
            }
          ],
          "page": 71,
          "sourceParagraph": 621
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "Enter Reduction Criteria for Long-List",
          "text": "The ‘Enter Reduction Criteria for Long-List’ pop-up window appears with all the fields highlighted blue. Enter the (1) % in each field, then click the (2) OK button.",
          "html": "The ‘Enter Reduction Criteria for Long-List’ pop-up window appears with all the fields highlighted blue. Enter the (1) <strong>%</strong> in each field, then click the (2) <strong>OK</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-084-p72.webp",
              "page": 72,
              "box": [
                52,
                174.85000000000002,
                335.12100000000004,
                334.06
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 72.",
              "width": 944,
              "height": 531
            }
          ],
          "page": 72,
          "sourceParagraph": 627
        },
        {
          "number": 10,
          "sourceNumber": 10,
          "title": "Stock Locators",
          "text": "The ‘Stock Locators’ window refreshes with the results. Select the applicable (1) Stock Locator, then click the (2) OK button.",
          "html": "The ‘Stock Locators’ window refreshes with the results. Select the applicable (1) <strong>Stock Locator</strong>, then click the (2) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-085-p72.webp",
              "page": 72,
              "box": [
                52,
                361.28000000000003,
                414.81100000000004,
                511.35
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 72.",
              "width": 1210,
              "height": 501
            }
          ],
          "page": 72,
          "sourceParagraph": 629
        },
        {
          "number": 11,
          "sourceNumber": 11,
          "title": "Receipts",
          "text": "Click the Lot - Serial button on the ‘Receipts’ form.",
          "html": "Click the <strong>Lot - Serial </strong>button on the ‘Receipts’ form.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-086-p73.webp",
              "page": 73,
              "box": [
                52,
                162.72000000000003,
                365.351,
                364.47
              ],
              "alt": "Annotated Oracle screenshot for source step 11, guide page 73.",
              "width": 1045,
              "height": 673
            }
          ],
          "page": 73,
          "sourceParagraph": 635
        },
        {
          "number": 12,
          "sourceNumber": 12,
          "title": "Serial Entry",
          "text": "The ‘Serial Entry’ form displays. Enter the (1) Start Serial Number then press the tab key. The serial number will populate into the End Serial Number field. Click the (2) Done button. Click on the (3) Save icon.",
          "html": "The ‘Serial Entry’ form displays. Enter the (1) <strong>Start</strong> <strong>Serial Number </strong>then press the tab key. The serial number will populate into the End Serial Number field. Click the (2) <strong>Done </strong>button. Click on the (3) <strong>Save</strong> icon.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-087-p73.webp",
              "page": 73,
              "box": [
                52,
                403.63,
                342.671,
                640.05
              ],
              "alt": "Annotated Oracle screenshot for source step 12, guide page 73.",
              "width": 969,
              "height": 789
            }
          ],
          "page": 73,
          "sourceParagraph": 639
        },
        {
          "number": 13,
          "sourceNumber": 13,
          "title": "Service Orders",
          "text": "Return to the ‘Service Orders’ form. Click the Refresh Logistics button to confirm the Status on the return line reflects: Received.",
          "html": "Return to the ‘Service Orders’ form. Click the <strong>Refresh</strong> <strong>Logistics</strong> button to confirm the Status on the return line reflects: Received.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-088-p74.webp",
              "page": 74,
              "box": [
                52,
                173.20000000000005,
                323.38100000000003,
                365.31
              ],
              "alt": "Annotated Oracle screenshot for source step 13, guide page 74.",
              "width": 905,
              "height": 641
            }
          ],
          "page": 74,
          "sourceParagraph": 647
        },
        {
          "number": 14,
          "sourceNumber": 14,
          "title": "Note",
          "text": "Once the item is received, from the menu, select (1) Actions > (2) End-Item Receipt Acknowledgement (D7M RA-CL) to initiate the receipt acknowledgement. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) OK button.",
          "html": "Once the item is received, from the menu, select (1) <strong>Actions</strong> &gt; (2) <strong>End-Item Receipt Acknowledgement (D7M RA-CL) </strong>to initiate the receipt acknowledgement. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-089-p74.webp",
              "page": 74,
              "box": [
                53.171,
                412.75,
                348.221,
                621.14
              ],
              "alt": "Annotated Oracle screenshot for source step 14, guide page 74.",
              "width": 984,
              "height": 695
            }
          ],
          "page": 74,
          "sourceParagraph": 651
        },
        {
          "number": 15,
          "sourceNumber": 15,
          "title": "Repair Orders",
          "text": "Refresh the Service Order by pressing Ctrl + F11 on the keyboard. Click on the (1) Service Order DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Confirm D7M outbound was executed with an Interface Transaction Status reflecting: Success. Click the (2) OK button.",
          "html": "Refresh the Service Order by pressing Ctrl + F11 on the keyboard. Click on the (1) <strong>Service Order </strong>DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Confirm D7M outbound was executed with an Interface Transaction Status reflecting: Success. Click the (2) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-090-p75.webp",
              "page": 75,
              "box": [
                52,
                195.34015999999997,
                410.75100000000003,
                408.21
              ],
              "alt": "Annotated Oracle screenshot for source step 15, guide page 75.",
              "width": 1196,
              "height": 710
            }
          ],
          "page": 75,
          "sourceParagraph": 659
        },
        {
          "number": 16,
          "sourceNumber": 16,
          "title": "Repair Orders Product Transactions",
          "text": "Click on the (1) Logistics tab. On the Return line, scroll to the right and click within the (2) Repair Order Product Transactions DFF. The ‘Repair Orders Product Transactions’ pop-up window appears. Confirm the Advice Code has a value of RA, and the Action Suffix code of CL. Click the (3) OK button.",
          "html": "Click on the (1) <strong>Logistics</strong> tab. On the Return line, scroll to the right and click within the (2) <strong>Repair Order Product Transactions </strong>DFF. The ‘Repair Orders Product Transactions’ pop-up window appears. Confirm the Advice Code has a value of RA, and the Action Suffix code of CL. Click the (3) <strong>OK </strong>button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-091-p76.webp",
              "page": 76,
              "box": [
                52,
                200.35000000000002,
                409.651,
                439.74
              ],
              "alt": "Annotated Oracle screenshot for source step 16, guide page 76.",
              "width": 1193,
              "height": 798
            }
          ],
          "page": 76,
          "sourceParagraph": 660
        }
      ],
      "prerequisites": [
        "An SR is created with D035K as the customer. An SO is provided by D035K or created with D035K as the customer, Delivery Priority Code with a value of six, an existing Location, and both a Logistics Return and Ship line. The Supply Condition Code on the Return DFF (Logistics tab) is set to F and the Advice Code is populated."
      ],
      "purpose": "An MROi Scheduler processes an SO in EBS with Supply Condition Code F and Priority Code C3, triggering the D7 Outbound interface. After receiving an inbound D7M response with Advice Code RA, the system confirms the update and verifies that the End-Item can be received. A receipt is created against the induction line and the Receipt Acknowledgement Outbound Interface (D7MO) is kicked off, setting the Advice Code to RA. MRO will retain the action Suffix Code as CL on the SO’s Logistics DFF.",
      "role": "MROi Scheduler",
      "mvp": "4.1",
      "pages": [
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76
      ],
      "part": null,
      "summary": "An MROi Scheduler processes an SO in EBS with Supply Condition Code F and Priority Code C3, triggering the D7 Outbound interface. After receiving an inbound D7M response with Advice Code RA, the system confirms the update and verifies that the End-Item can be received. A receipt is created against the induction line and the Receipt Acknowledgement Outbound Interface (D7MO) is kicked off, setting the Advice Code to RA. MRO will retain the action Suffix Code as CL on the SO’s Logistics DFF.",
      "related": [
        "create-unit-configuration",
        "update-unit-configurations"
      ]
    },
    {
      "id": "create-unit-configuration",
      "kind": "procedure",
      "title": "Create Unit Configuration",
      "sourceTitle": "Create Unit Configuration",
      "lesson": 1,
      "category": "Requesting and Inducting Items",
      "topic": "Inducting an Item",
      "sourceStart": 673,
      "sourceEnd": 713,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Create From Master",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User - Scheduler > (2) Configuration Management > (3) Unit Configuration > (4) Create From Master.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Complex MRO User - Scheduler</strong> &gt; (2) <strong>Configuration Management</strong> &gt; (3) <strong>Unit Configuration</strong> &gt; (4) <strong>Create From Master</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-092-p77.webp",
              "page": 77,
              "box": [
                52,
                279.33,
                397.55100000000004,
                410.69
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 77.",
              "width": 1152,
              "height": 438
            }
          ],
          "page": 77,
          "sourceParagraph": 679
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Search Master Configuration",
          "text": "The ‘Search Master Configuration’ form displays. Enter the (1) Name of the Master Configuration (MC), then click the (2) Go button. The search results populate. Select the applicable (3) Master Configuration radio button, then click the (4) Create Unit Configuration button.",
          "html": "The ‘Search Master Configuration’ form displays. Enter the (1) <strong>Name </strong>of the Master Configuration (MC), then click the (2) <strong>Go</strong> button. The search results populate. Select the applicable (3) <strong>Master Configuration </strong>radio button, then click the (4) <strong>Create Unit Configuration</strong> button.",
          "details": [
            {
              "text": "Tip: The ‘%’ wildcard can be used in the search tool to simulate any other characters in a string as is used in the Name field in the screenshot below.",
              "html": "<em><strong>Tip:</strong></em><em> The ‘%’ wildcard can be used in the search tool to simulate any other characters in a string as is used in the Name field in the screenshot below.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-093-p77.webp",
              "page": 77,
              "box": [
                52,
                484.989,
                414.81100000000004,
                587.51
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 77.",
              "width": 1210,
              "height": 342
            }
          ],
          "page": 77,
          "sourceParagraph": 681
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Create Unit Configuration",
          "text": "The ‘Create Unit Configuration’ form displays. Enter (1) % in the Instance Number field then click on the (2) Instance Number search tool.",
          "html": "The ‘Create Unit Configuration’ form displays. Enter (1) <strong>%</strong> in the Instance Number field then click on the (2) <strong>Instance Number </strong>search tool.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-094-p78.webp",
              "page": 78,
              "box": [
                52,
                173.19899999999996,
                408.641,
                255.03999999999996
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 78.",
              "width": 1189,
              "height": 273
            }
          ],
          "page": 78,
          "sourceParagraph": 684
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "The Select Item Instance page displays",
          "text": "The Select Item Instance page displays. Select the applicable (1) Item radio button with a Status that reflects: “Out of Service”, then click the (2) Select button.",
          "html": "The Select Item Instance page displays. Select the applicable (1) <strong>Item </strong>radio<strong> </strong>button<strong> </strong>with a Status that reflects: “Out of Service”, then click the (2) <strong>Select</strong> button.",
          "details": [
            {
              "text": "Note: The Out of Enterprise status for an Item Instance can also be used to create the Unit Configuration for Master.",
              "html": "<em><strong>Note: </strong></em><em>The Out of </em><em>Enterprise</em><em> status for an Item Instance can also be used to create the Unit Configuration for Master.</em> ",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-095-p78.webp",
              "page": 78,
              "box": [
                52,
                306.88,
                413.701,
                476.52
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 78.",
              "width": 1206,
              "height": 566
            }
          ],
          "page": 78,
          "sourceParagraph": 686
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Create Unit Configuration",
          "text": "The ‘Create Unit Configuration’ form displays with the Instance Number populated. Enter the (1) Unit Config Name, then click the (2) Apply button.",
          "html": "The ‘Create Unit Configuration’ form displays with the Instance Number populated. Enter the (1) <strong>Unit Config Name</strong>, then click the (2) <strong>Apply</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-096-p78.webp",
              "page": 78,
              "box": [
                52,
                501.063,
                413.261,
                582.6
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 78.",
              "width": 1205,
              "height": 272
            }
          ],
          "page": 78,
          "sourceParagraph": 689
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Edit Unit Configuration",
          "text": "The ‘Edit Unit Configuration’ form displays. Click on the applicable Child node.",
          "html": "The ‘Edit Unit Configuration’ form displays. Click on the applicable <strong>Child</strong> <strong>node</strong>. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-097-p79.webp",
              "page": 79,
              "box": [
                52,
                161.89999999999998,
                413.19100000000003,
                300.39
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 79.",
              "width": 1204,
              "height": 462
            }
          ],
          "page": 79,
          "sourceParagraph": 691
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "Edit Unit Configuration",
          "text": "The ‘Edit Unit Configuration’ refreshes with the Child Node’s information. Enter (1) % in the Item field, then click on the (2) Item search tool.",
          "html": "The ‘Edit Unit Configuration’ refreshes with the Child Node’s information. Enter (1) <strong>%</strong> in the Item field, then click on the (2) <strong>Item </strong>search tool. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-098-p79.webp",
              "page": 79,
              "box": [
                52,
                325.34999999999997,
                413.211,
                459.59
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 79.",
              "width": 1205,
              "height": 448
            }
          ],
          "page": 79,
          "sourceParagraph": 693
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "The Select Item page displays",
          "text": "The Select Item page displays. Click on the applicable Item hyperlink.",
          "html": "The Select Item page displays. Click on the applicable <strong>Item </strong>hyperlink.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-099-p79.webp",
              "page": 79,
              "box": [
                52,
                472.94,
                413.291,
                518.05
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 79.",
              "width": 1205,
              "height": 151
            }
          ],
          "page": 79,
          "sourceParagraph": 695
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "Edit Unit Configuration",
          "text": "The ‘Edit Unit Configuration’ form displays with the item number populated. Enter a unique (1) Serial Number, then change the drop-down from Actual to (2) Temporary and click the (3) Apply button.",
          "html": "The ‘Edit Unit Configuration’ form displays with the item number populated. Enter a unique (1) <strong>Serial </strong><strong>Number</strong>, then change the drop-down from Actual to (2) <strong>Temporary</strong> and click the (3) <strong>Apply</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-100-p80.webp",
              "page": 80,
              "box": [
                52,
                184.5,
                413.571,
                316.54
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 80.",
              "width": 1206,
              "height": 441
            }
          ],
          "page": 80,
          "sourceParagraph": 697
        },
        {
          "number": 10,
          "sourceNumber": 10,
          "title": "Step 10",
          "text": "Click on the applicable first tier (1) node, then click the (2) Submit for Approval button.",
          "html": "Click on the applicable first tier (1)<strong> node</strong>, then click the (2) <strong>Submit for Approval</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-101-p80.webp",
              "page": 80,
              "box": [
                52,
                341.11,
                413.55100000000004,
                479.53
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 80.",
              "width": 1206,
              "height": 462
            }
          ],
          "page": 80,
          "sourceParagraph": 705
        },
        {
          "number": 11,
          "sourceNumber": 11,
          "title": "Edit Unit Configuration",
          "text": "The ‘Edit Unit Configuration’ form refreshes with the Unit Configuration Status as Complete.",
          "html": "The <strong>‘</strong>Edit Unit Configuration<strong>’</strong> form refreshes with the Unit Configuration Status as Complete.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-102-p80.webp",
              "page": 80,
              "box": [
                52,
                504.56,
                402.851,
                621.83
              ],
              "alt": "Annotated Oracle screenshot for source step 11, guide page 80.",
              "width": 1170,
              "height": 391
            }
          ],
          "page": 80,
          "sourceParagraph": 711
        }
      ],
      "prerequisites": [
        "Items exist in the database.",
        "A master configuration must exist in the database."
      ],
      "purpose": "Users can create unit configurations from master configurations.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        77,
        78,
        79,
        80
      ],
      "part": null,
      "summary": "Users can create unit configurations from master configurations.",
      "related": [
        "update-unit-configurations",
        "comprehensive-engine-management-system-creates-and-updates-the-unit-configuration"
      ]
    },
    {
      "id": "update-unit-configurations",
      "kind": "procedure",
      "title": "Update Unit Configurations",
      "sourceTitle": "Update Unit Configurations",
      "lesson": 1,
      "category": "Requesting and Inducting Items",
      "topic": "Inducting an Item",
      "sourceStart": 714,
      "sourceEnd": 730,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Search Unit",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User - Scheduler > (2) Configuration Management > (3) Unit Configuration > (4) Search Unit.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi</strong><strong> Complex </strong><strong>MRO</strong><strong> User</strong><strong> - Scheduler</strong> &gt; (2) <strong>Configuration Management</strong> &gt; (3) <strong>Unit </strong><strong>Configuration</strong> &gt; (4) <strong>Search Unit</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-103-p81.webp",
              "page": 81,
              "box": [
                52,
                280.85,
                390.731,
                410.43
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 81.",
              "width": 1130,
              "height": 432
            }
          ],
          "page": 81,
          "sourceParagraph": 720
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Search Unit Configuration",
          "text": "The ‘Search Unit Configuration’ form displays. Click the Go button.",
          "html": "The ‘Search Unit Configuration’ form displays. Click the <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-104-p81.webp",
              "page": 81,
              "box": [
                52,
                426.931,
                397.231,
                515.8299999999999
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 81.",
              "width": 1151,
              "height": 297
            }
          ],
          "page": 81,
          "sourceParagraph": 722
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "The Unit Configuration results display",
          "text": "The Unit Configuration results display. Scroll down to find the applicable Unit Configuration and click on the Edit icon.",
          "html": "The Unit Configuration results display. Scroll down to find the applicable Unit Configuration and click on the <strong>Edit</strong> icon.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-105-p82.webp",
              "page": 82,
              "box": [
                52,
                174.71000000000004,
                413.44100000000003,
                351.94
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 82.",
              "width": 1205,
              "height": 591
            }
          ],
          "page": 82,
          "sourceParagraph": 724
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Edit Unit Configuration",
          "text": "The ‘Edit Unit Configuration’ form displays. Click on the applicable (1) Position node and make updates as necessary. Click the (2) Apply button.",
          "html": "The ‘Edit Unit Configuration’ form displays. Click on the applicable (1) <strong>Position node</strong> and make updates as necessary. Click the (2) <strong>Apply</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-106-p82.webp",
              "page": 82,
              "box": [
                52,
                379.9,
                413.101,
                532.46
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 82.",
              "width": 1204,
              "height": 509
            }
          ],
          "page": 82,
          "sourceParagraph": 726
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Edit Unit Configuration",
          "text": "The ‘Edit Unit Configuration’ form refreshes with the updates populated.",
          "html": "The ‘Edit Unit Configuration’ form refreshes with the updates populated.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-107-p83.webp",
              "page": 83,
              "box": [
                52,
                163.40999999999997,
                412.851,
                390.96
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 83.",
              "width": 1203,
              "height": 759
            }
          ],
          "page": 83,
          "sourceParagraph": 728
        }
      ],
      "prerequisites": [
        "Items exist in the database.",
        "A master configuration must exist in the database."
      ],
      "purpose": "The steps below illustrate how to update unit configurations.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        81,
        82,
        83
      ],
      "part": null,
      "summary": "Update unit configurations.",
      "related": [
        "comprehensive-engine-management-system-creates-and-updates-the-unit-configuration",
        "create-maintenance-visits"
      ]
    },
    {
      "id": "comprehensive-engine-management-system-creates-and-updates-the-unit-configuration",
      "kind": "procedure",
      "title": "Comprehensive Engine Management System Creates and Updates the Unit Configuration",
      "sourceTitle": "Comprehensive Engine Management System Creates and Updates the Unit Configuration",
      "lesson": 1,
      "category": "Requesting and Inducting Items",
      "topic": "Inducting an Item",
      "sourceStart": 731,
      "sourceEnd": 757,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Service Order",
          "text": "On the Oracle Home page, navigate to (1) MROi Depot Repair > (2) Depot Repair > (3) Service Order.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Depot Repair</strong> &gt; (2) <strong>Depot Repair</strong> &gt; (3) <strong>Service Order</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-108-p84.webp",
              "page": 84,
              "box": [
                52,
                409.73,
                409.721,
                586.3199999999999
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 84.",
              "width": 1193,
              "height": 589
            }
          ],
          "page": 84,
          "sourceParagraph": 740
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-109-p85.webp",
              "page": 85,
              "box": [
                52,
                177.75,
                320.891,
                356.77
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 85.",
              "width": 897,
              "height": 597
            }
          ],
          "page": 85,
          "sourceParagraph": 742
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Service Requests",
          "text": "The ‘Find Service Requests’ form displays. Enter (either by scanning the DD Form 1348-1A EIDN barcode or manually typing) the (1) Service Order and then click the (2) Find button. The Results section expands with the request queried. Click the (3) OK button.",
          "html": "The ‘Find Service Requests’ form displays. Enter (either by scanning the DD Form 1348-1A EIDN barcode or manually typing) the (1) <strong>Service Order </strong>and then click the (2) <strong>Find</strong> button. The Results section expands with the request queried. Click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-110-p85.webp",
              "page": 85,
              "box": [
                52,
                413.01,
                301.051,
                633.48
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 85.",
              "width": 831,
              "height": 735
            }
          ],
          "page": 85,
          "sourceParagraph": 744
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Service Orders",
          "text": "The ‘Service Orders’ form displays. From the menu, select (1) Actions > (2) Update Unit Configuration to initiate the Update Unit Config. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the unit configuration. Click the (3) OK button.",
          "html": "The ‘Service Orders’ form displays. From the menu, select (1) <strong>Actions</strong> &gt; (2) <strong>Update Unit Config</strong><strong>uration</strong> to initiate the Update Unit Config. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the unit configuration. Click the (3) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: Make sure the Logistics Return Line Status is Received, and the Received End-Item issues out of inventory.",
              "html": "<em><strong>Note:</strong></em><em> Make sure the Logistics Return Line Status is Received, and the Received End-Item issues out of inventory. </em>",
              "type": "list"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-111-p86.webp",
              "page": 86,
              "box": [
                52,
                232.05999999999995,
                412.31100000000004,
                492.55
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 86.",
              "width": 1202,
              "height": 869
            }
          ],
          "page": 86,
          "sourceParagraph": 746
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Step 5",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User - Scheduler > (2) Configuration Management > (3) Unit Configuration > (4) Search Unit.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Complex MRO User</strong><strong> </strong><strong>-</strong><strong> </strong><strong>Scheduler </strong>&gt; (2) <strong>Configuration Management</strong> &gt; (3) <strong>Unit Configuration </strong>&gt;<strong> </strong>(4)<strong> Search Unit</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-112-p87.webp",
              "page": 87,
              "box": [
                52,
                189.04999999999995,
                411.411,
                354.86
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 87.",
              "width": 1199,
              "height": 553
            }
          ],
          "page": 87,
          "sourceParagraph": 749
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Search Unit Configuration",
          "text": "The ‘Search Unit Configuration’ form displays. Enter the (1) Unit Config Name (the name can be found on the Details tab under Instance). Click the (2) Go button.",
          "html": "The ‘Search Unit Configuration’ form displays. Enter the (1) <strong>Unit Config Name</strong> (the name can be found on the Details tab under Instance). Click the (2) <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-113-p87.webp",
              "page": 87,
              "box": [
                52,
                388.929,
                414.81100000000004,
                476.12
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 87.",
              "width": 1210,
              "height": 291
            }
          ],
          "page": 87,
          "sourceParagraph": 751
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "The form refreshes with the queried Unit Configuration",
          "text": "The form refreshes with the queried Unit Configuration. Click on the Unit Configuration hyperlink.",
          "html": "The form refreshes with the queried Unit Configuration. Click on the <strong>Unit Configuration</strong> hyperlink.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-114-p87.webp",
              "page": 87,
              "box": [
                52,
                510.256,
                414.81100000000004,
                614.56
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 87.",
              "width": 1210,
              "height": 348
            }
          ],
          "page": 87,
          "sourceParagraph": 753
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "The View Unit Configuration page displays",
          "text": "The View Unit Configuration page displays. Verify that the information displayed on the top node (serial number, item number, instance number) matches the information on the SO.",
          "html": "The View Unit Configuration page displays. Verify that the information displayed on the top node (serial number, item number, instance number) matches the information on the SO.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-115-p88.webp",
              "page": 88,
              "box": [
                52,
                186.01,
                414.81100000000004,
                313.5
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 88.",
              "width": 1210,
              "height": 425
            }
          ],
          "page": 88,
          "sourceParagraph": 755
        }
      ],
      "prerequisites": [
        "The MC already exists in MRO for the end-item. The structure of the unit configuration received from the Comprehensive Engine Management System (CEMS) will match the MC.",
        "The end item is received (i.e. the return line on the logistics tab has a status of received).",
        "The SO status matches the value of the profile option “MROi service order status for unit configuration update”.",
        "The inbound CEMS payload has been staged and matches with the existing MC data as well as the SO data (i.e. serial number, item, instance).",
        "Note: This can be ignored if testing in an instance with a trading partner connection. Instead, you will need to ensure that the CEMS payload being requested matches with the data existing in MRO (i.e. master config structure and item numbers)."
      ],
      "purpose": "The Comprehensive Engine Management System creates and updates the Unit Configuration form.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        84,
        85,
        86,
        87,
        88
      ],
      "part": null,
      "summary": "The Comprehensive Engine Management System creates and updates the Unit Configuration form.",
      "related": [
        "create-maintenance-visits",
        "send-misidentified-item-notification-df1"
      ]
    },
    {
      "id": "create-maintenance-visits",
      "kind": "procedure",
      "title": "Create Maintenance Visits",
      "sourceTitle": "Create Maintenance Visits",
      "lesson": 1,
      "category": "Requesting and Inducting Items",
      "topic": "Inducting an Item",
      "sourceStart": 758,
      "sourceEnd": 788,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Visits",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User – Scheduler > (2) Planning > (3) Visit Work Package > (4) Visits.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi</strong><strong> Complex MRO User – Scheduler</strong> &gt; (2)<strong> Planning</strong><strong> </strong>&gt;<strong> </strong>(3)<strong> Visit Work Package</strong> &gt; (4)<strong> </strong><strong>Visits</strong>. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-116-p89.webp",
              "page": 89,
              "box": [
                52,
                276.59,
                402.37100000000004,
                430.45
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 89.",
              "width": 1168,
              "height": 513
            }
          ],
          "page": 89,
          "sourceParagraph": 763
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Search Visits",
          "text": "The ‘Search Visits’ form displays. Click the Create button.",
          "html": "The ‘Search Visits’ form displays. Click the <strong>Create</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-117-p90.webp",
              "page": 90,
              "box": [
                52,
                161.89999999999998,
                412.461,
                357.31
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 90.",
              "width": 1202,
              "height": 652
            }
          ],
          "page": 90,
          "sourceParagraph": 765
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Create Visit",
          "text": "The ‘Create Visit’ form displays. Enter the (1) Visit Name. Enter (2) % in the Unit field and press the tab key.",
          "html": "The ‘Create Visit’ form displays. Enter the (1) <strong>Visit Name</strong>. Enter (2) <strong>% </strong>in the Unit field and press the tab key.",
          "details": [
            {
              "text": "Tip: The % wildcard can be used in the search tool to simulate any other character(s) in a string.",
              "html": "<em><strong>Tip:</strong></em><em> The % wildcard can be used in the search tool to simulate any other character(s) in a string</em>.",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-118-p90.webp",
              "page": 90,
              "box": [
                52,
                409.41999999999996,
                395.601,
                539.52
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 90.",
              "width": 1146,
              "height": 434
            }
          ],
          "page": 90,
          "sourceParagraph": 767
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Search and Select: Unit",
          "text": "The ‘Search and Select: Unit’ pop-up window appears. Click on the Quick Select icon of the applicable Unit.",
          "html": "The ‘Search and Select: Unit’ pop-up window appears. Click on the <strong>Quick Select</strong> icon of the applicable Unit.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-119-p91.webp",
              "page": 91,
              "box": [
                52,
                173.20000000000005,
                413.091,
                357.3
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 91.",
              "width": 1204,
              "height": 614
            }
          ],
          "page": 91,
          "sourceParagraph": 770
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Step 5",
          "text": "Enter the Visit Type (exact name) and press the tab key to populate the inquired Visit Type.",
          "html": "Enter the<strong> Visit Type </strong>(exact name) and press the tab key to populate the inquired Visit Type.",
          "details": [
            {
              "text": "Tip: Users can click on the search tool to search for results instead of pressing the tab key.",
              "html": "<em><strong>Tip</strong></em><em><strong>:</strong></em><em> User</em><em>s</em><em> can click</em><em> on</em><em> the </em><em>search tool</em><em> to search for results instead of pressing the tab key.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-120-p91.webp",
              "page": 91,
              "box": [
                52,
                409.33,
                413.38100000000003,
                527.37
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 91.",
              "width": 1205,
              "height": 394
            }
          ],
          "page": 91,
          "sourceParagraph": 772
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Search and Select: Organization",
          "text": "Enter (1) % in the Organization field and press the tab key. The ‘Search and Select: Organization’ pop-up window appears. Click on the (2) Quick Select icon of the applicable Organization.",
          "html": "Enter (1) <strong>%</strong> in the Organization field and press the tab key. The ‘Search and Select: Organization’ pop-up window appears. Click on the (2) <strong>Quick Select </strong>icon of the applicable Organization.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-121-p92.webp",
              "page": 92,
              "box": [
                52,
                184.49,
                413.421,
                352.85
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 92.",
              "width": 1205,
              "height": 562
            }
          ],
          "page": 92,
          "sourceParagraph": 775
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "Enter % in the Department field and press the tab key.",
          "text": "Enter % in the Department field and press the tab key.",
          "html": "Enter <strong>%</strong> in the Department field and press the tab key. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-122-p92.webp",
              "page": 92,
              "box": [
                52,
                366.24,
                413.021,
                485.07
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 92.",
              "width": 1204,
              "height": 397
            }
          ],
          "page": 92,
          "sourceParagraph": 777
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Search and Select: Department",
          "text": "The ‘Search and Select: Department’ pop-up window appears. Click on the Quick Select icon of the applicable Department.",
          "html": "The ‘Search and Select: Department’ pop-up window appears. Click on the <strong>Quick Select </strong>icon of the applicable Department.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-123-p93.webp",
              "page": 93,
              "box": [
                52,
                173.20000000000005,
                414.81100000000004,
                354.42
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 93.",
              "width": 1210,
              "height": 605
            }
          ],
          "page": 93,
          "sourceParagraph": 779
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "Search and Select: Project",
          "text": "Enter (1) % in the Project field and press the tab key. The ‘Search and Select: Project’ pop-up window appears. Click on the (2) Quick Select icon of the applicable Project.",
          "html": "Enter (1) <strong>%</strong> in the Project field and press the tab key. The ‘Search and Select: Project’ pop-up window appears. Click on the (2) <strong>Quick Select </strong>icon of the applicable Project.",
          "details": [
            {
              "text": "Note: Verify that the Project selected contains the same Production Number as the selected Visit Type.",
              "html": "<em><strong>Note:</strong></em><em><strong> </strong></em><em>Verify that the Project selected contains the same Production Number as the selected Visit Type.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-124-p93.webp",
              "page": 93,
              "box": [
                52,
                417.4,
                414.391,
                599.8
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 93.",
              "width": 1208,
              "height": 608
            }
          ],
          "page": 93,
          "sourceParagraph": 781
        },
        {
          "number": 10,
          "sourceNumber": 10,
          "title": "Step 10",
          "text": "Enter the (1) Start Date, (2) Planned End Date, and a (3) Description, then click the (4) Apply button.",
          "html": "Enter the (1) <strong>Start Date</strong>,<strong> </strong>(2)<strong> Planned End Date</strong>,<strong> </strong>and a (3) <strong>Description</strong>,<strong> </strong>then click the (4) <strong>Apply</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-125-p94.webp",
              "page": 94,
              "box": [
                52,
                173.19000000000005,
                411.781,
                291.5
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 94.",
              "width": 1200,
              "height": 395
            }
          ],
          "page": 94,
          "sourceParagraph": 784
        },
        {
          "number": 11,
          "sourceNumber": 11,
          "title": "Update Visit",
          "text": "The ‘Update Visit’ form displays the newly created visit including a system generated Visit Number and with the Visit Status reflecting: Draft.",
          "html": "The ‘Update Visit’ form displays the newly created visit including a system generated Visit Number and with the Visit Status reflecting: Draft.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-126-p94.webp",
              "page": 94,
              "box": [
                52,
                318.09000000000003,
                414.461,
                466.86
              ],
              "alt": "Annotated Oracle screenshot for source step 11, guide page 94.",
              "width": 1209,
              "height": 496
            }
          ],
          "page": 94,
          "sourceParagraph": 786
        }
      ],
      "prerequisites": [
        "Not Applicable (N/A)"
      ],
      "purpose": "Users can create a maintenance visit (for a customer work package) in cMRO. Only individuals who have authority will create or update the visit based on approved user role.",
      "role": "MROi Scheduler",
      "mvp": "4.1",
      "pages": [
        89,
        90,
        91,
        92,
        93,
        94
      ],
      "part": null,
      "summary": "Users can create a maintenance visit (for a customer work package) in cMRO. Only individuals who have authority will create or update the visit based on approved user role.",
      "related": [
        "send-misidentified-item-notification-df1",
        "create-an-item-instance"
      ]
    },
    {
      "id": "send-misidentified-item-notification-df1",
      "kind": "procedure",
      "title": "Send Misidentified Item Notification (DF1)",
      "sourceTitle": "Send Misidentified Item Notification (DF1)",
      "lesson": 1,
      "category": "Requesting and Inducting Items",
      "topic": "Inducting an Item",
      "sourceStart": 789,
      "sourceEnd": 816,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Service Order",
          "text": "On the Oracle Home page, navigate to (1) MROi Depot Repair > (2) Depot Repair > (3) Service Order.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Depot Repair</strong> &gt; (2) <strong>Depot Repair</strong><strong> </strong>&gt; (3) <strong>Service</strong><strong> Order</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-127-p95.webp",
              "page": 95,
              "box": [
                52,
                283.34000000000003,
                395.81100000000004,
                522.35
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 95.",
              "width": 1147,
              "height": 797
            }
          ],
          "page": 95,
          "sourceParagraph": 793
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-128-p96.webp",
              "page": 96,
              "box": [
                52,
                173.20000000000005,
                279.101,
                324.86
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 96.",
              "width": 758,
              "height": 506
            }
          ],
          "page": 96,
          "sourceParagraph": 795
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Service Requests",
          "text": "The ‘Find Service Requests’ form displays. Enter (either by scanning the DD Form 1348-1A End Item Document Number (EIDN) barcode or manually typing) the (1) Service Order and then click the (2) Find button. The Results section expands with the request queried. Click the (3) OK button.",
          "html": "The ‘Find Service Requests’ form displays. Enter (either by scanning the DD Form 1348-1A End Item Document Number (EIDN) barcode or manually typing) the (1) <strong>Service Order </strong>and then click the (2) <strong>Find</strong> button. The Results section expands with the request queried. Click the (3) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: You will be unable to perform this JA on SOs that were previously used to send DF1. The service order number is the EIDN received from D035K.",
              "html": "<em><strong>Note:</strong></em><em> You will be unable to perform this </em><em>JA</em><em> on </em><em>SOs that were previously used to send DF1. The service order number is the EIDN received from D035K.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-129-p96.webp",
              "page": 96,
              "box": [
                52,
                399.15999999999997,
                358.331,
                641.96
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 96.",
              "width": 1022,
              "height": 810
            }
          ],
          "page": 96,
          "sourceParagraph": 797
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Service Orders",
          "text": "The ‘Service Orders’ form displays. Refresh the SO by pressing F11 on the keyboard, then in the SO Num field paste or enter the Service Order Number. Press Ctrl + F11 on the keyboard to populate all fields for the SO.",
          "html": "The ‘Service Orders’ form displays. Refresh the SO by pressing F11 on the keyboard, then in the SO Num field paste or enter the <strong>Service Order Number</strong>. Press Ctrl + F11 on the keyboard to populate all fields for the SO.",
          "details": [
            {
              "text": "Note: On some keyboards users may have to press fn + F11 and Ctrl + fn + F11 respectively to execute refreshing the SO.",
              "html": "<em><strong>Note:</strong></em><em> On some keyboards users may have to press fn + F11 and Ctrl + fn + F11 respectively to execute refreshing the SO.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-130-p97.webp",
              "page": 97,
              "box": [
                52,
                211.64999999999998,
                413.74100000000004,
                463.24
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 97.",
              "width": 1206,
              "height": 839
            }
          ],
          "page": 97,
          "sourceParagraph": 799
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Service Orders",
          "text": "The ‘Service Orders’ form displays. Click on the (1) SO Num, then click the (2) Logistics tab. Click on the (3) Return line and scroll to the right and click the (4) Repair Order Product Transactions DFF between ‘Picking Rule’ and ‘Add to Order’ fields.",
          "html": "The ‘Service Orders’ form displays. Click on the (1) <strong>SO Num</strong>, then click the (2) <strong>Logistics</strong> tab. Click on the (3) <strong>Return</strong> line and scroll to the right and click the (4) <strong>Repair Order Product Transactions </strong>DFF between ‘Picking Rule’ and ‘Add to Order’ fields.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-131-p98.webp",
              "page": 98,
              "box": [
                52,
                184.5,
                405.701,
                427.98
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 98.",
              "width": 1180,
              "height": 812
            }
          ],
          "page": 98,
          "sourceParagraph": 802
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Repair Order Product Transactions",
          "text": "The ‘Repair Order Product Transactions’ pop-up window appears. Enter, or select from the applicable LOV, the following values:",
          "html": "The ‘Repair Order Product Transactions’ pop-up window appears. Enter, or select from the applicable LOV, the following values:",
          "details": [
            {
              "text": "Advice Code: (1) T",
              "html": "Advice Code: (1) <strong>T</strong> ",
              "type": "list"
            },
            {
              "text": "Misidentified Induction?: (2) Yes",
              "html": "Misidentified Induction?: (2) <strong>Yes</strong>",
              "type": "list"
            },
            {
              "text": "Wash Post?: (3) No",
              "html": "Wash Post?: (3)<strong> No</strong>",
              "type": "list"
            },
            {
              "text": "Comments: (4) User determined (optional field)",
              "html": "Comments: (4) <strong>User determined </strong>(optional field)",
              "type": "list"
            },
            {
              "text": "Click the (5) OK button, then click the (6) Save icon.",
              "html": "Click the (5) <strong>OK </strong>button, then click the (6) <strong>Save </strong>icon.",
              "type": "paragraph"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-132-p99.webp",
              "page": 99,
              "box": [
                52,
                241.26,
                405.80100000000004,
                485.2
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 99.",
              "width": 1180,
              "height": 814
            }
          ],
          "page": 99,
          "sourceParagraph": 804
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "Note",
          "text": "From the menu, select (1) Actions > (2) Send Misidentified EI Signal (DF1) to initiate the DF1 Outbound interface. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) OK button.",
          "html": "From the menu, select (1) <strong>Actions</strong><strong> </strong>&gt; (2) <strong>Send Misidentified EI Signal (DF1)</strong> to initiate the DF1 Outbound interface. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-133-p100.webp",
              "page": 100,
              "box": [
                52,
                195.79999999999995,
                399.75100000000003,
                436.55
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 100.",
              "width": 1160,
              "height": 803
            }
          ],
          "page": 100,
          "sourceParagraph": 811
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Service Orders",
          "text": "On the ‘Service Orders’ form, refresh the SO by pressing the Ctrl + F11 keys on the keyboard. Then click on the (1) Service Order DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Confirm the information populates then click the (2) OK button.",
          "html": "On the ‘Service Orders’ form, refresh the SO by pressing the Ctrl + F11 keys on the keyboard. Then click on the (1) <strong>Service Order </strong>DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Confirm the information populates then click the (2) <strong>OK</strong> button. ",
          "details": [
            {
              "text": "Note: For informational awareness but not systematically required, Schedulers may confirm that the following automated values are populated: Interface Transaction Type: DF1O (DF1Outbound) and Interface Transaction Status: S (Success).",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> </em><em>For informational awareness but not systematically required, Schedulers may confirm that the following automated values are populated:</em><em> </em><em>Interface Transaction Type: D</em><em>F1O</em><em> (D</em><em>F1</em><em>Outbound) and Interface Transaction Status: S (Success).</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-134-p101.webp",
              "page": 101,
              "box": [
                52,
                234.26,
                395.19100000000003,
                471.22
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 101.",
              "width": 1144,
              "height": 790
            }
          ],
          "page": 101,
          "sourceParagraph": 813
        }
      ],
      "prerequisites": [
        "An SR and SO are created with D035K as the customer, the SO return line status is Received, and the Receipt Acknowledgement interface has been sent (i.e. RA CL sent to D035K)."
      ],
      "purpose": "Schedulers can send a DF1 Outbound Interface from the SO form. This transaction lets D035K know that the end-item is incorrect and is misidentified, which can then be marked as rejected or accepted by D035K.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        95,
        96,
        97,
        98,
        99,
        100,
        101
      ],
      "part": null,
      "summary": "Schedulers can send a DF1 Outbound Interface from the SO form. This transaction lets D035K know that the end-item is incorrect and is misidentified, which can then be marked as rejected or accepted by D035K.",
      "related": [
        "create-an-item-instance",
        "send-d7-wash-post-outbound-transaction-to-d035k"
      ]
    },
    {
      "id": "create-an-item-instance",
      "kind": "procedure",
      "title": "Create an Item Instance",
      "sourceTitle": "Create an Item Instance",
      "lesson": 1,
      "category": "Requesting and Inducting Items",
      "topic": "Inducting an Item",
      "sourceStart": 817,
      "sourceEnd": 828,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Create Product",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User – Scheduler > (2) Configuration Management > (3) Unit Configuration > (4) Create Product.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Complex MRO User – </strong><strong>Scheduler</strong> &gt; (2) <strong>Configuration Management</strong> &gt; (3) <strong>Unit Configuration</strong> &gt; (4) <strong>Create Product</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-135-p102.webp",
              "page": 102,
              "box": [
                52,
                247.91000000000008,
                372.171,
                381.97
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 102.",
              "width": 1068,
              "height": 447
            }
          ],
          "page": 102,
          "sourceParagraph": 821
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Create Item Instance",
          "text": "The ‘Create Item Instance’ form displays. Enter the (1) Organization Name, (2) Item, (3) Serial Number, (4) Status, (5) Party Name, (6) Account Number, (7) Type, and (8) Line 1 Address. Click the (9) Submit button.",
          "html": "The ‘Create Item Instance’ form displays. Enter the (1) <strong>Organization Name</strong>, (2) <strong>Item</strong>, (3) <strong>Serial Number</strong>, (4) <strong>Status</strong>, (5) <strong>Party Name</strong>, (6) <strong>Account</strong><strong> Number</strong>, (7) <strong>Type</strong>, and (8) <strong>Line 1</strong><strong> </strong>Address. Click the (9) <strong>Submit</strong> button.",
          "details": [
            {
              "text": "Note: Searching and selecting the Account Number first will auto-populate the Party Name and Party Number. If the Serial Number field doesn’t populate, enter your own unique Serial Number. The Item Description field auto-populates after filling in the Item Field.",
              "html": "<em><strong>Note:</strong></em><em> Searching and selecting the Account Number first will auto-populate the Party Name and Party Number.</em><em> If the Serial Number field doesn’t populate, enter your own unique Serial Number. The Item Description field auto-populates after filling in the Item Field.</em>",
              "type": "list"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-136-p102.webp",
              "page": 102,
              "box": [
                52,
                466.73,
                414.81100000000004,
                644
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 102.",
              "width": 1210,
              "height": 591
            }
          ],
          "page": 102,
          "sourceParagraph": 823
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Item Instance Details",
          "text": "The ‘Item Instance Details’ form displays with the ‘Confirmation’ banner stating the item instance is created successfully.",
          "html": "The ‘Item Instance Details’ form displays with the ‘Confirmation’ banner stating the item instance is created successfully. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-137-p103.webp",
              "page": 103,
              "box": [
                52,
                173.19000000000005,
                414.81100000000004,
                335.63
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 103.",
              "width": 1210,
              "height": 542
            }
          ],
          "page": 103,
          "sourceParagraph": 826
        }
      ],
      "prerequisites": [
        "Items exist in the database."
      ],
      "purpose": "The steps below illustrate how to create an item instance.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        102,
        103
      ],
      "part": null,
      "summary": "Create an item instance.",
      "related": [
        "send-d7-wash-post-outbound-transaction-to-d035k",
        "auto-create-visit-process"
      ]
    },
    {
      "id": "send-d7-wash-post-outbound-transaction-to-d035k",
      "kind": "procedure",
      "title": "Send D7 Wash Post Outbound Transaction to D035K (non-engine)",
      "sourceTitle": "Send D7 Wash Post Outbound Transaction to D035K",
      "lesson": 1,
      "category": "Requesting and Inducting Items",
      "topic": "Inducting an Item",
      "sourceStart": 829,
      "sourceEnd": 867,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Service Order",
          "text": "On the Oracle Home page, navigate to (1) MROi Depot Repair > (2) Depot Repair > (3) Service Order.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Depot Repair</strong> &gt; (2) <strong>Depot Repair </strong>&gt; (3) <strong>Service Order</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-138-p104.webp",
              "page": 104,
              "box": [
                52,
                313.85,
                416.701,
                474.39
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 104.",
              "width": 1216,
              "height": 536
            }
          ],
          "page": 104,
          "sourceParagraph": 836
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-139-p104.webp",
              "page": 104,
              "box": [
                52,
                498.92,
                252.68099999999998,
                644
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 104.",
              "width": 669,
              "height": 484
            }
          ],
          "page": 104,
          "sourceParagraph": 838
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Service Requests",
          "text": "The ‘Find Service Requests’ form displays. Enter the (1) Service Order Number, then click the (2) Find button. The results display in the Results section, then click the (3) OK button.",
          "html": "The ‘Find Service Requests’ form displays. Enter the (1) <strong>Service Order </strong>Number, then click the (2) <strong>Find</strong> button. The results display in the Results section, then click the (3) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: You will be unable to perform this JA on SOs that were previously used to send D7 WP.",
              "html": "<em><strong>Note:</strong></em><em> You will be unable to perform this JA on SOs that were previously used to send D7 WP.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-140-p105.webp",
              "page": 105,
              "box": [
                52,
                211.64999999999998,
                306.88100000000003,
                414.99
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 105.",
              "width": 850,
              "height": 678
            }
          ],
          "page": 105,
          "sourceParagraph": 840
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Service Orders",
          "text": "The ‘Service Orders’ form displays. Refresh the form by pressing the Ctrl + F11 keys on the keyboard and paste the (1) Service Order Number in the SO Num field. To requery the SO press the Ctrl + F11 keys on the keyboard.",
          "html": "The ‘Service Orders’ form displays. Refresh the form by pressing the Ctrl + F11 keys on the keyboard and paste the (1) <strong>Service Order Number</strong> in the SO Num field. To requery the SO press the Ctrl + F11 keys on the keyboard.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-141-p105.webp",
              "page": 105,
              "box": [
                52,
                451.28,
                311.75100000000003,
                633.2
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 105.",
              "width": 866,
              "height": 607
            }
          ],
          "page": 105,
          "sourceParagraph": 843
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Ship Only.",
          "text": "The appropriate Service Order displays. Verify that the Service Type reflects ‘Ship Only.’ Click on the (1) Service Order DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Verify that The Wash Posted From and Wash Post Type fields are populated with the correct information. Click the (2) [X] to close the ‘Repair Orders’ window.",
          "html": "The appropriate Service Order displays. Verify that the Service Type reflects ‘Ship Only.’ Click on the (1) <strong>Service Order </strong>DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Verify that The Wash Posted From and Wash Post Type fields are populated with the correct information. Click the (2) <strong>[X]</strong> to close the ‘Repair Orders’ window.",
          "details": [
            {
              "text": "Note: Verify that the correct Serial Number of the SO that is being Wash Posted From is populated on the Details tab.",
              "html": "<em><strong>Note:</strong></em><em> </em><em>Verify that the </em><em>correct </em><em>Serial Number of the SO that is being Wash Posted From is populated on the Details tab.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-142-p106.webp",
              "page": 106,
              "box": [
                52,
                234.26,
                315.521,
                411.76
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 106.",
              "width": 879,
              "height": 592
            }
          ],
          "page": 106,
          "sourceParagraph": 844
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Click on the (1) Logistics tab",
          "text": "Click on the (1) Logistics tab. On the return line, scroll to the right and click in the (2) Repair Order Product Transactions DFF.",
          "html": "Click on the (1) <strong>Logistics</strong> tab. On the return line, scroll to the right and click in the (2) <strong>Repair Order Product Transactions </strong>DFF.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-143-p106.webp",
              "page": 106,
              "box": [
                52,
                436.4,
                332.791,
                633.37
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 106.",
              "width": 936,
              "height": 657
            }
          ],
          "page": 106,
          "sourceParagraph": 847
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "Repair Order Product Transactions",
          "text": "The ‘Repair Order Product Transactions’ pop-up window appears. Enter (1) % in the Interface Partner field and press the enter key. The ‘Context Value’ pop-up window appears. Select (2) D035K and click the (3) OK button.",
          "html": "The ‘Repair Order Product Transactions’ pop-up window appears. Enter (1) <strong>%</strong> in the Interface Partner field and press the enter key. The ‘Context Value’ pop-up window appears. Select (2) <strong>D035K </strong>and click the (3) <strong>OK</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-144-p107.webp",
              "page": 107,
              "box": [
                52,
                184.5,
                393.851,
                410.42
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 107.",
              "width": 1140,
              "height": 754
            }
          ],
          "page": 107,
          "sourceParagraph": 849
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Repair Orders Product Transactions",
          "text": "The ‘Repair Orders Product Transactions’ pop-up window appears again. Enter a Supply Condition Code of (1) F (Unserviceable, but reparable). Click the (2) OK button, then click on the (3) Save icon.",
          "html": "The ‘Repair Orders Product Transactions’ pop-up window appears again. Enter a Supply Condition Code of (1) <strong>F</strong> (Unserviceable, but reparable). Click the (2) <strong>OK</strong> button, then click on the (3) <strong>Save</strong> icon.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-145-p107.webp",
              "page": 107,
              "box": [
                52,
                446.26,
                320.541,
                632.79
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 107.",
              "width": 896,
              "height": 622
            }
          ],
          "page": 107,
          "sourceParagraph": 851
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "Note",
          "text": "From the menu, select (1) Actions > (2) Wash Post Induction Signal (D7WP) to initiate the D7WP Outbound. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) OK button.",
          "html": "From the menu, select (1) <strong>Actions</strong> &gt; (2) <strong>Wash Post Induction Signal</strong><strong> (D7WP)</strong> to initiate the D7WP Outbound. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-146-p108.webp",
              "page": 108,
              "box": [
                52,
                184.49,
                335.50100000000003,
                381.89
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 108.",
              "width": 946,
              "height": 658
            }
          ],
          "page": 108,
          "sourceParagraph": 853
        },
        {
          "number": 10,
          "sourceNumber": 10,
          "title": "From the menu, select (1) View > (2) Requests.",
          "text": "From the menu, select (1) View > (2) Requests.",
          "html": "From the menu, select (1) <strong>View</strong> &gt; (2) <strong>Requests</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-147-p108.webp",
              "page": 108,
              "box": [
                52,
                395.15,
                339.421,
                594.85
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 108.",
              "width": 959,
              "height": 666
            }
          ],
          "page": 108,
          "sourceParagraph": 855
        },
        {
          "number": 11,
          "sourceNumber": 11,
          "title": "Find Requests",
          "text": "The ‘Find Requests’ pop-up window appears with the All My Requests radio button defaulted. Click the Find button to view the list of recently run concurrent requests.",
          "html": "The ‘Find Requests’ pop-up window appears with the All My Requests radio button defaulted. Click the <strong>Find</strong> button to view the list of recently run concurrent requests.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-148-p109.webp",
              "page": 109,
              "box": [
                52,
                184.5,
                281.801,
                364.35
              ],
              "alt": "Annotated Oracle screenshot for source step 11, guide page 109.",
              "width": 767,
              "height": 600
            }
          ],
          "page": 109,
          "sourceParagraph": 857
        },
        {
          "number": 12,
          "sourceNumber": 12,
          "title": "The Requests page displays with a list of recently launched concurrent requests",
          "text": "The Requests page displays with a list of recently launched concurrent requests. Select the applicable (1) Request Identification (ID) of the request launched in step 7. Confirm that the Phase reflects: Completed. Click the (2) View Log button.",
          "html": "The Requests page displays with a list of recently launched concurrent requests. Select the applicable (1) <strong>Request </strong><strong>Identification (</strong><strong>ID</strong><strong>)</strong> of the request launched in step 7. Confirm that the Phase reflects: Completed. Click the (2) <strong>View Log</strong> button.",
          "details": [
            {
              "text": "Note: Verify that the Parameters associated to the Request is accurate when viewing the Log File.",
              "html": "<em><strong>Note:</strong></em><em><strong> </strong></em><em>Verify that the Parameters associated to the Request is accurate when viewing the Log File.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-149-p109.webp",
              "page": 109,
              "box": [
                52,
                427.38,
                307.341,
                630.8
              ],
              "alt": "Annotated Oracle screenshot for source step 12, guide page 109.",
              "width": 852,
              "height": 679
            }
          ],
          "page": 109,
          "sourceParagraph": 859
        },
        {
          "number": 13,
          "sourceNumber": 13,
          "title": "The output file opens in a new window as HTML",
          "text": "The output file opens in a new window as HTML. Verify there are no error messages contained within the Message Status tag, and it reflects: SUCCESS throughout.",
          "html": "The output file opens in a new window as HTML. Verify there are no error messages contained within the Message Status tag, and it reflects: SUCCESS throughout.",
          "details": [
            {
              "text": "Note: Users may want to copy the MILSTRIP Message for later use.",
              "html": "<em><strong>Note:</strong></em><em> Users may want to copy the MILSTRIP Message for later use.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-150-p110.webp",
              "page": 110,
              "box": [
                52,
                200.35000000000002,
                380.81100000000004,
                338.12
              ],
              "alt": "Annotated Oracle screenshot for source step 13, guide page 110.",
              "width": 1097,
              "height": 460
            }
          ],
          "page": 110,
          "sourceParagraph": 862
        },
        {
          "number": 14,
          "sourceNumber": 14,
          "title": "Service Orders",
          "text": "Return to the ‘Service Orders’ form. Refresh the SO by pressing Ctrl + F11 on the keyboard, then click on the (1) Service Order DFF at the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Verify that the following values are populated as follows: Interface Transaction Type: D7WP (D7WP Outbound) and Interface Transaction Status: S (Success). Then click the (2) [X] to close the ‘Repair Orders’ window.",
          "html": "Return to the ‘Service Orders’ form. Refresh the SO by pressing Ctrl + F11 on the keyboard, then click on the (1) <strong>Service Order</strong> DFF at the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Verify that the following values are populated as follows: Interface Transaction Type: D7WP (D7WP Outbound) and Interface Transaction Status: S (Success). Then click the (2) <strong>[X]</strong> to close the ‘Repair Orders’ window.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-151-p110.webp",
              "page": 110,
              "box": [
                52,
                407.87,
                352.081,
                616.65
              ],
              "alt": "Annotated Oracle screenshot for source step 14, guide page 110.",
              "width": 1001,
              "height": 696
            }
          ],
          "page": 110,
          "sourceParagraph": 865
        }
      ],
      "prerequisites": [
        "An SR exists with an end-item type that is not engine, and an SO number is associated with a service type of Ship Only or WP.",
        "The Wash Posted From and Wash Post Condition Code DFF segments are populated on the SO, where Wash Posted From is an existing SO on another SR.",
        "The SO’s Logistics ship line status has not been shipped and reflects “Booked.”"
      ],
      "purpose": "Users can send a D7WP to D035K",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        104,
        105,
        106,
        107,
        108,
        109,
        110
      ],
      "part": null,
      "summary": "Users can send a D7WP to D035K",
      "related": [
        "auto-create-visit-process",
        "service-order-status-report"
      ]
    },
    {
      "id": "auto-create-visit-process",
      "kind": "procedure",
      "title": "Auto Create Visit Process",
      "sourceTitle": "Auto Create Visit Process",
      "lesson": 1,
      "category": "Requesting and Inducting Items",
      "topic": "Inducting an Item",
      "sourceStart": 868,
      "sourceEnd": 933,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Service Order",
          "text": "On the Oracle Home page, navigate to (1) MROi Depot Repair > (2) Depot Repair > (3) Service Order.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Depot Repair </strong>&gt; (2) <strong>Depot Repair</strong> &gt; (3)<strong> Service Order</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-152-p112.webp",
              "page": 112,
              "box": [
                52,
                177.75,
                414.43100000000004,
                350.31
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 112.",
              "width": 1209,
              "height": 576
            }
          ],
          "page": 112,
          "sourceParagraph": 876
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-153-p112.webp",
              "page": 112,
              "box": [
                52,
                384.46000000000004,
                256.571,
                537.1800000000001
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 112.",
              "width": 682,
              "height": 510
            }
          ],
          "page": 112,
          "sourceParagraph": 884
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Service Requests",
          "text": "The ‘Find Service Requests’ form displays. Enter (either by scanning the 1348 EIDN barcode or manually typing) the (1) Service Order number. Click the (2) Find button. The results populate in the Results section, then click (3) OK button.",
          "html": "The ‘Find Service Requests’ form displays. Enter (either by scanning the 1348 EIDN barcode or manually typing) the (1) <strong>Service Order </strong>number. Click the (2) <strong>Find</strong> button. The results populate in the Results section, then click (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-154-p113.webp",
              "page": 113,
              "box": [
                52,
                189.04999999999995,
                307.231,
                393.29
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 113.",
              "width": 851,
              "height": 681
            }
          ],
          "page": 113,
          "sourceParagraph": 890
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Service Orders",
          "text": "The ‘Service Orders’ form displays. On the right, scroll down using the sidebar to locate and select the appropriate (1) Service Order number. Click on the (2) Logistics tab and verify that the Return line Status reflects Received.",
          "html": "The ‘Service Orders’ form displays. On the right, scroll down using the sidebar to locate and select the appropriate (1) <strong>Service Order</strong> number. Click on the (2) <strong>Logistics</strong> tab and verify that the Return line Status reflects Received. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-155-p113.webp",
              "page": 113,
              "box": [
                52,
                438.25,
                347.331,
                642.65
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 113.",
              "width": 985,
              "height": 682
            }
          ],
          "page": 113,
          "sourceParagraph": 898
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Step 5",
          "text": "Once the item is received, from the menu, select (1) Actions > (2) Auto Create Visit Flow.",
          "html": "Once the item is received, from the menu, select (1) <strong>Actions</strong> &gt; (2) <strong>Auto Create Visit Flow</strong>.",
          "details": [
            {
              "text": "Note: Verify that RA Clear is sent out before executing ACV process, if applicable. View Step 18 of Job Aid: MRO_TRN_JA-0010_End-Item Induction (MISTR).",
              "html": "<em><strong>Note:</strong></em><em> </em><em>Verify that RA Clear is sent out before executing ACV process, if applicable. View</em><em> Step 18 of Job Aid: MRO_TRN_JA-0010_End-Item Induction (MISTR).</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-156-p114.webp",
              "page": 114,
              "box": [
                52,
                202.755,
                329.61100000000005,
                400.58
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 114.",
              "width": 926,
              "height": 660
            }
          ],
          "page": 114,
          "sourceParagraph": 904
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Auto Create Visit Flow",
          "text": "The ‘Auto Create Visit Flow’ pop-up window appears. Click the Submit button to generate the Automated Visit Process.",
          "html": "The ‘Auto Create Visit Flow’ pop-up window appears. Click the <strong>Submit</strong> button to generate the Automated Visit Process.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-157-p114.webp",
              "page": 114,
              "box": [
                52,
                434.37,
                293.13100000000003,
                617.87
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 114.",
              "width": 804,
              "height": 612
            }
          ],
          "page": 114,
          "sourceParagraph": 911
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "Auto Create Visit Flow",
          "text": "The ‘Auto Create Visit Flow’ will process and generate a Success status for the Fund Check and Issue End Item Out stages. Click the Refresh button until the Unit Configuration stage has a Success or Warning status. If a Warning status displays proceed to the next step.",
          "html": "The ‘Auto Create Visit Flow’ will process and generate a Success status for the Fund Check and Issue End Item Out stages. Click the <strong>Refresh</strong> button until the Unit Configuration stage has a Success or Warning status. If a Warning status displays proceed to the next step.",
          "details": [
            {
              "text": "Note: If there is an error within the ACV process, the description for the Error status will be displayed in the Process Summary Log.",
              "html": "<em><strong>Note:</strong></em><em> If there is an error within the ACV process, the description for the Error status will </em><em>be displayed</em><em> in the Process Summary Log.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-158-p115.webp",
              "page": 115,
              "box": [
                52,
                232.05999999999995,
                306.581,
                423.94
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 115.",
              "width": 849,
              "height": 640
            }
          ],
          "page": 115,
          "sourceParagraph": 915
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Step 8",
          "text": "Once the Unit Configuration generates a Warning status, enable the (1) Skip Current Step check box and then click the (2) Submit button.",
          "html": "Once the Unit Configuration generates a Warning status, enable the (1) <strong>Skip Current Step</strong> check box and then click the (2) <strong>Submit</strong> button.",
          "details": [
            {
              "text": "Note: The description for the Warning status is displayed in the Process Summary Log.",
              "html": "<em><strong>Note:</strong></em><em> The description for the Warning status is </em><em>displayed</em><em> in the Process Summary Log.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-159-p116.webp",
              "page": 116,
              "box": [
                52,
                198.15999999999997,
                326.36100000000005,
                404.45
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 116.",
              "width": 915,
              "height": 688
            }
          ],
          "page": 116,
          "sourceParagraph": 920
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "Auto Create Visit Flow",
          "text": "The ‘Auto Create Visit Flow’ window will process and generate a Skip status for the Unit Configuration stage. Click the Refresh button until the Create/Validate Visit stage has a Success status.",
          "html": "The ‘Auto Create Visit Flow’ window will process and generate a Skip status for the Unit Configuration stage. Click the <strong>Refresh</strong> button until the Create/Validate Visit stage has a Success status.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-160-p116.webp",
              "page": 116,
              "box": [
                52,
                449.4,
                307.801,
                641.85
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 116.",
              "width": 853,
              "height": 642
            }
          ],
          "page": 116,
          "sourceParagraph": 927
        },
        {
          "number": 10,
          "sourceNumber": 10,
          "title": "Auto Create Visit Flow",
          "text": "Verify that the ‘Auto Create Visit Flow’ window contains a Success status for the following stages and that the Unit Configuration step was Skipped appropriately.",
          "html": "Verify that the ‘Auto Create Visit Flow’ window contains a Success status for the following stages and that the Unit Configuration step was Skipped appropriately.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-161-p117.webp",
              "page": 117,
              "box": [
                52,
                177.75,
                284.651,
                351.34
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 117.",
              "width": 776,
              "height": 579
            }
          ],
          "page": 117,
          "sourceParagraph": 931
        }
      ],
      "prerequisites": [
        "A project was created with an agreement that has baseline funding associated with the Program Control Number on the SR.",
        "The end-item was physically received within MRO (the SO return line status reflects received).",
        "Verify that RA CL is sent out before executing the Auto Create Visit (ACV) process if applicable - View step 18 of Job Aid: MRO_TRN_JA-0010_End-Item Induction (MISTR).",
        "The items Project Order item category was on the End-Item Sales Price list."
      ],
      "purpose": "An MROi Scheduler logs into the Oracle MROi Conversion Manager responsibility and receives a SO to activate the ACV process.",
      "role": "MROi Scheduler",
      "mvp": "4.2",
      "pages": [
        112,
        113,
        114,
        115,
        116,
        117
      ],
      "part": null,
      "summary": "An MROi Scheduler logs into the Oracle MROi Conversion Manager responsibility and receives a SO to activate the ACV process.",
      "related": [
        "service-order-status-report"
      ]
    },
    {
      "id": "service-order-status-report",
      "kind": "procedure",
      "title": "Service Order Status Report",
      "sourceTitle": "Service Order Status Report",
      "lesson": 1,
      "category": "Requesting and Inducting Items",
      "topic": "Inducting an Item",
      "sourceStart": 934,
      "sourceEnd": 1007,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Run",
          "text": "On the Oracle Home page, navigate to (1) MROi Reports Manager > (2) Run.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Reports Manager</strong> &gt; (2) <strong>Run</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-162-p118.webp",
              "page": 118,
              "box": [
                52,
                256.59015999999997,
                387.711,
                447.99
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 118.",
              "width": 1120,
              "height": 638
            }
          ],
          "page": 118,
          "sourceParagraph": 939
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-163-p119.webp",
              "page": 119,
              "box": [
                52,
                174.71000000000004,
                310.801,
                364.43
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 119.",
              "width": 863,
              "height": 633
            }
          ],
          "page": 119,
          "sourceParagraph": 945
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Submit a New Request",
          "text": "The ‘Submit a New Request’ pop-up window appears with the Single Request radio button defaulted. Click the OK button.",
          "html": "The ‘Submit a New Request’ pop-up window appears with the Single Request radio button defaulted. Click the <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-164-p119.webp",
              "page": 119,
              "box": [
                52,
                392.43,
                263.101,
                564.12
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 119.",
              "width": 704,
              "height": 573
            }
          ],
          "page": 119,
          "sourceParagraph": 951
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Submit Request",
          "text": "The ‘Submit Request’ form displays. In the Name field, enter (1) % and press the tab key. The ‘Reports’ pop-up window appears. Select the (2) MRO SO Status Report, then click the (3) OK button.",
          "html": "The ‘Submit Request’ form displays. In the Name field, enter (1) <strong>%</strong> and press the tab key. The ‘Reports’ pop-up window appears. Select the (2) <strong>MRO SO Status Report</strong>, then click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-165-p120.webp",
              "page": 120,
              "box": [
                52,
                184.5,
                412.731,
                457.430030518
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 120.",
              "width": 1203,
              "height": 910
            }
          ],
          "page": 120,
          "sourceParagraph": 955
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Parameters",
          "text": "Click into the (1) Parameters field and the ‘Parameters’ pop-up window appears. In the Air Logistics Center (ALC) field, enter the appropriate (2) ALC. Select the approximate (3) Induction Start Date and Induction End Date to search for. Click the (4) OK button.",
          "html": "Click into the (1) <strong>Parameters</strong> field and the ‘Parameters’ pop-up window appears. In the Air Logistics Center (ALC) field, enter the appropriate (2) <strong>ALC</strong>. Select the approximate (3) <strong>Induction Start Date</strong> and <strong>Induction E</strong><strong>nd Date</strong> to search for. Click the (4) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: To search for a specific Service Order, enter (either by scanning the 1348 EIDN barcode or manually typing) the Service Order Number in the Service Order Number field.",
              "html": "<em><strong>Note:</strong></em><em> To search for a specific Service Order, </em><em>enter (either by scanning the 1348 EIDN barcode or manually typing)</em><em> the Service Order Number in the Service Order Number field.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-166-p121.webp",
              "page": 121,
              "box": [
                52,
                234.25,
                413.50100000000003,
                438.05
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 121.",
              "width": 1206,
              "height": 680
            }
          ],
          "page": 121,
          "sourceParagraph": 963
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Decision",
          "text": "Click the (1) Submit button. A ‘Decision’ pop-up window appears with the Request ID number and an option to submit another request. Click the (2) No button.",
          "html": "Click the (1) <strong>Submit </strong>button. A ‘Decision’ pop-up window appears with the Request ID number and an option to submit another request. Click the (2) <strong>No</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-167-p122.webp",
              "page": 122,
              "box": [
                52,
                174.71000000000004,
                330.34499999999997,
                375.7
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 122.",
              "width": 928,
              "height": 670
            }
          ],
          "page": 122,
          "sourceParagraph": 974
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "From the menu, select (1) View > (2) Requests",
          "text": "From the menu, select (1) View > (2) Requests",
          "html": "From the menu, select (1) <strong>View</strong> &gt; (2) <strong>Requests</strong>",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-168-p122.webp",
              "page": 122,
              "box": [
                52,
                391.13,
                257.451,
                578.72
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 122.",
              "width": 685,
              "height": 626
            }
          ],
          "page": 122,
          "sourceParagraph": 980
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Find Requests",
          "text": "The ‘Find Requests’ pop-up window appears with the All My Requests radio button defaulted. Click the Find button.",
          "html": "The ‘Find Requests’ pop-up window appears with the All My Requests radio button defaulted. Click the <strong>Find</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-169-p123.webp",
              "page": 123,
              "box": [
                52,
                177.75,
                316.661,
                380.9
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 123.",
              "width": 883,
              "height": 678
            }
          ],
          "page": 123,
          "sourceParagraph": 986
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "The Request page displays all the concurrent programs run by the user",
          "text": "The Request page displays all the concurrent programs run by the user. Confirm that the Status of the applicable Request ID reflects Normal, and the Phase reflects Completed. Click the View Output button.",
          "html": "The Request page displays all the concurrent programs run by the user. Confirm that the Status of the applicable Request ID reflects Normal, and the Phase reflects Completed. Click the <strong>View Output</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-170-p123.webp",
              "page": 123,
              "box": [
                52,
                422.81,
                321.011,
                642.06
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 123.",
              "width": 897,
              "height": 731
            }
          ],
          "page": 123,
          "sourceParagraph": 990
        },
        {
          "number": 10,
          "sourceNumber": 10,
          "title": "On the Oracle Home page, the Service Order Status Report downloads",
          "text": "On the Oracle Home page, the Service Order Status Report downloads. Click on the Open File hyperlink to view the report.",
          "html": "On the Oracle Home page, the Service Order Status Report downloads. Click on the <strong>Open File </strong>hyperlink to view the report.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-171-p124.webp",
              "page": 124,
              "box": [
                52,
                174.71000000000004,
                414.521,
                293.13
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 124.",
              "width": 1209,
              "height": 395
            }
          ],
          "page": 124,
          "sourceParagraph": 994
        },
        {
          "number": 11,
          "sourceNumber": 11,
          "title": "A Microsoft Excel pop-up notice appears",
          "text": "A Microsoft Excel pop-up notice appears. Click the Yes button.",
          "html": "A Microsoft Excel pop-up notice appears. Click the <strong>Yes</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-172-p124.webp",
              "page": 124,
              "box": [
                52,
                315.477,
                413.451,
                367.0
              ],
              "alt": "Annotated Oracle screenshot for source step 11, guide page 124.",
              "width": 1205,
              "height": 172
            }
          ],
          "page": 124,
          "sourceParagraph": 998
        },
        {
          "number": 12,
          "sourceNumber": 12,
          "title": "The Service Order Status Report opens in a new window",
          "text": "The Service Order Status Report opens in a new window. Use the scrollbar to confirm all the information in the report.",
          "html": "The Service Order Status Report opens in a new window. Use the scrollbar to confirm all the information in the report.",
          "details": [
            {
              "text": "Note: Any Visit Number that does not have the Success status for the Create Visit process was manually created.",
              "html": "<em><strong>Note:</strong></em><em> Any Visit Number that does not have the Success status for the Create Visit process </em><em>was</em><em> manually</em><em> created</em><em>.</em>",
              "type": "list"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-173-p124.webp",
              "page": 124,
              "box": [
                52,
                432.35200000000003,
                414.571,
                491.87
              ],
              "alt": "Annotated Oracle screenshot for source step 12, guide page 124.",
              "width": 1209,
              "height": 199
            }
          ],
          "page": 124,
          "sourceParagraph": 1002
        }
      ],
      "prerequisites": [
        "N/A"
      ],
      "purpose": "A MROi Scheduler will run the Service Order Status Report to review existing SO information in the system.",
      "role": "MROi Scheduler",
      "mvp": "4.2",
      "pages": [
        118,
        119,
        120,
        121,
        122,
        123,
        124
      ],
      "part": null,
      "summary": "A MROi Scheduler will run the Service Order Status Report to review existing SO information in the system.",
      "related": [
        "send-d7-wash-post-outbound-transaction-to-d035k",
        "auto-create-visit-process"
      ]
    },
    {
      "id": "search-and-add-mrs-on-visits",
      "kind": "procedure",
      "title": "Search and Add MRs on Visits",
      "sourceTitle": "Search and Add MRs on Visits",
      "lesson": 2,
      "category": "Tracking Assets",
      "topic": "Tracking Assets",
      "sourceStart": 1034,
      "sourceEnd": 1084,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Visits",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User - Scheduler > (2) Planning > (3) Visit Work Package > (4) Visits.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Complex MRO User </strong><strong>-</strong><strong> </strong><strong>Scheduler</strong><strong> </strong>&gt; (2)<strong> Planning </strong>&gt;<strong> </strong>(3) <strong>Visit Work Package</strong> &gt;<strong> </strong>(4) <strong>Visits</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-174-p128.webp",
              "page": 128,
              "box": [
                52,
                285.7,
                415.25100000000003,
                444.15
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 128.",
              "width": 1211,
              "height": 529
            }
          ],
          "page": 128,
          "sourceParagraph": 1039
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Search Visits",
          "text": "The ‘Search Visits’ form displays. Enter the (1) Visit Number and click the (2) Go button.",
          "html": "The ‘Search Visits’ form displays. Enter the (1) <strong>Visit Number</strong> and click the (2) <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-175-p128.webp",
              "page": 128,
              "box": [
                52,
                468.69,
                414.81100000000004,
                612.6800000000001
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 128.",
              "width": 1210,
              "height": 480
            }
          ],
          "page": 128,
          "sourceParagraph": 1041
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "The results display in the Search Results section",
          "text": "The results display in the Search Results section. Click on the applicable Visit Number hyperlink.",
          "html": "The results display in the Search Results section. Click on the applicable <strong>Visit Number</strong> hyperlink.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-176-p129.webp",
              "page": 129,
              "box": [
                52,
                173.20000000000005,
                414.50100000000003,
                308.2
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 129.",
              "width": 1209,
              "height": 450
            }
          ],
          "page": 129,
          "sourceParagraph": 1047
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Update Visit",
          "text": "The ‘Update Visit’ form displays. Click on the Maintenance Requirements tab.",
          "html": "The<strong> ‘</strong>Update Visit’ form displays. Click on the <strong>Maintenance Requirements</strong> tab.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-177-p129.webp",
              "page": 129,
              "box": [
                52,
                321.92,
                413.271,
                469.79
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 129.",
              "width": 1205,
              "height": 493
            }
          ],
          "page": 129,
          "sourceParagraph": 1051
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "The Maintenance Requirements tab displays with no MRs added to the visit",
          "text": "The Maintenance Requirements tab displays with no MRs added to the visit. Select (1) Add Unplanned Requirement from the drop-down then click the (2) Go button.",
          "html": "The<strong> </strong>Maintenance Requirements tab displays with no MRs added to the visit<em>.</em> Select (1) <strong>Add Unplanned Requirement </strong>from the drop-down then click the (2) <strong>Go</strong><strong> </strong>button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-178-p130.webp",
              "page": 130,
              "box": [
                52,
                184.49,
                414.81100000000004,
                341.2
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 130.",
              "width": 1210,
              "height": 523
            }
          ],
          "page": 130,
          "sourceParagraph": 1055
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Search Maintenance Requirements",
          "text": "The ‘Search Maintenance Requirements’ form displays with system populated values. Click the Go button.",
          "html": "The ‘Search Maintenance Requirements’ form displays with system populated values. Click the <strong>Go </strong>button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-179-p130.webp",
              "page": 130,
              "box": [
                52,
                366.15999999999997,
                414.81100000000004,
                478.96
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 130.",
              "width": 1210,
              "height": 377
            }
          ],
          "page": 130,
          "sourceParagraph": 1061
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "The search results display in the lower section of the form",
          "text": "The search results display in the lower section of the form. Select the applicable (1) Maintenance Requirement check box to be associated with the visit. Click the (2) Associate to Visit (Default Department) button.",
          "html": "The search results display in the lower section of the form. Select the applicable (1) <strong>M</strong><strong>aintenance</strong><strong> </strong><strong>Requirement</strong> check box to be associated with the visit. Click the (2) <strong>Associate to Visit (Default Department)</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-180-p131.webp",
              "page": 131,
              "box": [
                52,
                184.5,
                415.43100000000004,
                317.83
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 131.",
              "width": 1212,
              "height": 445
            }
          ],
          "page": 131,
          "sourceParagraph": 1065
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Update Visit",
          "text": "The ‘Update Visit’ form displays with the Maintenance Requirements tab opened and the MRs added to the visit. To validate a visit data entry: Select (1) Validate from the drop-down and click the (2) Go button.",
          "html": "The ‘Update Visit’ form displays with the Maintenance Requirements tab opened and the MRs added to the visit. To validate a visit data entry: Select (1) <strong>Validate</strong> from the drop-down and click the (2) <strong>Go</strong> button.",
          "details": [
            {
              "text": "Note: Validations must be completed to verify the visit data entry.",
              "html": "<em><strong>Note:</strong></em><em> Validations must be completed</em><em> to</em><em> verify the visit data entry.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-181-p131.webp",
              "page": 131,
              "box": [
                52,
                369.52,
                414.81100000000004,
                508.96
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 131.",
              "width": 1210,
              "height": 465
            }
          ],
          "page": 131,
          "sourceParagraph": 1071
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "Step 9",
          "text": "Once the visit is validated, a confirmation banner will appear confirming the visit has been validated successfully.",
          "html": "Once the visit is validated, a confirmation banner will appear confirming the visit has been validated successfully.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-182-p132.webp",
              "page": 132,
              "box": [
                52,
                173.20000000000005,
                414.201,
                315.37
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 132.",
              "width": 1208,
              "height": 474
            }
          ],
          "page": 132,
          "sourceParagraph": 1078
        },
        {
          "number": 10,
          "sourceNumber": 10,
          "title": "The user must then plan the visit for maintenance work",
          "text": "The user must then plan the visit for maintenance work. Select (1) Plan Visit from the drop-down, then click the (2) Go button.",
          "html": "The user must then plan the visit for maintenance work<em>.</em> Select (1) <strong>Plan Visit </strong>from the drop-down, then click the (2) <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-183-p132.webp",
              "page": 132,
              "box": [
                52,
                340.06,
                413.821,
                523.06
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 132.",
              "width": 1207,
              "height": 610
            }
          ],
          "page": 132,
          "sourceParagraph": 1080
        },
        {
          "number": 11,
          "sourceNumber": 11,
          "title": "Step 11",
          "text": "A Confirmation banner displays, “Visit is planned successfully.” The Visit Status reflects: Planning.",
          "html": "A Confirmation banner displays, “Visit is planned successfully.” The Visit Status reflects: Planning.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-184-p133.webp",
              "page": 133,
              "box": [
                52,
                173.20000000000005,
                413.87100000000004,
                354.87
              ],
              "alt": "Annotated Oracle screenshot for source step 11, guide page 133.",
              "width": 1207,
              "height": 606
            }
          ],
          "page": 133,
          "sourceParagraph": 1082
        }
      ],
      "prerequisites": [
        "N/A"
      ],
      "purpose": "The steps below illustrate how to add an MR to a Visit.",
      "role": "MROi Scheduler",
      "mvp": "4.1",
      "pages": [
        128,
        129,
        130,
        131,
        132,
        133
      ],
      "part": null,
      "summary": "Add an MR to a Visit.",
      "related": [
        "search-visits-plan-visits-and-push-to-production-job-released",
        "search-work-order"
      ]
    },
    {
      "id": "search-visits-plan-visits-and-push-to-production-job-released",
      "kind": "procedure",
      "title": "Search Visits, Plan Visits, and Push to Production (Job Released)",
      "sourceTitle": "Search Visits, Plan Visits, and Push to Production (Job Released)",
      "lesson": 2,
      "category": "Tracking Assets",
      "topic": "Tracking Assets",
      "sourceStart": 1085,
      "sourceEnd": 1106,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Visits",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User - Scheduler > (2) Planning > (3) Visit Work Package > (4) Visits.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Complex MRO User - Scheduler</strong> &gt; (2) <strong>Planning</strong><strong> </strong>&gt; (3) <strong>Visit Work Package </strong>&gt;<strong> </strong>(4) <strong>Visits</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-185-p134.webp",
              "page": 134,
              "box": [
                52,
                265.28999999999996,
                401.781,
                387.88
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 134.",
              "width": 1166,
              "height": 409
            }
          ],
          "page": 134,
          "sourceParagraph": 1090
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Search Visits",
          "text": "The ‘Search Visits’ form displays. Enter the (1) Visit Number and click the (2) Go button.",
          "html": "The ‘Search Visits’ form displays. Enter the (1) <strong>Visit Number</strong><strong> </strong>and click the (2) <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-186-p134.webp",
              "page": 134,
              "box": [
                52,
                412.8,
                414.25100000000003,
                573.34
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 134.",
              "width": 1208,
              "height": 536
            }
          ],
          "page": 134,
          "sourceParagraph": 1092
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "The visit populates in the Search Results section",
          "text": "The visit populates in the Search Results section. Select the applicable Visit radio button.",
          "html": "The visit populates in the Search Results section. Select the applicable <strong>Visit</strong> radio button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-187-p135.webp",
              "page": 135,
              "box": [
                52,
                173.20000000000005,
                414.24100000000004,
                305.2
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 135.",
              "width": 1208,
              "height": 440
            }
          ],
          "page": 135,
          "sourceParagraph": 1094
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Select (1) Plan Visit from the drop-down and click the (2) Go button.",
          "text": "Select (1) Plan Visit from the drop-down and click the (2) Go button.",
          "html": "Select (1) <strong>Plan Visit</strong> from the drop-down and click the (2) <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-188-p135.webp",
              "page": 135,
              "box": [
                52,
                318.52,
                413.661,
                511.5
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 135.",
              "width": 1206,
              "height": 644
            }
          ],
          "page": 135,
          "sourceParagraph": 1096
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Step 5",
          "text": "A Confirmation banner displays that the visit has been successfully planned and the Visit Status reflects: Planning. Select the Visit radio button.",
          "html": "A Confirmation banner displays that the visit has been successfully planned and the Visit Status reflects: Planning. Select the <strong>Visit</strong> radio button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-189-p136.webp",
              "page": 136,
              "box": [
                52,
                173.20000000000005,
                413.36100000000005,
                319.32
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 136.",
              "width": 1205,
              "height": 488
            }
          ],
          "page": 136,
          "sourceParagraph": 1098
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Step 6",
          "text": "Select (1) Push to Production (Jobs Released) from the drop-down and click the (2) Go button.",
          "html": "Select (1) <strong>Push to Production (Jobs Released)</strong> from the drop-down and click the (2) <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-190-p136.webp",
              "page": 136,
              "box": [
                52,
                343.84999999999997,
                413.61100000000005,
                485.15
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 136.",
              "width": 1206,
              "height": 472
            }
          ],
          "page": 136,
          "sourceParagraph": 1100
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "A Confirmation banner displays and the Visit Status reflects: Implemented",
          "text": "A Confirmation banner displays and the Visit Status reflects: Implemented. Click on the Visit Number hyperlink.",
          "html": "A Confirmation banner displays and the Visit Status reflects: Implemented. Click on the <strong>Visit N</strong><strong>umber</strong> hyperlink.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-191-p137.webp",
              "page": 137,
              "box": [
                52,
                173.20000000000005,
                413.641,
                325.5
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 137.",
              "width": 1206,
              "height": 508
            }
          ],
          "page": 137,
          "sourceParagraph": 1102
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Update Visit",
          "text": "The ‘Update Visit’ form displays. Click on the Maintenance Requirements tab and confirm the MR Status reflects: In Shop Floor.",
          "html": "The ‘Update Visit’ form displays. Click on the <strong>Maintenance Requirements</strong> tab and confirm the MR Status reflects: In Shop Floor.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-192-p137.webp",
              "page": 137,
              "box": [
                52,
                350.29999999999995,
                413.661,
                503.63
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 137.",
              "width": 1206,
              "height": 512
            }
          ],
          "page": 137,
          "sourceParagraph": 1104
        }
      ],
      "prerequisites": [
        "A visit is created and has associated MRs."
      ],
      "purpose": "The steps below illustrate how to search Visits, plan Visits, and Push to Production (Job Released).",
      "role": "MROi Scheduler",
      "mvp": "4.1",
      "pages": [
        134,
        135,
        136,
        137
      ],
      "part": null,
      "summary": "Search Visits, plan Visits, and Push to Production (Job Released).",
      "related": [
        "search-work-order",
        "update-work-order"
      ]
    },
    {
      "id": "search-work-order",
      "kind": "procedure",
      "title": "Search for a Work Order",
      "sourceTitle": "How to Search for a Work Order",
      "lesson": 2,
      "category": "Tracking Assets",
      "topic": "Tracking Assets",
      "sourceStart": 1107,
      "sourceEnd": 1119,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Work Orders",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User – Scheduler > (2) Execution > (3) Production Planning > (4) Work Orders.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Complex MRO User – Scheduler</strong> &gt; (2) <strong>Execution</strong> &gt; (3) <strong>Production Planning</strong> &gt; (4) <strong>Work Orders</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-193-p138.webp",
              "page": 138,
              "box": [
                52,
                236.61,
                411.671,
                359.55
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 138.",
              "width": 1199,
              "height": 410
            }
          ],
          "page": 138,
          "sourceParagraph": 1111
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Enter a valid search criterion",
          "text": "Enter a valid search criterion. For example, the (1) Visit number or a BOM Resource then click the (2) Go button.",
          "html": "Enter a valid search criterion. For example, the (1) <strong>Visit </strong>number<strong> </strong>or a BOM Resource then click the (2) <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-194-p138.webp",
              "page": 138,
              "box": [
                52,
                387.15999999999997,
                415.421,
                504.06
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 138.",
              "width": 1212,
              "height": 390
            }
          ],
          "page": 138,
          "sourceParagraph": 1113
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Step 3",
          "text": "When a word order is searched for using a Visit number (in this example) the associated WO displays. Click on the applicable Work Order Number radio button with the Status reflecting: Released.",
          "html": "When a word order is searched for using a Visit number (in this example) the associated WO displays. Click on the applicable <strong>Work Order Number</strong> radio button with the Status reflecting: Released.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-195-p139.webp",
              "page": 139,
              "box": [
                52,
                186.01999999999998,
                414.81100000000004,
                349.06
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 139.",
              "width": 1210,
              "height": 544
            }
          ],
          "page": 139,
          "sourceParagraph": 1115
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Step 4",
          "text": "When a WO is searched for using a BOM Resource number (in this example), the associated WOs display. Click on the applicable Work Order Number radio button(s) with the Status reflecting: Released.",
          "html": "When a WO is searched for using a BOM Resource number (in this example), the associated WOs display. Click on the applicable <strong>Work Order Number</strong> radio button(s) with the Status reflecting: Released.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-196-p139.webp",
              "page": 139,
              "box": [
                52,
                387.93,
                414.81100000000004,
                552.5699999999999
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 139.",
              "width": 1210,
              "height": 549
            }
          ],
          "page": 139,
          "sourceParagraph": 1117
        }
      ],
      "prerequisites": [
        "An existing Visit Number."
      ],
      "purpose": "The steps below illustrate how to search for WOs.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        138,
        139
      ],
      "part": null,
      "summary": "Find released work orders using a Visit Number or BOM Resource.",
      "related": [
        "update-work-order",
        "sign-off-a-maintenance-requirement-mr"
      ]
    },
    {
      "id": "update-work-order",
      "kind": "procedure",
      "title": "Update a Work Order",
      "sourceTitle": "How to Update a Work Order",
      "lesson": 2,
      "category": "Tracking Assets",
      "topic": "Tracking Assets",
      "sourceStart": 1120,
      "sourceEnd": 1130,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Work Orders",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User – Scheduler > (2) Execution > (3) Production Planning > (4) Work Orders.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Complex MRO User – Scheduler</strong> &gt; (2) <strong>Execution</strong> &gt; (3) <strong>Production Planning</strong> &gt; (4) <strong>Work Orders</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-197-p140.webp",
              "page": 140,
              "box": [
                52,
                238.13,
                408.281,
                359.66
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 140.",
              "width": 1188,
              "height": 406
            }
          ],
          "page": 140,
          "sourceParagraph": 1124
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Work Order Overview",
          "text": "The ‘Work Order Overview’ form displays. Enter a (1) Visit number then click the (2) Go button. The results are displayed at the bottom page. Select the applicable (3) Work Order Num radio button with the Status reflecting: Released. Select (4) Update Work Order from the Select Work Order drop-down, then click the (5) Go button.",
          "html": "The ‘Work Order Overview’ form displays. Enter a (1) <strong>Visit</strong> number then click the (2) <strong>Go</strong> button. The results are displayed at the bottom page. Select the applicable (3) <strong>Work Order Num</strong> radio button with the Status reflecting: Released. Select (4) <strong>Update Work Order</strong> from the Select Work Order drop-down, then click the (5) <strong>Go </strong>button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-198-p140.webp",
              "page": 140,
              "box": [
                52,
                421.44,
                414.81100000000004,
                585.66
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 140.",
              "width": 1210,
              "height": 548
            }
          ],
          "page": 140,
          "sourceParagraph": 1126
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Work Order Operations",
          "text": "The ‘Work Order Operations’ form displays. Click on the applicable (1) Operation radio button, then click the (2) Complete Operation button.",
          "html": "The ‘Work Order Operations’ form displays. Click on the applicable (1)<strong> Operation </strong>radio button, then click the (2) <strong>Complete Operation</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-199-p141.webp",
              "page": 141,
              "box": [
                52,
                174.72000000000003,
                414.81100000000004,
                365.61
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 141.",
              "width": 1210,
              "height": 637
            }
          ],
          "page": 141,
          "sourceParagraph": 1128
        }
      ],
      "prerequisites": [
        "An existing Visit Number."
      ],
      "purpose": "The steps below illustrate how to update WOs.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        140,
        141
      ],
      "part": null,
      "summary": "Find a released work order and complete an operation using the Work Order Operations form.",
      "related": [
        "sign-off-a-maintenance-requirement-mr",
        "close-visit"
      ]
    },
    {
      "id": "sign-off-a-maintenance-requirement-mr",
      "kind": "procedure",
      "title": "Sign off a Maintenance Requirement (MR)",
      "sourceTitle": "Sign off a Maintenance Requirement (MR)",
      "lesson": 2,
      "category": "Tracking Assets",
      "topic": "Tracking Assets",
      "sourceStart": 1131,
      "sourceEnd": 1160,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Maintenance Requirements",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User - Scheduler > (2) Execution > (3) Production Planning > (4) Maintenance Requirements.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Complex MRO User </strong><strong>-</strong><strong> Scheduler</strong> &gt; (2) <strong>Execution</strong> &gt;<strong> </strong>(3)<strong> Production Planning</strong> &gt; (4)<strong> </strong><strong>Maintenance Requirements</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-200-p142.webp",
              "page": 142,
              "box": [
                52,
                299.19,
                414.11100000000005,
                458.44
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 142.",
              "width": 1208,
              "height": 531
            }
          ],
          "page": 142,
          "sourceParagraph": 1136
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Search Maintenance Requirements",
          "text": "The ‘Search Maintenance Requirements’ form displays. Enter the (1) Visit number then click the (2) Go button.",
          "html": "The ‘Search Maintenance Requirements’ form displays. Enter the (1) <strong>Visit </strong>number then click the (2) <strong>Go</strong><strong> </strong>button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-201-p142.webp",
              "page": 142,
              "box": [
                52,
                483.13,
                410.68100000000004,
                628.11
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 142.",
              "width": 1196,
              "height": 484
            }
          ],
          "page": 142,
          "sourceParagraph": 1138
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "The MR search results display in the lower section of the form",
          "text": "The MR search results display in the lower section of the form. Verify that the Status column reflects: All Jobs Complete. Select the applicable (1) Maintenance Requirement radio button. From the Select Maintenance Requirement drop-down, select (2) Signoff, then click the (3) Go button.",
          "html": "The MR search results display in the lower section of the form. Verify that the Status column reflects: All Jobs Complete. Select the applicable (1) <strong>Maintenance Requirement</strong><strong> </strong>radio button. From the Select Maintenance Requirement drop-down, select (2) <strong>Sign</strong><strong>off</strong>, then click the (3) <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-202-p143.webp",
              "page": 143,
              "box": [
                52,
                195.79999999999995,
                414.05100000000004,
                332.24
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 143.",
              "width": 1207,
              "height": 455
            }
          ],
          "page": 143,
          "sourceParagraph": 1144
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Signoff Maintenance Requirement",
          "text": "The ‘Signoff Maintenance Requirement’ form displays. Verify that only the (1) Default Actual Dates from Resource Transaction Dates radio button is selected and then click the (2) Apply button.",
          "html": "The ‘Signoff Maintenance Requirement’ form displays. Verify that only the (1) <strong>Default Actual Dates from Resource Transaction Dates</strong> radio button is selected and then click the (2) <strong>Apply</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-203-p143.webp",
              "page": 143,
              "box": [
                52,
                368.27,
                413.99100000000004,
                486.77
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 143.",
              "width": 1207,
              "height": 395
            }
          ],
          "page": 143,
          "sourceParagraph": 1152
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Signoff Maintenance Requirement",
          "text": "The ‘Signoff Maintenance Requirement’ form refreshes. A Confirmation banner displays that the changes have been saved and the Status reflects: Signed off.",
          "html": "The ‘Signoff Maintenance Requirement’<strong> </strong>form refreshes. A Confirmation banner displays that the changes have been saved and the Status reflects: Signed off.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-204-p143.webp",
              "page": 143,
              "box": [
                52,
                511.29999999999995,
                392.011,
                628.28
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 143.",
              "width": 1134,
              "height": 390
            }
          ],
          "page": 143,
          "sourceParagraph": 1158
        }
      ],
      "prerequisites": [
        "Users must have a component visit created with all operations and WOs associated to the MR completed, and the status of the MR must reflect: All Jobs Complete."
      ],
      "purpose": "The steps below illustrate how to sign off on an MR in a customer work package in MRO.",
      "role": "MROi Scheduler",
      "mvp": "4.1",
      "pages": [
        142,
        143
      ],
      "part": null,
      "summary": "Sign off on an MR in a customer work package in MRO.",
      "related": [
        "close-visit"
      ]
    },
    {
      "id": "close-visit",
      "kind": "procedure",
      "title": "Close Visit",
      "sourceTitle": "Close Visit",
      "lesson": 2,
      "category": "Tracking Assets",
      "topic": "Tracking Assets",
      "sourceStart": 1161,
      "sourceEnd": 1191,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Visits",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User – Scheduler > (2) Execution > (3) Production Planning > (4) Visits.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Complex MRO User </strong><strong>–</strong><strong> Scheduler</strong> &gt; (2) <strong>Execution </strong>&gt;<strong> </strong>(3)<strong> Production Planning</strong> &gt; (4)<strong> Visits</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-205-p144.webp",
              "page": 144,
              "box": [
                52,
                276.29999999999995,
                415.761,
                468.07
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 144.",
              "width": 1213,
              "height": 640
            }
          ],
          "page": 144,
          "sourceParagraph": 1167
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Search Visit",
          "text": "The ‘Search Visit’ form displays. Enter the (1) Visit Number (the number is associated with the signed off MR) then click the (2) Go button.",
          "html": "The ‘Search Visit’ form displays. Enter the (1) <strong>Visit Number</strong> (the number is associated with the signed off MR) then click the (2) <strong>Go </strong>button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-206-p144.webp",
              "page": 144,
              "box": [
                52,
                492.6,
                413.06100000000004,
                629.96
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 144.",
              "width": 1204,
              "height": 458
            }
          ],
          "page": 144,
          "sourceParagraph": 1169
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Search Visit",
          "text": "The ‘Search Visit’ form refreshes with the results displayed in the lower section of the form. Select the applicable (1) Visit Number radio button. From the Select a Visit drop-down, select (2) Close Visit. Click the (3) Go button.",
          "html": "The ‘Search Visit’ form refreshes with the results displayed in the lower section of the form. Select the applicable<strong> </strong>(1) <strong>Visit Number</strong> radio button. From the Select a Visit drop-down, select (2) <strong>Close Visit</strong>. Click the (3) <strong>Go </strong>button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-207-p145.webp",
              "page": 145,
              "box": [
                52,
                184.49,
                354.74100000000004,
                296.57
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 145.",
              "width": 1010,
              "height": 374
            }
          ],
          "page": 145,
          "sourceParagraph": 1175
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Close Visit",
          "text": "The ‘Close Visit’ form displays. Verify that only the (1) Default Actual Dates from Resource Transaction Dates radio button is selected then click the (2) Apply button.",
          "html": "The ‘Close Visit’ form displays. Verify that only the (1) <strong>Default Actual Dates from Resource Transaction Dates</strong> radio button is selected then click the (2) <strong>Apply</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-208-p145.webp",
              "page": 145,
              "box": [
                52,
                332.41999999999996,
                415.55100000000004,
                466.32
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 145.",
              "width": 1212,
              "height": 447
            }
          ],
          "page": 145,
          "sourceParagraph": 1183
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Close Visit",
          "text": "The ‘Close Visit’ form refreshes and the Visit Status reflects: Closed.",
          "html": "The ‘Close Visit’ form refreshes and the Visit Status reflects: Closed.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-209-p145.webp",
              "page": 145,
              "box": [
                52,
                480.01099999999997,
                413.471,
                568.53
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 145.",
              "width": 1205,
              "height": 296
            }
          ],
          "page": 145,
          "sourceParagraph": 1189
        }
      ],
      "prerequisites": [
        "Users must have a visit created with all the operations and WOs associated to the MR completed and signed off.",
        "Users need to utilize the visit number to verify the visit status."
      ],
      "purpose": "",
      "role": "MROi Scheduler",
      "mvp": "4.1",
      "pages": [
        144,
        145
      ],
      "part": null,
      "summary": "Instructions for close visit.",
      "related": [
        "update-work-order",
        "sign-off-a-maintenance-requirement-mr"
      ]
    },
    {
      "id": "end-item-turn-in",
      "kind": "procedure",
      "title": "End-Item Turn In",
      "sourceTitle": "End-Item Turn In",
      "lesson": 3,
      "category": "Turn-In/Sellback",
      "topic": "Turning Item Back In/Selling",
      "sourceStart": 1213,
      "sourceEnd": 1268,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Service Order",
          "text": "On the Oracle Home page, navigate to (1) MROi Depot Repair > (2) Depot Repair > (3) Service Order.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Depot Repair</strong> &gt; (2) <strong>Depot Repair</strong> &gt; (3) <strong>Service Order</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-210-p149.webp",
              "page": 149,
              "box": [
                52,
                342.76,
                304.351,
                523.62
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 149.",
              "width": 842,
              "height": 603
            }
          ],
          "page": 149,
          "sourceParagraph": 1219
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-211-p150.webp",
              "page": 150,
              "box": [
                52,
                173.20000000000005,
                239.12099999999998,
                306.95
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 150.",
              "width": 624,
              "height": 446
            }
          ],
          "page": 150,
          "sourceParagraph": 1221
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Service Requests",
          "text": "The ‘Find Service Requests’ form displays. Enter (either by scanning the 1348 EIDN barcode or manually typing) the (1) Service Order and then click the (2) Find button. The Results section expands with the queried request. Click the (3) OK button.",
          "html": "The ‘Find Service Requests’ form displays. Enter (either by scanning the 1348 EIDN barcode or manually typing) the (1) <strong>Service Order </strong>and then click the (2) <strong>Find</strong> button. The Results section expands with the queried request. Click the (3) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: You will be unable to perform this JA on SOs that were previously used for End-Item Turn In. The SO number is the EIDN that is received from D035K.",
              "html": "<em><strong>Note:</strong></em><em> </em><em>You will be unable to perform this </em><em>JA</em><em> on SOs that</em><em> were previously used for End-Item </em><em>Turn In. The SO number is the EIDN that is received from D035K. </em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-212-p150.webp",
              "page": 150,
              "box": [
                52,
                369.94,
                388.701,
                635.76
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 150.",
              "width": 1123,
              "height": 887
            }
          ],
          "page": 150,
          "sourceParagraph": 1223
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Service Orders",
          "text": "The ‘Service Orders’ form displays. Refresh the form by pressing the Ctrl + F11 keys on the keyboard and paste the Service Order Number into the SO Num field. To requery the SO press the Ctrl + F11 keys on the keyboard.",
          "html": "The ‘Service Orders’ form displays. Refresh the form by pressing the Ctrl + F11 keys on the keyboard and paste the <strong>Service Order Number</strong> into the SO Num field. To requery the SO press the Ctrl + F11 keys on the keyboard.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-213-p151.webp",
              "page": 151,
              "box": [
                52,
                184.5,
                327.87100000000004,
                374.48
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 151.",
              "width": 920,
              "height": 634
            }
          ],
          "page": 151,
          "sourceParagraph": 1226
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Repair Orders",
          "text": "The appropriate Service Order displays. Click on the (1) Service Order DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Review the information, then click on the (2) [X] to close the ‘Repair Orders’ window.",
          "html": "The appropriate Service Order displays. Click on the (1) <strong>Service Order </strong>DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears.<em> </em>Review the information,<em> </em>then click on the (2) <strong>[X]</strong> to close the ‘Repair Orders’ window.",
          "details": [
            {
              "text": "Note: For informational awareness but not systematically required, Schedulers may confirm that the following automated values are populated: Interface Transaction Type (D7MIU - D7M Inbound Update) and Interface Transaction Status (S - Success).",
              "html": "<em><strong>Note</strong></em><em>: For informational awareness but not systematically required, Schedulers may confirm that the following automated values are populated</em>: <em>Interface Transaction Type (D7MIU - D7M Inbound Update) and Interface Transaction Status (S - Success)</em><em>.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-214-p151.webp",
              "page": 151,
              "box": [
                52,
                448.93,
                336.071,
                626.61
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 151.",
              "width": 947,
              "height": 593
            }
          ],
          "page": 151,
          "sourceParagraph": 1228
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Note",
          "text": "From the menu, select (1) Actions > (2) End Item Receipt Acknowledgement (D7M RA-CL). A ‘Note’ pop-up window appears, stating the concurrent request has been launched to update the service order. Click the (3) OK button.",
          "html": "From the menu, select (1) <strong>Actions</strong> &gt; (2) <strong>End Item Receipt Acknowledgement (D7M RA-CL). </strong>A ‘Note’ pop-up window appears, stating the concurrent request has been launched to update the service order. Click the (3) <strong>OK</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-215-p152.webp",
              "page": 152,
              "box": [
                52,
                184.49,
                381.141,
                416.71
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 152.",
              "width": 1098,
              "height": 775
            }
          ],
          "page": 152,
          "sourceParagraph": 1231
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "Step 7",
          "text": "Requery the SO and click on the (1) Logistics tab, then click on the (2) Ship line. Scroll to the right and enter the (3) Serial Number used on the ship line. The instance number will automatically populate.",
          "html": "Requery the SO and click on the (1) <strong>Logistics</strong> tab, then click on the (2) <strong>Ship</strong> line. Scroll to the right and enter the (3) <strong>Serial Number</strong> used on the ship line. The instance number will automatically populate.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-216-p153.webp",
              "page": 153,
              "box": [
                52,
                184.5,
                410.56100000000004,
                436.83
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 153.",
              "width": 1196,
              "height": 842
            }
          ],
          "page": 153,
          "sourceParagraph": 1233
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Repair Order Product Transactions",
          "text": "Use the scroll bar to scroll to the right and click into the Ship line (1) Repair Order Product Transactions DFF (between the Picking Rule and Add to Order fields). The ‘Repair Order Product Transactions’ pop-up window will display. Enter (2) % in the Context Value field and press the enter key. The ‘Context Value’ pop-up window appears, select (3) D035K and click the (4) OK button.",
          "html": "Use the scroll bar to scroll to the right and click into the Ship line (1) <strong>Repair Order Product Transactions </strong>DFF (between the Picking Rule and Add to Order fields). The ‘Repair Order Product Transactions’ pop-up window will display. Enter (2) <strong>%</strong> in the Context Value field and press the enter key. The ‘Context Value’ pop-up window appears, select (3) <strong>D035K </strong>and click the (4) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-217-p154.webp",
              "page": 154,
              "box": [
                52,
                207.10000000000002,
                412.821,
                459.16
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 154.",
              "width": 1203,
              "height": 841
            }
          ],
          "page": 154,
          "sourceParagraph": 1235
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "Repair Order Product Transactions",
          "text": "The ‘Repair Order Product Transactions’ pop-up window refreshes with the Context Value populated and new fields available. In the Supply Condition Code field enter (1) A for Serviceable, issuable without qualification and in the Advice Code, enter (2) RT for Ready to Turn-In. Click the (3) OK button and then click on the (4) Save icon.",
          "html": "The ‘Repair Order Product Transactions’ pop-up window refreshes with the Context Value populated and new fields available. In the Supply Condition Code field enter (1) <strong>A</strong> for Serviceable, issuable without qualification and in the Advice Code, enter (2) <strong>RT</strong><strong> </strong>for Ready to Turn-In. Click the (3) <strong>OK </strong>button and then click on the (4) <strong>Save </strong>icon.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-218-p155.webp",
              "page": 155,
              "box": [
                52,
                195.79999999999995,
                413.821,
                400.24
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 155.",
              "width": 1207,
              "height": 682
            }
          ],
          "page": 155,
          "sourceParagraph": 1237
        },
        {
          "number": 10,
          "sourceNumber": 10,
          "title": "Select the (1) Process Trans check box for the Ship line",
          "text": "Select the (1) Process Trans check box for the Ship line. Then select the (2) Automate order processing steps through check box. Click on the (3) Book Order radio button and click the (4) Process button.",
          "html": "Select the (1) <strong>Process Trans</strong> check box for the Ship line. Then select the (2) <strong>Automate order processing steps through</strong> check box. Click on the (3) <strong>Book Order</strong> radio button and click the (4) <strong>Process</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-219-p155.webp",
              "page": 155,
              "box": [
                52,
                436.57,
                392.581,
                546.19
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 155.",
              "width": 1136,
              "height": 366
            }
          ],
          "page": 155,
          "sourceParagraph": 1239
        },
        {
          "number": 11,
          "sourceNumber": 11,
          "title": "Step 11",
          "text": "Requery the SO until the Status for the Ship line changes from “Entered” to “Booked.”",
          "html": "Requery the SO until the Status for the Ship line changes from “Entered” to “Booked.”",
          "details": [
            {
              "text": "Tip: Click the Refresh Logistics button to refresh the page if this does not happen immediately.",
              "html": "<em><strong>Tip</strong></em>: <em>Click the Refresh Logistics button to refresh the page if this does not happen immediately.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-220-p156.webp",
              "page": 156,
              "box": [
                52,
                200.35000000000002,
                414.81100000000004,
                310.84
              ],
              "alt": "Annotated Oracle screenshot for source step 11, guide page 156.",
              "width": 1210,
              "height": 369
            }
          ],
          "page": 156,
          "sourceParagraph": 1241
        },
        {
          "number": 12,
          "sourceNumber": 12,
          "title": "Note",
          "text": "From the menu, select (1) Actions > (2) End Item Turn-In Signal (D6) to initiate the D6 Outbound interface. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) OK button.",
          "html": "From the menu, select (1) <strong>Actions </strong>&gt; (2) <strong>End Item</strong> <strong>Turn-In </strong><strong>Signal (D6)</strong> to initiate the D6 Outbound interface. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-221-p156.webp",
              "page": 156,
              "box": [
                52,
                357.98,
                412.99100000000004,
                612.81
              ],
              "alt": "Annotated Oracle screenshot for source step 12, guide page 156.",
              "width": 1204,
              "height": 850
            }
          ],
          "page": 156,
          "sourceParagraph": 1244
        },
        {
          "number": 13,
          "sourceNumber": 13,
          "title": "Service Orders",
          "text": "Return to the ‘Service Orders’ form. Refresh the SO by pressing the Ctrl + F11 keys on the keyboard, then click on the (1) Service Order DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Review the information, then click the (2) [X] to close the ‘Repair Orders’ window.",
          "html": "Return to the ‘Service Orders’ form. Refresh the SO by pressing the Ctrl + F11 keys on the keyboard, then click on the (1) <strong>Service Order</strong> DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Review the information, then click the (2) <strong>[X]</strong> to close the ‘Repair Orders’ window.",
          "details": [
            {
              "text": "Note: For informational awareness but not systematically required, Schedulers may confirm that the following automated values are populated: Interface Transaction Type (D6O - D6 Outbound) and Interface Transaction Status (S - Success).",
              "html": "<em><strong>Note</strong></em><em>: For informational awareness but not systematically required, Schedulers may confirm that the following automated values are populated:</em> <em>Interface Transaction Type (D6O - D6 Outbound) and Interface Transaction Status (S - Success).</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-222-p157.webp",
              "page": 157,
              "box": [
                52,
                234.25,
                379.30100000000004,
                463.89
              ],
              "alt": "Annotated Oracle screenshot for source step 13, guide page 157.",
              "width": 1092,
              "height": 766
            }
          ],
          "page": 157,
          "sourceParagraph": 1246
        },
        {
          "number": 14,
          "sourceNumber": 14,
          "title": "Repair Orders",
          "text": "After D035K receives the D6 Outbound interface asking if the end-item can be shipped, a response with a D6M can be made. When the response has been received, it can be verified by refreshing the SO by pressing the Ctrl + F11 keys on the keyboard, then click on the (1) Service Order DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Review the information, then click on the (2) [X] to close the ‘Repair Orders’ form.",
          "html": "After D035K receives the D6 Outbound interface asking if the end-item can be shipped, a response with a D6M can be made. When the response has been received, it can be verified by refreshing the SO by pressing the Ctrl + F11 keys on the keyboard, then click on the (1) <strong>Service Order </strong>DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Review the information, then click on the (2) <strong>[X]</strong> to close the ‘Repair Orders’ form.",
          "details": [
            {
              "text": "Note: For informational awareness but not systematically required, Schedulers may confirm that the following automated values are populated: Interface Transaction Type (D6MIU - D6M Inbound Update) and Interface Transaction Status (S - Success).",
              "html": "<em><strong>Note</strong></em><em>: For informational awareness but not systematically required, Schedulers may confirm that the following automated values are populate</em>d<em>: Interface Transaction Type (D6MIU - D6M Inbound Update) and Interface Transaction Status (S - Success). </em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-223-p158.webp",
              "page": 158,
              "box": [
                52,
                256.86,
                404.451,
                474.58
              ],
              "alt": "Annotated Oracle screenshot for source step 14, guide page 158.",
              "width": 1175,
              "height": 726
            }
          ],
          "page": 158,
          "sourceParagraph": 1249
        },
        {
          "number": 15,
          "sourceNumber": 15,
          "title": "Requery the SO and click on the (1) Logistics tab",
          "text": "Requery the SO and click on the (1) Logistics tab. (2) Click on the ship line. Use the scroll bar to scroll to the right and populate the (3) Picking Rule field with a valid value if it is not already populated/defaulted. Select the (4) Ship Confirm radio button, then click the (5) Process button to initiate the shipment.",
          "html": "Requery the SO and click on the (1) <strong>Logistics</strong> tab. (2) Click on the ship line. Use the scroll bar to scroll to the right and populate the (3) <strong>Pick</strong><strong>ing</strong> <strong>Rule</strong> field with a valid value if it is not already populated/defaulted. Select the (4) <strong>Ship Confirm</strong> radio button, then click the (5) <strong>Process</strong> button to initiate the shipment.",
          "details": [
            {
              "text": "Note: Wait a few seconds, make sure the SO level DFF Segments ‘Interface Transaction Type’ = ‘D6MIU’ and ‘Interface Transaction Status’ = ‘S’, before attempting ‘Ship Confirm’.",
              "html": "<em><strong>Note:</strong></em><em> Wait a few seconds, make sure the SO level DFF Segments</em><em> </em><em>‘Interface Transaction Type’ = ‘D6MIU’ </em><em>and</em><em> ‘Interface Transaction Status’ = ‘S’, before attempting ‘Ship Confirm’</em><em>.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-224-p159.webp",
              "page": 159,
              "box": [
                52,
                234.26,
                385.321,
                339.93
              ],
              "alt": "Annotated Oracle screenshot for source step 15, guide page 159.",
              "width": 1112,
              "height": 353
            }
          ],
          "page": 159,
          "sourceParagraph": 1252
        },
        {
          "number": 16,
          "sourceNumber": 16,
          "title": "Caution",
          "text": "Multiple ‘Caution’ pop-up windows may appear. Click the OK button on each pop-up window to accept all the cautionary notes.",
          "html": "Multiple ‘Caution’ pop-up windows may appear. Click the <strong>OK</strong> button on each pop-up window to accept all the cautionary notes.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-225-p159.webp",
              "page": 159,
              "box": [
                52,
                364.69,
                414.80100000000004,
                479.2
              ],
              "alt": "Annotated Oracle screenshot for source step 16, guide page 159.",
              "width": 1210,
              "height": 382
            }
          ],
          "page": 159,
          "sourceParagraph": 1255
        },
        {
          "number": 17,
          "sourceNumber": 17,
          "title": "Verify the Status on the Logistics Ship line changes from “Booked” to “Shipped”.",
          "text": "Verify the Status on the Logistics Ship line changes from “Booked” to “Shipped”.",
          "html": "Verify the Status on the Logistics Ship line changes from “Booked” to “Shipped”.",
          "details": [
            {
              "text": "Tip: Click the Refresh Logistics button to refresh the page if this does not happen immediately.",
              "html": "<em><strong>Tip</strong></em><em><strong>:</strong></em> <em>Click the Refresh Logistics button to refresh the page if this does not happen immediately.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-226-p159.webp",
              "page": 159,
              "box": [
                52,
                531.392,
                387.731,
                637.1
              ],
              "alt": "Annotated Oracle screenshot for source step 17, guide page 159.",
              "width": 1120,
              "height": 353
            }
          ],
          "page": 159,
          "sourceParagraph": 1257
        },
        {
          "number": 18,
          "sourceNumber": 18,
          "title": "Service Orders",
          "text": "To view the End-Item Stuffer report, click on the (1) Details tab of the ‘Service Orders’ form, then, from the toolbar, click on the (2) Attachments icon to open the Attachments Window.",
          "html": "To view the End-Item Stuffer report, click on the (1) <strong>Details</strong> tab of the ‘Service Orders’ form, then, from the toolbar, click on the (2) <strong>Attachments</strong> icon to open the Attachments Window.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-227-p160.webp",
              "page": 160,
              "box": [
                52,
                184.5,
                373.06100000000004,
                409.81
              ],
              "alt": "Annotated Oracle screenshot for source step 18, guide page 160.",
              "width": 1071,
              "height": 752
            }
          ],
          "page": 160,
          "sourceParagraph": 1260
        },
        {
          "number": 19,
          "sourceNumber": 19,
          "title": "Attachments",
          "text": "The ‘Attachments’ pop-up window appears. Verify that an attachment exists with the End-Item Stuffer Category. Select the (1) attachment then click the (2) Open Document button to download the End-Item Stuffer document to a local drive.",
          "html": "The ‘Attachments’ pop-up window appears. Verify that an attachment exists with the End-Item Stuffer Category. Select the (1) <strong>attachment </strong>then click the (2) <strong>Open Document</strong> button to download the End-Item Stuffer document to a local drive.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-228-p160.webp",
              "page": 160,
              "box": [
                52,
                445.76,
                376.901,
                640.06
              ],
              "alt": "Annotated Oracle screenshot for source step 19, guide page 160.",
              "width": 1084,
              "height": 648
            }
          ],
          "page": 160,
          "sourceParagraph": 1262
        },
        {
          "number": 20,
          "sourceNumber": 20,
          "title": "Step 20",
          "text": "The downloaded end-item Stuffer document opens in a new window as a portable document format (PDF). Click on the downloaded file.",
          "html": "The downloaded end-item Stuffer document opens in a new window as a portable document format (PDF). Click on the downloaded file.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-229-p161.webp",
              "page": 161,
              "box": [
                52,
                173.18999999999994,
                414.81100000000004,
                355.4
              ],
              "alt": "Annotated Oracle screenshot for source step 20, guide page 161.",
              "width": 1210,
              "height": 608
            }
          ],
          "page": 161,
          "sourceParagraph": 1264
        },
        {
          "number": 21,
          "sourceNumber": 21,
          "title": "Verify that the attached Stuffer Report has the correct layout and information.",
          "text": "Verify that the attached Stuffer Report has the correct layout and information.",
          "html": "Verify that the attached Stuffer Report has the correct layout and information.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-230-p161.webp",
              "page": 161,
              "box": [
                52,
                368.63,
                397.531,
                548.98
              ],
              "alt": "Annotated Oracle screenshot for source step 21, guide page 161.",
              "width": 1152,
              "height": 602
            }
          ],
          "page": 161,
          "sourceParagraph": 1266
        }
      ],
      "prerequisites": [
        "An SR and associated SO are created with D035K as the interface partner, a delivery priority code with a value of six, and both a logistics return and ship line.",
        "The D7 outbound and D7M inbound have been successfully run against the SO and the SO’s induction/return logistics line has a status of “Received”."
      ],
      "purpose": "Users will initiate the shipping process for an end-item to D035K. Once this process kicks off, a Stuffer report is generated and attached to the SO.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        149,
        150,
        151,
        152,
        153,
        154,
        155,
        156,
        157,
        158,
        159,
        160,
        161
      ],
      "part": null,
      "summary": "Users will initiate the shipping process for an end-item to D035K. Once this process kicks off, a Stuffer report is generated and attached to the SO.",
      "related": [
        "b1-miscellaneous-receipt",
        "b2-misidentified-item-turn-in"
      ]
    },
    {
      "id": "b1-miscellaneous-receipt",
      "kind": "procedure",
      "title": "Miscellaneous Receipt",
      "sourceTitle": "B1) Miscellaneous Receipt",
      "lesson": 3,
      "category": "Turn-In/Sellback",
      "topic": "Misidentified Item Turn-In",
      "sourceStart": 1275,
      "sourceEnd": 1293,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open MROI INV Miscellaneous Transactions",
          "text": "On the Oracle Home page, navigate to (1) MROi Depot Repair > (2) Inventory > (3) Transactions > (4) MROI INV Miscellaneous Transactions.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Depot Repair</strong> &gt; (2) <strong>Inventory</strong> &gt; (3) <strong>Transactions</strong> &gt; (4) <strong>MROI INV Miscellaneous Transactions</strong>. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-231-p162.webp",
              "page": 162,
              "box": [
                52,
                323.86,
                393.481,
                534.52
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 162.",
              "width": 1139,
              "height": 703
            }
          ],
          "page": 162,
          "sourceParagraph": 1276
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-232-p163.webp",
              "page": 163,
              "box": [
                52,
                173.20000000000005,
                298.771,
                348.74
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 163.",
              "width": 823,
              "height": 586
            }
          ],
          "page": 163,
          "sourceParagraph": 1278
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Miscellaneous Transaction",
          "text": "The ‘Miscellaneous Transaction’ form displays. In the Type field, enter (1) % and press the tab key. The ‘Transaction Types’ pop-up window appears. Select (2) Miscellaneous receipt and click the (3) OK button.",
          "html": "The ‘Miscellaneous Transaction’ form displays. In the Type field, enter (1) <strong>%</strong><strong> </strong>and press the tab key. The ‘Transaction Types’ pop-up window appears. Select (2) <strong>Miscellaneous receipt</strong> and click the (3) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Tip: The ‘%’ wildcard can be used in the search tool to simulate any other character(s) in a string. To narrow the search, enter a portion of the data and close with the wildcard ‘%’, then click the Find button. If the exact data is available, enter the information in place of the provided wildcard and click the OK button for search results.",
              "html": "<em><strong>Tip:</strong></em><em> The ‘%’ wildcard can be used in the search tool to simulate any other character(s) in a string. To narrow the search, enter a portion of the data and close with the wildcard ‘%’</em><em>, then</em><em> click the Find button. If the exact data is available, enter the information in place of the provided wildcard and click the OK button for search results.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-233-p163.webp",
              "page": 163,
              "box": [
                52,
                434.36,
                270.00100000000003,
                639.98
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 163.",
              "width": 727,
              "height": 686
            }
          ],
          "page": 163,
          "sourceParagraph": 1280
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Miscellaneous Transaction",
          "text": "The ‘Miscellaneous Transaction’ form displays. In the Item field, enter % to search for an Item or manually input the Item Number and press the tab key.",
          "html": "The ‘Miscellaneous Transaction’ form displays. In the Item field, enter <strong>%</strong><strong> </strong>to search for an Item or manually input the Item Number and press the tab key. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-234-p164.webp",
              "page": 164,
              "box": [
                52,
                173.20000000000005,
                307.271,
                373.8
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 164.",
              "width": 851,
              "height": 669
            }
          ],
          "page": 164,
          "sourceParagraph": 1283
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Subinventories",
          "text": "In the Subinventory field, enter (1) % and press the tab key. The ‘Subinventories’ pop-up window appears. Select the applicable (2) Subinventory and click the (3) OK button.",
          "html": "In the Subinventory field, enter (1) <strong>%</strong><strong> </strong>and press the tab key. The ‘Subinventories’ pop-up window appears. Select the applicable (2) <strong>Subinventory </strong>and click the (3) <strong>OK</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-235-p164.webp",
              "page": 164,
              "box": [
                52,
                409.65,
                313.831,
                619.36
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 164.",
              "width": 873,
              "height": 700
            }
          ],
          "page": 164,
          "sourceParagraph": 1285
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Stock Locators",
          "text": "In the Locator field, enter (1) % and press the tab key. The ‘Stock Locators’ pop-up window appears. Select the applicable (2) Stock Locator and click the (3) OK button.",
          "html": "In the Locator field, enter (1) <strong>%</strong> and press the tab key. The ‘Stock Locators’ pop-up window appears. Select the applicable (2) <strong>Stock Locator</strong> and click the (3) <strong>OK</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-236-p165.webp",
              "page": 165,
              "box": [
                52,
                184.49,
                317.781,
                433.71
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 165.",
              "width": 886,
              "height": 831
            }
          ],
          "page": 165,
          "sourceParagraph": 1287
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "Step 7",
          "text": "In the Quantity field, enter the appropriate (1) Quantity then click the (2) Lot / Serial button.",
          "html": "In the Quantity field, enter the appropriate (1) <strong>Quantity</strong> then click the (2) <strong>Lot / Serial</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-237-p166.webp",
              "page": 166,
              "box": [
                52,
                173.20000000000005,
                310.491,
                377.6
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 166.",
              "width": 862,
              "height": 682
            }
          ],
          "page": 166,
          "sourceParagraph": 1289
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Serial Entry",
          "text": "The ‘Serial Entry’ form displays. In the Start Serial Number field, enter a unique (1) Serial Number. This unique number will auto populate in the End Serial Number field. Once completed, click the (2) Done button and click the (3) save icon. Then click the (4) [X] to close the ‘Miscellaneous Transaction’ form.",
          "html": "The ‘Serial Entry’ form displays. In the Start Serial Number field, enter a unique (1) <strong>Serial Number</strong>. This unique number will auto populate in the End Serial Number field. Once completed, click the (2) <strong>Done</strong> button and click the (3) <strong>save </strong>icon. Then click the (4) <strong>[X]</strong> to close the ‘Miscellaneous Transaction’ form. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-238-p166.webp",
              "page": 166,
              "box": [
                52,
                425.27,
                304.711,
                616.51
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 166.",
              "width": 843,
              "height": 638
            }
          ],
          "page": 166,
          "sourceParagraph": 1291
        }
      ],
      "prerequisites": [
        "An SR and associated SO are created with D035K as the customer, a delivery priority code with a value of six, and both a logistics return and ship line.",
        "The RA interface has been sent (i.e. RA and CL sent to D035K), and the DF1 Outbound Turn-In notification was sent successfully.",
        "This is part 1 of Misidentified Item Turn-In. Review the shared prerequisites and the preceding parts of that workflow."
      ],
      "purpose": "Once a misidentified item has been identified and a DF1 message has been sent to D035K, users will be able to send the item back to D035K.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        162,
        163,
        164,
        165,
        166
      ],
      "part": 1,
      "summary": "Once a misidentified item has been identified and a DF1 message has been sent to D035K, users will be able to send the item back to D035K.",
      "related": [
        "b2-misidentified-item-turn-in",
        "b3-miscellaneous-issue"
      ]
    },
    {
      "id": "b2-misidentified-item-turn-in",
      "kind": "procedure",
      "title": "Misidentified Item Turn-In",
      "sourceTitle": "B2) Misidentified Item Turn-In",
      "lesson": 3,
      "category": "Turn-In/Sellback",
      "topic": "Misidentified Item Turn-In",
      "sourceStart": 1294,
      "sourceEnd": 1347,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 9,
          "title": "On the Navigator page, select (1) Depot Repair > (2) Service Order.",
          "text": "On the Navigator page, select (1) Depot Repair > (2) Service Order.",
          "html": "On the Navigator page, select (1) <strong>Depot Repair</strong> &gt; (2) <strong>Service Order</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-239-p167.webp",
              "page": 167,
              "box": [
                52,
                177.75,
                302.521,
                400.78
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 167.",
              "width": 836,
              "height": 744
            }
          ],
          "page": 167,
          "sourceParagraph": 1295
        },
        {
          "number": 2,
          "sourceNumber": 10,
          "title": "Find Service Requests",
          "text": "The ‘Find Service Requests’ form displays. Enter (either by scanning the DD Form 1348-1A EIDN barcode or manually typing) the (1) Service Order then click the (2) Find button. The Results section expands with the queried request. Click the (3) OK button.",
          "html": "The ‘Find Service Requests’ form displays. Enter (either by scanning the DD Form 1348-1A EIDN barcode or manually typing) the (1) <strong>Service Order</strong> then click the (2) <strong>Find</strong> button. The Results section expands with the queried request. Click the (3) <strong>OK</strong> button. ",
          "details": [
            {
              "text": "Note: The service order number is the EIDN that is received from D035K. Each service order number is unique and can only be used once for inducting an End-Item (MISTR).",
              "html": "<em><strong>Note:</strong></em><em> The service order number is the EIDN that is received from D035K. Each service order number is unique and can only be used once for inducting an End-Item (MISTR).</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-240-p168.webp",
              "page": 168,
              "box": [
                52,
                222.95000000000005,
                414.31100000000004,
                519.79
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 168.",
              "width": 1208,
              "height": 990
            }
          ],
          "page": 168,
          "sourceParagraph": 1297
        },
        {
          "number": 3,
          "sourceNumber": 11,
          "title": "Service Orders",
          "text": "The ‘Service Orders’ form displays. Refresh the SO by pressing F11 on the keyboard, then in the SO Num field paste or enter the Service Order Number. Press Ctrl + F11 on the keyboard to populate all fields for the SO.",
          "html": "The ‘Service Orders’ form displays. Refresh the SO by pressing F11 on the keyboard, then in the SO Num field paste or enter the <strong>Service Order Number</strong>. Press Ctrl + F11 on the keyboard to populate all fields for the SO.",
          "details": [
            {
              "text": "Note: On some keyboards users may have to press fn + F11 and Ctrl + fn + F11 respectively to execute refreshing the SO.",
              "html": "<em><strong>Note:</strong></em><em> On some keyboards users may have to press fn + F11 and Ctrl + fn + F11 respectively to execute refreshing the SO.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-241-p169.webp",
              "page": 169,
              "box": [
                52,
                211.65999999999997,
                379.25100000000003,
                454.65
              ],
              "alt": "Annotated Oracle screenshot for source step 11, guide page 169.",
              "width": 1091,
              "height": 810
            }
          ],
          "page": 169,
          "sourceParagraph": 1300
        },
        {
          "number": 4,
          "sourceNumber": 12,
          "title": "Service Orders",
          "text": "Once the ‘Service Orders’ form displays with the populated values, click on the (1) Service Order DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Confirm the populated information then click the (2) OK button to close the window.",
          "html": "Once the ‘Service Orders’ form displays with the populated values, click on the (1) <strong>Service Order</strong> DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Confirm the populated information then click the (2) <strong>OK</strong> button to close the window.",
          "details": [
            {
              "text": "Note: For informational awareness but not systematically required, Schedulers may confirm that the following automated values are populated: Interface Transaction Type: DF1O (DF1 Outbound) and Interface Transaction Status: S (Success).",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> </em><em>For informational awareness but not systematically required, Schedulers may confirm that the following automated values are populated</em><em>: Interface Transaction Type: DF1O (DF1 Outbound) and Interface Transaction Status: S (Success)</em><em>.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-242-p170.webp",
              "page": 170,
              "box": [
                52,
                234.25,
                396.901,
                487.3
              ],
              "alt": "Annotated Oracle screenshot for source step 12, guide page 170.",
              "width": 1150,
              "height": 844
            }
          ],
          "page": 170,
          "sourceParagraph": 1303
        },
        {
          "number": 5,
          "sourceNumber": 13,
          "title": "Repair Order Product Transactions",
          "text": "Click on the (1) Logistics tab. On the Return line, scroll to the right and click within the (2) Repair Order Product Transactions DFF. The ‘Repair Order Product Transactions’ pop-up window appears. Verify the information and click the (3) OK button.",
          "html": "Click on the (1) <strong>Logistics</strong> tab. On the Return line, scroll to the right and click within the (2) <strong>Repair Order Product Transactions </strong>DFF. The ‘Repair Order Product Transactions’ pop-up window appears. Verify the information and click the (3) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: For informational awareness but not systematically required, Schedulers may confirm that the End Item Receipt Acknowledgment was sent by confirming that the Action Suffix Code has a value of CL (Clear).",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> </em><em>For informational awareness but not systematically required, Schedulers may confirm that the End Item Receipt Acknowledgment was sent by</em><em> confirming that the Action Suffix Code has a value of CL (Clear)</em><em>.</em>",
              "type": "list"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-243-p171.webp",
              "page": 171,
              "box": [
                52,
                234.25996948199997,
                414.81100000000004,
                502.06
              ],
              "alt": "Annotated Oracle screenshot for source step 13, guide page 171.",
              "width": 1210,
              "height": 893
            }
          ],
          "page": 171,
          "sourceParagraph": 1306
        },
        {
          "number": 6,
          "sourceNumber": 14,
          "title": "Action Codes",
          "text": "On the Ship line, click into the (1) Action Code field. The ‘Action Codes’ pop-up window appears. Select (2) Exchange, then click the (3) OK button.",
          "html": "On the Ship line, click into the (1) <strong>Action Code</strong> field. The ‘Action Codes’ pop-up window appears. Select (2) <strong>Exchange</strong>, then click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-244-p172.webp",
              "page": 172,
              "box": [
                52,
                173.19996948199991,
                413.701,
                439.3
              ],
              "alt": "Annotated Oracle screenshot for source step 14, guide page 172.",
              "width": 1206,
              "height": 888
            }
          ],
          "page": 172,
          "sourceParagraph": 1309
        },
        {
          "number": 7,
          "sourceNumber": 15,
          "title": "Items",
          "text": "On the Ship line, in the Item field, enter (1) % and press the tab key. The ‘Items’ pop-up window appears. In the Find field, enter or paste the (2) Item Number (the Miscellaneous Received Item from Step 4) and press the tab key to populate the item. Select the (3) Item then click the (4) OK button.",
          "html": "On the Ship line, in the Item field, enter (1) <strong>%</strong><strong> </strong>and press the tab key. The ‘Items’ pop-up window appears. In the Find field, enter or paste the (2) <strong>Item Number</strong><strong> </strong>(the Miscellaneous Received Item from Step 4) and press the tab key to populate the item. Select the (3) <strong>Item</strong> then click the (4) <strong>OK</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-245-p173.webp",
              "page": 173,
              "box": [
                52,
                195.79999999999995,
                413.341,
                460.310030518
              ],
              "alt": "Annotated Oracle screenshot for source step 15, guide page 173.",
              "width": 1205,
              "height": 882
            }
          ],
          "page": 173,
          "sourceParagraph": 1311
        },
        {
          "number": 8,
          "sourceNumber": 16,
          "title": "Step 16",
          "text": "On the Ship line, in the Source Serial Num field, enter or paste the appropriate Serial Number (the Miscellaneous Received Item serial number from step 8) and press the tab key.",
          "html": "On the Ship line, in the Source Serial Num field, enter or paste the appropriate <strong>Serial Number</strong><strong> </strong>(the Miscellaneous Received Item serial number from step 8) and press the tab key.",
          "details": [
            {
              "text": "Note: In this scenario this Item Number and Serial Number will differ from the one on the Return line, since this item was marked as misidentified.",
              "html": "<em><strong>Note:</strong></em> <em>In this scenario this Item Number and Serial Number will differ from the one on the Return line, since this item was marked as misidentified.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-246-p174.webp",
              "page": 174,
              "box": [
                52,
                211.64999999999998,
                394.12100000000004,
                464.32
              ],
              "alt": "Annotated Oracle screenshot for source step 16, guide page 174.",
              "width": 1141,
              "height": 843
            }
          ],
          "page": 174,
          "sourceParagraph": 1313
        },
        {
          "number": 9,
          "sourceNumber": 17,
          "title": "Instances",
          "text": "On the Ship Line, in the Instance field, enter (1) % and press the tab key. The ‘Instances’ pop-up window appears. Select the applicable (2) Instance then click the (3) OK button.",
          "html": "On the Ship Line, in the Instance field, enter (1) <strong>%</strong> and press the tab key. The ‘Instances’ pop-up window appears. Select the applicable (2) <strong>Instance</strong> then click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-247-p175.webp",
              "page": 175,
              "box": [
                52,
                184.5,
                385.99100000000004,
                428.29
              ],
              "alt": "Annotated Oracle screenshot for source step 17, guide page 175.",
              "width": 1114,
              "height": 813
            }
          ],
          "page": 175,
          "sourceParagraph": 1316
        },
        {
          "number": 10,
          "sourceNumber": 18,
          "title": "Subinventories",
          "text": "On the Ship Line, in the Subinv field, enter (1) % and press the tab key. The ‘Subinventories’ pop-up window appears. Select the same (2) Subinventory used in the Miscellaneous Receipt then click the (3) OK button.",
          "html": "On the Ship Line, in the Subinv field, enter (1) <strong>%</strong> and press the tab key. The ‘Subinventories’ pop-up window appears. Select the same (2) <strong>Subinventory</strong> used in the Miscellaneous Receipt then click the (3) <strong>OK</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-248-p176.webp",
              "page": 176,
              "box": [
                52,
                184.5,
                413.351,
                450.03
              ],
              "alt": "Annotated Oracle screenshot for source step 18, guide page 176.",
              "width": 1205,
              "height": 886
            }
          ],
          "page": 176,
          "sourceParagraph": 1318
        },
        {
          "number": 11,
          "sourceNumber": 19,
          "title": "Locators",
          "text": "On the Ship Line, in the Locator field, enter (1) % and press the tab key. The ‘Locators’ pop-up window appears. Select the same (2) Locator used in the Miscellaneous Receipt then click the (3) OK button.",
          "html": "On the Ship Line, in the Locator field, enter (1) <strong>%</strong> and press the tab key. The ‘Locators’ pop-up window appears. Select the same (2) <strong>Locator</strong> used in the Miscellaneous Receipt then click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-249-p177.webp",
              "page": 177,
              "box": [
                52,
                184.5,
                413.36100000000005,
                452.500030518
              ],
              "alt": "Annotated Oracle screenshot for source step 19, guide page 177.",
              "width": 1205,
              "height": 894
            }
          ],
          "page": 177,
          "sourceParagraph": 1320
        },
        {
          "number": 12,
          "sourceNumber": 20,
          "title": "Step 20",
          "text": "To Book the Ship line on the logistics tab, select the (1) Process Trans check box next to the Ship Line. Select the (2) Automate order processing steps through check box and the (3) Book Order radio button. Then click the (4) Process button.",
          "html": "To Book the Ship line on the logistics tab, select the (1) <strong>Process Trans</strong> check box next to the Ship Line. Select the (2) <strong>Automate order processing steps through</strong> check box and the (3) <strong>Book Order</strong> radio button. Then click the (4) <strong>Process</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-250-p177.webp",
              "page": 177,
              "box": [
                52,
                488.34000000000003,
                414.571,
                610.9300000000001
              ],
              "alt": "Annotated Oracle screenshot for source step 20, guide page 177.",
              "width": 1209,
              "height": 409
            }
          ],
          "page": 177,
          "sourceParagraph": 1322
        },
        {
          "number": 13,
          "sourceNumber": 21,
          "title": "The Ship line status should update to “Booked.”",
          "text": "The Ship line status should update to “Booked.”",
          "html": "The Ship line status should update to “Booked.”",
          "details": [
            {
              "text": "Tip: Click the Refresh Logistics button to refresh the page if this does not happen immediately.",
              "html": "<em><strong>Tip</strong></em><strong>: </strong><em>Click</em><em> the</em><em> </em><em>Refresh Logistics </em><em>b</em><em>utton</em><em> to refresh the page</em><em> if this does not happen immediately.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-251-p178.webp",
              "page": 178,
              "box": [
                52,
                189.04999999999995,
                405.891,
                307.69
              ],
              "alt": "Annotated Oracle screenshot for source step 21, guide page 178.",
              "width": 1180,
              "height": 396
            }
          ],
          "page": 178,
          "sourceParagraph": 1324
        },
        {
          "number": 14,
          "sourceNumber": 22,
          "title": "Repair Order Product Transactions",
          "text": "On the Ship line, use the scroll bar to scroll to the right and click into the (1) Repair Order Product Transactions DFF (between the Picking Rule and Add to Order fields). The ‘Repair Order Product Transactions’ pop-up window appears. Enter (2) % in the Context Value field and press the enter key. The ‘Context Value’ pop-up window appears. Select (3) D035K then click the (4) OK button.",
          "html": "On the Ship line, use the scroll bar to scroll to the right and click into the (1) <strong>Repair Order Product Transactions </strong>DFF (between the Picking Rule and Add to Order fields). The ‘Repair Order Product Transactions’ pop-up window appears. Enter (2) <strong>%</strong> in the Context Value field and press the enter key. The ‘Context Value’ pop-up window appears. Select (3) <strong>D035K</strong> then click the (4) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-252-p178.webp",
              "page": 178,
              "box": [
                52,
                366.14,
                413.011,
                630.5699999999999
              ],
              "alt": "Annotated Oracle screenshot for source step 22, guide page 178.",
              "width": 1204,
              "height": 882
            }
          ],
          "page": 178,
          "sourceParagraph": 1327
        },
        {
          "number": 15,
          "sourceNumber": 23,
          "title": "Repair Orders Product Transactions",
          "text": "The ‘Repair Orders Product Transactions’ pop-up window refreshes with the Context Value populated. Enter the (1) Supply Condition Code (F), (2) Advice Code (RT), (3) Misidentified Induction (Yes), and any (4) Comments (User determined value, e.g. \"Turning End-Item Back to Supply\"). Click the (5) OK button then click on the (6) Save icon to save the record.",
          "html": "The ‘Repair Orders Product Transactions’ pop-up window refreshes with the Context Value populated. Enter the (1) <strong>Supply Condition Code</strong> (F), (2) <strong>Advice Code</strong> (RT)<strong>, </strong>(3)<strong> </strong><strong>Misidentified Induction</strong> (Yes), and any (4) <strong>Comments</strong> (User determined value, e.g. &quot;Turning End-Item Back to Supply&quot;). Click the (5) <strong>OK</strong> button then click on the (6) <strong>Save</strong> icon to save the record.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-253-p179.webp",
              "page": 179,
              "box": [
                52,
                207.0999999999999,
                388.68100000000004,
                455.71
              ],
              "alt": "Annotated Oracle screenshot for source step 23, guide page 179.",
              "width": 1123,
              "height": 829
            }
          ],
          "page": 179,
          "sourceParagraph": 1329
        },
        {
          "number": 16,
          "sourceNumber": 24,
          "title": "Note",
          "text": "To initiate the D6 Outbound Interface: From the menu, select (1) Actions > (2) End Item Turn-In Signal (D6). A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order.",
          "html": "To initiate the D6 Outbound Interface: From the menu, select (1) <strong>Action</strong><strong>s</strong> &gt; (2) <strong>End Item</strong> <strong>Turn-In </strong><strong>Signal (D6)</strong>. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-254-p180.webp",
              "page": 180,
              "box": [
                52,
                184.5,
                366.351,
                416.47
              ],
              "alt": "Annotated Oracle screenshot for source step 24, guide page 180.",
              "width": 1048,
              "height": 774
            }
          ],
          "page": 180,
          "sourceParagraph": 1331
        },
        {
          "number": 17,
          "sourceNumber": 25,
          "title": "Service Orders",
          "text": "On the ‘Service Orders’ form, refresh the SO by pressing the Ctrl + F11 keys on the keyboard. Then click on the (1) Service Order DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Confirm the information populates then click the (2) OK button.",
          "html": "On the ‘Service Orders’ form, refresh the SO by pressing the Ctrl + F11 keys on the keyboard. Then click on the (1) <strong>Service Order </strong>DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Confirm the information populates then click the (2) <strong>OK</strong> button. ",
          "details": [
            {
              "text": "Note: For informational awareness but not systematically required, Schedulers may confirm that the following automated values are populated: Interface Transaction Type: D6O (D6 Outbound) and Interface Transaction Status: S (Success).",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> </em><em>For informational awareness but not systematically required, Schedulers may confirm that the following automated values are populated:</em><em> </em><em>Interface Transaction Type: D6O (D6 Outbound) and Interface Transaction Status: S (Success).</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-255-p181.webp",
              "page": 181,
              "box": [
                52,
                234.25,
                397.31100000000004,
                487.68
              ],
              "alt": "Annotated Oracle screenshot for source step 25, guide page 181.",
              "width": 1152,
              "height": 845
            }
          ],
          "page": 181,
          "sourceParagraph": 1333
        },
        {
          "number": 18,
          "sourceNumber": 26,
          "title": "Click on the (1) Logistics tab",
          "text": "Click on the (1) Logistics tab. Use the scroll bar and navigate to the right to populate the (2) Picking Rule field with a valid value if it is not already populated/defaulted.",
          "html": "Click on the (1) <strong>Logistic</strong><strong>s</strong><strong> </strong>tab. Use the scroll bar and navigate to the right to populate the (2) <strong>Picking Rule</strong> field with a valid value if it is not already populated/defaulted.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-256-p182.webp",
              "page": 182,
              "box": [
                52,
                184.5,
                401.571,
                440.09
              ],
              "alt": "Annotated Oracle screenshot for source step 26, guide page 182.",
              "width": 1166,
              "height": 852
            }
          ],
          "page": 182,
          "sourceParagraph": 1336
        },
        {
          "number": 19,
          "sourceNumber": 27,
          "title": "Next to the Ship line, select the (1) Process Trans check box",
          "text": "Next to the Ship line, select the (1) Process Trans check box. At the bottom of the page, select the (2) Ship Confirm radio button then click the (3) Process button to initiate the shipment.",
          "html": "Next to the Ship line, select the (1) <strong>Process Trans</strong> check box. At the bottom of the page, select the (2) <strong>Ship Confirm</strong> radio button then click the (3) <strong>Process</strong> button to initiate the shipment.",
          "details": [
            {
              "text": "Note: If the Ship Confirm button is greyed out, verify that the Subinv and Locator fields are populated.",
              "html": "<em><strong>Note:</strong></em><em><strong> </strong></em><em>If the Ship Confirm button is greyed out, verify that the Sub</em><em>i</em><em>nv and Locator fields are populated.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-257-p182.webp",
              "page": 182,
              "box": [
                52,
                503.65,
                414.391,
                625.6
              ],
              "alt": "Annotated Oracle screenshot for source step 27, guide page 182.",
              "width": 1208,
              "height": 407
            }
          ],
          "page": 182,
          "sourceParagraph": 1338
        },
        {
          "number": 20,
          "sourceNumber": 28,
          "title": "Caution",
          "text": "Multiple ‘Caution’ pop-up windows appear. Click the OK button on each pop-up window to accept all the cautionary notes.",
          "html": "Multiple ‘Caution’ pop-up windows appear. Click the <strong>OK</strong> button on each pop-up window to accept all the cautionary notes.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-258-p183.webp",
              "page": 183,
              "box": [
                52,
                173.192,
                259.421,
                589.69
              ],
              "alt": "Annotated Oracle screenshot for source step 28, guide page 183.",
              "width": 692,
              "height": 1389
            }
          ],
          "page": 183,
          "sourceParagraph": 1341
        },
        {
          "number": 21,
          "sourceNumber": 29,
          "title": "Confirm that the Status of the Ship Line reflects: Shipped",
          "text": "Confirm that the Status of the Ship Line reflects: Shipped. Then click within the (2) Repair Order Product Transactions DFF.",
          "html": "Confirm that the Status of the Ship Line reflects: Shipped. Then click within the (2) <strong>Repair Order Product Transactions </strong>DFF. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-259-p184.webp",
              "page": 184,
              "box": [
                52,
                173.19000000000005,
                414.81100000000004,
                293.36
              ],
              "alt": "Annotated Oracle screenshot for source step 29, guide page 184.",
              "width": 1210,
              "height": 401
            }
          ],
          "page": 184,
          "sourceParagraph": 1343
        },
        {
          "number": 22,
          "sourceNumber": 30,
          "title": "Service Orders",
          "text": "Verify that the Action Suffix Code reflects: PB, then click the OK button to return to the ‘Service Orders’ form.",
          "html": "Verify that the Action Suffix Code reflects: PB, then click the <strong>OK</strong> button to return to the ‘Service Orders’ form.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-260-p184.webp",
              "page": 184,
              "box": [
                52,
                318.44,
                352.411,
                438.07
              ],
              "alt": "Annotated Oracle screenshot for source step 30, guide page 184.",
              "width": 1002,
              "height": 399
            }
          ],
          "page": 184,
          "sourceParagraph": 1345
        }
      ],
      "prerequisites": [
        "An SR and associated SO are created with D035K as the customer, a delivery priority code with a value of six, and both a logistics return and ship line.",
        "The RA interface has been sent (i.e. RA and CL sent to D035K), and the DF1 Outbound Turn-In notification was sent successfully.",
        "This is part 2 of Misidentified Item Turn-In. Review the shared prerequisites and the preceding parts of that workflow."
      ],
      "purpose": "Once a misidentified item has been identified and a DF1 message has been sent to D035K, users will be able to send the item back to D035K.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        174,
        175,
        176,
        177,
        178,
        179,
        180,
        181,
        182,
        183,
        184
      ],
      "part": 2,
      "summary": "Once a misidentified item has been identified and a DF1 message has been sent to D035K, users will be able to send the item back to D035K.",
      "related": [
        "b3-miscellaneous-issue",
        "send-d6-wash-post-outbound-transaction-to-d035k-for-engine-item-type"
      ]
    },
    {
      "id": "b3-miscellaneous-issue",
      "kind": "procedure",
      "title": "Miscellaneous Issue",
      "sourceTitle": "B3) Miscellaneous Issue",
      "lesson": 3,
      "category": "Turn-In/Sellback",
      "topic": "Misidentified Item Turn-In",
      "sourceStart": 1348,
      "sourceEnd": 1362,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 31,
          "title": "Service Orders",
          "text": "Click on the (1) Details tab. On the ‘Service Orders’ form, select the applicable (2) SO Num. From the toolbar, click on the (3) Attachments icon to open the ‘Attachments’ window.",
          "html": "Click on the (1) <strong>Details</strong> tab. On the ‘Service Orders’ form, select the applicable (2) <strong>S</strong><strong>O</strong><strong> Num</strong>. From the toolbar, click on the (3) <strong>Attachments</strong> icon to open the ‘Attachments’ window.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-261-p185.webp",
              "page": 185,
              "box": [
                52,
                200.35000000000002,
                412.30100000000004,
                464.67003051800003
              ],
              "alt": "Annotated Oracle screenshot for source step 31, guide page 185.",
              "width": 1202,
              "height": 882
            }
          ],
          "page": 185,
          "sourceParagraph": 1349
        },
        {
          "number": 2,
          "sourceNumber": 32,
          "title": "Attachments",
          "text": "The ‘Attachments’ pop-up window appears. Verify that an attachment exists with the End-Item Stuffer Category. Select the (1) Attachment, then click the (2) Open Document button to download the End-Item Stuffer document to a local drive.",
          "html": "The ‘Attachments’ pop-up window appears. Verify that an attachment exists with the End-Item Stuffer Category. Select the (1) <strong>A</strong><strong>ttachment</strong>,<strong> </strong>then click the (2) <strong>Open Document</strong> button to download the End-Item Stuffer document to a local drive.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-262-p186.webp",
              "page": 186,
              "box": [
                52,
                184.5,
                376.86100000000005,
                425.31
              ],
              "alt": "Annotated Oracle screenshot for source step 32, guide page 186.",
              "width": 1083,
              "height": 803
            }
          ],
          "page": 186,
          "sourceParagraph": 1351
        },
        {
          "number": 3,
          "sourceNumber": 33,
          "title": "The downloaded End-Item Stuffer document opens in a new window as a PDF",
          "text": "The downloaded End-Item Stuffer document opens in a new window as a PDF. Verify that it has the correct layout per the MROi_RPT_0004_END-ITEM STUFFER.docx Report Design Document.",
          "html": "The downloaded End-Item Stuffer document opens in a new window as a PDF. Verify that it has the correct layout per the MROi_RPT_0004_END-ITEM STUFFER.docx Report Design Document.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-263-p186.webp",
              "page": 186,
              "box": [
                52,
                461.70000000000005,
                389.24100000000004,
                644
              ],
              "alt": "Annotated Oracle screenshot for source step 33, guide page 186.",
              "width": 1125,
              "height": 608
            }
          ],
          "page": 186,
          "sourceParagraph": 1353
        },
        {
          "number": 4,
          "sourceNumber": 34,
          "title": "Step 34",
          "text": "Return to the Navigator page, select (1) Inventory > (2) Transactions > (3) MROI INV Miscellaneous Transactions.",
          "html": "Return to the Navigator page, select (1) <strong>Inventory</strong> &gt; (2) <strong>Transactions</strong> &gt; (3) <strong>MROI INV Miscellaneous Transactions</strong>. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-264-p187.webp",
              "page": 187,
              "box": [
                52,
                173.19000000000005,
                344.30100000000004,
                430.87
              ],
              "alt": "Annotated Oracle screenshot for source step 34, guide page 187.",
              "width": 975,
              "height": 859
            }
          ],
          "page": 187,
          "sourceParagraph": 1355
        },
        {
          "number": 5,
          "sourceNumber": 35,
          "title": "Miscellaneous Transaction",
          "text": "The ‘Miscellaneous Transaction’ form displays. Select the (1) Serial-Triggered check box and then enter (2) % in the Type field and press the tab key. The ‘Transaction Types’ pop-up window appears. Select (3) Miscellaneous issue and click the (4) OK button.",
          "html": "The ‘Miscellaneous Transaction’ form displays. Select the (1) <strong>Serial-Triggered </strong>check box and then enter (2) <strong>%</strong> in the Type field and press the tab key. The ‘Transaction Types’ pop-up window appears. Select (3) <strong>Miscellaneous </strong><strong>issue</strong> and click the (4) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-265-p188.webp",
              "page": 188,
              "box": [
                52,
                195.79999999999995,
                366.271,
                490.93
              ],
              "alt": "Annotated Oracle screenshot for source step 35, guide page 188.",
              "width": 1048,
              "height": 984
            }
          ],
          "page": 188,
          "sourceParagraph": 1357
        },
        {
          "number": 6,
          "sourceNumber": 36,
          "title": "Miscellaneous Transaction",
          "text": "The ‘Miscellaneous Transaction’ form displays. In the Serial Number field, enter the (1) Serial Number that was used on the End-Items Return Line of the Service Order and press the tab key. Verify that the values populated are accurate. Click the (2) Save icon.",
          "html": "The ‘Miscellaneous Transaction’ form displays. In the Serial Number field, enter the (1) <strong>Serial Number</strong> that was used on the End-Items Return Line of the Service Order and press the tab key. Verify that the values populated are accurate. Click the (2) <strong>Save</strong> icon.",
          "details": [
            {
              "text": "Note: This is the same Item Number and Serial Number on the SO Logistics Return (MX-Induction) Line that was received initially and RA CL’d.",
              "html": "<em><strong>Note:</strong></em><em> </em><em>This is the </em><em>same </em><em>Item Number and Serial </em><em>N</em><em>umber on the SO Logistics Return (MX-Induction) Line</em><em> that was </em><em>received initially and RA CL’d.</em>",
              "type": "list"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-266-p189.webp",
              "page": 189,
              "box": [
                52,
                222.96000000000004,
                356.071,
                466.86
              ],
              "alt": "Annotated Oracle screenshot for source step 36, guide page 189.",
              "width": 1014,
              "height": 813
            }
          ],
          "page": 189,
          "sourceParagraph": 1359
        }
      ],
      "prerequisites": [
        "An SR and associated SO are created with D035K as the customer, a delivery priority code with a value of six, and both a logistics return and ship line.",
        "The RA interface has been sent (i.e. RA and CL sent to D035K), and the DF1 Outbound Turn-In notification was sent successfully.",
        "This is part 3 of Misidentified Item Turn-In. Review the shared prerequisites and the preceding parts of that workflow."
      ],
      "purpose": "Once a misidentified item has been identified and a DF1 message has been sent to D035K, users will be able to send the item back to D035K.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        185,
        186,
        187,
        188,
        189
      ],
      "part": 3,
      "summary": "Once a misidentified item has been identified and a DF1 message has been sent to D035K, users will be able to send the item back to D035K.",
      "related": [
        "send-d6-wash-post-outbound-transaction-to-d035k-for-engine-item-type",
        "send-d6-wash-post-outbound-transaction-to-d035k"
      ]
    },
    {
      "id": "send-d6-wash-post-outbound-transaction-to-d035k-for-engine-item-type",
      "kind": "procedure",
      "title": "Send D6 Wash Post Outbound Transaction to D035K (for Engine Item Type)",
      "sourceTitle": "Send D6 Wash Post Outbound Transaction to D035K (for Engine Item Type)",
      "lesson": 3,
      "category": "Turn-In/Sellback",
      "topic": "Turning Item Back In/Selling",
      "sourceStart": 1363,
      "sourceEnd": 1412,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Service Order",
          "text": "On the Oracle Home page, navigate to (1) MROi Depot Repair > (2) Depot Repair > (3) Service Order.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Depot Repair</strong> &gt; (2) <strong>Depot Repair</strong><strong> </strong>&gt; (3) <strong>Service</strong><strong> Order</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-267-p190.webp",
              "page": 190,
              "box": [
                52,
                302.54,
                359.44100000000003,
                477.18
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 190.",
              "width": 1025,
              "height": 583
            }
          ],
          "page": 190,
          "sourceParagraph": 1370
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-268-p190.webp",
              "page": 190,
              "box": [
                52,
                501.74,
                253.131,
                644
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 190.",
              "width": 671,
              "height": 475
            }
          ],
          "page": 190,
          "sourceParagraph": 1372
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Service Requests",
          "text": "The ‘Find Service Requests’ form appears. Enter (either by scanning the DD Form 1348-1A EIDN barcode or manually typing) the (1) Service Order and click the (2) Find button. The Results section expands with queried request. Click the (3) OK button.",
          "html": "The ‘Find Service Requests’ form appears. Enter (either by scanning the DD Form 1348-1A EIDN barcode or manually typing) the (1) <strong>Service Order </strong>and click the (2) <strong>Find</strong> button. The Results section expands with queried request. Click the (3) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: You will be unable to perform this JA on SOs that were previously used to send D6 WP for engine item types. The SO number is the EIDN that is received from D035K.",
              "html": "<em><strong>Note:</strong></em><em> You will be unable to perform this JA on </em><em>SOs that were previously used to send D6 WP for engine item types. The </em><em>SO</em><em> number is the EIDN that is received from D035K.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-269-p191.webp",
              "page": 191,
              "box": [
                52,
                222.95000000000005,
                394.88100000000003,
                495.5
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 191.",
              "width": 1143,
              "height": 909
            }
          ],
          "page": 191,
          "sourceParagraph": 1374
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Service Orders",
          "text": "The ‘Service Orders’ form displays. Refresh the form by pressing the Ctrl + F11 keys on the keyboard and paste the Service Order Number in the SO Num field. To requery the SO press the Ctrl + F11 keys on the keyboard.",
          "html": "The ‘Service Orders’ form displays. Refresh the form by pressing the Ctrl + F11 keys on the keyboard and paste the <strong>Service Order Number</strong> in the SO Num field. To requery the SO press the Ctrl + F11 keys on the keyboard.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-270-p192.webp",
              "page": 192,
              "box": [
                52,
                184.5,
                332.401,
                381.58
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 192.",
              "width": 935,
              "height": 657
            }
          ],
          "page": 192,
          "sourceParagraph": 1377
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "The appropriate Service Order information populates",
          "text": "The appropriate Service Order information populates. Select the (1) Logistics tab. Click on the (2) Ship line and scroll to the right to the Serial Number field. Enter the (3) Serial Num used on the return line.",
          "html": "The appropriate Service Order information populates. Select the (1) <strong>Logistics</strong> tab. Click on the (2) <strong>Ship</strong> line and scroll to the right to the Serial Number field. Enter the (3) <strong>Serial Num</strong> used on the return line.",
          "details": [
            {
              "text": "Note: The Instance Number auto populates once the Serial Number is inputted on the Ship Line.",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> The Instance Number auto populates once the Serial Number is inputted on the Ship Line.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-271-p192.webp",
              "page": 192,
              "box": [
                52,
                444.57,
                336.981,
                641.98
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 192.",
              "width": 950,
              "height": 659
            }
          ],
          "page": 192,
          "sourceParagraph": 1379
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Repair Order Product Transactions",
          "text": "On the Ship line, use the scroll bar to scroll to the right and click into the (1) Repair Order Product Transactions DFF (between the Picking Rule and Add to Order fields). The ‘Repair Order Product Transactions’ pop-up window appears. Enter (2) % in the Context Value field and press the enter key. The ‘Context Value’ pop-up window appears. Select (3) D035K then click the (4) OK button.",
          "html": "On the Ship line, use the scroll bar to scroll to the right and click into the (1) <strong>Repair Order Product Transactions </strong>DFF (between the Picking Rule and Add to Order fields). The ‘Repair Order Product Transactions’ pop-up window appears. Enter (2) <strong>%</strong> in the Context Value field and press the enter key. The ‘Context Value’ pop-up window appears. Select (3) <strong>D035K</strong> then click the (4) <strong>OK</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-272-p193.webp",
              "page": 193,
              "box": [
                52,
                207.10000000000002,
                402.021,
                438.37
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 193.",
              "width": 1167,
              "height": 771
            }
          ],
          "page": 193,
          "sourceParagraph": 1382
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "Repair Order Product Transactions",
          "text": "The ‘Repair Order Product Transactions’ pop-up window refreshes with the Context Value populated and new fields available. In the Supply Condition Code field, enter (1) A for Serviceable, issuable without qualification. Click the (2) OK button, then click on the (3) Save icon.",
          "html": "The ‘Repair Order Product Transactions’ pop-up window refreshes with the Context Value populated and new fields available. In the Supply Condition Code field, enter (1) <strong>A</strong> for Serviceable, issuable without qualification. Click the (2) <strong>OK </strong>button, then click on the (3) <strong>Save </strong>icon.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-273-p194.webp",
              "page": 194,
              "box": [
                52,
                195.79999999999995,
                416.161,
                446.8
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 194.",
              "width": 1214,
              "height": 837
            }
          ],
          "page": 194,
          "sourceParagraph": 1384
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Select the (1) Process Trans check box for the Ship line",
          "text": "Select the (1) Process Trans check box for the Ship line. Then select the (2) Automate order processing steps through: check box and select the (3) Book Order radio button. Click the (4) Process button.",
          "html": "Select the (1) <strong>Process Trans</strong> check box for the Ship line. Then select the (2) <strong>Automate order processing steps through</strong><strong>:</strong> check box and select the (3) <strong>Book Order</strong> radio button. Click the (4) <strong>Process</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-274-p194.webp",
              "page": 194,
              "box": [
                52,
                482.64,
                412.30100000000004,
                598.3199999999999
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 194.",
              "width": 1202,
              "height": 386
            }
          ],
          "page": 194,
          "sourceParagraph": 1386
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "The Status for the ship line changed from “Entered” to “Booked.”",
          "text": "The Status for the ship line changed from “Entered” to “Booked.”",
          "html": "The Status for the ship line changed from “Entered” to “Booked.”",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-275-p195.webp",
              "page": 195,
              "box": [
                52,
                161.89,
                401.901,
                273.14
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 195.",
              "width": 1167,
              "height": 371
            }
          ],
          "page": 195,
          "sourceParagraph": 1388
        },
        {
          "number": 10,
          "sourceNumber": 10,
          "title": "Note",
          "text": "From the menu, select (1) Actions > (2) Engine Turn-In Signal (D6WP) to initiate the D6MOWP Outbound interface. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) OK button.",
          "html": "From the menu, select (1) <strong>Actions</strong><strong> </strong>&gt;<strong> </strong>(2) <strong>Engine Turn-In Sign</strong><strong>al (D6WP) </strong>to initiate the D6MOWP Outbound interface. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-276-p195.webp",
              "page": 195,
              "box": [
                52,
                320.62,
                414.30100000000004,
                571.62
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 195.",
              "width": 1208,
              "height": 837
            }
          ],
          "page": 195,
          "sourceParagraph": 1390
        },
        {
          "number": 11,
          "sourceNumber": 11,
          "title": "Service Orders",
          "text": "Return to the ‘Service Orders’ form. Refresh the SO, by pressing the Ctrl+F11 keys on the keyboard, then click on the (1) Details tab and select the (2) Service Order DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ form displays. Verify the following information and then click the (3) OK button.",
          "html": "Return to the ‘Service Orders’ form. Refresh the SO, by pressing the Ctrl+F11 keys on the keyboard, then click on the (1) <strong>Details</strong> tab and select the (2) <strong>Service Order </strong>DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ form displays. Verify the following information and then click the (3) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: For informational awareness but not systematically required, Schedulers may confirm that the following automated values are populated: Interface Transaction Type: D6MOWP (D6M Engine Turn-In) and Interface Transaction Status: S (Success).",
              "html": "<em><strong>Note</strong></em><em>: For informational awareness but not systematically required, Schedulers may confirm that the following automated values are populated</em><em>: Interface Transaction Type: D6MOWP (D6M Engine Turn-In) and Interface Transaction Status: S (Success)</em><em>.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-277-p196.webp",
              "page": 196,
              "box": [
                52,
                234.25,
                359.041,
                447.95
              ],
              "alt": "Annotated Oracle screenshot for source step 11, guide page 196.",
              "width": 1024,
              "height": 713
            }
          ],
          "page": 196,
          "sourceParagraph": 1392
        },
        {
          "number": 12,
          "sourceNumber": 12,
          "title": "Step 12",
          "text": "On the Logistics tab, select the (1) Process Trans check box next to the Ship line. Then select the (2) Ship Confirm radio button and click the (3) Process button.",
          "html": "On the Logistics tab, select the (1) <strong>Process Trans</strong> check box next to the Ship line. Then select the (2) <strong>Ship Confirm</strong> radio button and click the (3) <strong>Process</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-278-p196.webp",
              "page": 196,
              "box": [
                52,
                472.84000000000003,
                404.921,
                584.16
              ],
              "alt": "Annotated Oracle screenshot for source step 12, guide page 196.",
              "width": 1177,
              "height": 372
            }
          ],
          "page": 196,
          "sourceParagraph": 1395
        },
        {
          "number": 13,
          "sourceNumber": 13,
          "title": "Caution",
          "text": "Multiple ‘Caution’ pop-up windows appear. Click the OK button on each pop-up window to accept all the cautionary notes.",
          "html": "Multiple ‘Caution’ pop-up windows appear. Click the <strong>OK</strong> button on each pop-up window to accept all the cautionary notes.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-279-p197.webp",
              "page": 197,
              "box": [
                52,
                173.19799999999998,
                206.90099999999998,
                476.88
              ],
              "alt": "Annotated Oracle screenshot for source step 13, guide page 197.",
              "width": 517,
              "height": 1013
            }
          ],
          "page": 197,
          "sourceParagraph": 1397
        },
        {
          "number": 14,
          "sourceNumber": 14,
          "title": "The Status for the ship line changed from “Booked” to “Shipped.”",
          "text": "The Status for the ship line changed from “Booked” to “Shipped.”",
          "html": "The Status for the ship line changed from “Booked” to “Shipped.”",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-280-p197.webp",
              "page": 197,
              "box": [
                52,
                490.12,
                414.81100000000004,
                604.8199999999999
              ],
              "alt": "Annotated Oracle screenshot for source step 14, guide page 197.",
              "width": 1210,
              "height": 383
            }
          ],
          "page": 197,
          "sourceParagraph": 1403
        },
        {
          "number": 15,
          "sourceNumber": 15,
          "title": "Service Order",
          "text": "On the ‘Service Order’ form, click in the (1) SO Num field for the applicable Service Order. Then click on the (2) Attachment icon.",
          "html": "On the ‘Service Order’ form, click in the (1)<strong> </strong><strong>SO Num</strong> field for the applicable Service Order. Then click on the (2) <strong>Attachment</strong> icon.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-281-p198.webp",
              "page": 198,
              "box": [
                52,
                173.19000000000005,
                360.81100000000004,
                388.79
              ],
              "alt": "Annotated Oracle screenshot for source step 15, guide page 198.",
              "width": 1030,
              "height": 719
            }
          ],
          "page": 198,
          "sourceParagraph": 1405
        },
        {
          "number": 16,
          "sourceNumber": 16,
          "title": "Attachments",
          "text": "The ‘Attachments’ pop-up window appears. Verify that an attachment exists with the End-Item Stuffer Category. Select the (1) Attachment, then click the (2) Open Document button to download the End-Item Stuffer document to a local drive.",
          "html": "The ‘Attachments’ pop-up window appears. Verify that an attachment exists with the End-Item Stuffer Category. Select the (1) <strong>Attachment</strong>,<strong> </strong>then click the (2) <strong>Open Document</strong> button to download the End-Item Stuffer document to a local drive. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-282-p198.webp",
              "page": 198,
              "box": [
                52,
                424.06016,
                340.701,
                621.58
              ],
              "alt": "Annotated Oracle screenshot for source step 16, guide page 198.",
              "width": 963,
              "height": 659
            }
          ],
          "page": 198,
          "sourceParagraph": 1407
        },
        {
          "number": 17,
          "sourceNumber": 17,
          "title": "The Stuffer Document downloads as a PDF",
          "text": "The Stuffer Document downloads as a PDF. Click the Open file hyperlink to view the document.",
          "html": "The Stuffer Document downloads as a PDF. Click the <strong>Open </strong><strong>f</strong><strong>ile</strong> hyperlink to view the document.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-283-p199.webp",
              "page": 199,
              "box": [
                52,
                173.19000000000005,
                306.961,
                334.11
              ],
              "alt": "Annotated Oracle screenshot for source step 17, guide page 199.",
              "width": 850,
              "height": 537
            }
          ],
          "page": 199,
          "sourceParagraph": 1408
        },
        {
          "number": 18,
          "sourceNumber": 18,
          "title": "The document displays in a new window as a PDF",
          "text": "The document displays in a new window as a PDF. Verify the following information.",
          "html": "The document displays in a new window as a PDF. Verify the following information.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-284-p199.webp",
              "page": 199,
              "box": [
                52,
                358.65,
                416.211,
                499.15
              ],
              "alt": "Annotated Oracle screenshot for source step 18, guide page 199.",
              "width": 1215,
              "height": 469
            }
          ],
          "page": 199,
          "sourceParagraph": 1410
        }
      ],
      "prerequisites": [
        "An SR exists with an end item type of engine and an SO number is associated that has a service type of Receipt-Ship Only.",
        "The D7 WP (for engines) Outbound interface has been run successfully and the return line has a status of “Received.”",
        "The Supply Partner System is D035K (SR DFF)."
      ],
      "purpose": "Users can send a D6WP to D035K for an engine.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        190,
        191,
        192,
        193,
        194,
        195,
        196,
        197,
        198,
        199
      ],
      "part": null,
      "summary": "Users can send a D6WP to D035K for an engine.",
      "related": [
        "send-d6-wash-post-outbound-transaction-to-d035k"
      ]
    },
    {
      "id": "send-d6-wash-post-outbound-transaction-to-d035k",
      "kind": "procedure",
      "title": "Send D6 Wash Post Outbound Transaction to D035K",
      "sourceTitle": "Send D6 Wash Post Outbound Transaction to D035K",
      "lesson": 3,
      "category": "Turn-In/Sellback",
      "topic": "Turning Item Back In/Selling",
      "sourceStart": 1413,
      "sourceEnd": 1453,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Service Order",
          "text": "On the Oracle Home page, navigate to (1) MROi Depot Repair > (2) Depot Repair > (3) Service Order.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Depot Repair</strong> &gt; (2) <strong>Depot Repair</strong><strong> </strong>&gt; (3) <strong>Service Order</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-285-p200.webp",
              "page": 200,
              "box": [
                52,
                283.34000000000003,
                385.93100000000004,
                514.72
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 200.",
              "width": 1114,
              "height": 772
            }
          ],
          "page": 200,
          "sourceParagraph": 1417
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and Click on the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and Click on the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-286-p201.webp",
              "page": 201,
              "box": [
                52,
                173.19000000000005,
                311.391,
                345.99
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 201.",
              "width": 865,
              "height": 576
            }
          ],
          "page": 201,
          "sourceParagraph": 1419
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Service Requests",
          "text": "The ‘Find Service Requests’ form appears. Enter (either by scanning the DD Form 1348-1A EIDN barcode or manually typing) the (1) Service Order and click the (2) Find button. The Results section expands with queried request. Click the (3) OK button.",
          "html": "The ‘Find Service Requests’ form appears. Enter (either by scanning the DD Form 1348-1A EIDN barcode or manually typing) the (1) <strong>Service Order </strong>and click the (2) <strong>Find</strong> button. The Results section expands with queried request. Click the (3) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: You will be unable to perform this JA on SOs that were previously used to send D6 WP. The SO number is the EIDN that is received from D035K.",
              "html": "<em><strong>Note:</strong></em><em> You will be unable to perform this </em><em>JA</em><em> on </em><em>SOs that were previously used to send D6 WP. The</em><em> </em><em>SO </em><em>number is the EIDN that is received from D035K. </em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-287-p202.webp",
              "page": 202,
              "box": [
                52,
                222.95000000000005,
                414.80100000000004,
                511.82
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 202.",
              "width": 1210,
              "height": 963
            }
          ],
          "page": 202,
          "sourceParagraph": 1421
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Service Orders",
          "text": "The ‘Service Orders’ form displays. Refresh the form by pressing the Ctrl + F11 keys on the keyboard and paste the Service Order Number in the SO Num field. To requery the SO press the Ctrl + F11 keys on the keyboard.",
          "html": "The ‘Service Orders’ form displays. Refresh the form by pressing the Ctrl + F11 keys on the keyboard and paste the <strong>Service Order Number</strong> in the SO Num field. To requery the SO press the Ctrl + F11 keys on the keyboard.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-288-p203.webp",
              "page": 203,
              "box": [
                52,
                184.5,
                317.481,
                371.51
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 203.",
              "width": 885,
              "height": 624
            }
          ],
          "page": 203,
          "sourceParagraph": 1424
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Ship Only.",
          "text": "The appropriate Service Order information populates. Verify that the Service Type reflects ‘Ship Only.’ Click on the (1) Service Order DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Review the information, then click on the (2) [X] to close the ‘Repair Orders’ window.",
          "html": "The appropriate Service Order information populates. Verify that the Service Type reflects ‘Ship Only.’ Click on the (1) <strong>Service Order </strong>DFF in the bottom-right portion of the Details tab. The ‘Repair Orders’ pop-up window appears. Review the information, then click on the (2) <strong>[X]</strong> to close the ‘Repair Orders’ window. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-289-p203.webp",
              "page": 203,
              "box": [
                52,
                418.65999999999997,
                387.44100000000003,
                616.65
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 203.",
              "width": 1119,
              "height": 660
            }
          ],
          "page": 203,
          "sourceParagraph": 1426
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Click on the (1) Logistics tab",
          "text": "Click on the (1) Logistics tab. On the return line, scroll to the right and click in the (2) Repair Order Product Transactions DFF. Verify that the Advice Code reflects RA and the Action Suffix Code reflects CL. Click the (3) OK button.",
          "html": "Click on the (1) <strong>Logistics</strong> tab. On the return line, scroll to the right and click in the (2) <strong>Repair Order Product Transactions </strong>DFF. Verify that the Advice Code reflects RA and the Action Suffix Code reflects CL. Click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-290-p204.webp",
              "page": 204,
              "box": [
                52,
                184.5,
                353.30100000000004,
                395.24
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 204.",
              "width": 1005,
              "height": 703
            }
          ],
          "page": 204,
          "sourceParagraph": 1428
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "Step 7",
          "text": "Click on the (1) Ship line, scroll to the right and click in the (2) Repair Order Product Transactions DFF.",
          "html": "Click on the (1) <strong>Ship</strong> line, scroll to the right and click in the (2) <strong>Repair Order Product Transactions </strong>DFF.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-291-p204.webp",
              "page": 204,
              "box": [
                52,
                419.78,
                346.961,
                622.4
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 204.",
              "width": 984,
              "height": 676
            }
          ],
          "page": 204,
          "sourceParagraph": 1430
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Repair Order Product Transactions",
          "text": "The ‘Repair Order Product Transactions’ pop-up window appears. Enter (1) % in the Context Value field and press the enter key. The ‘Context Value’ pop-up window appears. Select (2) D035K and click the (3) OK button.",
          "html": "The ‘Repair Order Product Transactions’ pop-up window appears. Enter (1) <strong>%</strong> in the Context Value field and press the enter key. The ‘Context Value’ pop-up window appears. Select (2) <strong>D035K </strong>and click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-292-p205.webp",
              "page": 205,
              "box": [
                52,
                184.5,
                341.921,
                372.66
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 205.",
              "width": 967,
              "height": 628
            }
          ],
          "page": 205,
          "sourceParagraph": 1432
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "Repair Order Product Transactions",
          "text": "The ‘Repair Order Product Transactions’ pop-up window refreshes with the Context Value populated and new fields available. Enter the Supply Condition Code: (1) F for Unserviceable, but reparable, Misidentified Induction? (2) No, Wash Post? (3) Yes. Next, click the (4) OK button, then click on the (5) Save icon.",
          "html": "The ‘Repair Order Product Transactions’ pop-up window refreshes with the Context Value populated and new fields available. Enter the Supply Condition Code: (1) <strong>F</strong> for Unserviceable, but reparable, Misidentified Induction? (2) <strong>No</strong>, Wash Post?<strong> </strong>(3)<strong> Yes</strong>. Next, click the (4) <strong>OK </strong>button, then click on the (5) <strong>Save </strong>icon.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-293-p205.webp",
              "page": 205,
              "box": [
                52,
                419.79999999999995,
                363.99100000000004,
                633.04
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 205.",
              "width": 1040,
              "height": 711
            }
          ],
          "page": 205,
          "sourceParagraph": 1434
        },
        {
          "number": 10,
          "sourceNumber": 10,
          "title": "Note",
          "text": "On the menu, click on (1) Actions > (2) End-Item Turn-In Signal (D6) to initiate the D6WP Outbound interface. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) OK button.",
          "html": "On the menu, click on (1) <strong>Actio</strong><strong>ns</strong> &gt;<strong> </strong>(2) <strong>End-Item Turn-In Signal (D6) </strong>to initiate the D6WP Outbound interface. A ‘Note’ pop-up window appears stating the concurrent request has been launched to update the service order. Click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-294-p206.webp",
              "page": 206,
              "box": [
                52,
                195.79999999999995,
                360.61100000000005,
                406.92
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 206.",
              "width": 1029,
              "height": 704
            }
          ],
          "page": 206,
          "sourceParagraph": 1436
        },
        {
          "number": 11,
          "sourceNumber": 11,
          "title": "From the menu, select (1) View > (2) Requests.",
          "text": "From the menu, select (1) View > (2) Requests.",
          "html": "From the menu, select (1) <strong>View</strong> &gt; (2) <strong>Requests</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-295-p206.webp",
              "page": 206,
              "box": [
                52,
                420.15999999999997,
                359.031,
                634.87
              ],
              "alt": "Annotated Oracle screenshot for source step 11, guide page 206.",
              "width": 1024,
              "height": 716
            }
          ],
          "page": 206,
          "sourceParagraph": 1438
        },
        {
          "number": 12,
          "sourceNumber": 12,
          "title": "Find Requests",
          "text": "The ‘Find Requests’ pop-up window appears with the All My Requests radio button defaulted. Click the Find button to view the list of recently run concurrent requests.",
          "html": "The ‘Find Requests’ pop-up window appears with the All My Requests radio button defaulted. Click the <strong>Find</strong> button to view the list of recently run concurrent requests.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-296-p207.webp",
              "page": 207,
              "box": [
                52,
                184.5,
                280.481,
                363.33
              ],
              "alt": "Annotated Oracle screenshot for source step 12, guide page 207.",
              "width": 762,
              "height": 597
            }
          ],
          "page": 207,
          "sourceParagraph": 1440
        },
        {
          "number": 13,
          "sourceNumber": 13,
          "title": "The Requests page displays with a list of recently launched concurrent requests",
          "text": "The Requests page displays with a list of recently launched concurrent requests. Select the applicable (1) Request ID of the request launched in step 10. Confirm that the Phase reflects: Completed. Click the (2) View Log button.",
          "html": "The Requests page displays with a list of recently launched concurrent requests. Select the applicable (1) <strong>Request ID</strong> of the request launched in step 10. Confirm that the Phase reflects: Completed. Click the (2) <strong>View Log</strong> button.",
          "details": [
            {
              "text": "Note: Verify that the Parameters associated to the Request are accurate when viewing the Log File.",
              "html": "<em><strong>Note:</strong></em><em><strong> </strong></em><em>Verify that the Parameters associated to the Request </em><em>are</em><em> accurate when viewing the Log File.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-297-p207.webp",
              "page": 207,
              "box": [
                52,
                426.32,
                308.901,
                630.38
              ],
              "alt": "Annotated Oracle screenshot for source step 13, guide page 207.",
              "width": 857,
              "height": 681
            }
          ],
          "page": 207,
          "sourceParagraph": 1442
        },
        {
          "number": 14,
          "sourceNumber": 14,
          "title": "The output file opens in a new window as HTML",
          "text": "The output file opens in a new window as HTML. Verify there are no error messages contained within the Message Status tag, and it reflects: SUCCESS throughout.",
          "html": "The output file opens in a new window as HTML. Verify there are no error messages contained within the Message Status tag, and it reflects: SUCCESS throughout.",
          "details": [
            {
              "text": "Note: Users may want to copy the MILSTRIP Message for later use.",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> Users may want to copy the MILSTRIP Message for later use.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-298-p208.webp",
              "page": 208,
              "box": [
                52,
                200.3499999999999,
                414.341,
                350.53
              ],
              "alt": "Annotated Oracle screenshot for source step 14, guide page 208.",
              "width": 1208,
              "height": 501
            }
          ],
          "page": 208,
          "sourceParagraph": 1445
        },
        {
          "number": 15,
          "sourceNumber": 15,
          "title": "Service Orders",
          "text": "Return to the ‘Service Orders’ form. Refresh the SO, by pressing the CTRL+F11 keys on the keyboard, then click on the (1) Details tab and click on the (2) Service Order DFF in the bottom-right portion of the Details tab. Verify that the following values are populated as follows: Interface Transaction Type: D6O (D6 Outbound) and Interface Transaction Status: S (Success).",
          "html": "Return to the ‘Service Orders’ form. Refresh the SO, by pressing the CTRL+F11 keys on the keyboard, then click on the (1) <strong>Details</strong> tab and click on the (2) <strong>Service Order </strong>DFF in the bottom-right portion of the Details tab. Verify that the following values are populated as follows: Interface Transaction Type: D6O (D6 Outbound) and Interface Transaction Status: S (Success).",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-299-p209.webp",
              "page": 209,
              "box": [
                52,
                207.0999999999999,
                410.671,
                457.34
              ],
              "alt": "Annotated Oracle screenshot for source step 15, guide page 209.",
              "width": 1196,
              "height": 835
            }
          ],
          "page": 209,
          "sourceParagraph": 1448
        },
        {
          "number": 16,
          "sourceNumber": 16,
          "title": "Repair Order Product Transactions",
          "text": "Click on the (1) Logistics tab. On the ship line, scroll to the right and click in the (2) Repair Order Product Transactions DFF. The ‘Repair Order Product Transactions’ pop-up window appears. Verify that the Advice Code reflects RT and the Action Suffix Code reflects WP (Wash Post inventory balance – Adjust due-ins). To close the window click the (3) OK button.",
          "html": "Click on the (1) <strong>Logistics</strong> tab. On the ship line, scroll to the right and click in the (2) <strong>Repair Order Product Transactions </strong>DFF. The ‘Repair Order Product Transactions’ pop-up window appears. Verify that the Advice Code reflects RT and the Action Suffix Code reflects WP<strong> </strong>(Wash Post inventory balance – Adjust due-ins). To close the window click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-300-p210.webp",
              "page": 210,
              "box": [
                52,
                207.0999999999999,
                352.851,
                415.34
              ],
              "alt": "Annotated Oracle screenshot for source step 16, guide page 210.",
              "width": 1003,
              "height": 695
            }
          ],
          "page": 210,
          "sourceParagraph": 1449
        },
        {
          "number": 17,
          "sourceNumber": 17,
          "title": "Step 17",
          "text": "On the Logistics tab, select the (1) Process Trans check box next to the Ship line. Then click on the (2) Automate order processing steps through: check box. Confirm that the Ship Confirm radio button is disabled.",
          "html": "On the Logistics tab, select the (1) <strong>Process Trans</strong> check box next to the Ship line. Then click on the (2) <strong>Automate order processing steps through</strong><strong>:</strong> check box. Confirm that the Ship Confirm radio button is disabled.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-301-p210.webp",
              "page": 210,
              "box": [
                52,
                451.28999999999996,
                414.69100000000003,
                566.22
              ],
              "alt": "Annotated Oracle screenshot for source step 17, guide page 210.",
              "width": 1209,
              "height": 384
            }
          ],
          "page": 210,
          "sourceParagraph": 1451
        }
      ],
      "prerequisites": [
        "An SR and SO are created with D035K as the customer, the SO’s return line status reflects “Received,” and the D7 Wash Post has been sent. The SO’s ship line status reflects “Booked.”"
      ],
      "purpose": "Users can send a D6 Outbound WP Interface from the SO form. This transaction lets D035K know that the end-item is being wash posted onto another service request/production number to be worked.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        210
      ],
      "part": null,
      "summary": "Users can send a D6 Outbound WP Interface from the SO form. This transaction lets D035K know that the end-item is being wash posted onto another service request/production number to be worked.",
      "related": [
        "b3-miscellaneous-issue",
        "send-d6-wash-post-outbound-transaction-to-d035k-for-engine-item-type"
      ]
    },
    {
      "id": "view-master-configurations-report",
      "kind": "procedure",
      "title": "View Master Configurations Report",
      "sourceTitle": "View Master Configurations Report",
      "lesson": 4,
      "category": "Configurations",
      "topic": "Viewing and Modifying Configurations",
      "sourceStart": 1480,
      "sourceEnd": 1499,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open MROI Master Configuration Report",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User - Scheduler > (2) Configuration Management > (3) Master Configuration > (4) MROI Master Configuration Report.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Complex MRO User - Scheduler</strong> &gt; (2) <strong>Configuration Management</strong> &gt; (3) <strong>Master Configuration</strong> &gt; (4) <strong>MROI Master Configuration Report</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-302-p214.webp",
              "page": 214,
              "box": [
                52,
                249.43000000000006,
                411.88100000000003,
                385.87
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 214.",
              "width": 1200,
              "height": 455
            }
          ],
          "page": 214,
          "sourceParagraph": 1484
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Schedule Request: Define",
          "text": "The ‘Schedule Request: Define’ form displays. On the Parameters tab, enter the (1) Master Configuration Name, (2) Revision number, and if applicable, the (3) Display Sub Master Configuration. Then click the (4) Layout tab.",
          "html": "The ‘Schedule Request: Define’ form displays. On the Parameters tab, enter the (1) <strong>Master Configuration</strong> <strong>Name</strong>, (2) <strong>Revision</strong><strong> </strong>number,<strong> </strong>and if applicable, the (3)<strong> </strong><strong>Display Sub Master Configuration</strong>. Then click the (4) <strong>Layout</strong> tab.",
          "details": [
            {
              "text": "Note: The Revision field is required if the MC has revisions.",
              "html": "<em><strong>Note:</strong></em><em> The Revision field is required if the </em><em>MC</em><em> has revisions.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-303-p214.webp",
              "page": 214,
              "box": [
                53.171,
                442.317,
                412.291,
                549.5
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 214.",
              "width": 1198,
              "height": 358
            }
          ],
          "page": 214,
          "sourceParagraph": 1486
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Step 3",
          "text": "On the Layout tab, change the applicable (1) Format, then click on the (2) Continue button.",
          "html": "On the Layout tab, change the applicable (1) <strong>Format</strong>, then click on the (2) <strong>Continue</strong> button.",
          "details": [
            {
              "text": "Note: The template language and name can also be changed if needed.",
              "html": "<em><strong>Note:</strong></em> The template language and name can also be changed if needed.",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-304-p215.webp",
              "page": 215,
              "box": [
                52,
                192.086,
                414.12100000000004,
                281.32000000000005
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 215.",
              "width": 1208,
              "height": 298
            }
          ],
          "page": 215,
          "sourceParagraph": 1489
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Schedule Request: Review",
          "text": "The ‘Schedule Request: Review’ page displays. Click the (1) Submit button. An ‘Information’ pop-up window appears with the Request ID. Click the (2) OK button.",
          "html": "The ‘Schedule Request: Review’ page displays. Click the (1) <strong>Submit </strong>button. An ‘Information’ pop-up window appears with the Request ID. Click the (2) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-305-p215.webp",
              "page": 215,
              "box": [
                52,
                308.9,
                413.701,
                475.96
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 215.",
              "width": 1206,
              "height": 557
            }
          ],
          "page": 215,
          "sourceParagraph": 1492
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Requests",
          "text": "The ‘Requests’ page displays. Click on the Output icon to view the Master Configuration Report.",
          "html": "The ‘Requests’ page displays. Click on the <strong>Output</strong> icon to view the Master Configuration Report.",
          "details": [
            {
              "text": "Tip: If the Phase does not reflect: Completed, click the Refresh button.",
              "html": "<em><strong>Tip:</strong></em><em> </em><em>If the Phase does not reflect: Completed, click the Refresh button</em><em>.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-306-p215.webp",
              "page": 215,
              "box": [
                52,
                521.211,
                413.701,
                595.88
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 215.",
              "width": 1206,
              "height": 249
            }
          ],
          "page": 215,
          "sourceParagraph": 1494
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "The Master Configuration Report opens in a new window",
          "text": "The Master Configuration Report opens in a new window. Download or Print by using the icons on the top right corner.",
          "html": "The Master Configuration Report opens in a new window. Download or Print by using the icons on the top right corner.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-307-p216.webp",
              "page": 216,
              "box": [
                52,
                174.71000000000004,
                414.81100000000004,
                420.97
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 216.",
              "width": 1210,
              "height": 821
            }
          ],
          "page": 216,
          "sourceParagraph": 1497
        }
      ],
      "prerequisites": [
        "Items exist in the database."
      ],
      "purpose": "The steps below illustrate how to view an MC Report.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        214,
        215,
        216
      ],
      "part": null,
      "summary": "View an MC Report.",
      "related": [
        "search-product"
      ]
    },
    {
      "id": "search-product",
      "kind": "procedure",
      "title": "Search for a Product",
      "sourceTitle": "Search for a Product",
      "lesson": 4,
      "category": "Configurations",
      "topic": "Viewing and Modifying Configurations",
      "sourceStart": 1500,
      "sourceEnd": 1515,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Search Product",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User - Scheduler > (2) Configuration Management > (3) Unit Configuration > (4) Search Product.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Complex MRO User - Scheduler</strong> &gt; (2) <strong>Configuration Management</strong> &gt; (3) <strong>Unit Configuration</strong> &gt; (4) <strong>Search</strong><strong> </strong><strong>Product</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-308-p217.webp",
              "page": 217,
              "box": [
                52,
                249.43999999999994,
                413.271,
                405.84
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 217.",
              "width": 1205,
              "height": 522
            }
          ],
          "page": 217,
          "sourceParagraph": 1504
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Search Item Instances",
          "text": "The ‘Search Item Instances’ form displays. Click on the Personalize button.",
          "html": "The ‘Search Item Instances’ form displays. Click on the <strong>Personalize</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-309-p217.webp",
              "page": 217,
              "box": [
                52,
                422.10799999999995,
                414.38100000000003,
                522.77
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 217.",
              "width": 1208,
              "height": 336
            }
          ],
          "page": 217,
          "sourceParagraph": 1506
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Advanced Item Instance Search",
          "text": "The ‘Advanced Item Instance Search’ form displays. Enter the (1) Serial Number received as part of the earlier induction, then click the (2) Search button.",
          "html": "The ‘Advanced Item Instance Search’ form displays. Enter the (1) <strong>Serial </strong><strong>N</strong><strong>umber</strong> received as part of the earlier induction, then click the (2) <strong>Search</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-310-p218.webp",
              "page": 218,
              "box": [
                52,
                174.72000000000003,
                414.581,
                362.12
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 218.",
              "width": 1209,
              "height": 625
            }
          ],
          "page": 218,
          "sourceParagraph": 1508
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "The Item Instance results display",
          "text": "The Item Instance results display. Click on the Item Instance Description hyperlink.",
          "html": "The Item Instance results display. Click on the Item Instance <strong>Description</strong> hyperlink.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-311-p218.webp",
              "page": 218,
              "box": [
                52,
                390.15,
                410.93100000000004,
                498.28
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 218.",
              "width": 1197,
              "height": 361
            }
          ],
          "page": 218,
          "sourceParagraph": 1510
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Item Instance Details",
          "text": "The ‘Item Instance Details’ form displays with the product information.",
          "html": "The ‘Item Instance Details’ form displays with the product information.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-312-p219.webp",
              "page": 219,
              "box": [
                52,
                163.41999999999996,
                415.18100000000004,
                346.34
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 219.",
              "width": 1211,
              "height": 610
            }
          ],
          "page": 219,
          "sourceParagraph": 1513
        }
      ],
      "prerequisites": [
        "Items exist in the database."
      ],
      "purpose": "The steps below illustrate how to search for a product.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        217,
        218,
        219
      ],
      "part": null,
      "summary": "Use a serial number to find an item instance and view its product information.",
      "related": [
        "view-master-configurations-report"
      ]
    },
    {
      "id": "update-visit",
      "kind": "procedure",
      "title": "Update Visits",
      "sourceTitle": "Update Visits",
      "lesson": 5,
      "category": "Visits",
      "topic": "Visits",
      "sourceStart": 1531,
      "sourceEnd": 1544,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Visits",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User – Scheduler > (2) Planning > (3) Visit Work Package > (4) Visits.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Complex MRO User – Scheduler</strong> &gt; (2) <strong>Planning</strong> &gt; (3) <strong>Visit Work Package</strong> &gt; (4) <strong>Visits</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-313-p222.webp",
              "page": 222,
              "box": [
                52,
                174.71000000000004,
                403.19100000000003,
                305.01
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 222.",
              "width": 1171,
              "height": 435
            }
          ],
          "page": 222,
          "sourceParagraph": 1536
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Enter the (1) Visit Number and click the (2) Go button.",
          "text": "Enter the (1) Visit Number and click the (2) Go button.",
          "html": "Enter the (1) <strong>Visit Number</strong> and click the (2) <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-314-p222.webp",
              "page": 222,
              "box": [
                52,
                321.28,
                414.81100000000004,
                519.31
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 222.",
              "width": 1210,
              "height": 661
            }
          ],
          "page": 222,
          "sourceParagraph": 1538
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Click on the applicable Visit Number hyperlink.",
          "text": "Click on the applicable Visit Number hyperlink.",
          "html": "Click on the applicable <strong>Visit Number</strong> hyperlink.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-315-p223.webp",
              "page": 223,
              "box": [
                52,
                163.40999999999997,
                409.781,
                319.51
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 223.",
              "width": 1193,
              "height": 521
            }
          ],
          "page": 223,
          "sourceParagraph": 1540
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Update Visit",
          "text": "The ‘Update Visit’ form displays. Make the necessary updates and click the Apply button.",
          "html": "The ‘Update Visit’ form displays. Make the necessary updates and click the <strong>Apply </strong>button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-316-p223.webp",
              "page": 223,
              "box": [
                52,
                347.08000000000004,
                412.19100000000003,
                606.65
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 223.",
              "width": 1201,
              "height": 866
            }
          ],
          "page": 223,
          "sourceParagraph": 1542
        }
      ],
      "prerequisites": [
        "Items exist in the database."
      ],
      "purpose": "The steps below illustrate how to update a Maintenance Visit.",
      "role": "MROi Scheduler",
      "mvp": "4.2",
      "pages": [
        222,
        223
      ],
      "part": null,
      "summary": "Find a maintenance visit, open its details, and apply your updates.",
      "related": []
    },
    {
      "id": "how-to-create-a-non-routine-work-order-from-existing-non-routine-work-order",
      "kind": "procedure",
      "title": "Create a Non-routine Work Order from existing Non-routine Work Order",
      "sourceTitle": "How to Create a Non-routine Work Order from existing Non-routine Work Order",
      "lesson": 6,
      "category": "Work Orders",
      "topic": "Create and Update a Non-Routine Work Order from an Existing Non-Routine Work Order",
      "sourceStart": 1568,
      "sourceEnd": 1595,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Work Orders",
          "text": "As a MROi Scheduler or MROi Maintenance (Mx) Supervisor: On the Oracle Home page, navigate to (1) MROi Complex MRO User – Scheduler > (2) Execution > (3) Production Planning > (4) Work Orders.",
          "html": "As a MROi Scheduler or MROi Maintenance (Mx) Supervisor: On the Oracle Home page, navigate to (1) <strong>MROi Complex MRO User – Scheduler</strong> &gt; (2) <strong>Execution</strong> &gt; (3) <strong>Production Planning</strong> &gt; (4) <strong>Work Orders</strong>.",
          "details": [
            {
              "text": "Note: MROi Maintainers can create a non-routine WO from an existing non-routine through the Technician Workbench.",
              "html": "<em><strong>Note:</strong></em><em> MROi Maintainers can create a non-routine </em><em>WO</em><em> from an existing non-routine through the Technician Workbench. </em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-317-p227.webp",
              "page": 227,
              "box": [
                52,
                290.92,
                413.06100000000004,
                414.31
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 227.",
              "width": 1204,
              "height": 412
            }
          ],
          "page": 227,
          "sourceParagraph": 1572
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Work Order Overview",
          "text": "The ‘Work Order Overview’ form displays. From the Work Order Type drop-down, select (1) Non-Routine. From the Work Order Status drop-down, select (2) Released. Then click the (3) Go button.",
          "html": "The ‘Work Order Overview’ form displays. From the Work Order Type drop-down, select (1) <strong>Non-Routine</strong>. From the Work Order Status drop-down, select (2) <strong>Released</strong>. Then click the (3) <strong>Go </strong>button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-318-p228.webp",
              "page": 228,
              "box": [
                52,
                184.5,
                414.81100000000004,
                391.22
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 228.",
              "width": 1210,
              "height": 690
            }
          ],
          "page": 228,
          "sourceParagraph": 1575
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "The results are displayed at the bottom of the page",
          "text": "The results are displayed at the bottom of the page. Select the applicable (1) Work Order Number radio button. From the Select Work Order drop-down, select (2) Create Non-Routine Work Order then click the (3) Go button.",
          "html": "The results are displayed at the bottom of the page. Select the applicable (1) <strong>Work Order Number</strong> radio button. From the Select Work Order drop-down, select (2) <strong>Create Non-Routine Work Order</strong> then click the (3) <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-319-p228.webp",
              "page": 228,
              "box": [
                52,
                427.55,
                414.80100000000004,
                594.65
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 228.",
              "width": 1210,
              "height": 557
            }
          ],
          "page": 228,
          "sourceParagraph": 1577
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Create Service Request",
          "text": "The ‘Create Service Request’ form displays. Update the (1) Work Order Start Date to a date between the Target Visit Start Date and the Target Visit End Date. Enter the (2) Summary then scroll down the page.",
          "html": "The ‘Create Service Request’ form displays. Update the (1) <strong>Work Order Start Date</strong> to a date between the Target Visit Start Date and the Target Visit End Date. Enter the (2) <strong>S</strong><strong>ummary</strong> then scroll down the page.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-320-p229.webp",
              "page": 229,
              "box": [
                52,
                184.5,
                413.671,
                339.86
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 229.",
              "width": 1206,
              "height": 518
            }
          ],
          "page": 229,
          "sourceParagraph": 1579
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Step 5",
          "text": "Locate the Non-Routine Type field, enter (1) % and click the (2) Non-Routine Type search tool to search for the results.",
          "html": "Locate the Non-Routine Type field, enter (1) <strong>%</strong> and click the (2) <strong>Non-Routine Type </strong>search tool to search for the results.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-321-p229.webp",
              "page": 229,
              "box": [
                52,
                364.40999999999997,
                407.891,
                533.0699999999999
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 229.",
              "width": 1187,
              "height": 563
            }
          ],
          "page": 229,
          "sourceParagraph": 1581
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "The following Non-Routine Type values appear",
          "text": "The following Non-Routine Type values appear. Select the appropriate Display name hyperlink.",
          "html": "The following Non-Routine Type values appear. Select the appropriate <strong>Display</strong> name hyperlink. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-322-p230.webp",
              "page": 230,
              "box": [
                52,
                173.20000000000005,
                386.19100000000003,
                297.83416
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 230.",
              "width": 1114,
              "height": 416
            }
          ],
          "page": 230,
          "sourceParagraph": 1583
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "Create Service Request",
          "text": "The ‘Create Service Request’ form refreshes with the Non-Routine Type field populated with the selected value. Click the Attach Maintenance Requirements button.",
          "html": "The ‘Create Service Request’ form refreshes with the Non-Routine Type field populated with the selected value. Click the <strong>Attach Maintenance Requirements </strong>button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-323-p230.webp",
              "page": 230,
              "box": [
                52,
                332.01,
                414.291,
                470.65
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 230.",
              "width": 1208,
              "height": 463
            }
          ],
          "page": 230,
          "sourceParagraph": 1585
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Search Maintenance Requirements",
          "text": "The ‘Search Maintenance Requirements’ form displays. Enter any applicable information to search for a specific MR or click the Go button to populate a list of MRs.",
          "html": "The ‘Search Maintenance Requirements’ form displays. Enter any applicable information to search for a specific MR or click the <strong>Go </strong>button<strong> </strong>to populate a list of MRs. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-324-p230.webp",
              "page": 230,
              "box": [
                52,
                495.453,
                414.25100000000003,
                580.14
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 230.",
              "width": 1208,
              "height": 283
            }
          ],
          "page": 230,
          "sourceParagraph": 1587
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "Step 9",
          "text": "Select the applicable (1) Maintenance Requirement check box then click the (2) Select button.",
          "html": "Select the applicable (1) <strong>Maintenance Requirement</strong> check box then click the (2) <strong>Select </strong>button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-325-p231.webp",
              "page": 231,
              "box": [
                52,
                173.20000000000005,
                414.791,
                282.89
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 231.",
              "width": 1210,
              "height": 366
            }
          ],
          "page": 231,
          "sourceParagraph": 1589
        },
        {
          "number": 10,
          "sourceNumber": 10,
          "title": "Click the Apply button to save the attached MRs.",
          "text": "Click the Apply button to save the attached MRs.",
          "html": "Click the <strong>Apply </strong>button to save the attached MRs.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-326-p231.webp",
              "page": 231,
              "box": [
                52,
                296.12,
                414.80100000000004,
                422.7
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 231.",
              "width": 1210,
              "height": 422
            }
          ],
          "page": 231,
          "sourceParagraph": 1591
        },
        {
          "number": 11,
          "sourceNumber": 11,
          "title": "Update Non-routine Workorder",
          "text": "The ‘Update Non-routine Workorder’ form displays with an assigned non-routine WO number. Annotate the non-routine number (example shown here: 181) as it is required for making updates.",
          "html": "The ‘Update Non-routine Workorder’ form displays with an assigned non-routine WO number. Annotate the non-routine number (example shown here: 181) as it is required for making updates.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-327-p231.webp",
              "page": 231,
              "box": [
                52,
                458.55,
                413.50100000000003,
                579.51
              ],
              "alt": "Annotated Oracle screenshot for source step 11, guide page 231.",
              "width": 1206,
              "height": 404
            }
          ],
          "page": 231,
          "sourceParagraph": 1593
        }
      ],
      "prerequisites": [
        "A non-routine WO exists."
      ],
      "purpose": "The steps below illustrate how to create a non-routine WO.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        227,
        228,
        229,
        230,
        231
      ],
      "part": null,
      "summary": "Create a non-routine WO.",
      "related": [
        "search-materials-from-work-orders",
        "update-materials-required-for-work-orders"
      ]
    },
    {
      "id": "search-materials-from-work-orders",
      "kind": "procedure",
      "title": "Search Materials from Work Orders",
      "sourceTitle": "Search Materials from Work Orders",
      "lesson": 6,
      "category": "Work Orders",
      "topic": "Issue Material to Work Orders",
      "sourceStart": 1599,
      "sourceEnd": 1613,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Issues",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User – Scheduler > (2) Execution > (3) Material Transactions > (4) Issues.",
          "html": "On the Oracle Home page, navigate to (1)<strong> MROi </strong><strong>Complex MRO User</strong> – <strong>Scheduler</strong> &gt; (2) <strong>Execution</strong> &gt; (3) <strong>Material Transactions </strong>&gt; (4)<strong> Issues</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-328-p232.webp",
              "page": 232,
              "box": [
                52,
                288.73,
                405.581,
                434.74
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 232.",
              "width": 1179,
              "height": 487
            }
          ],
          "page": 232,
          "sourceParagraph": 1603
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Material Issue",
          "text": "The ‘Material Issue’ form displays. Enter the (1) Visit Number then click the (2) Go button.",
          "html": "The ‘Material Issue’ form displays. Enter the (1) <strong>Visit Number</strong> then click the (2) <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-329-p232.webp",
              "page": 232,
              "box": [
                52,
                462.305,
                418.43100000000004,
                541.6800000000001
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 232.",
              "width": 1222,
              "height": 265
            }
          ],
          "page": 232,
          "sourceParagraph": 1605
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Material Issue",
          "text": "The ‘Material Issue’ form displays. Scroll down to view the results. Select the applicable (1) Work Order. In the Serial Number field enter (2) % and click the (3) Search tool.",
          "html": "The ‘Material Issue’ form displays. Scroll down to view the results. Select the applicable (1) <strong>Work</strong> <strong>Order</strong>. In the Serial Number field enter (2) <strong>% </strong>and<strong> </strong>click the (3) <strong>Search</strong> tool.",
          "details": [
            {
              "text": "Note: If the item is not serial controlled, users can issue the material without adding a serial number. Serial numbers can only be added/selected if the item on the WO is serial controlled.",
              "html": "<em><strong>Note:</strong></em><em><strong> </strong></em><em>If the item is not serial controlled, users can issue the material without adding a serial number. Serial numbers can only be added/selected if the item on the WO is serial controlled.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-330-p233.webp",
              "page": 233,
              "box": [
                52,
                225.99,
                414.81100000000004,
                380.15
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 233.",
              "width": 1210,
              "height": 514
            }
          ],
          "page": 233,
          "sourceParagraph": 1606
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "The SelectSerial Number page displays",
          "text": "The SelectSerial Number page displays. Click on the applicable Serial Number hyperlink.",
          "html": "The SelectSerial Number page displays. Click on the applicable <strong>Serial</strong> <strong>Number</strong> hyperlink.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-331-p233.webp",
              "page": 233,
              "box": [
                52,
                407.724,
                414.81100000000004,
                508.31
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 233.",
              "width": 1210,
              "height": 336
            }
          ],
          "page": 233,
          "sourceParagraph": 1609
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Material Issue",
          "text": "The ‘Material Issue’ page displays with the serial number field populated. Select (1) Issue from the Select Material(s) drop down, then click on the (2) Go button.",
          "html": "The ‘Material Issue’ page displays with the serial number field populated. Select (1) <strong>Issue</strong> from the Select Material(s) drop down, then click on the (2) <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-332-p234.webp",
              "page": 234,
              "box": [
                52,
                174.71000000000004,
                414.81100000000004,
                329.41
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 234.",
              "width": 1210,
              "height": 516
            }
          ],
          "page": 234,
          "sourceParagraph": 1611
        }
      ],
      "prerequisites": [
        "An existing Visit Number."
      ],
      "purpose": "The steps below illustrate how to search materials from WOs.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        232,
        233,
        234
      ],
      "part": null,
      "summary": "Search materials from WOs.",
      "related": [
        "update-materials-required-for-work-orders",
        "manage-work-order-material-demand"
      ]
    },
    {
      "id": "update-materials-required-for-work-orders",
      "kind": "procedure",
      "title": "Update Materials Required for Work Orders",
      "sourceTitle": "Update Materials Required for Work Orders",
      "lesson": 6,
      "category": "Work Orders",
      "topic": "Issue Material to Work Orders",
      "sourceStart": 1614,
      "sourceEnd": 1628,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Work Orders",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User - Scheduler > (2) Execution > (3) Production Planning > (4) Work Orders.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi </strong><strong>Complex MRO User</strong><strong> - Scheduler</strong> &gt; (2) <strong>Execution</strong> &gt; (3) <strong>Production</strong> <strong>Planning</strong> &gt; (4) <strong>Work</strong> <strong>Orders</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-333-p235.webp",
              "page": 235,
              "box": [
                52,
                238.13,
                366.781,
                354.12
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 235.",
              "width": 1050,
              "height": 387
            }
          ],
          "page": 235,
          "sourceParagraph": 1618
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Work Order Overview",
          "text": "The ‘Work Order Overview’ form displays. Enter the (1) Visit number then click the (2) Go button.",
          "html": "The ‘Work Order Overview’ form displays. Enter the (1) <strong>Visit</strong> number then click the (2) <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-334-p235.webp",
              "page": 235,
              "box": [
                52,
                381.85,
                414.921,
                505.81
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 235.",
              "width": 1210,
              "height": 414
            }
          ],
          "page": 235,
          "sourceParagraph": 1620
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "The form refreshes with the results",
          "text": "The form refreshes with the results. Select the applicable (1) Work Order radio button and select (2) Update Work Order from the Select Work Order drop down, then click the (3) Go Button.",
          "html": "The form refreshes with the results. Select the applicable (1) <strong>Work</strong> <strong>Order</strong><strong> </strong>radio button and select (2) <strong>Update Work Order</strong> from the Select Work Order drop down, then click the (3) <strong>Go</strong> Button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-335-p236.webp",
              "page": 236,
              "box": [
                52,
                186.01999999999998,
                413.211,
                345.23
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 236.",
              "width": 1205,
              "height": 531
            }
          ],
          "page": 236,
          "sourceParagraph": 1622
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Work Order Operations",
          "text": "The ‘Work Order Operations’ form displays. Click on the Materials menu.",
          "html": "The ‘Work Order Operations’ form displays. Click on the <strong>Materials</strong> menu.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-336-p236.webp",
              "page": 236,
              "box": [
                52,
                361.69000000000005,
                414.81100000000004,
                516.35
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 236.",
              "width": 1210,
              "height": 516
            }
          ],
          "page": 236,
          "sourceParagraph": 1624
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Update Materials Requirements",
          "text": "The ‘Update Materials Requirements’ form displays. Make the necessary updates and click the Apply button.",
          "html": "The ‘Update Materials Requirements’ form displays. Make the necessary updates and click the <strong>Apply</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-337-p237.webp",
              "page": 237,
              "box": [
                52,
                174.71000000000004,
                414.81100000000004,
                305.54
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 237.",
              "width": 1210,
              "height": 437
            }
          ],
          "page": 237,
          "sourceParagraph": 1626
        }
      ],
      "prerequisites": [
        "An existing Visit Number."
      ],
      "purpose": "The steps below illustrate how to update materials required for WOs.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        235,
        236,
        237
      ],
      "part": null,
      "summary": "Update materials required for WOs.",
      "related": [
        "manage-work-order-material-demand",
        "view-and-manage-wip-material-transactions"
      ]
    },
    {
      "id": "manage-work-order-material-demand",
      "kind": "procedure",
      "title": "Manage Work Order Material Demand",
      "sourceTitle": "Manage Work Order Material Demand",
      "lesson": 6,
      "category": "Work Orders",
      "topic": "Issue Material to Work Orders",
      "sourceStart": 1629,
      "sourceEnd": 1646,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Work Orders",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User - Scheduler > (2) Execution > (3) Production Planning > (4) Work Orders.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi</strong><strong> Complex MRO User</strong><strong> - Scheduler</strong> &gt; (2) <strong>Execution</strong> &gt; (3) <strong>Production</strong> <strong>Planning</strong> &gt; (4) <strong>Work</strong> <strong>Orders</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-338-p238.webp",
              "page": 238,
              "box": [
                52,
                238.13,
                414.81100000000004,
                371.01
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 238.",
              "width": 1210,
              "height": 443
            }
          ],
          "page": 238,
          "sourceParagraph": 1633
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Work Order Overview",
          "text": "The ‘Work Order Overview’ form displays. Click the Material Transactions tab.",
          "html": "The ‘Work Order Overview’ form displays. Click the <strong>Material</strong> <strong>Transactions</strong> tab.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-339-p238.webp",
              "page": 238,
              "box": [
                52,
                387.62,
                414.81100000000004,
                503.73
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 238.",
              "width": 1210,
              "height": 388
            }
          ],
          "page": 238,
          "sourceParagraph": 1635
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Material Issue",
          "text": "The ‘Material Issue’ form displays. Enter the (1) Visit Number, then click the (2) Go button.",
          "html": "The ‘Material Issue’ form displays. Enter the (1) <strong>Visit</strong> <strong>Number</strong>, then click the (2) <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-340-p238.webp",
              "page": 238,
              "box": [
                52,
                531.34,
                414.81100000000004,
                600.09
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 238.",
              "width": 1210,
              "height": 230
            }
          ],
          "page": 238,
          "sourceParagraph": 1637
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "The form refreshes with the results",
          "text": "The form refreshes with the results. Select the applicable (1) Work Order radio button, then click on the Serial Number (2) Search tool.",
          "html": "The form refreshes with the results. Select the applicable (1) <strong>Work</strong> <strong>Order</strong><strong> </strong>radio button, then click on the Serial Number (2) <strong>Search</strong> tool.",
          "details": [
            {
              "text": "Note: If the item is not serial controlled, users can issue the material without adding a serial number. Serials numbers can only be added/selected if the item on the WO is serial controlled.",
              "html": "<em><strong>Note:</strong></em><em><strong> </strong></em><em>If the item is not serial controlled, users can issue the material without adding a serial number. Serials numbers can only be added/selected if the item on the </em><em>WO</em><em> is serial controlled.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-341-p239.webp",
              "page": 239,
              "box": [
                52,
                214.69000000000005,
                376.25100000000003,
                351.13
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 239.",
              "width": 1081,
              "height": 455
            }
          ],
          "page": 239,
          "sourceParagraph": 1639
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "The SelectSerial Number page displays",
          "text": "The SelectSerial Number page displays. Click on the applicable Serial Number hyperlink.",
          "html": "The SelectSerial Number page displays. Click on the applicable <strong>Serial</strong> <strong>Number</strong><strong> </strong>hyperlink.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-342-p239.webp",
              "page": 239,
              "box": [
                52,
                378.898,
                384.56100000000004,
                470.87
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 239.",
              "width": 1109,
              "height": 307
            }
          ],
          "page": 239,
          "sourceParagraph": 1642
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Material Issue",
          "text": "The ‘Material Issue’ form displays with the serial number field populated. Click the Go button.",
          "html": "The ‘Material Issue’ form displays with the serial number field populated. Click the <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-343-p239.webp",
              "page": 239,
              "box": [
                52,
                498.71000000000004,
                341.981,
                624.11
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 239.",
              "width": 967,
              "height": 418
            }
          ],
          "page": 239,
          "sourceParagraph": 1644
        }
      ],
      "prerequisites": [
        "An existing Visit Number."
      ],
      "purpose": "The steps below illustrate how to manage WO material demand.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        238,
        239
      ],
      "part": null,
      "summary": "Manage WO material demand.",
      "related": [
        "view-and-manage-wip-material-transactions",
        "return-material"
      ]
    },
    {
      "id": "view-and-manage-wip-material-transactions",
      "kind": "procedure",
      "title": "View and Manage WIP Material Transactions",
      "sourceTitle": "View and Manage WIP Material Transactions",
      "lesson": 6,
      "category": "Work Orders",
      "topic": "Issue Material to Work Orders",
      "sourceStart": 1647,
      "sourceEnd": 1660,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open View Material Transactions",
          "text": "On the Oracle Home page, navigate to (1) MROi Depot Repair > (2) Work in Process > (3) Material Transactions > (4) View Material Transactions",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Depot Repair</strong> &gt; (2) <strong>Work in Process</strong> &gt; (3) <strong>Material Transactions</strong> &gt; (4)<strong> </strong><strong>View </strong><strong>Material Transactions</strong>",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-344-p240.webp",
              "page": 240,
              "box": [
                52,
                249.42999999999995,
                355.55100000000004,
                421.39
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 240.",
              "width": 1012,
              "height": 574
            }
          ],
          "page": 240,
          "sourceParagraph": 1651
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-345-p240.webp",
              "page": 240,
              "box": [
                52,
                448.97,
                311.671,
                624.99
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 240.",
              "width": 866,
              "height": 587
            }
          ],
          "page": 240,
          "sourceParagraph": 1655
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Material Transactions",
          "text": "The ‘Find Material Transactions’ form displays. Enter the applicable (1) Transaction Dates, then click the (2) Find button.",
          "html": "The ‘Find Material Transactions’ form displays. Enter the applicable (1) <strong>Transaction</strong> <strong>Date</strong><strong>s</strong>, then click the (2) <strong>Find</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-346-p241.webp",
              "page": 241,
              "box": [
                52,
                174.71000000000004,
                327.151,
                382.72
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 241.",
              "width": 918,
              "height": 694
            }
          ],
          "page": 241,
          "sourceParagraph": 1656
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "The Material Transactions page displays.",
          "text": "The Material Transactions page displays.",
          "html": "The Material Transactions page displays.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-347-p241.webp",
              "page": 241,
              "box": [
                52,
                399.34000000000003,
                353.56100000000004,
                619.26
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 241.",
              "width": 1006,
              "height": 734
            }
          ],
          "page": 241,
          "sourceParagraph": 1658
        }
      ],
      "prerequisites": [
        "An existing Visit Number."
      ],
      "purpose": "The steps below illustrate how to view and manage Work in Process (WIP) Material Transactions.",
      "role": "MROi Scheduler",
      "mvp": "",
      "pages": [
        240,
        241
      ],
      "part": null,
      "summary": "View and manage Work in Process (WIP) Material Transactions.",
      "related": [
        "return-material",
        "topic-4-how-to-close-operations-and-work-orders"
      ]
    },
    {
      "id": "return-material",
      "kind": "procedure",
      "title": "Return Material from Work Order",
      "sourceTitle": "Topic 3 – Return Material from Work Order",
      "lesson": 6,
      "category": "Work Orders",
      "topic": "",
      "sourceStart": 1661,
      "sourceEnd": 1680,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Returns",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User – Scheduler > (2) Execution > (3) Material Transactions > (4) Returns.",
          "html": "On the Oracle Home page, navigate to (1)<strong> MROi </strong><strong>Complex MRO User</strong> – <strong>Scheduler</strong> &gt; (2) <strong>Execution</strong> &gt; (3) <strong>Material </strong><strong>Transactions</strong> &gt; (4) <strong>Returns</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-348-p242.webp",
              "page": 242,
              "box": [
                52,
                255.5,
                413.021,
                483.27
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 242.",
              "width": 1204,
              "height": 760
            }
          ],
          "page": 242,
          "sourceParagraph": 1666
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Material Returns",
          "text": "The ‘Material Returns’ form displays. Enter the (1) Visit Number then click the (2) Go button.",
          "html": "The ‘Material Returns’ form displays. Enter the (1) <strong>Visit</strong> <strong>Number</strong> then click the (2) <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-349-p242.webp",
              "page": 242,
              "box": [
                52,
                510.851,
                414.81100000000004,
                599.56
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 242.",
              "width": 1210,
              "height": 296
            }
          ],
          "page": 242,
          "sourceParagraph": 1668
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "The form refreshes with the results",
          "text": "The form refreshes with the results. Select the applicable (1) Work Order check box. Enter the (2) Operation Seq number, then click on the (3) Details icon.",
          "html": "The form refreshes with the results. Select the applicable (1) <strong>Work</strong> <strong>Order</strong><strong> </strong>check box. Enter the (2) <strong>Operation Seq </strong>number, then click on the (3) <strong>Details</strong> icon.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-350-p243.webp",
              "page": 243,
              "box": [
                52,
                174.72000000000003,
                414.05100000000004,
                395.55
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 243.",
              "width": 1207,
              "height": 737
            }
          ],
          "page": 243,
          "sourceParagraph": 1670
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Material Return Details",
          "text": "The ‘Material Return Details’ form displays. In the Locator field, enter (1) %, then click on the (2) Search tool.",
          "html": "The ‘Material Return Details’ form displays. In the Locator field, enter (1) <strong>%</strong>, then click on the (2) <strong>Search</strong> tool.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-351-p243.webp",
              "page": 243,
              "box": [
                52,
                423.164,
                414.80100000000004,
                522.0799999999999
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 243.",
              "width": 1210,
              "height": 330
            }
          ],
          "page": 243,
          "sourceParagraph": 1672
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "The SelectLocator page displays",
          "text": "The SelectLocator page displays. Click on the applicable Locator hyperlink.",
          "html": "The SelectLocator page displays. Click on the applicable <strong>Locator</strong><strong> </strong>hyperlink.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-352-p243.webp",
              "page": 243,
              "box": [
                52,
                538.499,
                396.55100000000004,
                641.02
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 243.",
              "width": 1149,
              "height": 342
            }
          ],
          "page": 243,
          "sourceParagraph": 1674
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Material Return Details",
          "text": "The ‘Material Return Details’ form displays with the Locator field populated. Click the Done button.",
          "html": "The ‘Material Return Details’ form displays with the Locator field populated. Click the <strong>Done</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-353-p244.webp",
              "page": 244,
              "box": [
                52,
                174.71799999999996,
                414.81100000000004,
                256.9
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 244.",
              "width": 1210,
              "height": 274
            }
          ],
          "page": 244,
          "sourceParagraph": 1676
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "Material Returns",
          "text": "The ‘Material Returns’ form displays. Enter the (1) Condition, then click the (2) Return button.",
          "html": "The ‘Material Returns’ form displays. Enter the (1) <strong>Condition</strong>, then click the (2) <strong>Return</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-354-p244.webp",
              "page": 244,
              "box": [
                52,
                284.47,
                414.81100000000004,
                493.88
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 244.",
              "width": 1210,
              "height": 699
            }
          ],
          "page": 244,
          "sourceParagraph": 1678
        }
      ],
      "prerequisites": [
        "An existing Visit Number."
      ],
      "purpose": "The steps below illustrate how to return materials from WOs.",
      "role": "MROi Scheduler",
      "mvp": "4.1",
      "pages": [
        242,
        243,
        244
      ],
      "part": null,
      "summary": "Find work order materials, select a locator, and return the material.",
      "related": [
        "topic-4-how-to-close-operations-and-work-orders",
        "topic-5-how-to-generate-a-maintenance-identifier-report-from-concurrent-manager"
      ]
    },
    {
      "id": "topic-4-how-to-close-operations-and-work-orders",
      "kind": "procedure",
      "title": "How to Close Operations and Work Orders",
      "sourceTitle": "Topic 4 – How to Close Operations and Work Orders",
      "lesson": 6,
      "category": "Work Orders",
      "topic": "",
      "sourceStart": 1681,
      "sourceEnd": 1705,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Work Orders",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User – Scheduler > (2) Execution > (3) Production Planning > (4) Work Orders.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Complex MRO User </strong><strong>–</strong><strong> Scheduler</strong> &gt; (2) <strong>Execution </strong>&gt;<strong> </strong>(3)<strong> Production Planning</strong> &gt; (4) <strong>Work Orders</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-355-p245.webp",
              "page": 245,
              "box": [
                52,
                255.5,
                414.81100000000004,
                379.27
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 245.",
              "width": 1210,
              "height": 413
            }
          ],
          "page": 245,
          "sourceParagraph": 1686
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Work Order Overview",
          "text": "The ‘Work Order Overview’ form displays. Enter the (1) Visit Number, filter the (2) Work Order Status as Released, then click the (3) Go button.",
          "html": "The ‘Work Order Overview’ form displays. Enter the (1) <strong>Visit Number</strong>, filter the (2) <strong>Work Order Status</strong> as Released, then click the (3) <strong>Go </strong>button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-356-p245.webp",
              "page": 245,
              "box": [
                52,
                407.18,
                415.221,
                542.22
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 245.",
              "width": 1211,
              "height": 451
            }
          ],
          "page": 245,
          "sourceParagraph": 1688
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "The form refreshes and displays with the associated WOs",
          "text": "The form refreshes and displays with the associated WOs. Select the applicable (1) Work Order Num radio button with the Status reflecting: Released. Select (2) Update Work Order from the Select Work Order drop-down, then click the (3) Go button.",
          "html": "The form refreshes and displays with the associated WOs. Select the applicable (1) <strong>Work Order Num</strong> radio button with the Status reflecting: Released. Select (2) <strong>Update Work Order</strong> from the Select Work Order drop-down, then click the (3) <strong>Go </strong>button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-357-p246.webp",
              "page": 246,
              "box": [
                52,
                197.32000000000005,
                415.411,
                413.67
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 246.",
              "width": 1212,
              "height": 722
            }
          ],
          "page": 246,
          "sourceParagraph": 1696
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Work Order Operations",
          "text": "The ‘Work Order Operations’ form displays. Select the (1) Operation radio button, then click the (2) Complete Operation button.",
          "html": "The ‘Work Order Operations’ form displays. Select the (1)<strong> Operation </strong>radio button, then click the (2) <strong>Complete Operation</strong> button.",
          "details": [
            {
              "text": "Note: The operation’s Actual Start Date and Actual End Date are blank, and the Status reflects: Uncomplete.",
              "html": "<em><strong>Note:</strong></em><em> The operation’s Actual Start Date and Actual End Date are blank, and the Status </em><em>reflects:</em><em> Uncomplete.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-358-p246.webp",
              "page": 246,
              "box": [
                52,
                469.92,
                396.901,
                644
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 246.",
              "width": 1150,
              "height": 581
            }
          ],
          "page": 246,
          "sourceParagraph": 1698
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Work Order Operations",
          "text": "The ‘Work Order Operations’ form refreshes and displays the Actual Start Date, Actual End Date, and the Status changes to Complete. Select (1) Complete Work Order from the drop-down, then click the (2) Go button.",
          "html": "The ‘Work Order Operations’<strong> </strong>form refreshes and displays the Actual Start Date, Actual End Date, and the Status changes to Complete. Select (1) <strong>Complete Work Order </strong>from the drop-down, then click the (2) <strong>Go </strong>button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-359-p247.webp",
              "page": 247,
              "box": [
                52,
                186.01999999999998,
                413.701,
                362.0
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 247.",
              "width": 1206,
              "height": 587
            }
          ],
          "page": 247,
          "sourceParagraph": 1701
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Work Order Operations",
          "text": "The ‘Work Order Operations’ form refreshes with the Work Order Status reflecting: Complete.",
          "html": "The ‘Work Order Operations’<strong> </strong>form refreshes with the Work Order Status reflecting: Complete.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-360-p247.webp",
              "page": 247,
              "box": [
                52,
                390.06,
                414.81100000000004,
                556.33
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 247.",
              "width": 1210,
              "height": 555
            }
          ],
          "page": 247,
          "sourceParagraph": 1703
        }
      ],
      "prerequisites": [
        "An existing Visit Number."
      ],
      "purpose": "The steps below illustrate how to close Operations and WOs.",
      "role": "MROi Scheduler",
      "mvp": "4.1",
      "pages": [
        245,
        246,
        247
      ],
      "part": null,
      "summary": "Close Operations and WOs.",
      "related": [
        "topic-5-how-to-generate-a-maintenance-identifier-report-from-concurrent-manager",
        "topic-6-how-to-generate-a-maintenance-identifier-report-from-the-visit-work-package-page"
      ]
    },
    {
      "id": "topic-5-how-to-generate-a-maintenance-identifier-report-from-concurrent-manager",
      "kind": "procedure",
      "title": "How to Generate a Maintenance Identifier Report from Concurrent Manager",
      "sourceTitle": "Topic 5 – How to Generate a Maintenance Identifier Report from Concurrent Manager",
      "lesson": 6,
      "category": "Work Orders",
      "topic": "",
      "sourceStart": 1706,
      "sourceEnd": 1734,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Run",
          "text": "On the Oracle Home page, navigate to (1) MROi Reports Manager (OCX) > (2) Run.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Reports Manager</strong><strong> (OCX) </strong>&gt; (2) <strong>Run</strong>.",
          "details": [
            {
              "text": "Note: The example organization (ORG) shown here is OCX. The ORG displayed will depend upon the user.",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> The example organization (ORG) shown here is OCX. The ORG displayed will depend upon </em><em>the </em><em>user</em>.",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-361-p248.webp",
              "page": 248,
              "box": [
                52,
                302.23,
                414.81100000000004,
                458.25
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 248.",
              "width": 1210,
              "height": 521
            }
          ],
          "page": 248,
          "sourceParagraph": 1711
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Click the (1) check box to accept and then click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Click the (1) <strong>check box</strong> to accept and then click the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-362-p248.webp",
              "page": 248,
              "box": [
                52,
                484.3,
                257.241,
                632.28
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 248.",
              "width": 685,
              "height": 494
            }
          ],
          "page": 248,
          "sourceParagraph": 1714
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Submit a New Request",
          "text": "The ‘Submit a New Request’ pop-up window appears with the Single Request radio button defaulted. Click the OK button.",
          "html": "The ‘Submit a New Request’ pop-up window appears with the Single Request radio button defaulted. Click the <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-363-p249.webp",
              "page": 249,
              "box": [
                52,
                173.20000000000005,
                313.171,
                398.36
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 249.",
              "width": 871,
              "height": 751
            }
          ],
          "page": 249,
          "sourceParagraph": 1716
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Submit Request",
          "text": "The ‘Submit Request’ form displays. Click on the (1) Name LOV. The ‘Reports’ pop-up window appears. Select (2) MROI AHL Maintenance Identifier Report and then click the (3) OK button.",
          "html": "The ‘Submit Request’ form displays. Click on the (1) <strong>Name</strong> LOV. The ‘Reports’ pop-up window appears. Select (2) <strong>MROI AHL Maintenance Identifier Report</strong> and then click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-364-p249.webp",
              "page": 249,
              "box": [
                52,
                434.46000000000004,
                289.541,
                620.08
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 249.",
              "width": 792,
              "height": 619
            }
          ],
          "page": 249,
          "sourceParagraph": 1718
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Parameters",
          "text": "The ‘Parameters’ pop-up window appears. Enter the applicable (1) Visit Number. Enter the (2) Repair Batch and click the (3) OK button.",
          "html": "The ‘Parameters’ pop-up window appears. Enter the applicable (1) <strong>Visit Number</strong>. Enter the (2) <strong>Repair Batch</strong> and click the (3) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Tip: A repair batch is required for a component visit. If it is a standard visit the Repair Batch field will be left blank.",
              "html": "<em><strong>Tip</strong></em><em><strong>:</strong></em><em> A repair batch is required for a component visit. If it is a standard visit the Repair Batch field will be left blank.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-365-p250.webp",
              "page": 250,
              "box": [
                52,
                200.35000000000002,
                331.391,
                370.19
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 250.",
              "width": 932,
              "height": 567
            }
          ],
          "page": 250,
          "sourceParagraph": 1720
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Submit Request",
          "text": "The ‘Submit Request’ form refreshes with the report Name, Parameters, and selected Layout defaulted. Click the (1) Submit button. A ‘Decision’ pop-up window appears with the Request ID number and an option to submit another request. Click the (2) No button.",
          "html": "The ‘Submit Request’ form refreshes with the report Name, Parameters, and selected Layout defaulted. Click the (1) <strong>Submit</strong> button. A ‘Decision’ pop-up window appears with the Request ID number and an option to submit another request. Click the (2) <strong>No</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-366-p250.webp",
              "page": 250,
              "box": [
                52,
                417.33000000000004,
                334.0236,
                612.28
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 250.",
              "width": 941,
              "height": 650
            }
          ],
          "page": 250,
          "sourceParagraph": 1723
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "The Navigator page displays",
          "text": "The Navigator page displays. Double-click on View.",
          "html": "The Navigator page displays. Double-click on <strong>View</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-367-p251.webp",
              "page": 251,
              "box": [
                52,
                161.89999999999998,
                300.951,
                342.09
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 251.",
              "width": 830,
              "height": 601
            }
          ],
          "page": 251,
          "sourceParagraph": 1725
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Find Requests",
          "text": "The ‘Find Requests’ pop-up window appears with the All My Requests radio button defaulted. Click the Find button.",
          "html": "The ‘Find Requests’ pop-up window appears with the All My Requests radio button defaulted. Click the <strong>Find</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-368-p251.webp",
              "page": 251,
              "box": [
                52,
                366.63,
                332.18100000000004,
                588.98
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 251.",
              "width": 934,
              "height": 742
            }
          ],
          "page": 251,
          "sourceParagraph": 1727
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "Select the applicable (1) Request ID number annotated from step 6",
          "text": "Select the applicable (1) Request ID number annotated from step 6. Click the (2) View Output button.",
          "html": "Select the applicable (1) <strong>Request ID</strong> number annotated from step 6. Click the (2) <strong>View Output</strong> button.",
          "details": [
            {
              "text": "Tip: If the Phase does not reflect: Completed, then click the Refresh Data button.",
              "html": "<em><strong>Tip:</strong></em><em> </em><em>If the Phase does not reflect: Completed,</em><em> then click the Refresh Data button.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-369-p252.webp",
              "page": 252,
              "box": [
                52,
                189.04999999999995,
                329.86100000000005,
                408.14
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 252.",
              "width": 927,
              "height": 731
            }
          ],
          "page": 252,
          "sourceParagraph": 1729
        },
        {
          "number": 10,
          "sourceNumber": 10,
          "title": "The output of the report displays in another window",
          "text": "The output of the report displays in another window. Users can download the report or print the report using the applicable icons in the top right corner.",
          "html": "The output of the report displays in another window. Users can download the report or print the report using the applicable icons in the top right corner.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-370-p252.webp",
              "page": 252,
              "box": [
                52,
                432.67,
                364.81100000000004,
                626.6800000000001
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 252.",
              "width": 1043,
              "height": 647
            }
          ],
          "page": 252,
          "sourceParagraph": 1732
        }
      ],
      "prerequisites": [
        "N/A"
      ],
      "purpose": "The steps below illustrate how to generate a Maintenance Identifier Report from Concurrent Manager.",
      "role": "MROi Scheduler",
      "mvp": "4.1",
      "pages": [
        248,
        249,
        250,
        251,
        252
      ],
      "part": null,
      "summary": "Generate a Maintenance Identifier Report from Concurrent Manager.",
      "related": [
        "topic-6-how-to-generate-a-maintenance-identifier-report-from-the-visit-work-package-page"
      ]
    },
    {
      "id": "topic-6-how-to-generate-a-maintenance-identifier-report-from-the-visit-work-package-page",
      "kind": "procedure",
      "title": "How to Generate a Maintenance Identifier Report from the Visit Work Package page",
      "sourceTitle": "Topic 6 – How to Generate a Maintenance Identifier Report from the Visit Work Package page",
      "lesson": 6,
      "category": "Work Orders",
      "topic": "",
      "sourceStart": 1735,
      "sourceEnd": 1762,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Visits",
          "text": "On the Oracle Home page, navigate to (1) MROi Complex MRO User - Scheduler > (2) Planning > (3) Visit Work Package > (4) Visits.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Complex MRO User </strong><strong>-</strong><strong> </strong><strong>Scheduler</strong><strong> </strong>&gt; (2) <strong>Planning</strong> &gt; (3)<strong> </strong><strong>Visit Work Package</strong> &gt;<strong> </strong>(4)<strong> Visits</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-371-p253.webp",
              "page": 253,
              "box": [
                52,
                276.58000000000004,
                393.68100000000004,
                424.98
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 253.",
              "width": 1139,
              "height": 495
            }
          ],
          "page": 253,
          "sourceParagraph": 1740
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Search Visits",
          "text": "On the Visit Work Package tab, the ‘Search Visits’ form displays. Enter the (1) Visit Number that is in Implemented status or search for Visits in Implemented status by clicking on the (2) Visit Status drop-down and select (3) Implemented.",
          "html": "On the Visit Work Package tab, the ‘Search Visits’ form displays. Enter the (1) <strong>Visit Number</strong><strong> </strong>that is in Implemented status or search for Visits in Implemented status by clicking on the (2) <strong>Visit Status</strong> drop-down and select (3) <strong>Implemented</strong>.",
          "details": [
            {
              "text": "Note: Visit Status will need to be in Implemented status to populate the Generate Mx Identifier button for the report to be run.",
              "html": "<em><strong>Note</strong></em><em><strong>:</strong></em><em> Visit Status </em><em>will need to</em><em> be </em><em>in</em><em> </em><em>Implemented</em><em> </em><em>status </em><em>to populate the </em><em>Generate Mx Identifier</em><em> button </em><em>for</em><em> the report </em><em>to</em><em> be run.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-372-p253.webp",
              "page": 253,
              "box": [
                52,
                487.97,
                414.461,
                629.01
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 253.",
              "width": 1209,
              "height": 471
            }
          ],
          "page": 253,
          "sourceParagraph": 1742
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Click the Go button.",
          "text": "Click the Go button.",
          "html": "Click the <strong>Go</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-373-p254.webp",
              "page": 254,
              "box": [
                52,
                161.89,
                412.06100000000004,
                383.22
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 254.",
              "width": 1201,
              "height": 738
            }
          ],
          "page": 254,
          "sourceParagraph": 1745
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "The form refreshes and the Search Results display",
          "text": "The form refreshes and the Search Results display. Select the respective Visit Number hyperlink.",
          "html": "The form refreshes and the Search Results display. Select the respective <strong>Visit Number </strong>hyperlink.",
          "details": [
            {
              "text": "Note: A value under Unit will appear if the item is a standard visit. There will be no unit attached to a component visit.",
              "html": "<em><strong>Note:</strong></em><em> A value under Unit will appear if the item is a standard visit. There will be no unit attached to a component visit.</em>",
              "type": "note"
            },
            {
              "text": "Tip: To filter out standard visits, click the check box next to the Show Only Component Visits.",
              "html": "<em><strong>Tip:</strong></em><em> </em><em>To filter out standard visits, c</em><em>lick the check</em><em> </em><em>box next to </em><em>the </em><em>Show Only Component Visits.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-374-p254.webp",
              "page": 254,
              "box": [
                52,
                462.07,
                414.161,
                594.87
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 254.",
              "width": 1208,
              "height": 443
            }
          ],
          "page": 254,
          "sourceParagraph": 1747
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Update Visit",
          "text": "The ‘Update Visit’ form displays. Click the Generate Mx Identifier button.",
          "html": "The ‘Update Visit’ form displays. Click the <strong>Generate Mx Identifier</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-375-p255.webp",
              "page": 255,
              "box": [
                52,
                161.89999999999998,
                406.281,
                310.03
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 255.",
              "width": 1181,
              "height": 494
            }
          ],
          "page": 255,
          "sourceParagraph": 1751
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "MROi Run Maintenance Identifier Report",
          "text": "The ‘MROi Run Maintenance Identifier Report’ form displays with the Visit Number defaulted. Click on the (1) Layout Type drop-down and select the applicable (2) Layout Type.",
          "html": "The ‘MROi Run Maintenance Identifier Report’ form displays with the Visit Number defaulted. Click on the (1) <strong>Layout Type </strong>drop-down and select the applicable (2) <strong>Layout Type</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-376-p255.webp",
              "page": 255,
              "box": [
                52,
                345.87,
                228.56099999999998,
                468.27
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 255.",
              "width": 589,
              "height": 408
            }
          ],
          "page": 255,
          "sourceParagraph": 1753
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "Click the Run Report button.",
          "text": "Click the Run Report button.",
          "html": "Click the <strong>Run Report</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-377-p255.webp",
              "page": 255,
              "box": [
                52,
                482.07,
                226.24099999999999,
                590.59
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 255.",
              "width": 581,
              "height": 362
            }
          ],
          "page": 255,
          "sourceParagraph": 1755
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "The report downloads as a PDF",
          "text": "The report downloads as a PDF. Click the Open button to open the selected report.",
          "html": "The report downloads as a PDF. Click the <strong>Open </strong>button to open the selected report.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-378-p256.webp",
              "page": 256,
              "box": [
                52,
                173.19799999999998,
                396.341,
                233.78999999999996
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 256.",
              "width": 1148,
              "height": 202
            }
          ],
          "page": 256,
          "sourceParagraph": 1757
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "The report opens in a new window",
          "text": "The report opens in a new window. The option to download, print, or save is available in the top-right of the screen.",
          "html": "The report opens in a new window. The option to download, print, or save is available in the top-right of the screen.",
          "details": [
            {
              "text": "Note: To run the report for a different layout type, return to the ‘MROi Run Maintenance Identifier Report’ form and change the layout type output for the report and repeat the previous steps.",
              "html": "<em><strong>Note:</strong></em><em> To run the report for a different layout type, return to the </em><em>‘</em><em>MROi </em><em>Run Maintenance Identifier Report’</em><em> </em><em>form</em><em> </em><em>and</em><em> change the layout type output for the report and repeat the previous steps.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-379-p256.webp",
              "page": 256,
              "box": [
                52,
                296.78,
                375.61100000000005,
                485.44
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 256.",
              "width": 1079,
              "height": 629
            }
          ],
          "page": 256,
          "sourceParagraph": 1759
        }
      ],
      "prerequisites": [
        "A visit number that is in implemented status."
      ],
      "purpose": "The steps below illustrate how to generate a Maintenance Identifier Report from the visit work package page.",
      "role": "MROi Scheduler",
      "mvp": "4.1",
      "pages": [
        253,
        254,
        255,
        256
      ],
      "part": null,
      "summary": "Generate a Maintenance Identifier Report from the visit work package page.",
      "related": [
        "topic-4-how-to-close-operations-and-work-orders",
        "topic-5-how-to-generate-a-maintenance-identifier-report-from-concurrent-manager"
      ]
    },
    {
      "id": "topic-1-issue-end-item-out-of-inventory",
      "kind": "procedure",
      "title": "Issue End-Item Out of Inventory",
      "sourceTitle": "Topic 1 – Issue End-Item Out of Inventory",
      "lesson": 7,
      "category": "Inventory Transactions",
      "topic": "",
      "sourceStart": 1779,
      "sourceEnd": 1803,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open MROI INV Miscellaneous Transactions",
          "text": "On the Oracle Home page, navigate to (1) MROi Inventory > (2) Transactions > (3) MROI INV Miscellaneous Transactions.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Inventory </strong>&gt;<strong> </strong>(2) <strong>Transactions</strong> &gt; (3) <strong>MROI INV Miscellaneous Transactions</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-380-p259.webp",
              "page": 259,
              "box": [
                52,
                173.19000000000005,
                361.321,
                318.82
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 259.",
              "width": 1032,
              "height": 486
            }
          ],
          "page": 259,
          "sourceParagraph": 1786
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-381-p259.webp",
              "page": 259,
              "box": [
                52,
                343.47,
                245.981,
                488.72
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 259.",
              "width": 647,
              "height": 485
            }
          ],
          "page": 259,
          "sourceParagraph": 1788
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Miscellaneous Transaction",
          "text": "The ‘Miscellaneous Transaction’ form displays. Select the (1) Serial-Triggered check box then click on the (2) Type LOV.",
          "html": "The ‘Miscellaneous Transaction’ form displays. Select the (1) <strong>Serial-Triggered </strong>check box then click on the (2) <strong>Type </strong>LOV. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-382-p259.webp",
              "page": 259,
              "box": [
                52,
                513.75,
                250.051,
                640.21
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 259.",
              "width": 661,
              "height": 422
            }
          ],
          "page": 259,
          "sourceParagraph": 1794
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Transaction Types",
          "text": "The ‘Transaction Types’ pop-up window appears. Select a (1) Transaction Type then click on the (2) OK button. Click on the (3) Transaction Lines button.",
          "html": "The ‘Transaction Types’ pop-up window appears. Select a (1) <strong>Transaction Type</strong> then click on the (2) <strong>OK</strong> button. Click on the (3) <strong>Transaction Lines</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-383-p260.webp",
              "page": 260,
              "box": [
                52,
                173.19000000000005,
                288.901,
                388.51
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 260.",
              "width": 790,
              "height": 718
            }
          ],
          "page": 260,
          "sourceParagraph": 1796
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Miscellaneous Transaction",
          "text": "The ‘Miscellaneous Transaction’ form displays. In the Serial Number field, enter (1) %% and press the tab key. The ‘Serial Numbers’ pop-up window appears. Select the applicable (2) Serial number, then click on the (3) OK button.",
          "html": "The ‘Miscellaneous Transaction’ form displays. In the Serial Number field, enter (1) <strong>%%</strong> and press the tab key. The ‘Serial Numbers’ pop-up window appears. Select the applicable (2) <strong>Serial </strong>number,<strong> </strong>then click on the (3) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Tip: The ‘%’ wildcard can be used in the search tool to simulate any other character(s) in a string.",
              "html": "<em><strong>Tip: </strong></em><em>The ‘%’ wildcard can be used in the search tool to simulate any other character(s) in a string.</em> ",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-384-p260.webp",
              "page": 260,
              "box": [
                52,
                451.52,
                312.091,
                637.5
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 260.",
              "width": 867,
              "height": 620
            }
          ],
          "page": 260,
          "sourceParagraph": 1798
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "USAF Accounting Flexfield",
          "text": "In the Account field, enter (1) %% and press the tab key. The ‘USAF Accounting Flexfield’ pop-up window appears, select the applicable (2) AF_FUND, then click on the (3) OK button. Click on the (4) Save icon.",
          "html": "In the Account field, enter (1) <strong>%%</strong> and press the tab key. The ‘USAF Accounting Flexfield’ pop-up window appears, select the applicable (2) <strong>AF_FUND</strong>, then click on the (3) <strong>OK</strong> button. Click on the (4) <strong>Save</strong> icon.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-385-p261.webp",
              "page": 261,
              "box": [
                52,
                184.5,
                324.341,
                391.82
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 261.",
              "width": 908,
              "height": 692
            }
          ],
          "page": 261,
          "sourceParagraph": 1801
        }
      ],
      "prerequisites": [
        "MCs and serial-controlled items must exist.",
        "An End-Item has been received and the Receipt Acknowledgement Outbound interface has been sent to D035K."
      ],
      "purpose": "A MROi Scheduler logs into Oracle ‘MROi Inventory’ responsibility and creates a Miscellaneous Receipt for a serialized item and executes a Miscellaneous Issue to issue it out.",
      "role": "MROi Scheduler",
      "mvp": "4.1",
      "pages": [
        259,
        260,
        261
      ],
      "part": null,
      "summary": "A MROi Scheduler logs into Oracle ‘MROi Inventory’ responsibility and creates a Miscellaneous Receipt for a serialized item and executes a Miscellaneous Issue to issue it out.",
      "related": [
        "topic-2-receive-material-into-inventory",
        "topic-3-view-receiving-transactions"
      ]
    },
    {
      "id": "topic-2-receive-material-into-inventory",
      "kind": "procedure",
      "title": "Receive Material into Inventory",
      "sourceTitle": "Topic 2 – Receive Material into Inventory",
      "lesson": 7,
      "category": "Inventory Transactions",
      "topic": "",
      "sourceStart": 1804,
      "sourceEnd": 1836,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Receipts",
          "text": "On the Oracle Home page, navigate to (1) MROi Inventory > (2) Transactions > (3) Receiving > (4) Receipts.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Inventory</strong> &gt; (2) <strong>Transactions</strong> &gt; (3) <strong>Receiving</strong> &gt; (4) <strong>Receipts</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-386-p262.webp",
              "page": 262,
              "box": [
                52,
                255.51,
                349.50100000000003,
                386.45
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 262.",
              "width": 992,
              "height": 437
            }
          ],
          "page": 262,
          "sourceParagraph": 1809
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-387-p262.webp",
              "page": 262,
              "box": [
                52,
                411.97016,
                287.921,
                583.7
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 262.",
              "width": 787,
              "height": 573
            }
          ],
          "page": 262,
          "sourceParagraph": 1811
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Expected Receipts",
          "text": "The ‘Find Expected Receipts’ form displays. Click on the Purchase Order LOV.",
          "html": "The ‘Find Expected Receipts’ form displays. Click on the <strong>Purchase Order</strong> LOV.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-388-p263.webp",
              "page": 263,
              "box": [
                52,
                163.40999999999997,
                339.901,
                385.53
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 263.",
              "width": 960,
              "height": 741
            }
          ],
          "page": 263,
          "sourceParagraph": 1816
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Purchase Orders",
          "text": "The ‘Purchase Orders’ pop-up window appears. In the Find field, enter (1) % and click the (2) Find button. The results display, select the applicable (3) Purchase Order, then click the (4) OK button.",
          "html": "The ‘Purchase Orders’ pop-up window appears. In the Find field, enter (1) <strong>%</strong> and click the (2) <strong>F</strong><strong>ind</strong> button. The results display, select the applicable (3) <strong>Purchase</strong> <strong>Order</strong>, then click the (4) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-389-p264.webp",
              "page": 264,
              "box": [
                52,
                186.01,
                358.601,
                394.25
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 264.",
              "width": 1023,
              "height": 695
            }
          ],
          "page": 264,
          "sourceParagraph": 1818
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Find Expected Receipts",
          "text": "The ‘Find Expected Receipts’ form refreshes with the selected PO populated. Click the Find button.",
          "html": "The ‘Find Expected Receipts’ form refreshes with the selected PO populated. Click the <strong>Find</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-390-p264.webp",
              "page": 264,
              "box": [
                52,
                421.94,
                338.141,
                641.67
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 264.",
              "width": 954,
              "height": 733
            }
          ],
          "page": 264,
          "sourceParagraph": 1820
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Receipts",
          "text": "The ‘Receipts’ form displays. Enter the (1) Quantity. The Unit of Measure (UOM) field populates. Click on the (2) Destination Type LOV. The ‘Destination Types’ pop-up window appears. Select (3) Inventory then click the (4) OK button.",
          "html": "The ‘Receipts’ form displays. Enter the (1)<strong> </strong><strong>Quantity</strong>. The Unit of Measure (UOM) field populates. Click on the (2) <strong>Destination</strong> <strong>Type</strong><strong> </strong>LOV. The ‘Destination Types’ pop-up window appears. Select (3) <strong>Inventory</strong> then click the (4) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: The ‘Receipt Header’ form displays in front of the ‘Receipts’ form; move the ‘Receipt Header’ form to access the ‘Receipts’ form.",
              "html": "<em><strong>Note</strong></em><em><strong>: </strong></em><em>The </em><em>‘Receipt Header’ form displays in front of the ‘Receipts’ form</em><em>;</em><em> move</em><em> the</em><em> </em><em>‘</em><em>Receipt Header’ </em><em>form</em><em> to access the ‘Receipts’ form.</em>",
              "type": "list"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-391-p265.webp",
              "page": 265,
              "box": [
                52,
                213.16999999999996,
                414.81100000000004,
                403.69
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 265.",
              "width": 1210,
              "height": 636
            }
          ],
          "page": 265,
          "sourceParagraph": 1822
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "Subinventories",
          "text": "Click on the (1) Subinventory LOV. The ‘Subinventories’ pop-up window appears. Enter (2) % in the Find field, then click the (3) Find button. Select the applicable (4) Subinventory, then click the (5) OK button.",
          "html": "Click on the (1) <strong>Subinventory </strong>LOV. The ‘Subinventories’ pop-up window appears. Enter (2) <strong>%</strong> in the Find field, then click the (3) <strong>F</strong><strong>ind</strong> button. Select the applicable (4) <strong>Subinventory</strong>, then click the (5) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-392-p265.webp",
              "page": 265,
              "box": [
                52,
                442.56,
                414.81100000000004,
                616.95
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 265.",
              "width": 1210,
              "height": 582
            }
          ],
          "page": 265,
          "sourceParagraph": 1825
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Stock Locators",
          "text": "Click on the (1) Locator LOV. The ‘Stock Locators’ pop-up window appears. Click the (2) Combinations button.",
          "html": "Click on the (1) <strong>Locator </strong>LOV. The ‘Stock Locators’ pop-up window appears. Click the (2) <strong>Combinations</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-393-p266.webp",
              "page": 266,
              "box": [
                52,
                174.71000000000004,
                407.06100000000004,
                400.67
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 266.",
              "width": 1184,
              "height": 754
            }
          ],
          "page": 266,
          "sourceParagraph": 1827
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "All the fields turn blue",
          "text": "All the fields turn blue. Enter (1) % into all the fields. Click the (2) OK button.",
          "html": "All the fields turn blue. Enter (1) <strong>%</strong> into all the fields. Click the (2) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Note: If the selected PO receipt already has a value in the Project and Task fields, the Combinations will result in an error stating: No entries found for the LOV. Select the Cancel button on the combination window below, then enter the Building, Area, Sub Area, then click the OK button.",
              "html": "<em><strong>Note:</strong></em> <em>If</em><em> the selected PO receipt already has a value in the Project and Task fields,</em><em> the Combinations </em><em>will </em><em>result</em><em> in an error stating</em><em>:</em><em> No</em><em> entries found for</em><em> </em><em>the LOV.</em><em> </em><em>Select the C</em><em>ancel</em><em> button on</em><em> the combination window below</em><em>, then</em><em> enter the Building, Area, Sub Area, then click the OK button.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-394-p266.webp",
              "page": 266,
              "box": [
                52,
                468.22,
                297.25100000000003,
                620.97
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 266.",
              "width": 818,
              "height": 510
            }
          ],
          "page": 266,
          "sourceParagraph": 1829
        },
        {
          "number": 10,
          "sourceNumber": 10,
          "title": "Stock Locators",
          "text": "The ‘Stock Locators’ window refreshes with the results. Select the applicable (1) Stock Locator, then click the (2) OK button.",
          "html": "The ‘Stock Locators’ window refreshes with the results. Select the applicable (1) <strong>Stock Locator</strong>, then click the (2) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-395-p267.webp",
              "page": 267,
              "box": [
                52,
                174.71000000000004,
                399.13100000000003,
                378.43
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 267.",
              "width": 1158,
              "height": 680
            }
          ],
          "page": 267,
          "sourceParagraph": 1832
        },
        {
          "number": 11,
          "sourceNumber": 11,
          "title": "Click on the Save icon.",
          "text": "Click on the Save icon.",
          "html": "Click on the <strong>Save</strong> icon.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-396-p267.webp",
              "page": 267,
              "box": [
                52,
                394.78,
                413.031,
                568.79
              ],
              "alt": "Annotated Oracle screenshot for source step 11, guide page 267.",
              "width": 1204,
              "height": 581
            }
          ],
          "page": 267,
          "sourceParagraph": 1834
        }
      ],
      "prerequisites": [
        "POs exist in the system."
      ],
      "purpose": "The steps below illustrate how to receive material into inventory.",
      "role": "MROi Scheduler",
      "mvp": "4.2",
      "pages": [
        262,
        263,
        264,
        265,
        266,
        267
      ],
      "part": null,
      "summary": "Receive material into inventory.",
      "related": [
        "topic-3-view-receiving-transactions",
        "topic-4-view-inventory-transactions-status-summary"
      ]
    },
    {
      "id": "topic-3-view-receiving-transactions",
      "kind": "procedure",
      "title": "View Receiving Transactions",
      "sourceTitle": "Topic 3 – View Receiving Transactions",
      "lesson": 7,
      "category": "Inventory Transactions",
      "topic": "",
      "sourceStart": 1837,
      "sourceEnd": 1856,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open View Receiving Transactions",
          "text": "On the Oracle Home page, navigate to (1) MROi Inventory > (2) Transactions > (3) Receiving > (4) View Receiving Transactions.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi</strong><strong> Inventory</strong> &gt; (2) <strong>Transactions</strong> &gt; (3) <strong>Receiving</strong> &gt; (4) <strong>View Receiving Transaction</strong><strong>s</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-397-p268.webp",
              "page": 268,
              "box": [
                52,
                279.62,
                414.81100000000004,
                412.31
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 268.",
              "width": 1210,
              "height": 443
            }
          ],
          "page": 268,
          "sourceParagraph": 1842
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-398-p268.webp",
              "page": 268,
              "box": [
                52,
                440.40999999999997,
                287.831,
                616.28
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 268.",
              "width": 787,
              "height": 587
            }
          ],
          "page": 268,
          "sourceParagraph": 1844
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Receiving Transactions",
          "text": "The ‘Find Receiving Transactions’ form displays. Click the Find button.",
          "html": "The ‘Find Receiving Transactions’ form displays. Click the <strong>Find</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-399-p269.webp",
              "page": 269,
              "box": [
                52,
                163.42000000000007,
                335.961,
                386.3
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 269.",
              "width": 947,
              "height": 743
            }
          ],
          "page": 269,
          "sourceParagraph": 1850
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "The Receipt Headers Summary page displays",
          "text": "The Receipt Headers Summary page displays. Select the applicable (1) Receipt and click the (2) Transactions button.",
          "html": "The Receipt Headers Summary page displays. Select the applicable (1) <strong>Receipt</strong> and click the (2) <strong>Transactions</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-400-p269.webp",
              "page": 269,
              "box": [
                52,
                414.13,
                335.021,
                619.9
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 269.",
              "width": 944,
              "height": 686
            }
          ],
          "page": 269,
          "sourceParagraph": 1852
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "The Receipt Transaction Summary page displays.",
          "text": "The Receipt Transaction Summary page displays.",
          "html": "The Receipt Transaction Summary page displays.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-401-p270.webp",
              "page": 270,
              "box": [
                52,
                163.42000000000007,
                328.101,
                357.42
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 270.",
              "width": 921,
              "height": 647
            }
          ],
          "page": 270,
          "sourceParagraph": 1854
        }
      ],
      "prerequisites": [
        "N/A"
      ],
      "purpose": "You can use the Receiving Transactions window to move material from receiving inspection to inventory. The system uses the quantity and the PO price of the delivered item to update the receiving inspection account and quantity.",
      "role": "MROi Scheduler",
      "mvp": "4.2",
      "pages": [
        268,
        269,
        270
      ],
      "part": null,
      "summary": "You can use the Receiving Transactions window to move material from receiving inspection to inventory. The system uses the quantity and the PO price of the delivered item to update the receiving inspection account and quantity.",
      "related": [
        "topic-4-view-inventory-transactions-status-summary",
        "topic-5-generate-daily-game-plan-report"
      ]
    },
    {
      "id": "topic-4-view-inventory-transactions-status-summary",
      "kind": "procedure",
      "title": "View Inventory Transactions Status Summary",
      "sourceTitle": "Topic 4 – View Inventory Transactions Status Summary",
      "lesson": 7,
      "category": "Inventory Transactions",
      "topic": "",
      "sourceStart": 1857,
      "sourceEnd": 1874,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Transactions Status Summary",
          "text": "From the Oracle Home page, navigate to (1) MROi Inventory > (2) Transactions > (3) Receiving > (4) Transactions Status Summary.",
          "html": "From the Oracle Home page, navigate to (1) <strong>MROi Inventory </strong>&gt; (2) <strong>Transactions</strong> &gt; (3) <strong>Receiving</strong> &gt; (4) <strong>Transactions Status Summary</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-402-p271.webp",
              "page": 271,
              "box": [
                52,
                268.3299999999999,
                414.81100000000004,
                412.89
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 271.",
              "width": 1210,
              "height": 482
            }
          ],
          "page": 271,
          "sourceParagraph": 1862
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button. ",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-403-p271.webp",
              "page": 271,
              "box": [
                52,
                440.5,
                287.831,
                616.37
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 271.",
              "width": 787,
              "height": 587
            }
          ],
          "page": 271,
          "sourceParagraph": 1864
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Find Transaction Statuses",
          "text": "The ‘Find Transaction Statuses’ form displays. Click the Find button.",
          "html": "The ‘Find Transaction Statuses’ form displays. Click the <strong>Find</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-404-p272.webp",
              "page": 272,
              "box": [
                52,
                163.40999999999997,
                330.94100000000003,
                370.13
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 272.",
              "width": 930,
              "height": 690
            }
          ],
          "page": 272,
          "sourceParagraph": 1870
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Transaction Statuses",
          "text": "The ‘Transaction Statuses’ form displays with the Inventory Transaction Status Summary.",
          "html": "The ‘Transaction Statuses’ form displays with the Inventory Transaction Status Summary.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-405-p272.webp",
              "page": 272,
              "box": [
                52,
                398.20000000000005,
                310.721,
                592.99
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 272.",
              "width": 863,
              "height": 650
            }
          ],
          "page": 272,
          "sourceParagraph": 1872
        }
      ],
      "prerequisites": [
        "N/A"
      ],
      "purpose": "This allows you to control the flow of material from the time you receive items to the time you ship finished goods to the customer.",
      "role": "MROi Scheduler",
      "mvp": "4.2",
      "pages": [
        271,
        272
      ],
      "part": null,
      "summary": "This allows you to control the flow of material from the time you receive items to the time you ship finished goods to the customer.",
      "related": [
        "topic-5-generate-daily-game-plan-report"
      ]
    },
    {
      "id": "topic-5-generate-daily-game-plan-report",
      "kind": "procedure",
      "title": "Generate Daily Game Plan Report",
      "sourceTitle": "Topic 5 – Generate Daily Game Plan Report",
      "lesson": 7,
      "category": "Inventory Transactions",
      "topic": "",
      "sourceStart": 1875,
      "sourceEnd": 1922,
      "steps": [
        {
          "number": 1,
          "sourceNumber": 1,
          "title": "Open Run",
          "text": "On the Oracle Home page, navigate to (1) MROi Reports Manager > (2) Run.",
          "html": "On the Oracle Home page, navigate to (1) <strong>MROi Reports Manager</strong> &gt; (2) <strong>Run</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-406-p273.webp",
              "page": 273,
              "box": [
                52,
                244.20000000000005,
                414.81100000000004,
                381.18
              ],
              "alt": "Annotated Oracle screenshot for source step 1, guide page 273.",
              "width": 1210,
              "height": 457
            }
          ],
          "page": 273,
          "sourceParagraph": 1880
        },
        {
          "number": 2,
          "sourceNumber": 2,
          "title": "Security Warning",
          "text": "A ‘Security Warning’ pop-up window may appear. Select the (1) check box to accept and click the (2) Run button.",
          "html": "A ‘Security Warning’ pop-up window may appear. Select the (1) <strong>check box</strong> to accept and click the (2) <strong>Run</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-407-p273.webp",
              "page": 273,
              "box": [
                52,
                408.75,
                287.831,
                584.62
              ],
              "alt": "Annotated Oracle screenshot for source step 2, guide page 273.",
              "width": 787,
              "height": 587
            }
          ],
          "page": 273,
          "sourceParagraph": 1882
        },
        {
          "number": 3,
          "sourceNumber": 3,
          "title": "Submit a New Request",
          "text": "The ‘Submit a New Request’ pop-up window appears with the Single Request radio button defaulted. Click the OK button.",
          "html": "The ‘Submit a New Request’ pop-up window appears with the Single Request radio button defaulted. Click the <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-408-p274.webp",
              "page": 274,
              "box": [
                52,
                174.71000000000004,
                316.721,
                400.24
              ],
              "alt": "Annotated Oracle screenshot for source step 3, guide page 274.",
              "width": 883,
              "height": 752
            }
          ],
          "page": 274,
          "sourceParagraph": 1888
        },
        {
          "number": 4,
          "sourceNumber": 4,
          "title": "Submit Request",
          "text": "The ‘Submit Request’ form displays. Click on the Name LOV.",
          "html": "The ‘Submit Request’ form displays. Click on the <strong>Name</strong> LOV.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-409-p274.webp",
              "page": 274,
              "box": [
                52,
                415.0,
                304.371,
                613.64
              ],
              "alt": "Annotated Oracle screenshot for source step 4, guide page 274.",
              "width": 842,
              "height": 663
            }
          ],
          "page": 274,
          "sourceParagraph": 1890
        },
        {
          "number": 5,
          "sourceNumber": 5,
          "title": "Reports",
          "text": "The ‘Reports’ pop-up window appears. Select the report name (1) MROI AHL Daily Game Plan Report and click the (2) OK button.",
          "html": "The ‘Reports’ pop-up window appears. Select the report name (1) <strong>MROI AHL Daily Game Plan Report</strong> and click the (2) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-410-p275.webp",
              "page": 275,
              "box": [
                52,
                174.71000000000004,
                331.55100000000004,
                387.23
              ],
              "alt": "Annotated Oracle screenshot for source step 5, guide page 275.",
              "width": 932,
              "height": 709
            }
          ],
          "page": 275,
          "sourceParagraph": 1892
        },
        {
          "number": 6,
          "sourceNumber": 6,
          "title": "Parameters",
          "text": "The ‘Parameters’ pop-up window appears. Click on the ALC Organization LOV.",
          "html": "The ‘Parameters’ pop-up window appears. Click on the <strong>ALC</strong><strong> Organization</strong> LOV.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-411-p275.webp",
              "page": 275,
              "box": [
                52,
                415.19000000000005,
                336.461,
                623.08
              ],
              "alt": "Annotated Oracle screenshot for source step 6, guide page 275.",
              "width": 949,
              "height": 693
            }
          ],
          "page": 275,
          "sourceParagraph": 1894
        },
        {
          "number": 7,
          "sourceNumber": 7,
          "title": "ALC Organization",
          "text": "The ‘ALC Organization’ pop-up window appears. Select the applicable (1) ALC Organization and click the (2) OK button.",
          "html": "The ‘ALC Organization’ pop-up window appears. Select the applicable (1) <strong>ALC</strong> <strong>Organization</strong> and click the (2) <strong>OK</strong> button.",
          "details": [
            {
              "text": "Tip: User may find the desired value by querying: OC%, OO%, or AM%.",
              "html": "<em><strong>Tip:</strong></em> <em>U</em><em>ser may find </em><em>the desired value by querying: OC%, OO%, or AM</em><em>%.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-412-p276.webp",
              "page": 276,
              "box": [
                52,
                192.09000000000003,
                291.291,
                366.82
              ],
              "alt": "Annotated Oracle screenshot for source step 7, guide page 276.",
              "width": 798,
              "height": 583
            }
          ],
          "page": 276,
          "sourceParagraph": 1896
        },
        {
          "number": 8,
          "sourceNumber": 8,
          "title": "Maintenance Group",
          "text": "Click on the (1) Maintenance Group LOV. The ‘Maintenance Group’ pop-up window appears. Select the applicable (2) Maintenance Group and click the (3) OK button.",
          "html": "Click on the (1) <strong>Maintenance Group</strong> LOV. The ‘Maintenance Group’ pop-up window appears. Select the applicable (2) <strong>Maintenance Group</strong> and click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-413-p276.webp",
              "page": 276,
              "box": [
                52,
                405.69,
                312.911,
                615.9
              ],
              "alt": "Annotated Oracle screenshot for source step 8, guide page 276.",
              "width": 870,
              "height": 701
            }
          ],
          "page": 276,
          "sourceParagraph": 1899
        },
        {
          "number": 9,
          "sourceNumber": 9,
          "title": "Squadron",
          "text": "Click on the (1) Squadron LOV. The ‘Squadron’ pop-up window appears. Select the applicable (2) Squadron and click the (3) OK button.",
          "html": "Click on the (1) <strong>Squadron</strong> LOV. The ‘Squadron’ pop-up window appears. Select the applicable (2) <strong>Squadron</strong> and click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-414-p277.webp",
              "page": 277,
              "box": [
                52,
                174.72000000000003,
                316.06100000000004,
                379.88
              ],
              "alt": "Annotated Oracle screenshot for source step 9, guide page 277.",
              "width": 881,
              "height": 684
            }
          ],
          "page": 277,
          "sourceParagraph": 1901
        },
        {
          "number": 10,
          "sourceNumber": 10,
          "title": "Flight",
          "text": "Click on the (1) Flight LOV. The ‘Flight’ pop-up window appears. Select the applicable (2) Flight and click the (3) OK button.",
          "html": "Click on the (1) <strong>Flight</strong> LOV. The ‘Flight’ pop-up window appears. Select the applicable (2) <strong>Flight</strong> and click the (3) <strong>OK </strong>button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-415-p277.webp",
              "page": 277,
              "box": [
                52,
                407.45,
                306.931,
                613.94
              ],
              "alt": "Annotated Oracle screenshot for source step 10, guide page 277.",
              "width": 850,
              "height": 689
            }
          ],
          "page": 277,
          "sourceParagraph": 1903
        },
        {
          "number": 11,
          "sourceNumber": 11,
          "title": "Departments",
          "text": "Click on the (1) Departments LOV. The ‘Departments’ pop-up window appears. Select the applicable (2) Department and click the (3) OK button.",
          "html": "Click on the (1) <strong>Departments</strong> LOV. The ‘Departments’ pop-up window appears. Select the applicable (2) <strong>Department</strong> and click the (3) <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-416-p278.webp",
              "page": 278,
              "box": [
                52,
                174.72000000000003,
                299.321,
                404.81
              ],
              "alt": "Annotated Oracle screenshot for source step 11, guide page 278.",
              "width": 825,
              "height": 767
            }
          ],
          "page": 278,
          "sourceParagraph": 1905
        },
        {
          "number": 12,
          "sourceNumber": 12,
          "title": "Step 12",
          "text": "Verify all the selected parameters values have populated on the Parameters pop-up window. Click the OK button.",
          "html": "Verify all the selected parameters values have populated on the Parameters pop-up window. Click the <strong>OK</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-417-p278.webp",
              "page": 278,
              "box": [
                52,
                432.38,
                301.391,
                615.34
              ],
              "alt": "Annotated Oracle screenshot for source step 12, guide page 278.",
              "width": 832,
              "height": 610
            }
          ],
          "page": 278,
          "sourceParagraph": 1907
        },
        {
          "number": 13,
          "sourceNumber": 13,
          "title": "Decision",
          "text": "Click the (1) Submit button. A ‘Decision’ pop-up window appears with the Request ID number and an option to submit another request. Click the (2) No button.",
          "html": "Click the (1) <strong>Submit</strong> button. A ‘Decision’ pop-up window appears with the Request ID number and an option to submit another request. Click the (2) <strong>No</strong> button.",
          "details": [
            {
              "text": "Note: Please annotate the Request ID number.",
              "html": "<em><strong>Note:</strong></em><em> </em><em>Please annotate</em><em> the Request ID number.</em>",
              "type": "note"
            }
          ],
          "images": [
            {
              "src": "assets/screenshots/step-418-p279.webp",
              "page": 279,
              "box": [
                52,
                192.08000000000004,
                336.911,
                382.41
              ],
              "alt": "Annotated Oracle screenshot for source step 13, guide page 279.",
              "width": 950,
              "height": 635
            }
          ],
          "page": 279,
          "sourceParagraph": 1909
        },
        {
          "number": 14,
          "sourceNumber": 14,
          "title": "From the Navigator page, double-click on View.",
          "text": "From the Navigator page, double-click on View.",
          "html": "From the Navigator page, double-click on <strong>View</strong>.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-419-p279.webp",
              "page": 279,
              "box": [
                52,
                398.68,
                304.301,
                613.86
              ],
              "alt": "Annotated Oracle screenshot for source step 14, guide page 279.",
              "width": 842,
              "height": 718
            }
          ],
          "page": 279,
          "sourceParagraph": 1912
        },
        {
          "number": 15,
          "sourceNumber": 15,
          "title": "Find Requests",
          "text": "The ‘Find Requests’ form displays with the All My Requests radio button defaulted. Click the Find button.",
          "html": "The ‘Find Requests’ form displays with the All My Requests radio button defaulted. Click the <strong>Find </strong>button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-420-p280.webp",
              "page": 280,
              "box": [
                52,
                174.72000000000003,
                305.321,
                365.61
              ],
              "alt": "Annotated Oracle screenshot for source step 15, guide page 280.",
              "width": 845,
              "height": 637
            }
          ],
          "page": 280,
          "sourceParagraph": 1914
        },
        {
          "number": 16,
          "sourceNumber": 16,
          "title": "Requests",
          "text": "The ‘Requests’ form displays with all the concurrent requests run by the user. Select the applicable (1) Request ID, then click the (2) View Output button.",
          "html": "The ‘Requests’ form displays with all the concurrent requests run by the user. Select the applicable (1) <strong>Request ID</strong>, then click the (2) <strong>View Output</strong> button.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-421-p280.webp",
              "page": 280,
              "box": [
                52,
                393.56,
                319.221,
                603.73
              ],
              "alt": "Annotated Oracle screenshot for source step 16, guide page 280.",
              "width": 891,
              "height": 701
            }
          ],
          "page": 280,
          "sourceParagraph": 1916
        },
        {
          "number": 17,
          "sourceNumber": 17,
          "title": "The report downloads",
          "text": "The report downloads. Click on the .xls file to open the report.",
          "html": "The report downloads. Click on the <strong>.xls</strong> file to open the report.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-422-p281.webp",
              "page": 281,
              "box": [
                52,
                163.41700000000003,
                403.55100000000004,
                249.09000000000003
              ],
              "alt": "Annotated Oracle screenshot for source step 17, guide page 281.",
              "width": 1172,
              "height": 286
            }
          ],
          "page": 281,
          "sourceParagraph": 1918
        },
        {
          "number": 18,
          "sourceNumber": 18,
          "title": "The report opens in a new window.",
          "text": "The report opens in a new window.",
          "html": "The report opens in a new window.",
          "details": [],
          "images": [
            {
              "src": "assets/screenshots/step-423-p281.webp",
              "page": 281,
              "box": [
                52,
                265.36,
                413.141,
                434.06
              ],
              "alt": "Annotated Oracle screenshot for source step 18, guide page 281.",
              "width": 1204,
              "height": 563
            }
          ],
          "page": 281,
          "sourceParagraph": 1920
        }
      ],
      "prerequisites": [
        "N/A"
      ],
      "purpose": "The steps below illustrate how to generate a daily game plan report.",
      "role": "MROi Scheduler",
      "mvp": "4.2",
      "pages": [
        273,
        274,
        275,
        276,
        277,
        278,
        279,
        280,
        281
      ],
      "part": null,
      "summary": "Generate a daily game plan report.",
      "related": [
        "topic-3-view-receiving-transactions",
        "topic-4-view-inventory-transactions-status-summary"
      ]
    },
    {
      "id": "introduction",
      "kind": "reference",
      "title": "Introduction to MRO",
      "category": "Getting started",
      "summary": "The MRO mission and the scheduler’s role.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Mission Summary:",
          "html": "Mission Summary:"
        },
        {
          "type": "paragraph",
          "text": "The MRO solution is a Doctrine, Organization, Training, Materiel, Leadership, Personnel, Facilities, and Policies transformation and standardization of both the business processes and enabling materiel solution. MRO provides the AFSC with an integrated capability for planning, scheduling, and executing organic depot maintenance to support agile planning, optimized workload assignment, resource allocation, integrated quality, and maintenance-driven Department of the Air Force Working Capital Fund financials auditability. This integrated capability, by definition, represents a critical step forward toward resolution of the Air Force's Integrated Financial Systems Material Weakness.",
          "html": "The MRO solution is a Doctrine, Organization, Training, Materiel, Leadership, Personnel, Facilities, and Policies transformation and standardization of both the business processes and enabling materiel solution. MRO provides the AFSC with an integrated capability for planning, scheduling, and executing organic depot maintenance to support agile planning, optimized workload assignment, resource allocation, integrated quality, and maintenance-driven Department of the Air Force Working Capital Fund financials auditability. This integrated capability, by definition, represents a critical step forward toward resolution of the Air Force&#x27;s Integrated Financial Systems Material Weakness."
        },
        {
          "type": "paragraph",
          "text": "MRO implements a configured Oracle E-Business Suite (EBS) commercial off-the-shelf software product with required report, interface, conversion, extension, and workflow objects. MRO supports approximately 20,000 users as it fields through a series of incremental software builds under an agile software development program.",
          "html": "MRO implements a configured Oracle E-Business Suite (EBS) commercial off-the-shelf software product with required report, interface, conversion, extension, and workflow objects. MRO supports approximately 20,000 users as it fields through a series of incremental software builds under an agile software development program. "
        },
        {
          "type": "paragraph",
          "text": "MRO is implemented throughout all AFSC product lines to include commodities, electronics, missile, propulsion, aircraft, software, and maintenance support groups. MRO's incremental implementation will include transitional interfaces with various legacy systems to support continuous operations within the depot maintenance and supporting financials environment. MRO provides standard business operations for all Air Force sustainment customers.",
          "html": "MRO is implemented throughout all AFSC product lines to include commodities, electronics, missile, propulsion, aircraft, software, and maintenance support groups. MRO&#x27;s incremental implementation will include transitional interfaces with various legacy systems to support continuous operations within the depot maintenance and supporting financials environment. MRO provides standard business operations for all Air Force sustainment customers."
        },
        {
          "type": "paragraph",
          "text": "Role/Course Description – At the end of this course, the MRO Scheduler will be able to support daily operations in the shop. They will learn how to schedule and initiate the execution of depot maintenance activities based on the work packages and routes developed by the Planners and the production requirements generated by customers within MRO. This will allow them to validate that work packages are funded and ready for production. They will learn how to perform operations such as creating and updating maintenance visits, searching for and updating repair batches, and searching for and updating materials needed.",
          "html": "Role/Course Description – At the end of this course, the MRO Scheduler will be able to support daily operations in the shop. They will learn how to schedule and initiate the execution of depot maintenance activities based on the work packages and routes developed by the Planners and the production requirements generated by customers within MRO. This will allow them to validate that work packages are funded and ready for production. They will learn how to perform operations such as creating and updating maintenance visits, searching for and updating repair batches, and searching for and updating materials needed. "
        },
        {
          "type": "paragraph",
          "text": "Oracle complex Maintenance, Repair, and Overhaul (cMRO) User Guide",
          "html": "Additional reference: <a class=\"text-link\" href=\"https://docs.oracle.com/cd/E26401_01/doc.122/e49039/T289136T299317.htm#1917916\" target=\"_blank\" rel=\"noopener noreferrer\">Oracle cMRO User Guide ↗</a>"
        }
      ],
      "pages": [
        10
      ],
      "sourceTitle": "Introduction to MRO"
    },
    {
      "id": "starting-oracle",
      "kind": "reference",
      "title": "Starting your Oracle session",
      "category": "Getting started",
      "summary": "Access your assigned training or working environment.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Your training or system administrator provides the environment URL and sign-in information. These details are not included in the source guide.",
          "html": "Your training or system administrator provides the environment URL and sign-in information. These details are not included in the source guide."
        }
      ],
      "pages": [
        9
      ],
      "sourceTitle": "Starting your Oracle session"
    },
    {
      "id": "vocabulary",
      "kind": "reference",
      "title": "MRO vocabulary",
      "category": "Getting started",
      "summary": "Understand the terms used throughout the instructions.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "There are variances between language you have used up until now, and what you will use within MRO. The list below is not all inclusive.",
          "html": "There are variances between language you have used up until now, and what you will use within MRO. The list below is not all inclusive."
        },
        {
          "type": "list",
          "text": "Key Flexfield (KFF) – data attribute which incorporates code segments meaningful to your business. Define what each segment means, what values each segment can have, and what the segment values mean.",
          "html": "Key Flexfield (KFF) – data attribute which incorporates code segments meaningful to your business. Define what each segment means, what values each segment can have, and what the segment values mean."
        },
        {
          "type": "list",
          "text": "Descriptive Flexfield (DFF) – data attribute used to collect information unique to your business. Can be List of Values (LOV) enabled, provides customizable \"expansion space\" on your forms.",
          "html": "Descriptive Flexfield (DFF) – data attribute used to collect information unique to your business. Can be List of Values (LOV) enabled, provides customizable &quot;expansion space&quot; on your forms."
        },
        {
          "type": "list",
          "text": "LOV or Value Set – pre-defined list of values configured and used to enforce data validation in KFF, DFF, and other system fields.",
          "html": "LOV or Value Set – pre-defined list of values configured and used to enforce data validation in KFF, DFF, and other system fields."
        },
        {
          "type": "list",
          "text": "Master Data Object – groups of data attributes shared by multiple Oracle modules. Typically restricted to specific users for creation and maintenance",
          "html": "Master Data Object – groups of data attributes shared by multiple Oracle modules. Typically restricted to specific users for creation and maintenance"
        },
        {
          "type": "list",
          "text": "Transactional Data – Oracle data used to execute transactions such as work orders (WOs), purchase orders (POs), receipts, and service.",
          "html": "Transactional Data – Oracle data used to execute transactions such as work orders (WOs), purchase orders (POs), receipts, and service. "
        }
      ],
      "pages": [
        10,
        11
      ],
      "sourceTitle": "MRO vocabulary"
    },
    {
      "id": "application-interface",
      "kind": "reference",
      "title": "Application user interface",
      "category": "Getting started",
      "summary": "Identify the home page, navigator, forms, and fields.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Home Page: Every session of MRO is associated with a special window, the (1) Home Page. This window displays the users’ (2) favorites, (3) settings, (4) notifications, (5) help, and (6) log out. The navigator window is used to access various menus.",
          "html": "<strong>Home Page: </strong>Every session of MRO is associated with a special window, the (1) <strong>Home Page</strong>. This window displays the users’ (2) <strong>favorites</strong>, (3) <strong>settings</strong>, (4) <strong>notifications</strong>, (5) <strong>help</strong>, and (6) <strong>log out</strong>. The navigator window is used to access various menus. "
        },
        {
          "type": "image",
          "image": {
            "src": "assets/screenshots/interface-243.webp",
            "page": 11,
            "box": [
              53,
              365,
              412,
              566
            ],
            "alt": "Annotated Home Page reference, guide page 11.",
            "width": 1197,
            "height": 670
          }
        },
        {
          "type": "paragraph",
          "text": "Navigator Window: All menus available for users are located within the navigator window, and the menus will vary depending on the assigned roles.",
          "html": "<strong>Navigator Window: </strong>All menus available for users are located within the navigator window, and the menus will vary depending on the assigned roles. "
        },
        {
          "type": "image",
          "image": {
            "src": "assets/screenshots/interface-245.webp",
            "page": 12,
            "box": [
              53,
              176,
              410,
              406
            ],
            "alt": "Annotated Navigator Window reference, guide page 12.",
            "width": 1190,
            "height": 767
          }
        },
        {
          "type": "paragraph",
          "text": "Hypertext Markup Language (HTML) Based Applications: Open in a web browser and are used to navigate to other functions within the application.",
          "html": "Hypertext Markup Language <strong>(</strong><strong>HTML</strong><strong>)</strong><strong> Based Applications: </strong>Open in a web browser and are used to navigate to other functions within the application."
        },
        {
          "type": "image",
          "image": {
            "src": "assets/screenshots/interface-251.webp",
            "page": 12,
            "box": [
              53,
              437,
              410,
              612
            ],
            "alt": "Annotated Hypertext Markup Language (HTML) Based Applications reference, guide page 12.",
            "width": 1190,
            "height": 584
          }
        },
        {
          "type": "paragraph",
          "text": "Form Based Applications: Is an organized display of fields to quickly and easily access and update information in completing a business task. Each (1) Form may trigger a (2) security warning box that must be accepted to continue. Once accepted, a (3) Java window opens and displays one or more windows and is mapped to a complete business or task flow.",
          "html": "<strong>Form Based Applications: </strong>Is an organized display of fields to quickly and easily access and update information in completing a business task. Each (1) <strong>Form</strong> may trigger a (2) <strong>security warning</strong> box that must be accepted to continue. Once accepted, a (3) <strong>Java</strong> window opens and displays one or more windows and is mapped to a complete business or task flow. "
        },
        {
          "type": "image",
          "image": {
            "src": "assets/screenshots/interface-255.webp",
            "page": 13,
            "box": [
              53,
              209,
              412,
              369
            ],
            "alt": "Annotated Form Based Applications reference, guide page 13.",
            "width": 1197,
            "height": 534
          }
        },
        {
          "type": "paragraph",
          "text": "Field: Every Application window consists of one or more fields. A field contains information about a specific business entity. Fields are color coded to indicate the level of activity allowed. (1) Blue does not permit data entry, (2) white permits data entry, and (3) yellow requires data entry. All required areas in a field must be completed before moving to the next field.",
          "html": "<strong>Field: </strong>Every Application window consists of one or more fields. A field contains information about a specific business entity. Fields are color coded to indicate the level of activity allowed. (1) <strong>Blue</strong> does not permit data entry, (2) <strong>white</strong> permits data entry, and (3) <strong>yellow</strong> requires data entry. All required areas in a field must be completed before moving to the next field."
        },
        {
          "type": "image",
          "image": {
            "src": "assets/screenshots/interface-257.webp",
            "page": 13,
            "box": [
              53,
              434,
              412,
              589
            ],
            "alt": "Annotated Field reference, guide page 13.",
            "width": 1197,
            "height": 517
          }
        },
        {
          "type": "paragraph",
          "text": "Certain fields are used to search with a (1) Search field, and others have (2) LOV fields.",
          "html": "Certain fields are used to search with a (1) <strong>Search</strong> field, and others have (2) <strong>L</strong><strong>OV</strong> fields."
        },
        {
          "type": "image",
          "image": {
            "src": "assets/screenshots/interface-259.webp",
            "page": 14,
            "box": [
              53,
              165,
              412,
              290
            ],
            "alt": "Annotated Certain fields are used to search with a (1) Search field, and others have (2) LOV fields. reference, guide page 14.",
            "width": 1197,
            "height": 417
          }
        }
      ],
      "pages": [
        11,
        12,
        13,
        14
      ],
      "sourceTitle": "Application user interface"
    },
    {
      "id": "navigation",
      "kind": "reference",
      "title": "Navigating Oracle",
      "category": "Getting started",
      "summary": "Move between forms and access help.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The navigator window includes the following five tabs: File, Edit, View, Window, and Help. The three mostly used are (1) File, (2) Window, and (3) Help.",
          "html": "The navigator window includes the following five tabs: File, Edit, View, Window, and Help. The three mostly used are (1) <strong>File</strong>, (2) <strong>Window</strong>, and (3) <strong>Help</strong>."
        },
        {
          "type": "list",
          "text": "The File tab is used to clear forms.",
          "html": "The File tab is used to clear forms."
        },
        {
          "type": "list",
          "text": "The Window tab allows the user to switch between other windows and forms.",
          "html": "The Window tab allows the user to switch between other windows and forms. "
        },
        {
          "type": "list",
          "text": "The Help tab opens in a separate browser when Window Help is selected.",
          "html": "The Help tab opens in a separate browser when Window Help is selected."
        },
        {
          "type": "image",
          "image": {
            "src": "assets/screenshots/navigation.webp",
            "page": 14,
            "box": [
              53,
              378,
              300,
              408
            ],
            "alt": "Oracle navigation menus, guide page 14.",
            "width": 824,
            "height": 100
          }
        }
      ],
      "pages": [
        14
      ],
      "sourceTitle": "Navigating Oracle"
    },
    {
      "id": "toolbar",
      "kind": "reference",
      "title": "Toolbar reference",
      "category": "Getting started",
      "summary": "Identify the toolbar actions available on Oracle forms.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The following is a brief description of the toolbar available in Oracle. Not all toolbar items are available on every screen. If a Toolbar and/or Menu item is greyed out, it is not active for the phase of the application currently displayed.",
          "html": "The following is a brief description of the toolbar available in Oracle. Not all toolbar items are available on every screen. If a Toolbar and/or Menu item is greyed out, it is not active for the phase of the application currently displayed."
        },
        {
          "type": "image",
          "image": {
            "src": "assets/screenshots/toolbar.webp",
            "page": 14,
            "box": [
              53,
              465,
              411,
              503
            ],
            "alt": "Numbered Oracle toolbar reference, guide page 14.",
            "width": 1194,
            "height": 127
          }
        },
        {
          "type": "ordered-list",
          "items": [
            "Opens a new record",
            "Brings up the “Find” window",
            "Brings up the “Navigator” window",
            "Save",
            "Advance to the next step",
            "Brings up the user’s responsibilities",
            "Print",
            "Closes all windows of the current form",
            "Cut",
            "Copy",
            "Paste",
            "Erases the current record from the form",
            "Deletes the current record",
            "Displays “Editor” window",
            "Zoom",
            "Displays “Translations” window",
            "Displays “Attachments” window",
            "Displays Folder Tools window",
            "Displays online help"
          ]
        }
      ],
      "pages": [
        14,
        15
      ],
      "sourceTitle": "Toolbar reference"
    },
    {
      "id": "keyboard-shortcuts",
      "kind": "reference",
      "title": "Keyboard shortcuts",
      "category": "Getting started",
      "summary": "Common keys for forms, records, and queries.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Keyboard shortcuts can be used to quickly navigate through MRO.",
          "html": "Keyboard shortcuts can be used to quickly navigate through MRO."
        },
        {
          "type": "table",
          "rows": [
            [
              "Function",
              "Keys"
            ],
            [
              "Commit (Save)",
              "Ctrl+S"
            ],
            [
              "Edit",
              "Ctrl+E"
            ],
            [
              "Print",
              "Ctrl+P"
            ],
            [
              "List of Values",
              "Ctrl+L"
            ],
            [
              "Duplicate Field",
              "Shift+5"
            ],
            [
              "Duplicate Record",
              "Shift+6"
            ],
            [
              "Next Field",
              "Tab"
            ],
            [
              "Previous Field",
              "Shift+Tab"
            ],
            [
              "Next Record",
              "Arrow Down"
            ],
            [
              "Previous Record",
              "Arrow Up"
            ],
            [
              "First Record",
              "Page Up"
            ],
            [
              "Last Record",
              "Page Down"
            ],
            [
              "Clear Field",
              "F5"
            ],
            [
              "Clear Record",
              "F6"
            ],
            [
              "Clear Form",
              "F8"
            ],
            [
              "Enter Query",
              "F11"
            ],
            [
              "Execute Query (Run)",
              "Ctrl+F11"
            ],
            [
              "Close Form, Cancel Query, Exit",
              "F4"
            ]
          ]
        }
      ],
      "pages": [
        15,
        16
      ],
      "sourceTitle": "Keyboard shortcuts"
    },
    {
      "id": "glossary",
      "kind": "reference",
      "title": "Acronym glossary",
      "category": "Reference",
      "summary": "Acronyms and definitions from the source guide.",
      "blocks": [
        {
          "type": "table",
          "rows": [
            [
              "Acronym",
              "Definition"
            ],
            [
              "ACV",
              "Auto Create Visit"
            ],
            [
              "A FSC",
              "Air Force Sustainment Center"
            ],
            [
              "ALC",
              "Air Logistics Center"
            ],
            [
              "BOM",
              "Bill s of Material"
            ],
            [
              "CEMS",
              "Comprehensive Engine Management System"
            ],
            [
              "CL",
              "Clear"
            ],
            [
              "cMRO",
              "complex Maintenance Repair and Overhaul"
            ],
            [
              "DFF",
              "Descriptive Flexfield"
            ],
            [
              "EBS",
              "E-Business Suite"
            ],
            [
              "EIDN",
              "End-Item Document Number"
            ],
            [
              "HTML",
              "Hypertext Markup Language"
            ],
            [
              "ID",
              "Identification"
            ],
            [
              "JA",
              "Job Aid"
            ],
            [
              "KFF",
              "Key Flexfield"
            ],
            [
              "LOV",
              "List of Values"
            ],
            [
              "MC",
              "Master Configuration"
            ],
            [
              "MISTR",
              "Management of Items Subject to Repair"
            ],
            [
              "MR",
              "Maintenance Requirements"
            ],
            [
              "MRO",
              "Maintenance, Repair, and Overhaul"
            ],
            [
              "MROi",
              "Maintenance, Repair, and Overhaul initiative"
            ],
            [
              "MVP",
              "Minimum Viable Product"
            ],
            [
              "M x",
              "Maintenance"
            ],
            [
              "N /A",
              "Not Applicable"
            ],
            [
              "ORG",
              "Organization"
            ],
            [
              "PDF",
              "Portable Document Format"
            ],
            [
              "PO",
              "Purchase Order"
            ],
            [
              "PSSD",
              "Production Section Scheduling Designator"
            ],
            [
              "RA",
              "Receipt Acknowledged"
            ],
            [
              "RBAC",
              "Role Based Access Control"
            ],
            [
              "SO",
              "Service Order"
            ],
            [
              "SR",
              "Service Request"
            ],
            [
              "UC",
              "Unit Configuration"
            ],
            [
              "UOM",
              "Unit of Measure"
            ],
            [
              "WIP",
              "Work in Process"
            ],
            [
              "WO",
              "Work Order"
            ],
            [
              "WP",
              "Wash Post"
            ]
          ]
        }
      ],
      "pages": [
        290
      ],
      "sourceTitle": "Acronym glossary"
    },
    {
      "id": "job-aids",
      "kind": "reference",
      "title": "Job aid references",
      "category": "Reference",
      "summary": "Companion documents listed in the guide. The files themselves were not supplied.",
      "blocks": [
        {
          "type": "notice",
          "text": "These are references, not downloadable attachments. Use your organization’s approved document library to locate the current job aids.",
          "html": "These are references, not downloadable attachments. Use your organization’s approved document library to locate the current job aids."
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0007_Customer Work Package - Create a Maintenance Visit",
          "html": "MRO_TRN_JA-0007_Customer Work Package - Create a Maintenance Visit"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0008_Customer Work Package - Add a Maintenance Requirement to a Visit",
          "html": "MRO_TRN_JA-0008_Customer Work Package - Add a Maintenance Requirement to a Visit"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0009_Customer Work Package_Perform Work Orders and Operations",
          "html": "MRO_TRN_JA-0009_Customer Work Package_Perform Work Orders and Operations"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0010_End-Item Induction (MISTR)",
          "html": "MRO_TRN_JA-0010_End-Item Induction (MISTR)"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0011_Send D7 Wash Post Outbound Transaction to D035K",
          "html": "MRO_TRN_JA-0011_Send D7 Wash Post Outbound Transaction to D035K"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0014_End-Item Induction (Non-MISTR)",
          "html": "MRO_TRN_JA-0014_End-Item Induction (Non-MISTR)"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0015_Customer Work Package - Sign Off Maintenance Requirements.",
          "html": "MRO_TRN_JA-0015_Customer Work Package - Sign Off Maintenance Requirements."
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0016_Customer Work Package - Close Visit",
          "html": "MRO_TRN_JA-0016_Customer Work Package - Close Visit "
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0019_Customer Demand - Create a Master Configuration",
          "html": "MRO_TRN_JA-0019_Customer Demand - Create a Master Configuration"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0023_Daily Game Plan Report",
          "html": "MRO_TRN_JA-0023_Daily Game Plan Report"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0025_Maintenance Identifier Report - Generate From Concurrent Manager",
          "html": "MRO_TRN_JA-0025_Maintenance Identifier Report - Generate From Concurrent Manager"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0028_Maintenance Identifier Report - Component Maintenance",
          "html": "MRO_TRN_JA-0028_Maintenance Identifier Report - Component Maintenance"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0029_Maintenance Identifier Report - Visit Work Package",
          "html": "MRO_TRN_JA-0029_Maintenance Identifier Report - Visit Work Package"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0036_Send Misidentified Item Notification (DF1)",
          "html": "MRO_TRN_JA-0036_Send Misidentified Item Notification (DF1) "
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0047_Customer Demand - Create Item Instance",
          "html": "MRO_TRN_JA-0047_Customer Demand - Create Item Instance"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0052_Customer Demand - Create Unit Configuration",
          "html": "MRO_TRN_JA-0052_Customer Demand - Create Unit Configuration "
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0060_Comprehensive Engine Management System Creates and Updates the Unit Configuration",
          "html": "MRO_TRN_JA-0060_Comprehensive Engine Management System Creates and Updates the Unit Configuration"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0066_Issue End Item Out of Inventory",
          "html": "MRO_TRN_JA-0066_Issue End Item Out of Inventory"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0067_Receive End Item into Inventory",
          "html": "MRO_TRN_JA-0067_Receive End Item into Inventory"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0082_Service Order Status Report",
          "html": "MRO_TRN_JA-0082_Service Order Status Report"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0154_Create and Search for a Service Request",
          "html": "MRO_TRN_JA-0154_Create and Search for a Service Request"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0159_Create Unit Base Visit (Complex Visit)",
          "html": "MRO_TRN_JA-0159_Create Unit Base Visit (Complex Visit)"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0161_Plan and Push a Visit to Production",
          "html": "MRO_TRN_JA-0161_Plan and Push a Visit to Production"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0171_End-Item Turn In",
          "html": "MRO_TRN_JA-0171_End-Item Turn In"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0206_Create Service Order with or Without End-Item Type of Engine",
          "html": "MRO_TRN_JA-0206_Create Service Order with or Without End-Item Type of Engine"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0213_Send D7 Wash Post Outbound Transaction to D035K for Engine Item Type",
          "html": "MRO_TRN_JA-0213_Send D7 Wash Post Outbound Transaction to D035K for Engine Item Type"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0214_Send D6 Wash Post Outbound Transaction to D035K for Engine Item Type",
          "html": "MRO_TRN_JA-0214_Send D6 Wash Post Outbound Transaction to D035K for Engine Item Type"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0215_Create a Non-Routine Work Order from an Existing Non-Routine Work Order",
          "html": "MRO_TRN_JA-0215_Create a Non-Routine Work Order from an Existing Non-Routine Work Order"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0216_Auto Create Visit Process",
          "html": "MRO_TRN_JA-0216_Auto Create Visit Process"
        },
        {
          "type": "list",
          "text": "MRO_TRN_JA-0221_Misidentified Item Turn-In",
          "html": "MRO_TRN_JA-0221_Misidentified Item Turn-In "
        }
      ],
      "pages": [
        288
      ],
      "sourceTitle": "Job aid references"
    },
    {
      "id": "lesson-1",
      "kind": "lesson",
      "lesson": 1,
      "title": "Requesting and Inducting Items",
      "category": "Lesson 1",
      "summary": "",
      "blocks": [
        {
          "type": "paragraph",
          "text": "This lesson provides comprehensive training on the end-to-end process of managing Service Requests (SR) and end-item inductions within the Maintenance, Repair, and Overhaul (MRO) system. The lesson is divided into two primary topics: Requesting and Inducting Items.",
          "html": "This lesson provides comprehensive training on the end-to-end process of managing Service Requests (SR) and end-item inductions within the Maintenance, Repair, and Overhaul (MRO) system. The lesson is divided into two primary topics: Requesting and Inducting Items."
        },
        {
          "type": "paragraph",
          "text": "Learners will gain hands-on experience navigating Oracle EBS to create, search, and manage SRs and Service Orders (SOs). The training covers critical workflows including Management of Items Subject to Repair (MISTR) and Non-MISTR inductions, interface transactions with D035K, unit configuration management, maintenance visit creation, and automated visit processes.",
          "html": "Learners will gain hands-on experience navigating Oracle EBS to create, search, and manage SRs and Service Orders (SOs). The training covers critical workflows including Management of Items Subject to Repair (MISTR) and Non-MISTR inductions, interface transactions with D035K, unit configuration management, maintenance visit creation, and automated visit processes."
        },
        {
          "type": "paragraph",
          "text": "Key system interfaces covered in this lesson include D7M inbound/outbound transactions, D7 Wash Post signals, DF1 misidentified item notifications, and Receipt Acknowledgement (RA) processes. The lesson emphasizes proper documentation, interface validation, and compliance with depot repair operational procedures.",
          "html": "Key system interfaces covered in this lesson include D7M inbound/outbound transactions, D7 Wash Post signals, DF1 misidentified item notifications, and Receipt Acknowledgement (RA) processes. The lesson emphasizes proper documentation, interface validation, and compliance with depot repair operational procedures."
        }
      ],
      "children": [
        "search-for-a-service-request",
        "create-service-order-with-or-without-end-item-type-of-engine",
        "view-service-order",
        "end-item-induction-management-of-items-subject-to-repair-mistr",
        "end-item-induction-non-mistr",
        "send-d7-wash-post-outbound-transaction-to-d035k-for-engine-item-type",
        "receive-end-item-into-inventory",
        "create-unit-configuration",
        "update-unit-configurations",
        "comprehensive-engine-management-system-creates-and-updates-the-unit-configuration",
        "create-maintenance-visits",
        "send-misidentified-item-notification-df1",
        "create-an-item-instance",
        "send-d7-wash-post-outbound-transaction-to-d035k",
        "auto-create-visit-process",
        "service-order-status-report"
      ],
      "resources": [
        "MRO_TRN_JA-0154_Create and Search for a Service Request",
        "MRO_TRN_JA-0206_Create Service Order with or Without End-Item Type of Engine",
        "MRO_TRN_JA-0010_End-Item Induction (MISTR)",
        "MRO_TRN_JA-0014_End-Item Induction (Non-MISTR)",
        "MRO_TRN_JA-0011_Send D7 Wash Post Outbound Transaction to D035K",
        "MRO_TRN_JA-0067_Receive End Item into Inventory",
        "MRO_TRN_JA-0052_Customer Demand - Create Unit Configuration",
        "MRO_TRN_JA-0060_Comprehensive Engine Management System Creates and Updates the Unit Configuration",
        "MRO_TRN_JA-0159_Create Unit Base Visit (Complex Visit)",
        "MRO_TRN_JA-0007_Customer Work Package - Create a Maintenance Visit",
        "MRO_TRN_JA-0036_Send Misidentified Item Notification (DF1)",
        "MRO_TRN_JA-0047_Customer Demand - Create Item Instance",
        "MRO_TRN_JA-0213_Send D7 Wash Post Outbound Transaction to D035K for Engine Item Type",
        "MRO_TRN_JA-0216_Auto Create Visit Process",
        "MRO_TRN_JA-0082_Service Order Status Report"
      ],
      "pages": [
        18
      ],
      "sourceTitle": "Lesson 1: Requesting and Inducting Items",
      "recap": "This lesson covered service request and end-item induction processing within the MROi system, focusing on requesting and inducting items through Oracle EBS. The students learned to manage SRs and SOs, process MISTR and Non-MISTR inductions, execute interface transactions with D035K (D7M, D7 Wash Post, DF1), receive end-items into inventory, create and update unit configurations, establish maintenance visits, and run the ACV process. Key skills include DFF configuration, interface validation, receipt procedures, and status reporting. Apply these foundational procedures with attention to detail, proper sequencing, and system validation to ensure successful depot repair operations."
    },
    {
      "id": "lesson-2",
      "kind": "lesson",
      "lesson": 2,
      "title": "Tracking Assets",
      "category": "Lesson 2",
      "summary": "",
      "blocks": [
        {
          "type": "paragraph",
          "text": "This lesson provides comprehensive training on executing maintenance visits within the MRO system, focusing on the complete lifecycle from planning through closure. The lesson covers Tracking Assets as a single comprehensive topic with six critical procedures.",
          "html": "This lesson provides comprehensive training on executing maintenance visits within the MRO system, focusing on the complete lifecycle from planning through closure. The lesson covers Tracking Assets as a single comprehensive topic with six critical procedures."
        },
        {
          "type": "paragraph",
          "text": "Learners will gain hands-on experience navigating Oracle EBS to manage visits and WOs. Users will search for and add Maintenance Requirements (MRs) to visits. Users will validate and plan visits for production work. Users will push visits to the shop floor with released WOs. Users will search for and update WOs using visit numbers or Bills of Material (BOM) resources. Users will complete WO operations, sign off completed MRs, and close visits.",
          "html": "Learners will gain hands-on experience navigating Oracle EBS to manage visits and WOs. Users will search for and add Maintenance Requirements (MRs) to visits. Users will validate and plan visits for production work. Users will push visits to the shop floor with released WOs. Users will search for and update WOs using visit numbers or Bills of Material (BOM) resources. Users will complete WO operations, sign off completed MRs, and close visits."
        },
        {
          "type": "paragraph",
          "text": "Key workflows include visit validation procedures, transitioning from Planning to Implemented status, WO management in the Production Planning module, MR sign-off with proper date defaulting, and visit closure processes. The lesson emphasizes proper status verification, sequential workflow execution, and compliance with customer work package procedures.",
          "html": "Key workflows include visit validation procedures, transitioning from Planning to Implemented status, WO management in the Production Planning module, MR sign-off with proper date defaulting, and visit closure processes. The lesson emphasizes proper status verification, sequential workflow execution, and compliance with customer work package procedures."
        }
      ],
      "children": [
        "search-and-add-mrs-on-visits",
        "search-visits-plan-visits-and-push-to-production-job-released",
        "search-work-order",
        "update-work-order",
        "sign-off-a-maintenance-requirement-mr",
        "close-visit"
      ],
      "resources": [
        "MRO_TRN_JA-0008_Customer Work Package - Add a Maintenance Requirement to a Visit",
        "MRO_TRN_JA-0161_Plan and Push a Visit to Production",
        "MRO_TRN_JA-0009_Customer Work Package_Perform Work Orders and Operations",
        "MRO_TRN_JA-0015_Customer Work Package - Sign Off Maintenance Requirements",
        "MRO_TRN_JA-0016_Customer Work Package - Close Visit"
      ],
      "pages": [
        127
      ],
      "sourceTitle": "Lesson 2: Tracking Assets",
      "recap": "This lesson covered executing maintenance visits within the MRO system, focusing on the complete visit lifecycle from planning through closure. The students learned to add MRs to visits, validate and plan visits for production work, push visits to the shop floor with released WOs, search for and update WOs using visit numbers or BOM resources, sign off completed MRs, and close visits after all work is finished. Key skills include understanding visit status transitions (Planning, Implemented, Closed), MR status progression (In Shop Floor, All Jobs Complete, Signed Off), WO management, and proper date defaulting procedures. Apply these procedures sequentially with careful status verification to ensure successful execution of customer work packages and compliance with depot repair standards."
    },
    {
      "id": "lesson-3",
      "kind": "lesson",
      "lesson": 3,
      "title": "Turn-In/Sellback",
      "category": "Lesson 3",
      "summary": "",
      "blocks": [
        {
          "type": "paragraph",
          "text": "This lesson provides comprehensive training on the end-item turn-in and shipping processes within the MRO system. The lesson covers Turning Items Back In and Sellback as a single comprehensive topic with four critical procedures.",
          "html": "This lesson provides comprehensive training on the end-item turn-in and shipping processes within the MRO system. The lesson covers Turning Items Back In and Sellback as a single comprehensive topic with four critical procedures."
        },
        {
          "type": "paragraph",
          "text": "Learners will gain hands-on experience navigating Oracle EBS to process standard end-item turn-ins with D6 outbound interfaces, handle misidentified item turn-ins through miscellaneous receipts and issues, send D6 Wash Post transactions for both engine and non-engine item types, and generate End-Item Stuffer reports for shipping documentation.",
          "html": "Learners will gain hands-on experience navigating Oracle EBS to process standard end-item turn-ins with D6 outbound interfaces, handle misidentified item turn-ins through miscellaneous receipts and issues, send D6 Wash Post transactions for both engine and non-engine item types, and generate End-Item Stuffer reports for shipping documentation."
        },
        {
          "type": "paragraph",
          "text": "Key workflows include ship line configuration with proper Supply Condition Codes and Advice Codes, D6 and D6M interface transaction validation, miscellaneous inventory transactions for misidentified items, wash post processing for items moving to different production numbers, and attachment verification for shipping documentation. The lesson emphasizes proper interface sequencing, status verification, and compliance with D035K data exchange requirements.",
          "html": "Key workflows include ship line configuration with proper Supply Condition Codes and Advice Codes, D6 and D6M interface transaction validation, miscellaneous inventory transactions for misidentified items, wash post processing for items moving to different production numbers, and attachment verification for shipping documentation. The lesson emphasizes proper interface sequencing, status verification, and compliance with D035K data exchange requirements."
        }
      ],
      "children": [
        "end-item-turn-in",
        "b1-miscellaneous-receipt",
        "b2-misidentified-item-turn-in",
        "b3-miscellaneous-issue",
        "send-d6-wash-post-outbound-transaction-to-d035k-for-engine-item-type",
        "send-d6-wash-post-outbound-transaction-to-d035k"
      ],
      "resources": [
        "MRO_TRN_JA-0171_End-Item Turn In",
        "MRO_TRN_JA-0221_Misidentified Item Turn-In",
        "MRO_TRN_JA-0018_Send D6 Wash Post Outbound Transaction to D035K",
        "MRO_TRN_JA-0214_Send D6 Wash Post Outbound Transaction to D035K for Engine Item Type"
      ],
      "pages": [
        148
      ],
      "sourceTitle": "Lesson 3: Turn-In/Sellback",
      "recap": "This lesson covered end-item turn-in and shipping processes within the MRO system. The students learned to process standard end-item turn-ins with D6 interfaces, handle misidentified items through miscellaneous transactions, and send D6 Wash Post transactions for engine and non-engine types. Key skills include configuring ship lines with proper codes (Supply Condition Code A or F, Advice Code RT), validating interface transactions (D6O, D6MIU, D6MOWP, D6WP), and verifying Stuffer report attachments. Apply these procedures with careful sequencing and status verification to ensure successful data exchange with D035K."
    },
    {
      "id": "lesson-4",
      "kind": "lesson",
      "lesson": 4,
      "title": "Configurations",
      "category": "Lesson 4",
      "summary": "",
      "blocks": [
        {
          "type": "paragraph",
          "text": "This lesson provides comprehensive training on managing configurations within the MRO system. The lesson covers Configurations as a single comprehensive topic with two critical procedures. MCs are used as templates to hold setups and rules that will be used to govern the creation of Unit Configurations (UCs). UCs are used to represent actual assemblies with real serial numbers and service history. These UCs are created from an MC which contains the rules and validations that will govern the usage of the UCs in the system.",
          "html": "This lesson provides comprehensive training on managing configurations within the MRO system. The lesson covers Configurations as a single comprehensive topic with two critical procedures. MCs are used as templates to hold setups and rules that will be used to govern the creation of Unit Configurations (UCs). UCs are used to represent actual assemblies with real serial numbers and service history. These UCs are created from an MC which contains the rules and validations that will govern the usage of the UCs in the system."
        }
      ],
      "children": [
        "view-master-configurations-report",
        "search-product"
      ],
      "resources": [
        "MRO_TRN_JA-0019_Customer Demand - Create a Master Configuration",
        "MRO_TRN_JA-0132_Run a Standard Report, Process and Request Set"
      ],
      "pages": [
        213
      ],
      "sourceTitle": "Lesson 4: Configurations",
      "recap": "During this lesson the students learned how to view an MC Report, view and update UCs, and search for a product."
    },
    {
      "id": "lesson-5",
      "kind": "lesson",
      "lesson": 5,
      "title": "Visits",
      "category": "Lesson 5",
      "summary": "",
      "blocks": [
        {
          "type": "paragraph",
          "text": "This lesson provides comprehensive training on managing visits within the MRO system. The lesson covers Visits. A visit is a group of maintenance events created in the Visit Work Package module by the maintenance planner, comprised of selected MRs and associated routes with projected compliance times. Visits are used for capacity planning, scheduling to maintenance bases, and production planning. Visit resource requirements include man hours by skill level and certification, tooling, materials, duration, and completion times based on routes defined in Route Management. After creation, visits are scheduled at maintenance facilities based on availability, material constraints, and forecast resources. Material requirements are integrated into Oracle's Advanced Supply Chain Planning, allowing planners to identify schedule conflicts, material availability issues, and select alternate items or adjust schedules as needed.",
          "html": "This lesson provides comprehensive training on managing visits within the MRO system. The lesson covers Visits. A visit is a group of maintenance events created in the Visit Work Package module by the maintenance planner, comprised of selected MRs and associated routes with projected compliance times. Visits are used for capacity planning, scheduling to maintenance bases, and production planning. Visit resource requirements include man hours by skill level and certification, tooling, materials, duration, and completion times based on routes defined in Route Management. After creation, visits are scheduled at maintenance facilities based on availability, material constraints, and forecast resources. Material requirements are integrated into Oracle&#x27;s Advanced Supply Chain Planning, allowing planners to identify schedule conflicts, material availability issues, and select alternate items or adjust schedules as needed."
        }
      ],
      "children": [
        "update-visit"
      ],
      "resources": [
        "N/A"
      ],
      "pages": [
        221
      ],
      "sourceTitle": "Lesson 5: Visits",
      "recap": "In this lesson, the students learned how to view and update Visits."
    },
    {
      "id": "lesson-6",
      "kind": "lesson",
      "lesson": 6,
      "title": "Work Orders",
      "category": "Lesson 6",
      "summary": "",
      "blocks": [
        {
          "type": "paragraph",
          "text": "This lesson provides comprehensive training on creating and managing WOs within the MRO system. This lesson delivers a comprehensive overview of Work Orders through six critical topics. Users can issue and return materials to inventory with a single WO, identify the employee that items are issued to or returned by, and view the material transaction history. This enables a user to perform material transactions across WOs rather than having to drill into all WOs.",
          "html": "This lesson provides comprehensive training on creating and managing WOs within the MRO system. This lesson delivers a comprehensive overview of Work Orders through six critical topics. Users can issue and return materials to inventory with a single WO, identify the employee that items are issued to or returned by, and view the material transaction history. This enables a user to perform material transactions across WOs rather than having to drill into all WOs."
        },
        {
          "type": "paragraph",
          "text": "Users can view material requirements, identify the materials previously issued against these requirements, and determine which items must be issued for each job, based on the defined requirements.",
          "html": "Users can view material requirements, identify the materials previously issued against these requirements, and determine which items must be issued for each job, based on the defined requirements."
        },
        {
          "type": "paragraph",
          "text": "Users can query for items that have already been returned or that need to be returned and search for items that were issued but not completely used to complete the applicable job. Multiple items can be returned at the same time without the user having to navigate to a single job or associated visit. Users can also manually identify the issued items that will replace the non-tracked parts that will be returned.",
          "html": "Users can query for items that have already been returned or that need to be returned and search for items that were issued but not completely used to complete the applicable job. Multiple items can be returned at the same time without the user having to navigate to a single job or associated visit. Users can also manually identify the issued items that will replace the non-tracked parts that will be returned."
        }
      ],
      "children": [
        "how-to-create-a-non-routine-work-order-from-existing-non-routine-work-order",
        "search-materials-from-work-orders",
        "update-materials-required-for-work-orders",
        "manage-work-order-material-demand",
        "view-and-manage-wip-material-transactions",
        "return-material",
        "topic-4-how-to-close-operations-and-work-orders",
        "topic-5-how-to-generate-a-maintenance-identifier-report-from-concurrent-manager",
        "topic-6-how-to-generate-a-maintenance-identifier-report-from-the-visit-work-package-page"
      ],
      "resources": [
        "MRO_TRN_JA-0009_Customer Work Package_Perform Work Orders and Operations",
        "MRO_TRN_JA-0025_Maintenance Identifier Report - Generate From Concurrent Manager",
        "MRO_TRN_JA-0028_Maintenance Identifier Report - Component Maintenance",
        "MRO_TRN_JA-0029_Maintenance Identifier Report - Visit Work Package",
        "MRO_TRN_JA-0215_Create a Non-Routine Work Order from an Existing Non-Routine Work Order"
      ],
      "pages": [
        226
      ],
      "sourceTitle": "Lesson 6: Work Orders",
      "recap": "During this lesson, the students demonstrated the actions required to issue material to WOs. These actions include searching and updating Materials required for WOs, receive and return material from inventory. Students managed WO Material Demand, and also viewed and managed WIP Material Transactions and Material Transactions."
    },
    {
      "id": "lesson-7",
      "kind": "lesson",
      "lesson": 7,
      "title": "Inventory Transactions",
      "category": "Lesson 7",
      "summary": "",
      "blocks": [
        {
          "type": "paragraph",
          "text": "This lesson provides comprehensive training on issuing, receiving and viewing inventory transactions within the MRO system. The lesson delivers a comprehensive overview of Inventory Transactions through 5 critical topics. Receiving transactions are associated with material maintenance provided by third-party vendors and correct routing of material.",
          "html": "This lesson provides comprehensive training on issuing, receiving and viewing inventory transactions within the MRO system. The lesson delivers a comprehensive overview of Inventory Transactions through 5 critical topics. Receiving transactions are associated with material maintenance provided by third-party vendors and correct routing of material."
        },
        {
          "type": "paragraph",
          "text": "Oracle Inventory, with Oracle Order Management, Oracle Purchasing, and Oracle Work in Process, provides you with a complete set of transactions and reports for maintaining inventory control. This allows you to control the flow of material from the time you receive items to the time you ship finished goods to the customer.",
          "html": "Oracle Inventory, with Oracle Order Management, Oracle Purchasing, and Oracle Work in Process, provides you with a complete set of transactions and reports for maintaining inventory control. This allows you to control the flow of material from the time you receive items to the time you ship finished goods to the customer."
        }
      ],
      "children": [
        "topic-1-issue-end-item-out-of-inventory",
        "topic-2-receive-material-into-inventory",
        "topic-3-view-receiving-transactions",
        "topic-4-view-inventory-transactions-status-summary",
        "topic-5-generate-daily-game-plan-report"
      ],
      "resources": [
        "MRO_TRN_JA-0066_Issue End Item Out of Inventory",
        "MRO_TRN_JA-0023_Daily Game Plan Report"
      ],
      "pages": [
        258
      ],
      "sourceTitle": "Lesson 7: Inventory Transactions",
      "recap": "During this lesson, the students demonstrated the actions required to view Receiving Transactions and Inventory Transactions Status Summary."
    },
    {
      "id": "lesson-8",
      "kind": "lesson",
      "lesson": 8,
      "title": "Production Execution Workbench",
      "category": "Lesson 8",
      "summary": "",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The Production Execution Workbench is where Mx Supervisors, Schedulers, Planners, and Production Support Technicians (PSTs) go to manage WOs and Operations that have been pushed to production for maintenance execution.",
          "html": "The Production Execution Workbench is where Mx Supervisors, Schedulers, Planners, and Production Support Technicians (PSTs) go to manage WOs and Operations that have been pushed to production for maintenance execution."
        },
        {
          "type": "notice",
          "text": "The instructions for this lesson are in the separate Production Execution Workbench Guide and Production Execution Workbench Classroom Guide. Those documents were not supplied with this draft.",
          "html": "The instructions for this lesson are in the separate <strong>Production Execution Workbench Guide</strong> and <strong>Production Execution Workbench Classroom Guide</strong>. Those documents were not supplied with this draft."
        }
      ],
      "children": [],
      "resources": [
        "MRO_TRN_JA-0087_Production Execution Workbench - Create Material Requests for Parts",
        "MRO_TRN_JA-0089_Production Execution Workbench - Update a Work Order Status",
        "MRO_TRN_JA-0091_Production Execution Workbench - Print the Maintenance Identifier Tag",
        "MRO_TRN_JA-0092_Production Execution Workbench - Operation Completion Status",
        "MRO_TRN_JA-0097_Production Execution Workbench - Work Order Materials",
        "MRO_TRN_JA-0098_Production Execution Workbench - Bulk Part Removal",
        "MRO_TRN_JA-0099_Production Execution Workbench - View Turnover Notes",
        "MRO_TRN_JA-0101_Production Execution Workbench - Add an Operation to a Non-Routine",
        "MRO_TRN_JA-0104_Production Execution Workbench - Update the Department on a Work Order",
        "MRO_TRN_JA-0108_Production Execution Workbench - Edit Unit Configuration Information",
        "MRO_TRN_JA-0109_Production Execution Workbench - Assign Time to Employees in Operations",
        "MRO_TRN_JA-0110_Production Execution Workbench - Assign Employee to an Operation",
        "MRO_TRN_JA-0230_Production Execution Workbench - Defer or Cancel Maintenance Requirements"
      ],
      "pages": [
        283
      ],
      "sourceTitle": "Lesson 8: Production Execution Workbench"
    },
    {
      "id": "practice-1",
      "kind": "practice",
      "title": "Requesting and Inducting Items",
      "category": "Practice",
      "lesson": 1,
      "summary": "Check your understanding of Lesson 1.",
      "questions": [
        {
          "question": "What are the two types of end-item induction processes covered in this lesson, and what is the primary difference between them?",
          "options": [],
          "answer": "The two types are MISTR (Management of Items Subject to Repair) and Non-MISTR inductions. The primary difference is that MISTR inductions receive an inbound D7M transaction from D035K with a pre-created SO, while Non-MISTR inductions require MRO to initiate a D7 outbound interface to request the end-item, then receive a D7M response from D035K."
        },
        {
          "question": "What does the wildcard character “%” do in search fields?",
          "options": [
            "A) Searches for exact matches only",
            "B) Clears the search field",
            "C) Simulates any other character(s) in a string",
            "D) Searches for numeric values only"
          ],
          "answer": "C"
        }
      ],
      "pages": [
        124
      ],
      "sourceTitle": "Lesson 1 Knowledge Check",
      "children": [
        "search-for-a-service-request",
        "create-service-order-with-or-without-end-item-type-of-engine",
        "view-service-order",
        "end-item-induction-management-of-items-subject-to-repair-mistr",
        "end-item-induction-non-mistr",
        "send-d7-wash-post-outbound-transaction-to-d035k-for-engine-item-type",
        "receive-end-item-into-inventory",
        "create-unit-configuration",
        "update-unit-configurations",
        "comprehensive-engine-management-system-creates-and-updates-the-unit-configuration",
        "create-maintenance-visits",
        "send-misidentified-item-notification-df1",
        "create-an-item-instance",
        "send-d7-wash-post-outbound-transaction-to-d035k",
        "auto-create-visit-process",
        "service-order-status-report"
      ]
    },
    {
      "id": "practice-2",
      "kind": "practice",
      "title": "Tracking Assets",
      "category": "Practice",
      "lesson": 2,
      "summary": "Check your understanding of Lesson 2.",
      "questions": [
        {
          "question": "What are the prerequisites for signing off a maintenance requirement?",
          "options": [],
          "answer": "Users must have a component visit created with all operations and WOs associated to the MR completed, and the status of the MR must reflect \"All Jobs Complete.\""
        },
        {
          "question": "What status must WOs have when searching for them to update?",
          "options": [],
          "answer": "Released."
        }
      ],
      "pages": [
        145
      ],
      "sourceTitle": "Lesson 2 Knowledge Check",
      "children": [
        "search-and-add-mrs-on-visits",
        "search-visits-plan-visits-and-push-to-production-job-released",
        "search-work-order",
        "update-work-order",
        "sign-off-a-maintenance-requirement-mr",
        "close-visit"
      ]
    },
    {
      "id": "practice-3",
      "kind": "practice",
      "title": "Turn-In/Sellback",
      "category": "Practice",
      "lesson": 3,
      "summary": "Check your understanding of Lesson 3.",
      "questions": [
        {
          "question": "What two fields must be verified as populated before Ship Confirm?",
          "options": [],
          "answer": "Subinventory and Locator fields."
        },
        {
          "question": "What must be verified before attempting Ship Confirm for D6 Wash Post?",
          "options": [
            "A) Interface Transaction Type = D6O",
            "B) Interface Transaction Type = D6MIU and Status = S",
            "C) Ship line status = Entered",
            "D) Return line status = Booked"
          ],
          "answer": "B"
        }
      ],
      "pages": [
        210
      ],
      "sourceTitle": "Lesson 3 Knowledge Check",
      "children": [
        "end-item-turn-in",
        "b1-miscellaneous-receipt",
        "b2-misidentified-item-turn-in",
        "b3-miscellaneous-issue",
        "send-d6-wash-post-outbound-transaction-to-d035k-for-engine-item-type",
        "send-d6-wash-post-outbound-transaction-to-d035k"
      ]
    },
    {
      "id": "practice-4",
      "kind": "practice",
      "title": "Configurations",
      "category": "Practice",
      "lesson": 4,
      "summary": "Check your understanding of Lesson 4.",
      "questions": [
        {
          "question": "What format do we use to view the Master Configurations Report?",
          "options": [],
          "answer": "PDF"
        }
      ],
      "pages": [
        219
      ],
      "sourceTitle": "Lesson 4 Knowledge Check",
      "children": [
        "view-master-configurations-report",
        "search-product"
      ]
    },
    {
      "id": "practice-5",
      "kind": "practice",
      "title": "Visits",
      "category": "Practice",
      "lesson": 5,
      "summary": "Check your understanding of Lesson 5.",
      "questions": [
        {
          "question": "When updating a visit, what information is entered to search for the visit?",
          "options": [],
          "answer": "Visit Number"
        }
      ],
      "pages": [
        223
      ],
      "sourceTitle": "Lesson 5 Knowledge Check",
      "children": [
        "update-visit"
      ]
    },
    {
      "id": "practice-6",
      "kind": "practice",
      "title": "Work Orders",
      "category": "Practice",
      "lesson": 6,
      "summary": "Check your understanding of Lesson 6.",
      "questions": [
        {
          "question": "What status is displayed once ‘Complete Work Order’ is selected from the drop-down list and the ‘Go’ button is clicked?",
          "options": [],
          "answer": "Complete"
        }
      ],
      "pages": [
        256
      ],
      "sourceTitle": "Lesson 6 Knowledge Check",
      "children": [
        "how-to-create-a-non-routine-work-order-from-existing-non-routine-work-order",
        "search-materials-from-work-orders",
        "update-materials-required-for-work-orders",
        "manage-work-order-material-demand",
        "view-and-manage-wip-material-transactions",
        "return-material",
        "topic-4-how-to-close-operations-and-work-orders",
        "topic-5-how-to-generate-a-maintenance-identifier-report-from-concurrent-manager",
        "topic-6-how-to-generate-a-maintenance-identifier-report-from-the-visit-work-package-page"
      ]
    },
    {
      "id": "practice-7",
      "kind": "practice",
      "title": "Inventory Transactions",
      "category": "Practice",
      "lesson": 7,
      "summary": "Check your understanding of Lesson 7.",
      "questions": [
        {
          "question": "What information is entered in the ‘Find Receiving Transactions’ form to search for the receiving transactions?",
          "options": [],
          "answer": "Nothing. Click on the Find button."
        }
      ],
      "pages": [
        281
      ],
      "sourceTitle": "Lesson 7 Knowledge Check",
      "children": [
        "topic-1-issue-end-item-out-of-inventory",
        "topic-2-receive-material-into-inventory",
        "topic-3-view-receiving-transactions",
        "topic-4-view-inventory-transactions-status-summary",
        "topic-5-generate-daily-game-plan-report"
      ]
    },
    {
      "id": "course-exercise",
      "kind": "reference",
      "title": "Course exercise",
      "category": "Practice",
      "summary": "Practice planning a visit, releasing work, and completing an end-item turn-in.",
      "blocks": [
        {
          "type": "notice",
          "text": "Use an assigned training scenario and an approved training environment. The source guide expects a scenario to be provided separately.",
          "html": "Use an assigned training scenario and an approved training environment. The source guide expects a scenario to be provided separately."
        },
        {
          "type": "paragraph",
          "text": "For this exercise, you will try to:",
          "html": "For this exercise, you will try to:"
        },
        {
          "type": "list",
          "text": "Search for a visit and plan the visit for maintenance work.",
          "html": "Search for a visit and plan the visit for maintenance work."
        },
        {
          "type": "list",
          "text": "Push the visit to production with jobs released status.",
          "html": "Push the visit to production with jobs released status."
        },
        {
          "type": "list",
          "text": "Process an end-item turn-in with D6 outbound interface.",
          "html": "Process an end-item turn-in with D6 outbound interface."
        }
      ],
      "pages": [
        285
      ],
      "sourceTitle": "Course exercise"
    }
  ],
  "navigation": [
    {
      "id": "getting-started",
      "title": "Getting started",
      "items": [
        "introduction",
        "starting-oracle",
        "vocabulary",
        "application-interface",
        "navigation",
        "toolbar",
        "keyboard-shortcuts"
      ]
    },
    {
      "id": "lesson-1",
      "title": "Requesting and Inducting Items",
      "number": 1,
      "overview": "lesson-1",
      "groups": [
        {
          "title": "Requesting an Item",
          "items": [
            "search-for-a-service-request",
            "create-service-order-with-or-without-end-item-type-of-engine",
            "view-service-order",
            "end-item-induction-management-of-items-subject-to-repair-mistr",
            "end-item-induction-non-mistr",
            "send-d7-wash-post-outbound-transaction-to-d035k-for-engine-item-type"
          ]
        },
        {
          "title": "Inducting an Item",
          "items": [
            "receive-end-item-into-inventory",
            "create-unit-configuration",
            "update-unit-configurations",
            "comprehensive-engine-management-system-creates-and-updates-the-unit-configuration",
            "create-maintenance-visits",
            "send-misidentified-item-notification-df1",
            "create-an-item-instance",
            "send-d7-wash-post-outbound-transaction-to-d035k",
            "auto-create-visit-process",
            "service-order-status-report"
          ]
        }
      ]
    },
    {
      "id": "lesson-2",
      "title": "Tracking Assets",
      "number": 2,
      "overview": "lesson-2",
      "groups": [
        {
          "title": "Tracking Assets",
          "items": [
            "search-and-add-mrs-on-visits",
            "search-visits-plan-visits-and-push-to-production-job-released",
            "search-work-order",
            "update-work-order",
            "sign-off-a-maintenance-requirement-mr",
            "close-visit"
          ]
        }
      ]
    },
    {
      "id": "lesson-3",
      "title": "Turn-In/Sellback",
      "number": 3,
      "overview": "lesson-3",
      "groups": [
        {
          "title": "Turning Item Back In/Selling",
          "items": [
            "end-item-turn-in",
            "send-d6-wash-post-outbound-transaction-to-d035k-for-engine-item-type",
            "send-d6-wash-post-outbound-transaction-to-d035k"
          ]
        },
        {
          "title": "Misidentified Item Turn-In",
          "items": [
            "b1-miscellaneous-receipt",
            "b2-misidentified-item-turn-in",
            "b3-miscellaneous-issue"
          ]
        }
      ]
    },
    {
      "id": "lesson-4",
      "title": "Configurations",
      "number": 4,
      "overview": "lesson-4",
      "groups": [
        {
          "title": "Viewing and Modifying Configurations",
          "items": [
            "view-master-configurations-report",
            "search-product"
          ]
        }
      ]
    },
    {
      "id": "lesson-5",
      "title": "Visits",
      "number": 5,
      "overview": "lesson-5",
      "groups": [
        {
          "title": "Visits",
          "items": [
            "update-visit"
          ]
        }
      ]
    },
    {
      "id": "lesson-6",
      "title": "Work Orders",
      "number": 6,
      "overview": "lesson-6",
      "groups": [
        {
          "title": "Create and Update a Non-Routine Work Order from an Existing Non-Routine Work Order",
          "items": [
            "how-to-create-a-non-routine-work-order-from-existing-non-routine-work-order"
          ]
        },
        {
          "title": "Issue Material to Work Orders",
          "items": [
            "search-materials-from-work-orders",
            "update-materials-required-for-work-orders",
            "manage-work-order-material-demand",
            "view-and-manage-wip-material-transactions"
          ]
        },
        {
          "title": "",
          "items": [
            "return-material",
            "topic-4-how-to-close-operations-and-work-orders",
            "topic-5-how-to-generate-a-maintenance-identifier-report-from-concurrent-manager",
            "topic-6-how-to-generate-a-maintenance-identifier-report-from-the-visit-work-package-page"
          ]
        }
      ]
    },
    {
      "id": "lesson-7",
      "title": "Inventory Transactions",
      "number": 7,
      "overview": "lesson-7",
      "groups": [
        {
          "title": "",
          "items": [
            "topic-1-issue-end-item-out-of-inventory",
            "topic-2-receive-material-into-inventory",
            "topic-3-view-receiving-transactions",
            "topic-4-view-inventory-transactions-status-summary",
            "topic-5-generate-daily-game-plan-report"
          ]
        }
      ]
    },
    {
      "id": "lesson-8",
      "title": "Production Execution Workbench",
      "number": 8,
      "overview": "lesson-8",
      "groups": []
    },
    {
      "id": "practice",
      "title": "Practice",
      "items": [
        "practice-1",
        "practice-2",
        "practice-3",
        "practice-4",
        "practice-5",
        "practice-6",
        "practice-7",
        "course-exercise"
      ]
    },
    {
      "id": "reference",
      "title": "Reference",
      "items": [
        "glossary",
        "job-aids"
      ]
    }
  ],
  "stats": {
    "lessons": 8,
    "procedures": 45,
    "steps": 423,
    "screenshots": 431,
    "pages": 290
  }
};
