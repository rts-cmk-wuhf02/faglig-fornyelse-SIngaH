Aflevering:
    1. En kort beskrivelse af det produkt du vil udvikle
        Jeg laver pokemon kort, og så en sektion hvor man skal vælge hvilke pokemons man skal have på sit hold. Så hvis man trykker på en pokemon bliver kortet blåt og får et check

    2. En beskrivelse af den teknologi du vil anvende i udviklingen
        Jeg fetcher fra pokemon APIet, for at gøre det skal jeg bruge en lifecycle metoden som hedder componentDidMount.
        Render bruger jeg til at vise det fra APIet på siden. 
        Jeg bruger this.state for at gemme informationer som jeg skal bruge for at vise APIets informationer på siden.
        Jeg bruger components for at koden er mere overskueligt (delt over flere sider), med det bruger man import og export ligesom i javascript. 

    3. En liste over de ressourcer som har hjulpet dig i processen
        https://www.youtube.com/watch?v=DLX62G4lc44 - den lærte mig lidt om hvordan react virker. Det er en video hvor man stopper den og laver en opgave så trykker man på play og han viser hvordan man skal lave opgaven. Men i videoen brugte han ikke VSC så jeg skal bruge siden nedenfor.

        https://code.visualstudio.com/docs/nodejs/reactjs-tutorial - den viste mig hvordan jeg bruger react i VSC

        https://pokeapi.co/ - viste mig linken til pokemon APIet


NU
    jeg har set videoen og er i gang med opgaven
        nu har jeg lavet kortene med at bruge det jeg lært i videoen, men i videoen viste han ikke hvordan man henter fra flere apier ad gangen så jeg behøvede at gætte mig frem til meget og bruge fejl beskederne for at finde frem til en løsning 
        hvis jeg har tid tilbage da jeg er færdig med resten så finder jeg en bedre måde at lave det på, men nu virker det og det er godt nok lige nu

        nu kan man vælge et navn til sit hold
            da man skriver hold navnet kommer det i en h2er og erstatter en text som siger your team name

        nu kan man vælge pokemons til sit hold, da man har valgt en bliver kortet blåt, alt koden var meget anderledes end i videoen så jeg skulle gætte mig meget frem til hvad jeg skulle gøre, så jeg så på en del af videoen igen og rettede koden så det vil passe til mit project

        jeg prøvede at gøre koden mindre men kunne kun mindske den lidt

        Jeg prøvede igen og denne gang nåede jeg at minske koden ret meget - det gjorde jeg med at lave en anden component hvor alt html som har med kortene at gøre er på et sted

        Jeg lavede en button så nu da man har valgt sit hold navn kan man trykke på en knap og input feltet og knappen fjernes fra siden

        Nu hvis man vælger en pokemon kommer dens navn og billede ovenfor for at bedre vise at man har valgt den

        jeg prøvede igen at mindske koden med det virkede ikke