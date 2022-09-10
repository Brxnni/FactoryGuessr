import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute } from "../../chunks/index.js";
const LinedHeading_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: 'h1.svelte-wtppks,h2.svelte-wtppks,h3.svelte-wtppks{color:inherit;font-style:italic;overflow:hidden;text-align:center;margin:50px 0 20px 0}h1.svelte-wtppks:before,h2.svelte-wtppks:before,h3.svelte-wtppks:before,h1.svelte-wtppks:after,h2.svelte-wtppks:after,h3.svelte-wtppks:after{background-color:white;content:"";display:inline-block;height:1px;position:relative;vertical-align:middle;width:50%}h1.svelte-wtppks:before,h2.svelte-wtppks:before,h3.svelte-wtppks:before{right:0.5em;margin-left:-50%}h1.svelte-wtppks:after,h2.svelte-wtppks:after,h3.svelte-wtppks:after{left:0.5em;margin-right:-50%}',
  map: null
};
const LinedHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { type } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$6);
  return `${type === "h1" ? `<h1 class="${"svelte-wtppks"}"><span>${escape(text)}</span></h1>` : `${type === "h2" ? `<h2 class="${"svelte-wtppks"}"><span>${escape(text)}</span></h2>` : `${type === "h3" ? `<h3 class="${"svelte-wtppks"}"><span>${escape(text)}</span></h3>` : ``}`}`}`;
});
const Centered_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "div.svelte-1hpznt8{margin-left:auto;margin-right:auto;text-align:center}",
  map: null
};
const Centered = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "80%" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  $$result.css.add(css$5);
  return `<div style="${"width: " + escape(width, true) + ";"}" class="${"svelte-1hpznt8"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const SpanBlock_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "div.spanblock.svelte-ed0z3m.svelte-ed0z3m{display:inline-block;margin:15px;min-width:20%}div.spanblock.svelte-ed0z3m>span.svelte-ed0z3m{font-weight:bold;margin:10px;display:block}",
  map: null
};
const SpanBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$4);
  return `<div class="${"spanblock svelte-ed0z3m"}"><span class="${"svelte-ed0z3m"}">${escape(text)}</span>
	${slots.default ? slots.default({}) : ``}</div>`;
});
const GameSetting_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: 'label.switch.svelte-w1jb4r.svelte-w1jb4r{position:relative;display:inline-block;width:60px;height:34px}label.switch.svelte-w1jb4r input.svelte-w1jb4r{opacity:0}span.switchslider.svelte-w1jb4r.svelte-w1jb4r{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#8cf022;background-color:#D3D3D3;-webkit-transition:.4s;transition:.4s;border-radius:34px}span.switchslider.svelte-w1jb4r.svelte-w1jb4r:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:white;-webkit-transition:.4s;transition:.4s;border-radius:50%}input.svelte-w1jb4r:checked+.switchslider.svelte-w1jb4r{background-color:#8cf022}input.svelte-w1jb4r:focus+.switchslider.svelte-w1jb4r{box-shadow:0 0 1px #8cf022}input.svelte-w1jb4r:checked+.switchslider.svelte-w1jb4r:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}label.slider.svelte-w1jb4r.svelte-w1jb4r{width:100%}label.slider.svelte-w1jb4r>input.svelte-w1jb4r{-webkit-appearance:none;appearance:none;width:100%;height:12.5px;background:#d3d3d3;outline:none;opacity:1;-webkit-transition:.2s;transition:opacity .2s;border-radius:10px}label.slider.svelte-w1jb4r>input.svelte-w1jb4r::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:25px;height:25px;background:#8cf022;cursor:pointer;border-radius:50%}label.slider.svelte-w1jb4r>input.svelte-w1jb4r::-moz-range-thumb{width:25px;height:25px;background:#8cf022;cursor:pointer;border-radius:50%}',
  map: null
};
const GameSetting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { id } = $$props;
  function handleText() {
    return "Not implemented";
  }
  switch (id) {
    case "difficulty":
      handleText = function(val) {
        return val ? "Easy Mode" : "Hard Mode";
      };
      break;
    case "zoom":
      handleText = function(val) {
        return val ? "Zoom" : "No Zoom";
      };
      break;
    case "pan":
      handleText = function(val) {
        return val ? "Pan" : "No Pan";
      };
      break;
    case "timelimit":
      handleText = function(val) {
        if (val === 0)
          return "Time Limit: None";
        else
          return `Time Limit: ${val * 5} Sec`;
      };
      break;
  }
  let inputValue;
  if (type === "switch")
    inputValue = true;
  else if (type === "slider")
    inputValue = 0;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$3);
  return `${validate_component(SpanBlock, "SpanBlock").$$render($$result, { text: handleText(inputValue) }, {}, {
    default: () => {
      return `${type === "switch" ? `<label class="${"switch svelte-w1jb4r"}"><input type="${"checkbox"}" class="${"svelte-w1jb4r"}"${add_attribute("checked", inputValue, 1)}>
			<span class="${"switchslider svelte-w1jb4r"}"></span></label>` : `${type === "slider" ? `<label class="${"slider svelte-w1jb4r"}"><input type="${"range"}" min="${"0"}" max="${"12"}" class="${"svelte-w1jb4r"}"${add_attribute("value", inputValue, 0)}></label>` : ``}`}`;
    }
  })}`;
});
const ImageBlock_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "img.svelte-fu8ds1{width:40% !important}",
  map: null
};
const ImageBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { imageSrc } = $$props;
  let { altText } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.imageSrc === void 0 && $$bindings.imageSrc && imageSrc !== void 0)
    $$bindings.imageSrc(imageSrc);
  if ($$props.altText === void 0 && $$bindings.altText && altText !== void 0)
    $$bindings.altText(altText);
  $$result.css.add(css$2);
  return `${validate_component(SpanBlock, "SpanBlock").$$render($$result, { text }, {}, {
    default: () => {
      return `<img${add_attribute("src", imageSrc, 0)}${add_attribute("alt", altText, 0)} class="${"svelte-fu8ds1"}">`;
    }
  })}`;
});
const Credit_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.credit.svelte-1ts1a37.svelte-1ts1a37{text-align:center;margin-bottom:15px}div.credit.svelte-1ts1a37 span.svelte-1ts1a37{display:block}a.svelte-1ts1a37.svelte-1ts1a37:not(:hover){text-decoration:none}span.n1.svelte-1ts1a37.svelte-1ts1a37{font-size:0.8em !important}span.n2.svelte-1ts1a37.svelte-1ts1a37{font-size:1.3em !important;font-weight:bold;margin:5px 0 5px 0 }span.n3.svelte-1ts1a37.svelte-1ts1a37{font-size:1.1em !important}",
  map: null
};
const Credit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text1 } = $$props;
  let { text2 } = $$props;
  let { text3 } = $$props;
  let { href1 = "" } = $$props;
  let { href2 = "" } = $$props;
  let { href3 = "" } = $$props;
  if ($$props.text1 === void 0 && $$bindings.text1 && text1 !== void 0)
    $$bindings.text1(text1);
  if ($$props.text2 === void 0 && $$bindings.text2 && text2 !== void 0)
    $$bindings.text2(text2);
  if ($$props.text3 === void 0 && $$bindings.text3 && text3 !== void 0)
    $$bindings.text3(text3);
  if ($$props.href1 === void 0 && $$bindings.href1 && href1 !== void 0)
    $$bindings.href1(href1);
  if ($$props.href2 === void 0 && $$bindings.href2 && href2 !== void 0)
    $$bindings.href2(href2);
  if ($$props.href3 === void 0 && $$bindings.href3 && href3 !== void 0)
    $$bindings.href3(href3);
  $$result.css.add(css$1);
  return `<div class="${"credit svelte-1ts1a37"}">${href1 ? `<a${add_attribute("href", href1, 0)} class="${"svelte-1ts1a37"}"><span class="${"n1 svelte-1ts1a37"}">${escape(text1)}:</span></a>` : `<span class="${"n1 svelte-1ts1a37"}">${escape(text1)}:</span>`}

	${href2 ? `<a${add_attribute("href", href2, 0)} class="${"svelte-1ts1a37"}"><span class="${"n2 svelte-1ts1a37"}">${escape(text2)}</span></a>` : `<span class="${"n2 svelte-1ts1a37"}">${escape(text2)}</span>`}

	${href3 ? `<a${add_attribute("href", href3, 0)} class="${"svelte-1ts1a37"}"><span class="${"n3 svelte-1ts1a37"}">by ${escape(text3)}.</span></a>` : `<span class="${"n3 svelte-1ts1a37"}">by ${escape(text3)}.</span>`}</div>`;
});
const ShortHR_svelte_svelte_type_style_lang = "";
const css = {
  code: "hr.svelte-vi9bc2{height:1px;width:40%}",
  map: null
};
const ShortHR = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<hr class="${"svelte-vi9bc2"}">`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<head><title>FactoryGuessr</title>
	<meta name="${"description"}" content="${"FactoryGuessr is a geographical guessing game made for the game Satisfactory."}"></head>



