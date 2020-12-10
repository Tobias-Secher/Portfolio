export interface StyleModel {
    // **** 
    //  A
    // ****
    alignContent?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'initial' | 'inherit';
    alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
    alignSelf?: 'auto' | 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
    all?: 'initial' | 'inherit' | 'unset';
    /**
     * name duration timing-function delay iteration-count direction fill-mode play-state
     */
    animation?: string;
    /**
     *  time|initial|inherit
     */
    animationDelay?: string;
    animationDirection?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse' | 'initial' | 'inherit';
    /**
     * time|initial|inherit
     */
    animationDuration?: string;
    animationFillMode?: 'none' | 'forwards' | 'backwards' | 'both' | 'initial' | 'inherit';
    animationIterationCount?: 'number' | 'infinite' | 'initial' | 'inherit';
    /**
     * animation-name?: keyframename|none|initial|inherit
     */
    animationName?: string;
    animationPlayState?: 'paused' | 'running' | 'initial' | 'inherit';
    /**
     * linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|steps(int,start|end)|cubic-bezier(n,n,n,n)|initial|inherit
     */
    animationTimingFunction?: string;

    // **** 
    //  B
    // ****
    backfaceVisibility?: 'visible' | 'hidden' | 'initial' | 'inherit';
    /**
     * bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit
     */
    background?: string;
    backgroundAttachment?: 'scroll' | 'fixed' | 'local' | 'initial' | 'inherit';
    backgroundBlendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'saturation' | 'color' | 'luminosity';
    backgroundClip?: 'border-box' | 'padding-box' | 'content-box' | 'initial' | 'inherit';
    /**
     * color|transparent|initial|inherit;
     */
    backgroundColor?: string;
    /**
     * url|none|initial|inherit
     */
    backgroundImage?: string;
    backgroundOrigin?: 'padding-box' | 'border-box' | 'content-box' | 'initial' | 'inherit';
    backgroundPosition?: string;
    backgroundRepeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'initial' | 'inherit';
    /**
     * 'auto'|'length'|'cover'|'contain'|'initial'|'inherit'
     */
    backgroundSize?: string;
    /**
     * border-width border-style border-color|initial|inherit
     */
    border?: string;
    /**
     * border-width border-style border-color|initial|inherit
     */
    borderBottom?: string;
    /**
     * color|transparent|initial|inherit
     */
    borderBottomColor?: string;
    /**
     * length|% [length|%]|initial|inherit
     */
    borderBottomLeftRadius?: string;
    /**
     * length|% [length|%]|initial|inherit
     */
    borderBottomRightRadius?: string;
    borderBottomStyle?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'initial' | 'inherit';
    /**
     * medium|thin|thick|length|initial|inherit
     */
    borderBottomWidth?: string;
    borderCollapse?: 'separate' | 'collapse' | 'initial' | 'inherit';
    /**
     * color|transparent|initial|inherit
     */
    borderColor?: string;
    /**
     * source slice width outset repeat|initial|inherit
     */
    borderImage?: string;
    /**
     * length|number|initial|inherit
     */
    borderImageOutset?: string;
    borderImageRepeat?: 'stretch' | 'repeat' | 'round' | 'initial' | 'inherit';
    /**
     * number|%|fill|initial|inherit
     */
    borderImageSlice?: string;
    /**
     * none|image|initial|inherit
     */
    borderImageSource?: string;
    /**
     *  number|%|auto|initial|inherit
     */
    borderImageWidth?: string;
    /**
     * border-width border-style border-color|initial|inherit
     */
    borderLeft?: string;
    /**
     * color|transparent|initial|inherit
     */
    borderLeftColor?: string;
    borderLeftStyle?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'initial' | 'inherit';
    /**
     * medium|thin|thick|length|initial|inherit
     */
    borderLeftWidth?: string;
    /**
     * 1-4 length|% / 1-4 length|%|initial|inherit
     */
    borderRadius?: string;
    /**
     * border-width border-style border-color|initial|inherit
     */
    borderRight?: string;
    /**
     * color|transparent|initial|inherit
     */
    borderRightColor?: string;
    borderRightStyle?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'initial' | 'inherit';
    /**
     * medium|thin|thick|length|initial|inherit
     */
    borderRightWidth?: string;
    /**
     * length|initial|inherit
     */
    borderSpacing?: string;
    borderStyle?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'initial' | 'inherit';
    /**
     * border-width border-style border-color|initial|inherit
     */
    borderTop?: string;
    /**
     * color|transparent|initial|inherit
     */
    borderTopColor?: string;
    /**
     * length|% [length|%]|initial|inherit;
     */
    borderTopLeftRadius?: string;
    /**
     * length|% [length|%]|initial|inherit
     */
    borderTopRightRadius?: string;
    borderTopStyle?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'initial' | 'inherit';
    /**
     * medium|thin|thick|length|initial|inherit
     */
    borderTopWidth?: string;
    /**
     * medium|thin|thick|length|initial|inherit
     */
    borderWidth?: string;
    /**
     * auto|length|initial|inherit
     */
    bottom?: string;
    boxDecorationBreak?: 'slice' | 'clone' | 'initial' | 'inherit' | 'unset';
    /**
     * none|h-offset v-offset blur spread color |inset|initial|inherit
     */
    boxShadow?: string;
    boxSizing?: 'content-box' | 'border-box' | 'initial' | 'inherit';
    breakAfter?: 'auto' | 'all' | 'always' | 'avoid' | 'avoid-column' | 'avoid-page' | 'avoid-region' | 'column' | 'left' | 'page' | 'recto' | 'region' | 'right' | 'verso' | 'initial' | 'inherit';
    breakBefore?: 'auto' | 'all' | 'always' | 'avoid' | 'avoid-column' | 'avoid-page' | 'avoid-region' | 'column' | 'left' | 'page' | 'recto' | 'region' | 'right' | 'verso' | 'initial' | 'inherit';
    breakInside?: 'auto' | 'all' | 'always' | 'avoid' | 'avoid-column' | 'avoid-page' | 'avoid-region' | 'column' | 'left' | 'page' | 'recto' | 'region' | 'right' | 'verso' | 'initial' | 'inherit';

    // **** 
    //  C
    // ****
    captionSide?: 'top' | 'bottom' | 'initial' | 'inherit';
    /**
     * auto|color|initial|inherit
     */
    caretColor?: string;
    charset?: string;
    clear?: 'none' | 'left' | 'right' | 'both' | 'initial' | 'inherit';
    /**
     * auto|shape|initial|inherit
     */
    clip?: string;
    /**
     * color|initial|inherit
     */
    color?: string;
    /**number|auto|initial|inherit */
    columnCount?: number | string;
    columnFill?: 'balance' | 'auto' | 'initial' | 'inherit';
    /**
     * length|normal|initial|inherit
     */
    columnGap?: string;
    /**
     * column-rule-width column-rule-style column-rule-color|initial|inherit
     */
    columnRule?: string;
    /**
     * color|initial|inherit
     */
    columnRuleColor?: string;
    columnRuleStyle?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'initial' | 'inherit';
    /**
     * medium|thin|thick|length|initial|inherit
     */
    columnRuleWidth?: string;
    columnSpan?: 'none' | 'all' | 'initial' | 'inherit';
    /**
     * auto|length|initial|inherit
     */
    columnWidth?: string;
    /**
     * auto|column-width column-count|initial|inherit
     */
    columns?: string;
    /**
     * normal|none|counter|attr|string|open-quote|close-quote|no-open-quote|no-close-quote|url|initial|inherit
     */
    content?: string;
    /**
     * none|id|initial|inherit
     */
    counterIncrement?: string;
    /**
     * none|name number|initial|inherit
     */
    counterReset?: string;
    /**
     * MISSING URL CURSOR
     */
    cursor?: 'alias' | 'all-scroll' | 'auto' | 'cell' | 'context-menu' | 'col-resize' | 'copy' | 'crosshair' | 'default' | 'e-resize' | 'ew-resize' | 'grab' | 'grabbing' | 'help' | 'move' | 'n-resize' | 'ne-resize' | 'nesw-resize' | 'ns-resize' | 'nw-resize' | 'nwse-resize' | 'no-drop' | 'none' | 'not-allowed' | 'pointer' | 'progress' | 'row-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'text' | 'w-resize' | 'wait' | 'zoom-in' | 'zoom-out';
    // **** 
    //  D
    // ****
    direction?: 'ltr' | 'rtl' | 'initial' | 'inherit';
    display?: 'block' | 'inline' | 'run-in' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'ruby' | 'flow' | 'flow-root' | 'list-item' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-row' | 'table-cell' | 'table-column-group' | 'table-column' | 'table-caption' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | 'contents' | 'none' | 'inline-block' | 'inline-list-item' | 'inline-table' | 'inline-flex' | 'inline-grid';
    // **** 
    //  E
    // ****
    emptyCells?: 'show' | 'hide' | 'initial' | 'inherit';
    // **** 
    //  F
    // ****
    /**
     * none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url()
     */
    filter?: (number & {}) | 'auto' | 'initial' | 'inherit';
    flex?: string;
    flexBasis?: (number & {}) | 'auto' | 'initial' | 'inherit';
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
    /**
     * flex-direction flex-wrap|initial|inherit
     */
    flexFlow?: string;
    flexGrow?: (number & {}) | 'initial' | 'inherit';
    flexShrink?: (number & {}) | 'initial' | 'inherit';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';
    float?: 'none' | 'left' | 'right' | 'initial' | 'inherit';
    /**
     * font-style font-variant font-weight font-size/line-height font-family|caption|icon|menu|message-box|small-caption|status-bar|initial|inherit
     */
    font?: string;
    fontFamily?: (string & {}) | 'initial' | 'inherit';
    fontFeatureSettings?: 'normal' | (string & {});
    fontKerning?: 'auto' | 'normal' | 'none';
    fontSize?: 'medium' | 'xx-small' | 'x-small' | 'small' | 'large' | 'x-large' | 'xx-large' | 'smaller' | 'larger' | (string & {}) | 'initial' | 'inherit';
    fontSizeAdjust?: (number & {}) | 'none' | 'initial' | 'inherit';
    fontStretch?: 'ultra-condensed' | 'extra-condensed' | 'condensed' | 'semi-condensed' | 'normal' | 'semi-expanded' | 'expanded' | 'extra-expanded' | 'ultra-expanded' | 'initial' | 'inherit';
    fontStyle?: 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit';
    fontVariant?: 'normal' | 'small-caps' | 'initial' | 'inherit';
    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | (number & {}) | 'initial' | 'inherit';

    // **** 
    //  G
    // ****
    /**
     * none|grid-template-rows / grid-template-columns|grid-template-areas|grid-template-rows / [grid-auto-flow] grid-auto-columns|[grid-auto-flow] grid-auto-rows / grid-template-columns|initial|inherit
     */
    grid?: string;
    /**
     * grid-row-start / grid-column-start / grid-row-end / grid-column-end | itemname
     */
    gridArea?: string;
    gridAutoColumns?: 'auto' | 'max-content' | 'min-content' | (string & {});
    gridAutoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
    gridAutoRows?: 'auto' | 'max-content' | 'min-content' | (string & {});
    /**
     * grid-column-start / grid-column-end
     */
    gridColumn?: string;
    /**
     * auto|span n|column-line
     */
    gridColumnEnd?: string;
    gridColumnGap?: string;
    /**
     * auto|span n|column-line
     */
    gridColumnStart?: string;
    /**
     * grid-row-gap grid-column-gap
     */
    gridGap?: string;
    /**
     * grid-row-start / grid-row-end
     */
    gridRow?: string;
    /**
     * auto|row-line|span n
     */
    gridRowEnd?: string;
    gridRowGap?: string;
    /**
     * auto|row-line
     */
    gridRowStart?: string;
    /**
     * none|grid-template-rows / grid-template-columns|grid-template-areas|initial|inherit
     */
    gridTemplate?: string;
    gridTemplateAreas?: 'none' | (string & {});
    gridTemplateColumns?: 'none' | 'auto' | 'max-content' | 'min-content' | (string & {}) | 'initial' | 'inherit';
    gridTemplateRows?: 'none' | 'auto' | 'max-content' | 'min-content' | (string & {}) | 'initial' | 'inherit';
    // **** 
    //  H
    // ****
    hangingPunctuation?: 'none' | 'first' | 'last' | 'allow-end' | 'force-end' | 'initial' | 'inherit';
    height?: 'auto' | (string & {}) | 'initial' | 'inherit';
    hyphens?: 'none' | 'manual' | 'auto' | 'initial' | 'inherit';
    // **** 
    //  I
    // ****
    import?: string;
    isolation?: 'auto' | 'isolate' | 'initial' | 'inherit';
    // **** 
    //  J
    // ****
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit';
    // **** 
    //  K
    // ****
    // **** 
    //  L
    // ****
    left?: 'auto' | (string | number & {}) | 'initial' | 'inherit';
    letterSpacing?: 'normal' | (string & {}) | 'initial' | 'inherit';
    lineHeight?: 'normal' | (string | number & {}) | 'initial' | 'inherit';
    listStyle?: (string & {}) | 'initial' | 'inherit';
    listStyleImage?: 'none' | (string & {}) | 'initial' | 'inherit';
    listStylePosition?: 'inside' | 'outside' | 'initial' | 'inherit';
    listStyleType?: 'circle' | 'square' | 'upper-roman' | 'lower-alpha';
    // **** 
    //  M
    // ****
    margin?: (string & {}) | 'auto' | 'initial' | 'inherit';
    marginBottom?: (string & {}) | 'auto' | 'initial' | 'inherit';
    marginLeft?: (string & {}) | 'auto' | 'initial' | 'inherit';
    marginRight?: (string & {}) | 'auto' | 'initial' | 'inherit';
    marginTop?: (string & {}) | 'auto' | 'initial' | 'inherit';
    maxHeight?: 'none' | (string & {}) | 'initial' | 'inherit';
    minHeight?: 'none' | (string & {}) | 'initial' | 'inherit';
    maxWidth?: 'none' | (string & {}) | 'initial' | 'inherit';
    minWidth?: 'none' | (string & {}) | 'initial' | 'inherit';
    mixBlendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
    // **** 
    //  O
    // ****
    objectFit?: 'fill' | 'contain' | 'cover' | 'scale-down' | 'none' | 'initial' | 'inherit';
    objectPosition?: (string & {}) | 'initial' | 'inherit';
    opacity?: (number & {}) | 'initial' | 'inherit';
    order?: (number & {}) | 'initial' | 'inherit';
    outline?: (string & {}) | 'initial' | 'inherit';
    outlineColor?: 'invert' | (string & {}) | 'initial' | 'inherit';
    outlineOffset?: (string & {}) | 'initial' | 'inherit';
    outlineStyle?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'initial' | 'inherit';
    outlineWidth?: 'medium' | 'thin' | 'thick' | (string & {}) | 'initial' | 'inherit';
    overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'initial' | 'inherit';
    overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'initial' | 'inherit';
    overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'initial' | 'inherit';
    // **** 
    //  P
    // ****
    padding?: (string & {}) | 'initial' | 'inherit';
    paddingLeft?: (string & {}) | 'initial' | 'inherit';
    paddingTop?: (string & {}) | 'initial' | 'inherit';
    paddingRight?: (string & {}) | 'initial' | 'inherit';
    paddingBottom?: (string & {}) | 'initial' | 'inherit';
    pageBreakAfter?: 'auto' | 'always' | 'avoid' | 'left' | 'right' | 'initial' | 'inherit';
    pageBreakBefore?: 'auto' | 'always' | 'avoid' | 'left' | 'right' | 'initial' | 'inherit';
    pageBreakInside?: 'auto' | 'avoid' | 'initial' | 'inherit';
    perspective?: (string & {}) | 'none';
    perspectiveOrigin?: (string & {}) | 'initial' | 'inherit';
    pointerEvents?: 'auto' | 'none';
    position?: 'static' | 'absolute' | 'fixed' | 'relative' | 'sticky' | 'initial' | 'inherit';
    // **** 
    //  Q
    // ****
    quotes?: 'none' | (string & {}) | 'initial' | 'inherit';
    // **** 
    //  R
    // ****
    resize?: 'none' | 'both' | 'horizontal' | 'vertical' | 'initial' | 'inherit';
    right?: 'auto' | (string & {}) | 'initial' | 'inherit';
    // **** 
    //  S
    // ****
    scrollBehavior?: 'auto' | 'smooth' | 'initial' | 'inherit';
    // **** 
    //  T
    // ****
    tabSize?: (string | number & {}) | 'initial' | 'inherit';
    tableLayout?: 'auto' | 'fixed' | 'initial' | 'inherit';
    textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
    textAlignLast?: 'auto' | 'left' | 'right' | 'center' | 'justify' | 'start' | 'end' | 'initial' | 'inherit';
    textDecoration?: (string & {}) | 'initial' | 'inherit';
    textDecorationColor?: (string & {}) | 'initial' | 'inherit';
    textDecorationLine?: 'none' | 'underline' | 'overline' | 'line-through' | 'initial' | 'inherit';
    textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy' | 'initial' | 'inherit';
    textIndent?: (string & {}) | 'initial' | 'inherit';
    textJustify?: 'auto' | 'inter-word' | 'inter-character' | 'none' | 'initial' | 'inherit';
    textOverflow?: 'clip' | 'ellipsis' | (string & {}) | 'initial' | 'inherit';
    textShadow?: (string & {}) | 'none' | 'initial' | 'inherit';
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit';
    top?: 'auto' | (string & {}) | 'initial' | 'inherit';
    transform?: 'none' | (string & {}) | 'initial' | 'inherit';
    transformOrigin?: (string & {}) | 'initial' | 'inherit';
    transformStyle?: 'flat' | 'preserve-3d' | 'initial' | 'inherit';
    transition?: (string & {}) | 'initial' | 'inherit';
    transitionDelay?: (string & {}) | 'initial' | 'inherit';
    transitionDuration?: (string & {}) | 'initial' | 'inherit';
    transitionProperty?: 'none' | 'all' | (string & {}) | 'initial' | 'inherit';
    transitionTimingFunction?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'step-start' | 'step-end' | (string & {}) | 'initial' | 'inherit';
    // **** 
    //  U
    // ****
    unicodeBidi?: 'normal' | 'embed' | 'bidi-override' | 'initial' | 'inherit';
    userSelect?: 'auto' | 'none' | 'text' | 'all';
    // **** 
    //  V
    // ****
    verticalAlign?: 'baseline' | (string & {}) | 'sub' | 'super' | 'top' | 'text-top' | 'middle' | 'bottom' | 'text-bottom' | 'initial' | 'inherit';
    visibility?: 'visible' | 'hidden' | 'collapse' | 'initial' | 'inherit';
    // **** 
    //  W
    // ****
    whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap' | 'initial' | 'inherit';
    width?: 'auto' | (string & {}) | 'initial' | 'inherit';
    wordBreak?: 'normal' | 'break-all|keep-all' | 'break-word' | 'initial' | 'inherit';
    wordSpacing?: 'normal' | (string & {}) | 'initial' | 'inherit';
    wordWrap?: 'normal' | 'break-word' | 'initial' | 'inherit';
    writingMode?: 'horizontal-tb' | 'vertical-rl' | 'vertical-lr';
    // **** 
    //  Z
    // ****
    zIndex?: number;
}

export const buildStyleToString = (style: StyleModel): string => {
    let str: string = '';

    const json = JSON.parse(JSON.stringify(style))

    Object.keys(json).forEach((key: string) => {
        console.log(json[key])
        const split: string[] = key.split(/(?=[A-Z])/);
        str += `${split.join('-')}:${json[key]}`
    })

    return str;
}


// SPECIAL CASE FOR CHARSET -- @charset "charset";  (string & {})
// SPECIAL CASE FOR IMPORT --@import url|string list-of-mediaqueries;
// MISSING @font-face
// MISSING @Keyframes
// MISSING line-break
// MISSING MASK
// MISSING mask-type
// MISSING @media
// MISSING orphans
// MISSING overflow-wrap
// MISSING text-combine-upright