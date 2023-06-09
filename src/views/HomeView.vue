<script setup>
import BlockWithImage from '@/components/BlockWithImage.vue';
import ProductsList from '@/components/ProductsList.vue';
</script>

<template>
  <main class="container mx-auto space-y-28">
    <BlockWithImage>
        <h1 class="mb-4">Hlavní nadpis webu</h1>
        <p class="mb-16">V k žert planetu rysů obdivují stravování starověkého zebřičky u tahů zimující. Akcí a důkaz pomoci narozen muzea signálem.</p>
        <p>
          <a class="btn btn--secondary mr-8">Více informací</a>
          <a class="btn btn--primary">Poptat nabídku</a>
        </p>
      <template #imageRight>
        <img src="https://picsum.photos/id/235/900/600"/>
      </template>
    </BlockWithImage>

    <BlockWithImage class="bg-primary-100">
      <h1 class="mb-4">Nechte své peníze růst!</h1>
      <p class="mb-16">V k žert planetu rysů obdivují stravování starověkého zebřičky u tahů zimující. Akcí a důkaz pomoci narozen muzea signálem – jižní využitelný uchu těžko. Dravcům vousům houba horu žijí mého vývojovou z společnosti nemigrují vy plná internetová, je charisma vnitrozemí, oceán a přijíždějí příbuzných zjevné, zemskou dá spolu. Moc král prokletí obyvatel holka ochlazení žít mimořádnými virů stejný či palec.</p>
        <ul>
          <li>Musel za až angličtinu látky nohy deprimovaná polokouli i roku map.</li>
          <li>Těžko popsal, ještě zúročovat však, by čase musel mi nuly, ta naší.</li>
          <li>Musel za až angličtinu látky nohy deprimovaná polokouli i roku map.</li>
          <li>Těžko popsal, ještě zúročovat však, by čase musel mi nuly, ta naší.</li>
        </ul>
      <p>
        <a class="btn btn--primary">Více informací</a>
      </p>
      <template #imageLeft>
        <img src="https://picsum.photos/id/236/900/600"/>
      </template>
    </BlockWithImage>

    <BlockWithImage>
        <h1 class="mb-4">Hlavní nadpis webu</h1>
        <p class="mb-16">V k žert planetu rysů obdivují stravování starověkého zebřičky u tahů zimující. Akcí a důkaz pomoci narozen muzea signálem.</p>
        <p>
          <a class="btn btn--secondary mr-8">Více informací</a>
          <a class="btn btn--primary">Poptat nabídku</a>
        </p>
      <template #imageRight>
        <img src="https://picsum.photos/id/237/900/600"/>
      </template>
    </BlockWithImage>

    <ProductsList/>
  </main>
</template>
