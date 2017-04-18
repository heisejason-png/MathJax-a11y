MathJax.Hub.Register.StartupHook("Sre Ready",function(){var a,b,c=MathJax.Hub.config.menuSettings,d={};MathJax.Hub.Register.StartupHook("MathEvents Ready",function(){a=MathJax.Extension.MathEvents.Event.False,b=MathJax.Extension.MathEvents.Event.KEY});var e=MathJax.Extension.explorer={version:"1.1.1",dependents:[],default:{walker:"syntactic",highlight:"none",background:"blue",foreground:"black",speech:!0,generation:"lazy",subtitle:!1,ruleset:"mathspeak-default"},eagerComplexity:80,prefix:"Assistive-",hook:null,oldrules:null,addMenuOption:function(a,b){c[e.prefix+a]=b},addDefaults:function(){for(var a,b=MathJax.Hub.CombineConfig("explorer",e.default),d=Object.keys(b),f=0;a=d[f];f++)void 0===c[e.prefix+a]&&e.addMenuOption(a,b[a]);e.setSpeechOption(),g.Reset()},setOption:function(a,b){c[e.prefix+a]!==b&&(e.addMenuOption(a,b),g.Reset())},getOption:function(a){return c[e.prefix+a]},speechOption:function(a){e.oldrules!==a.value&&(e.setSpeechOption(),g.Regenerate())},setSpeechOption:function(){var a=c[e.prefix+"ruleset"],b=a.split("-");sre.System.getInstance().setupEngine({domain:e.Domain(b[0]),style:b[1],rules:e.RuleSet(b[0])}),e.oldrules=a},Domain:function(a){switch(a){case"chromevox":return"default";case"mathspeak":default:return"mathspeak"}},RuleSet:function(a){switch(a){case"chromevox":return["AbstractionRules","SemanticTreeRules"];case"mathspeak":default:return["AbstractionRules","MathspeakRules"]}},hook:null,Enable:function(a,b){c.explorer=!0,b&&(d.explorer=!0),MathJax.Extension.collapsible.Enable(!1,b),MathJax.Extension.AssistiveMML&&(MathJax.Extension.AssistiveMML.config.disabled=!0,c.assistiveMML=!1,b&&(d.assistiveMML=!1)),this.DisableMenus(!1),this.hook||(this.hook=MathJax.Hub.Register.MessageHook("New Math",["Register",this.Explorer])),a&&MathJax.Hub.Queue(["Reprocess",MathJax.Hub])},Disable:function(a,b){c.explorer=!1,b&&(d.explorer=!1),this.DisableMenus(!0),this.hook&&(MathJax.Hub.UnRegister.MessageHook(this.hook),this.hook=null);for(var e=this.dependents.length-1;e>=0;e--){var f=this.dependents[e];f.Disable&&f.Disable(!1,b)}},DisableMenus:function(a){if(MathJax.Menu){var b=MathJax.Menu.menu.FindId("Accessibility","Explorer");if(b){b=b.submenu;for(var d,f=b.items,g=2;d=f[g];g++)d.disabled=a;a||!b.FindId("SpeechOutput")||c[e.prefix+"speech"]||(b.FindId("Subtitles").disabled=!0,b.FindId("Generation").disabled=!0)}}},Dependent:function(a){this.dependents.push(a)}},f=MathJax.Object.Subclass({div:null,inner:null,Init:function(){this.div=f.Create("assertive"),this.inner=MathJax.HTML.addElement(this.div,"div")},Add:function(){f.added||(document.body.appendChild(this.div),f.added=!0)},Show:function(a,b){this.div.classList.add("MJX_LiveRegion_Show");var c=a.getBoundingClientRect(),d=c.bottom+10+window.pageYOffset,e=c.left+window.pageXOffset;this.div.style.top=d+"px",this.div.style.left=e+"px";var f=b.colorString();this.inner.style.backgroundColor=f.background,this.inner.style.color=f.foreground},Hide:function(a){this.div.classList.remove("MJX_LiveRegion_Show")},Clear:function(){this.Update(""),this.inner.style.top="",this.inner.style.backgroundColor=""},Update:function(a){e.getOption("speech")&&f.Update(this.inner,a)}},{ANNOUNCE:"Navigatable Math in page. Explore with shift space and arrow keys. Expand or collapse elements hitting enter.",announced:!1,added:!1,styles:{".MJX_LiveRegion":{position:"absolute",top:"0",height:"1px",width:"1px",padding:"1px",overflow:"hidden"},".MJX_LiveRegion_Show":{top:"0",position:"absolute",width:"auto",height:"auto",padding:"0px 0px",opacity:1,"z-index":"202",left:0,right:0,margin:"0 auto","background-color":"white","box-shadow":"0px 10px 20px #888",border:"2px solid #CCCCCC"}},Create:function(a){var b=MathJax.HTML.Element("div",{className:"MJX_LiveRegion"});return b.setAttribute("aria-live",a),b},Update:MathJax.Hub.Browser.isPC?function(a,b){a.textContent="",setTimeout(function(){a.textContent=b},100)}:function(a,b){a.textContent="",a.textContent=b},Announce:function(){if(e.getOption("speech")){f.announced=!0,MathJax.Ajax.Styles(f.styles);var a=f.Create("polite");document.body.appendChild(a),f.Update(a,f.ANNOUNCE),setTimeout(function(){document.body.removeChild(a)},1e3)}}});MathJax.Extension.explorer.LiveRegion=f;var g=MathJax.Extension.explorer.Explorer={liveRegion:f(),walker:null,highlighter:null,hoverer:null,flamer:null,speechDiv:null,earconFile:MathJax.Ajax.config.path.a11y+"/invalid_keypress"+(-1!==["Firefox","Chrome","Opera"].indexOf(MathJax.Hub.Browser.name)?".ogg":".mp3"),expanded:!1,focusoutEvent:MathJax.Hub.Browser.isFirefox?"blur":"focusout",focusinEvent:"focus",ignoreFocusOut:!1,jaxCache:{},messageID:null,Reset:function(){g.FlameEnriched()},Register:function(a){if(e.hook){var b=document.getElementById(a[1]);if(b&&b.id){var c=MathJax.Hub.getJaxFor(b.id);c&&c.enriched&&(g.StateChange(b.id,c),g.liveRegion.Add(),g.AddEvent(b))}}},StateChange:function(a,b){g.GetHighlighter(.2);var c=g.jaxCache[a];c&&c===b.root||(c&&g.highlighter.resetState(a+"-Frame"),g.jaxCache[a]=b.root)},AddAria:function(a){a.setAttribute("role","application"),a.setAttribute("aria-label","Math")},AddHook:function(a){g.RemoveHook(),g.hook=MathJax.Hub.Register.MessageHook("End Math",function(b){var c=b[1].id+"-Frame",d=document.getElementById(c);a&&c===g.expanded&&(g.ActivateWalker(d,a),d.focus(),g.expanded=!1)})},RemoveHook:function(){g.hook&&(MathJax.Hub.UnRegister.MessageHook(g.hook),g.hook=null)},AddMessage:function(){return MathJax.Message.Set("Generating Speech Output")},RemoveMessage:function(a){a&&MathJax.Message.Clear(a)},AddEvent:function(a){var b=a.id+"-Frame",c=a.previousSibling;if(c){var d=c.id!==b?c.firstElementChild:c;g.AddAria(d),g.AddMouseEvents(d),"MathJax_MathML"===d.className&&(d=d.firstElementChild),d&&(d.onkeydown=g.Keydown,g.Flame(d),d.addEventListener(g.focusinEvent,function(a){e.hook&&(f.announced||f.Announce())}),d.addEventListener(g.focusoutEvent,function(a){if(e.hook)return g.ignoreFocusOut&&(g.ignoreFocusOut=!1,"enter"===g.walker.moved)?void a.target.focus():void(g.walker&&g.DeactivateWalker())}),e.getOption("speech")&&g.AddSpeech(d))}},AddSpeech:function(a){var b=a.id,c=MathJax.Hub.getJaxFor(b),d=c.root.toMathML();if(a.getAttribute("haslabel")||g.AddMathLabel(d,b),!a.getAttribute("hasspeech"))switch(e.getOption("generation")){case"eager":g.AddSpeechEager(d,b);break;case"mixed":a.querySelectorAll("[data-semantic-complexity]").length>=e.eagerComplexity&&g.AddSpeechEager(d,b)}},AddSpeechLazy:function(a){var b=new sre.TreeSpeechGenerator;b.setRebuilt(g.walker.rebuilt),b.getSpeech(g.walker.rootNode,g.walker.xml),a.setAttribute("hasspeech","true")},AddSpeechEager:function(a,b){g.MakeSpeechTask(a,b,sre.TreeSpeechGenerator,function(a,b){a.setAttribute("hasspeech","true")},5)},AddMathLabel:function(a,b){g.MakeSpeechTask(a,b,sre.SummarySpeechGenerator,function(a,b){a.setAttribute("haslabel","true"),a.setAttribute("aria-label",b)},5)},MakeSpeechTask:function(a,b,c,d,e){var f=g.AddMessage();setTimeout(function(){var e=new c,h=document.getElementById(b),i=new sre.DummyWalker(h,e,g.highlighter,a),j=i.speech();j&&d(h,j),g.RemoveMessage(f)},e)},Keydown:function(c){if(c.keyCode===b.ESCAPE){if(!g.walker)return;return g.RemoveHook(),g.DeactivateWalker(),void a(c)}if(g.walker&&g.walker.isActive()){var d=g.walker.move(c.keyCode);if(null===d)return;if(d){if("expand"===g.walker.moved){if(g.expanded=g.walker.node.id,MathJax.Hub.Browser.isEdge)return g.ignoreFocusOut=!0,void g.DeactivateWalker();if(MathJax.Hub.Browser.isFirefox||MathJax.Hub.Browser.isMSIE)return void g.DeactivateWalker()}g.liveRegion.Update(g.walker.speech()),g.Highlight()}else g.PlayEarcon();return void a(c)}var f=c.target;if(c.keyCode===b.SPACE){if(c.shiftKey&&e.hook){var h=MathJax.Hub.getJaxFor(f);g.ActivateWalker(f,h),g.AddHook(h)}else MathJax.Extension.MathEvents.Event.ContextMenu(c,f);return void a(c)}},GetHighlighter:function(a){g.highlighter=sre.HighlighterFactory.highlighter({color:e.getOption("background"),alpha:a},{color:e.getOption("foreground"),alpha:1},{renderer:MathJax.Hub.outputJax["jax/mml"][0].id,browser:MathJax.Hub.Browser.name})},AddMouseEvents:function(a){sre.HighlighterFactory.addEvents(a,{mouseover:g.MouseOver,mouseout:g.MouseOut},{renderer:MathJax.Hub.outputJax["jax/mml"][0].id,browser:MathJax.Hub.Browser.name})},MouseOver:function(b){if("none"!==e.getOption("highlight")){if("hover"===e.getOption("highlight")){var c=b.currentTarget;g.GetHighlighter(.1),g.highlighter.highlight([c]),g.hoverer=!0}a(b)}},MouseOut:function(b){return g.hoverer&&(g.highlighter.unhighlight(),g.hoverer=!1),a(b)},Flame:function(a){if("flame"===e.getOption("highlight"))return g.GetHighlighter(.05),g.highlighter.highlightAll(a),void(g.flamer=!0)},UnFlame:function(){g.flamer&&(g.highlighter.unhighlightAll(),g.flamer=null)},FlameEnriched:function(){g.UnFlame();for(var a,b=0,c=MathJax.Hub.getAllJax();a=c[b];b++)g.Flame(a.SourceElement().previousSibling)},Walkers:{syntactic:sre.SyntaxWalker,semantic:sre.SemanticWalker,none:sre.DummyWalker},ActivateWalker:function(a,b){var c=e.getOption("speech"),d=g.Walkers[e.getOption("walker")]||g.Walkers.none,f=c?new sre.DirectSpeechGenerator:new sre.DummySpeechGenerator;g.GetHighlighter(.2),g.walker=new d(a,f,g.highlighter,b.root.toMathML()),c&&!a.getAttribute("hasspeech")&&g.AddSpeechLazy(a),g.walker.activate(),c&&(e.getOption("subtitle")&&g.liveRegion.Show(a,g.highlighter),g.liveRegion.Update(g.walker.speech())),g.Highlight(),g.ignoreFocusOut&&setTimeout(function(){g.ignoreFocusOut=!1},500)},DeactivateWalker:function(){g.liveRegion.Clear(),g.liveRegion.Hide(),g.Unhighlight(),g.currentHighlight=null,g.walker.deactivate(),g.walker=null},Highlight:function(){g.Unhighlight(),g.highlighter.highlight(g.walker.getFocus().getNodes())},Unhighlight:function(){g.highlighter.unhighlight()},PlayEarcon:function(){new Audio(g.earconFile).play()},SpeechOutput:function(){g.Reset(),["Subtitles","Generation"].forEach(function(a){var b=MathJax.Menu.menu.FindId("Accessibility","Explorer",a);b&&(b.disabled=!b.disabled)}),g.Regenerate()},Regenerate:function(){for(var a,b=0,c=MathJax.Hub.getAllJax();a=c[b];b++){var d=document.getElementById(a.inputID+"-Frame");d&&(d.removeAttribute("hasSpeech"),g.AddSpeech(d))}},Startup:function(){var a=MathJax.Extension.collapsible;a&&a.Dependent(e),e.addDefaults()}};MathJax.Hub.Register.StartupHook("End Extensions",function(){e[!1===c.explorer?"Disable":"Enable"](),MathJax.Hub.Startup.signal.Post("Explorer Ready"),MathJax.Hub.Register.StartupHook("MathMenu Ready",function(){d=MathJax.Menu.cookie;var a,b=function(a){e[c.explorer?"Enable":"Disable"](!0,!0),MathJax.Menu.saveCookie()},f=MathJax.Menu.ITEM,h=MathJax.Menu.menu,i={action:g.Reset},j={action:e.speechOption},k=f.SUBMENU(["Explorer","Explorer"],f.CHECKBOX(["Active","Active"],"explorer",{action:b}),f.RULE(),f.SUBMENU(["Walker","Walker"],f.RADIO(["nowalker","No walker"],"Assistive-walker",{value:"none"}),f.RADIO(["syntactic","Syntax walker"],"Assistive-walker"),f.RADIO(["semantic","Semantic walker"],"Assistive-walker")),f.SUBMENU(["Highlight","Highlight"],f.RADIO(["none","None"],"Assistive-highlight",i),f.RADIO(["hover","Hover"],"Assistive-highlight",i),f.RADIO(["flame","Flame"],"Assistive-highlight",i)),f.SUBMENU(["Background","Background"],f.RADIO(["blue","Blue"],"Assistive-background",i),f.RADIO(["red","Red"],"Assistive-background",i),f.RADIO(["green","Green"],"Assistive-background",i),f.RADIO(["yellow","Yellow"],"Assistive-background",i),f.RADIO(["cyan","Cyan"],"Assistive-background",i),f.RADIO(["magenta","Magenta"],"Assistive-background",i),f.RADIO(["white","White"],"Assistive-background",i),f.RADIO(["black","Black"],"Assistive-background",i)),f.SUBMENU(["Foreground","Foreground"],f.RADIO(["black","Black"],"Assistive-foreground",i),f.RADIO(["white","White"],"Assistive-foreground",i),f.RADIO(["magenta","Magenta"],"Assistive-foreground",i),f.RADIO(["cyan","Cyan"],"Assistive-foreground",i),f.RADIO(["yellow","Yellow"],"Assistive-foreground",i),f.RADIO(["green","Green"],"Assistive-foreground",i),f.RADIO(["red","Red"],"Assistive-foreground",i),f.RADIO(["blue","Blue"],"Assistive-foreground",i)),f.RULE(),f.CHECKBOX(["SpeechOutput","Speech Output"],"Assistive-speech",{action:g.SpeechOutput}),f.CHECKBOX(["Subtitles","Subtitles"],"Assistive-subtitle",{disabled:!c["Assistive-speech"]}),f.SUBMENU(["Generation","Generation"],{disabled:!c["Assistive-speech"]},f.RADIO(["eager","Eager"],"Assistive-generation",{action:g.Regenerate}),f.RADIO(["mixed","Mixed"],"Assistive-generation",{action:g.Regenerate}),f.RADIO(["lazy","Lazy"],"Assistive-generation",{action:g.Regenerate})),f.RULE(),f.SUBMENU(["Mathspeak","Mathspeak Rules"],f.RADIO(["mathspeak-default","Verbose"],"Assistive-ruleset",j),f.RADIO(["mathspeak-brief","Brief"],"Assistive-ruleset",j),f.RADIO(["mathspeak-sbrief","Superbrief"],"Assistive-ruleset",j)),f.SUBMENU(["Chromevox","ChromeVox Rules"],f.RADIO(["chromevox-default","Verbose"],"Assistive-ruleset",j),f.RADIO(["chromevox-short","Short"],"Assistive-ruleset",j),f.RADIO(["chromevox-alternative","Alternative"],"Assistive-ruleset",j))),l=(h.FindId("Accessibility")||{}).submenu;l?(a=l.IndexOfId("Explorer"),null!==a?l.items[a]=k:(a=l.IndexOfId("CollapsibleMath"),l.items.splice(a+1,0,k))):(a=h.IndexOfId("CollapsibleMath"),h.items.splice(a+1,0,k)),c.explorer||e.DisableMenus(!0)},20)},20)}),MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){MathJax.Hub.Config({SVG:{addMMLclasses:!0}});var a=MathJax.OutputJax.SVG;if(parseFloat(a.version)<2.7){var b=a.getJaxFromMath;a.Augment({getJaxFromMath:function(a){return a.parentNode.className.match(/MathJax_SVG_Display/)&&(a=a.parentNode),b.call(this,a)}})}}),MathJax.Ajax.config.path.a11y||(MathJax.Ajax.config.path.a11y=MathJax.Hub.config.root+"/extensions/a11y"),MathJax.Ajax.Require("[a11y]/collapsible.js"),MathJax.Hub.Register.StartupHook("Collapsible Ready",function(){MathJax.Extension.explorer.Explorer.Startup(),MathJax.Ajax.loadComplete("[a11y]/explorer.js")});