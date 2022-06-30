<script>
    import NavbarOther from "../../sections/NavbarOther.svelte";
    import Construction from "../../components/Construction.svelte";
</script>
<NavbarOther />
<div class="background bg-base-200 p-10 min-h-screen">
    <div class="content p-10 m-20 bg-base-300 rounded-md flex flex-col justify-center text-center text-lg">
        <h1 class="text-3xl bold text-center mb-3">Evolving Cyborgs</h1>
        <p class="text-lg">A better gamified habit tracker</p>
        <img class="max-w-10 m-10 rounded-lg" src="../assets/EvolvingCyborgs.jpg" alt="">
        <a class="m-auto" href="https://github.com/reidpat/evolving-cyborgs-svelte" target="_blank"><button class="glow-on-hover pl-3 pr-3" >See Code</button></a>
        <div class="divider"></div>
        <h2 class="text-2xl bold text-center">My Role</h2> 
        <p >Owner, designer and sole creator of a personal project</p>
        <h3 class="text-xl bold text-center">What is a gamified habit tracker?</h3>
        <p>Gamified habit trackers are a genre of app in which elements from video games (such as experience, levels, acheievemnts and character stats) are used to provide additional motivation to the user to complete real world tasks.</p>
        <h4>Habitica</h4>
        <p>Habitica is a great example of this type of app as it is the most popular app in this genre. In Habitica you have an avatar which has stats such as gold, experience and health, and various actions to take such as daily habits and todo list items. Upon completion of these items the usere is rewarded with gold and experience. But if items are not completed when they are supposed to be, the user will be punished by losing health and gold.</p>
        <div class="divider"></div>

    </div>
    <Construction />   
</div>

<style>
    img{
        max-height: 400px;
        object-fit: contain;
    }
    .divider{
        padding: 20px;
        padding-top: 30px;
    }
    h1,h2,h3,h4{
        margin: 20px 20px;
        font-weight: 700;
    }
</style>
