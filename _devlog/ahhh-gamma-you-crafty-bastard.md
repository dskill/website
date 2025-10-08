---
title: "Ahhh... Gamma.  You crafty bastard."
date: 2010-10-01
source_slug: "ahhh-gamma-you-crafty-bastard"
source_link: "/devlog/ahhh-gamma-you-crafty-bastard"
---

[Jon Hable gave a phenomenal speech at GDC 2010](http://dl.dropbox.com/u/187083/Papers/Hable_John_Uncharted2_HDRLighting.pptx) last year that drove home for many people the importance of knowing gamma - inviting him into your house, and serving mr. gamma a tasty beer.
I recently had to do the same.  We use a baked lighting pipeline for our levels at work, it's quite simple, piggy backing on Illuminate Labs excellent Turtle rendering plugin.  The process involves iterating lighting inside of maya for an area until we get a look we're pleased with.  Then we write the lighting data out as abstract point cloud information where it "magically" becomes reassociated with the geometry in the running game.

The catch here is what we saw in game did not match what we saw in maya.  I'll spare you the details of the investigation, but the end result was what anyone familiar with gamma could have guessed immediately:  The maya viewport is not corrected for monitor gamma.  That means that when you click on a color picker, you're picking colors that have been reduced in intensity by your monitors natural gamma response, and will appear different in games, renders, etc...

The solution was to throw together a custom shader that allows us to apply the proper gamma in the vertex shader, which lets us to visualize in maya what we see in game.

![baked_lighting_comparison]({{ '/assets/images/devlog/ahhh-gamma-you-crafty-bastard/baked_lighting_comparison1.jpg' | relative_url }})
*baked_lighting_comparison*

The in viewport gamma correct display is made possible by this simple [GammaCorrectColorDisplay.fx](http://dl.dropbox.com/u/187083/GammaVertLighting/gamma_correct_color_display.fx) shader to be used with maya's HLSL Shader plugin.

Now that I have a handle on our linear lighting pipeline from start to finish, I'm going to try and poke around a bit more and see what other little discrepancies like this continue to plague us.  A linear light rendering pipeline is truly a deep rabbit hole.