${validate_component(Centered, "Centered").$$render($$result, { width: "80vw" }, {}, {
    default: () => {
      return `<h1><i><u>FactoryGuessr</u></i></h1>
	<p>Like GeoGuessr, but for Satisfactory! <br>
		Explore the beautiful landscape from Update 6 and test your knowledge!
	</p>
	 
	${validate_component(Centered, "Centered").$$render($$result, { width: "60vw" }, {}, {
        default: () => {
          return `${validate_component(LinedHeading, "LinedHeading").$$render($$result, { type: "h3", text: "Game Settings" }, {}, {})}

		<div><span tabindex="${"0"}">${validate_component(GameSetting, "GameSetting").$$render($$result, { type: "switch", id: "difficulty" }, {}, {})}</span>
			<span tabindex="${"0"}">${validate_component(GameSetting, "GameSetting").$$render($$result, { type: "switch", id: "zoom" }, {}, {})}</span>
			<span tabindex="${"0"}">${validate_component(GameSetting, "GameSetting").$$render($$result, { type: "switch", id: "pan" }, {}, {})}</span>
			<span tabindex="${"0"}">${validate_component(GameSetting, "GameSetting").$$render($$result, { type: "slider", id: "timelimit" }, {}, {})}</span></div>

		${validate_component(LinedHeading, "LinedHeading").$$render($$result, { type: "h3", text: "Contact" }, {}, {})}

		<div><a href="${"https://github.com/Brxnni"}" tabindex="${"0"}">${validate_component(ImageBlock, "ImageBlock").$$render(
            $$result,
            {
              text: "GitHub Repo",
              altText: "GitHub Logo",
              imageSrc: "./github.svg"
            },
            {},
            {}
          )}</a>
			<span tabindex="${"0"}">${validate_component(ImageBlock, "ImageBlock").$$render(
            $$result,
            {
              text: "Discord: Brxnni#0553",
              altText: "Discord Logo",
              imageSrc: "./discord.svg"
            },
            {},
            {}
          )}</span></div>

		${validate_component(LinedHeading, "LinedHeading").$$render($$result, { type: "h3", text: "Credits" }, {}, {})}
		<p style="${"margin-bottom: 50px;"}">A massive thanks to all the people who helped make this game possible!
			Here is a list of all things I used to make this game:
		</p>

		<div>${validate_component(Credit, "Credit").$$render(
            $$result,
            {
              text1: "Amazing Game",
              text2: "Satisfactory",
              href2: "https://www.satisfactorygame.com",
              text3: "Coffee Stain Studios",
              href3: "https://www.coffeestainstudios.com"
            },
            {},
            {}
          )}
			${validate_component(ShortHR, "ShortHR").$$render($$result, {}, {}, {})}
			${validate_component(Credit, "Credit").$$render(
            $$result,
            {
              text1: "360\xB0 In-game Camera Mod",
              text2: "Pano360Cam",
              href2: "https://ficsit.app/mod/Pano360Cam",
              text3: "PepiHax",
              href3: "https://github.com/PepiHax"
            },
            {},
            {}
          )}
			${validate_component(ShortHR, "ShortHR").$$render($$result, {}, {}, {})}
			${validate_component(Credit, "Credit").$$render(
            $$result,
            {
              text1: "3D Panorama Viewer",
              text2: "Pannellum",
              href2: "https://pannellum.org",
              text3: "Matthew Petroff",
              href3: "https://mpetroff.net"
            },
            {},
            {}
          )}
			${validate_component(ShortHR, "ShortHR").$$render($$result, {}, {}, {})}
			${validate_component(Credit, "Credit").$$render(
            $$result,
            {
              text1: "Minimap",
              text2: "LeafletJS",
              href2: "https://leafletjs.com",
              text3: "The Leaflet Team",
              href3: "https://github.com/Leaflet/Leaflet/graphs/contributors"
            },
            {},
            {}
          )}
			${validate_component(ShortHR, "ShortHR").$$render($$result, {}, {}, {})}
			${validate_component(Credit, "Credit").$$render(
            $$result,
            {
              text1: "Amazing JavaScript Framework",
              text2: "Svelte",
              href2: "https://svelte.dev",
              text3: "Rich Harris & The Svelte Contributors",
              href3: "https://github.com/sveltejs/svelte/graphs/contributors"
            },
            {},
            {}
          )}</div>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
