var levels = [
    {
      helpTitle : "Select elements by their type",
      selectorName : "Type Selector",
      doThis : "Select the plates",
      selector : "//plate",
      syntax : "//A",
      help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
      examples : [
        '<strong>//div</strong> selects all <tag>div</tag> elements.',
        '<strong>//p</strong> selects all <tag>p</tag> elements.',
        ],
        boardMarkup: `
        <plate/>
        <plate/>
        `
    },
    {
      doThis : "Select the bento boxes",
      selector : "//bento",
      syntax : "//A",
      helpTitle : "Select elements by their type",
      selectorName : "Type Selector",
      help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
      examples : [
        '<strong>//div</strong> will select all <tag>div</tag> elements.',
        '<strong>//p</strong> will select all <tag>p</tag> elements.',
        ],
        boardMarkup: `
        <bento/>
        <plate/>
        <bento/>
        `
    },
    {
      doThis : "Select the fancy plate",
      selector : "//*[@id='fancy']",
      selectorName: "Attribute Selector",
      helpTitle: "Select elements with an Attribute",
      syntax: "//*[@id='Element ID']",
      help : 'Selects the element with the <strong>id</strong> attribute. You can also combine the ID selector with the type selector. Works on all attributes E.g. <strong>class</strong>, <strong>name</strong>, <strong>placeholder</strong>',
      examples : [
        '<strong>//*[@id="Element ID"]</strong> will select any element with <strong>id="cool"</strong>',
        '<strong>//ul[@id="long"]</strong> will select <strong>&lt;ul id="long"&gt;</strong>'
      ],
      boardMarkup : `
      <plate id="fancy"/>
      <plate/>
      <bento/>
      `
    },
    {
      helpTitle: "Select an element inside another element",
      selectorName : "Descendant Selector",
      doThis : "Select the apple on the plate",
      selector : "//plate/apple",
      syntax: "//A/B",
  
      help : "Selects all <strong>B</strong> inside of <strong>A</strong>. Here <strong>B</strong> is the descendant element, meaning an element that is inside of another element.",
      examples : [
        '<strong>//p/strong</strong> will select all <strong>&lt;strong&gt;</strong> that are descendants of any <strong>&lt;p&gt;</strong>',
        '<strong>//*[@id="fancy"]/span</strong> will select any <strong>&lt;span&gt;</strong> that is a descendant of any element with  <strong>id="fancy"</strong>',
      ],
      boardMarkup : `
      <bento/>
      <plate>
        <apple/>
      </plate>
      <apple/>
      `
    },
    {
      doThis : "Select the pickle on the fancy plate",
      selector : "//*[@id='fancy']/pickle",
      helpTitle: "Combine the Descendant & ID Selectors",
      syntax: "//*[@id='id']/A",
      help : 'You can combine any selector with the descendent selector.',
      examples : [
        '<strong>//*[@id="cool"]/span</strong> will select all <strong>&lt;span&gt;</strong> elements that are inside of elements with <strong>id="cool"</strong>'
      ],
      boardMarkup : `
      <bento>
      <orange/>
      </bento>
      <plate id="fancy">
        <pickle/>
      </plate>
      <plate>
        <pickle/>
      </plate>
      `
    },
    {
      doThis : "Select the small apples",
      selector : "//*[contains(@class,'small')]",
      selectorName: "Class Selector",
      helpTitle: "Select elements by their class",
      syntax: "//*[contains(@Attribute,'value')]",
      help : 'The contains selector selects all elements with that attribute which contains given value. Elements can only have one ID, but may contain many classes.',
      examples : [
      '<strong>//*[contains(@class,"neato")]</strong> selects all elements with <strong>class="neato"</strong>'
      ],
      boardMarkup : `
      <apple/>
      <apple class="small"/>
      <plate>
        <apple class="small"/>
      </plate>
      <plate/>
      `
    },
    {
      doThis : "Select the small oranges",
      selector : "//orange[contains(@class,'small')]",
      helpTitle: "More specific Attribute Selector",
      syntax: "//A[contains(@Attribute,'value')]",
      help : 'You can be more specific with Selectors.',
      examples : [
        '<strong>//ul[contains(@class,"important")]</strong> will select all <strong>&lt;ul&gt;</strong> elements that have <strong>class="important stuff"</strong>',
        '<strong>//input[@placeholder="Name"]</strong> will select all elements with <strong>&lt;input&gt;</strong> that have <strong>placeholder="Name"</strong>'
      ],
      boardMarkup :`
      <apple/>
      <apple class="small"/>
      <bento>
        <orange class="small"/>
      </bento>
      <plate>
        <orange/>
      </plate>
      <plate>
        <orange class="small"/>
      </plate>`
    },
    {
      doThis : "Select the small oranges in the bentos",
      selector : "//bento/orange[contains(@class,'small')]",
      syntax: "Put your back into it!",
      helpTitle: "You can do it...",
      help : 'Combine what you learned in the last few levels to solve this one!',
      boardMarkup : `
      <bento>
        <orange/>
      </bento>
      <orange class="small"/>
      <bento>
        <orange class="small"/>
      </bento>
      <bento>
        <apple class="small"/>
      </bento>
      <bento>
        <orange class="small"/>
      </bento>
      `
    },
    {
      doThis : "Select all the plates and bentos",
  
      selector : "//plate|//bento",
      selectorName : "| Combinator",
      helpTitle: "Combine, selectors, with... |!",
      syntax : "//A|//B",
      help : '<strong>//A</strong> | <strong>//B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
      examples: [
      '<strong>//p| //*[@id="fun"]</strong> will select all <tag>p</tag> elements as well as all elements with <strong>id="fun"</strong>',
      '<strong>//a|//p|//div</strong> will select all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements'
      ],
      boardMarkup : `
      <pickle class="small"/>
      <pickle/>
      <plate>
        <pickle/>
      </plate>
      <bento>
        <pickle/>
      </bento>
      <plate>
        <pickle/>
      </plate>
      <pickle/>
      <pickle class="small"/>
      `
    },
    {
      doThis : "Select everything on a plate",
      selector : "//plate/*",
      syntax : "//A/*",
      helpTitle: "Universal Selector",
      help : 'This will select all elements inside of <strong>A</strong>.',
      examples : [
        '<strong>//p/*</strong> will select every element inside all <strong>&lt;p&gt;</strong> elements.',
        '<strong>//ul[@id="fancy"]/*</strong> will select every element inside all <strong>&lt;ul id="fancy"&gt;</strong> elements.'
      ],
      boardMarkup : `
      <apple/>
      <plate>
        <orange class="small" />
      </plate>
      <bento/>
      <bento>
        <orange/>
      </bento>
      <plate id="fancy"/>
      `
    },
    {
      doThis : "Select every apple that's next to a plate",
      selector : "//plate/following-sibling::apple",
      helpTitle: "Select an element that directly follows another element",
      selectorName: "Adjacent Sibling Selector",
      syntax : "//A/following-sibling::B",
      help : "This selects all <strong>B</strong> elements that directly follow <strong>A</strong>. Elements that follow one another are called siblings. They're on the same level, or depth. <br/><br/>In the HTML markup for this level, elements that have the same indentation are siblings.",
      examples : [
        '<strong>//p/following-sibling::div</strong> will select every element with <strong>&lt;div&gt;</strong> that directly follows a <tag>p</tag>',
        '<strong>//div//following-sibling::a</strong> will select every <tag>a</tag> element that directly follows a <tag>div</tag>'
      ],
      boardMarkup: `
      <plate id="fancy">
        <orange class="small"/>
      </plate>
      <plate>
        <pickle/>
      </plate>
      <apple class="small"/>
      <plate>
        <apple/>
      </plate>`
    },
    {
      selectorName: "Index Selector",
      helpTitle: "Select element at given index",
      syntax: "(A)[Index]",
      doThis : "Select the third pickle",
      selector : "(//pickle)[3]",
      help : "You can select a specific element given within a xpath result.",
      examples : [
        '<strong>(//a)[2]</strong> will select second <strong>A</strong>'
      ],
      boardMarkup : `
      <pickle/>
      <bento>
        <pickle class="small"/>
      </bento>  
      <pickle class="small">
      </pickle>
      <bento>
        <pickle/>
      </bento>  
      <bento>
        <pickle class="small"/>
      </bento>  
      `
    },
    {
      selectorName: "Child Selector",
      syntax: "//A/B",
      doThis : "Select the apple directly on a plate",
      selector : "//plate/apple",
      helpTitle: "Select direct children of an element",
      help : "You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. <br><br>Elements that are nested deeper than that are called descendant elements.",
      examples : [
        '<strong>A//B</strong> will select all <strong>B</strong> that are a direct children <strong>A</strong>'
      ],
      boardMarkup: `
      <plate>
        <bento>
          <apple/>
        </bento>
      </plate>
      <plate>
        <apple/>
      </plate>
      <plate/>
      <apple/>
      <apple class="small"/>
      `
    },
    {
      selectorName: "Last selector",
      helpTitle: "Select the last element inside of another element",
      doThis : "Select the big apple and the big orange",
      selector : "//plate/*[last()]",
      syntax: "last()",
      help : "You can use this selector to select an element that is the last child element inside of another element. <br><br>Pro Tip &rarr; In cases where there is only one element, that element counts as the first-child, only-child and last-child!",
      examples : [
        '<strong>(//div)[last()]</strong> selects the last <strong>&lt;div&gt;</strong> element.',
        '<strong>//div/*[last()]</strong> selects all the last elements within <strong>&lt;div&gt;</strong> elements.',
        ],
        boardMarkup : `
        <plate id="fancy">
          <apple class="small"/>
        </plate>
        <plate/>
        <plate>
          <orange class="small"/>
          <orange>
        </plate>
        <pickle class="small"/>`
    }
  ];