# Cyclomat Manual

Be sure to read about [general use cases](https://cyclomat.art/learn) and try out the in-app help system. Resort to this document when you want to understand more about how all the parameters work together.

## Overview

Cyclomat is an app for exploring the fascinating shapes that arise from the interaction of harmonic frequencies. They are from the family of timeless shapes that we discovered as children playing with gears, pens and paper.

### User Interface

The primary view is the art canvas, upon which the current art project is displayed. The left sidebar contains controls that apply to project, while controls in the right sidebar apply to the currently selected layer. Tapping anywhere on the canvas toggles the UI on and off.

#### Pusher Controls

A note regarding the slider-looking controls scattered throughout the UI. These are “pusher” controls rather than standard sliders. Sliding a finger anywhere along the track pushes the value in the respective direction. This mechanic allows for granular control over large ranges.

#### Contextual Help

Tap on most control labels and other text elements to learn more about the respective parameter. In many cases, this also offers keyboard entry for more precise control of values.

## Left Sidebar

The left sidebar is composed of 4 sections.  
**Dev Note:** *Considering consolidating Gear, Share, Library with Undo, Redo, Save. And secondarily, removing them from the scrolling arena, so they are Omnipresent.*

### Global

At the top of the left sidebar are 3 global icons, always visible.

* **\[gear\]** – Opens User Preferences  
* **\[share\]** – Allows sharing or high resolution export of the artwork  
* **\[books\] – **Opens the Art Library

#### User Preferences

User preferences include:

* Show Help *(coming soon)*  
* Show Machine – show or hide a simulation of the machine behind the drawing  
* Advanced – show or hide more advanced UIs

#### Export Artwork

**Type**  
Selects the export resolution:

* 1K, 2K, 4K, 8K – results in an image file of the given resolution family.  
* PDF – result in a PDF file composed of resolution-independent vectors.  
* Project – allows export of the project file, which can be imported by other users of Cyclomat.


**Shape**  
Selects the aspect ratio for the resulting file. The user may select a conventional ratio, or tune a custom one.

**High Quality**  
Reduces tessellation pitch (TP) for improved visual quality at large scale. Will not affect higher TP values, i.e. when using TP as a special effect.

**Transparent**  
Removes the background color, resulting in an image with partial transparency.

#### Art Library

Opens the Art Library. Scroll through thumbnails of saved artwork, and tap any thumbnail to open the Art Gallery. Yes, the Art Gallery, where one may:

* Swipe between files in gallery view.  
* Tap **Open** to load the file for editing.  
* Tap **\[trash\]** to delete the file.

### Project

Tap the Project section label to show or hide the section. 

* The **\[doc-plus\]** icon to the right of the section label offers ways to start a new project, or duplicate the existing artwork.  
* The **\[go-back\]** icon undoes the last change to the artwork.  
* The **\[go-forward\]** icon redoes the last undone change to the artwork.  
* The **\[download\]** icon saves the artwork.  
* **BG / Background** sets the background color behind the artwork.  
* **Transform** allows the artwork to be positioned, scaled or rotated. See Layout.  
* **Project Title** has a default value but can be updated to something more evocative.

### Layers

Tap the Layers section label to show or hide the section.

* The **\[doc-plus\]** icon to the right of the section label offers ways to create a new layer, duplicate, or delete the selected layer.  
* **Tap a layer to select it for editing.**  
* Tap the **\[eye\]** icon within a layer to toggle its visibility. Controls for a hidden layer are disabled until that layer is toggle back to visible.  
* Long press a layer to reorder it in the layer stack.

### Palette

Tap the Palette section label to show or hide the section.

* The **\[doc-plus\]** icon to the right of the section label offers ways to generate a new palette.  
* Tap the base item (0) to alter the base hue, saturation, luminance and opacity of the palette, which affects all colors.  
* Tap any palette item (1-8) to alter the respective palette color relative to the base item.

## Right Sidebar

### Cycloid

Applies to the shapes drawn on the currently selected layer. If using Keyframes, it applies only to the currently selected keyframe. Tap the Cycloid section label to show or hide the section. To the right of the section label is a menu to select the number of active Arms, where each arm rotates independently. The more active arms, the more complex the resulting shapes. Start with 2 to get a hang of things and add more once you’re comfortable.

**Blend** *(advanced)*  
Blend controls how colors on the selected layer are combined with those of underlying layers. The default mode is Normal, which blends only with opacity, if the color has partial opacity. Other modes have more complex interactions. For light artwork, Multiple and Dark are useful to model in pens. For dark artwork, Screen or Lighten have a similar effect.

**~~SB / Stepwise Blending~~**  
~~When any mode besides Normal is selected, a toggle appears labeled SB or Stepwise Blending. When enabled, each step is blended independently, allowing colors to build up as subsequent steps draw over previous. This tends to create a more nuanced result, but can also cause overblending. Reducing color or layer opacity are ways to counteract overblending. See Keyframes for introductory information on tweens.~~

**Arm Bank Picker**  
**\[** *Freq, Rad, AP, OP* **\]**  
Switches between four (for now) banks of Arm controls. These control banks work in tandem to inscribe the path of the cycloid.

Underneath the bank of controls are metrics: **Sym** or Symmetry estimates how many visual “petals” the shape will tend to exhibit, while **GCD** indicates the largest number that divides evenly into all Frequency values. When greater than one, it indicates there is a simpler ratio that would result in the same shape. This is mainly academic, but can be useful when planning.

**Arm Frequency / Freq**  
Frequency is a key parameter that determines the character of the resulting shape, as it controls the number of times the respective arm rotates to complete the shape. One can think of frequency as determining the shape family, whereas Radius identifies an individual within that family. \[Deserves detail section\] 

The button to the right of each pusher toggles the spin direction of the arm, which can have a dramatic effect on the resulting shape.

**Arm Radius / Rad**  
Radius controls the length of the respective arm, or from another perspective, the amount that arm contributes to the resulting shape. \[Deserves detail section\] 

The button to the right of each pair of pushers allows their ratios to be locked together, so modifying one radius proportionally modifies the other. Enable all such buttons to scale the shape while retaining its precise character.

**Arm Phase / AP**  
Arm Phase determines the angle of the arm at its starting point. It is the differences in phase between arms that give rise to altered shape families.

**OP / Oscillator Phase**  
Oscillator Phase determines the angle of the X versus Y oscillator, and modifying this value results in an unnatural folding of space, giving rise to mutated shape families. As with **AP**, the description doesn't help much, so you kind of have to play with it to understand the effects.

**% / Completeness** *(advanced)*  
Completeness allows control of how much (what percentage) of the entire shape is drawn.

More interestingly, the button to the right of the pusher toggles frequency locking. Normally, all frequencies are locked to whole numbers, so as to produce shapes that can be “completed” and the line will eventually meet itself. When frequencies are unlocked, they are no longer constrained to decimal numbers, and it’s possible to get shapes that never meet themselves. This can be used to certain interesting effects.

When frequencies are unlocked, the upper range for Completeness increases greatly, so as to create complexity via “frequency-splitting”.\[Deserves detail section\] 

**TP / Tessellation Pitch** *(advanced)*  
Tessellation Pitch controls how smoothly curves are divided into line segments for rendering. Reduce this value if you see line segments on a curve. Or, try increasing this value to use the line segments as a semi-harmonic effect.

**W / Line Width**  
Sets the width of the line used to draw the shape.

**C / Line Color**  
Sets the color and opacity used to draw the shape. Note that opacity may also be controlled at the Layer and Palette levels. Only modify opacity here if you need the extra control.

**KF / Keyframes** *(advanced)*  
Sets the number of keyframes used for Cycloid tweening. A Cycloid Keyframe is a “known” snapshot of Cycloid controls, and Tweening draws a smoothly changing series of shapes in between the Keyframes.

**KS / Key Steps** *(advanced)*  
Sets the number of steps to use between respective keyframes. For example, if you have two keyframes with 10 steps between them, step 1 and 10 are exactly KF1 and KF2, while steps 2-9 are smoothly interpolated variations between the two keyframes. Select the \[pencil\] icon to select that particular keyframe for editing. All other controls in the Cycloid section apply to the currently selected Keyframe (with exception of Blend).

### Layout

Applies a geometric transform to the currently selected layer, and controls overall opacity. If using Keyframes, these controls apply only to the currently selected keyframe. Note that layout keyframes hae nothing to do with cycloid keyframes. Tap the Layout section label to show or hide the section.

**Op / Opacity**  
Determines the opacity of the layer.

**X**  
Determines the horizontal position.

**Y**  
Determines the vertical position.

**Scale**  
Determines the scaling factor applied to the layer, which also scales the line width. To scale the artwork without scaling line width, lock the ratios between Cycloid radii to scale them proportionally.

**Spin**  
Determines the rotation of the layer.

**Offset**  
Offset is used with polar rotation, and offsets the layer from the center.

**Angle**  
Angle is used with polar rotation, and determines the rotation of the layer around the center at a distance defined by Offset.

**KF / Keyframes** *(advanced)*  
Sets the number of keyframes used for Layout tweening. A Layout Keyframe is a “known” snapshot of Layout controls, and Tweening draws the Cycloid content through a smoothly changing series of layout transforms in between the transforms defined at Keyframes.

**KS / Key Steps** *(advanced)*  
Sets the number of steps to use between respective keyframes. For example, if you have two keyframes with 10 steps between them, step 1 and 10 are exactly KF1 and KF2, while steps 2-9 are smoothly interpolated variations between the two keyframes. Select the \[pencil\] icon to select that particular keyframe for editing. All other controls in the Layout section apply to the currently selected Keyframe.

# Cyclomat Help

* Tour  
  * Global  
  * Project  
  * Palette  
  * Animation  
* Cycloid  
* Layout

Tutorials

* Your First Cycloid (or call them Shapes?)  
  * Frequency/Gear  
  * Radius  
  * Adding a 3rd Arm  
  * Phase  
* Cycloid Keyframes  
  * Duplicate keyframe  
  * Radius  
  * Phase  
  * Color  
* Layout  
* Project