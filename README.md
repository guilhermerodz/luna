# Luna

Customizable React visual effects components that you can copy and paste into your design system. Free. Open Source. Apply it on top of your design system.

![luna--og](https://github.com/guilhermerodz/luna/assets/10366880/b2924bf3-c5b4-4b52-89ca-36c0173cbfe3)

### Roadmap

#### Dashboard-like software

The priority audience is developers who are building dashboard-like software. The goal is to make it easy to apply visual effects to their software.

- Wrapper/child:
  - Border:
    - [x] Tracing Border
    - [ ] Top Light ([inspired by Resend](https://share.cleanshot.com/VJlQMPjt))
  - Background:
    - [ ] Frosted Glass (might be unnecessary because backdrop-blur css is easy to use)
  - Overlay:
    - [ ] Badge Reflection ([inspired by Luxe](https://share.cleanshot.com/xq6xstxQ))
  - Texture:
    - ?
- Motion:
  - Particles:
    - [ ] Stars popping ([inspired by](https://twitter.com/JohnPhamous/status/1716503550392697232))
- Shadow:
  - ?
- Misc:
  - [ ] Blur+fade placeholder (name TBD) ([inspired by Luxe](https://share.cleanshot.com/Ryfy5qhX))


#### Landing pages

Not the priority.

- Isolated lights:
  - Spotlight ([inspired by Resend](https://share.cleanshot.com/52tRV3LS))
- Isometric view containers ([inspired by rauno.me](https://share.cleanshot.com/XSXhQGP9))
- Tilting 3D cards ([inspired by Linear](https://linear.app/customers))

### FAQ

**Isn't this the same as Aceternity UI?**

No. Aceternity's approach is more imperative. It provide examples on how to build the VFX from scratch or which libraries to use.
It might take several minutes or an hour for a developer to understand what's happening under the hood, even with a code example.
Luna's goal is to provide you production-ready VFX, which can be added as a layer to your design system in less than a minute.

**How to use with my existing Design System?**

You might already be using a UI library or design system. Everyone does.
Luna's CLI act like shadcn-ui does. It will copy-paste VFX components into your project. You can then simply import them inside of your primitives, such as `components/Button,Input,Card`, etc.

**Are the components fully customizable?**

Yes. I've setup CSS variables on top of each CSS file so you can easily change the colors, durations, or tokens in general. You can also change all of the HTML & CSS structure.

### References

- [Resend](https://resend.com)
- [JohnPhamous](https://twitter.com/JohnPhamous)
- [Luxe](https://luxe.guhrodrigues.com)
