<template>
  <div
    v-if="data.id && !hideQuest"
    class="w-full p-2 relative cursor-pointer border-b border-theme_primary_light overflow-hidden"
    
  >
    <div
      class="shadow-sm rounded-xl bg-theme_primary hover:bg-theme_primary_dark p-2"
      :class="active ? 'bg-theme_primary_dark' : ''"
    >
      <div class="flex content-start">
        <img
          v-if="!data.anonim" 
          class="w-6 h-6  rounded-full"
          :src="$getImage(data.user.avatar)"
          alt="Avatar"
        />

             <img
          v-else 
          class="w-6 h-6  rounded-full"
          src="/anonim.png"
          alt="Avatar"
        />
       
            
        <div class="px-2">
       
          <nuxt-link v-if="!data.anonim" :to="localePath('/@' + data.user.username)" 
          class="font-semibold text-sm">{{ data.user.name }}
           |  </nuxt-link>
            <nuxt-link
              v-if="data.group"
              class="text-primary font-bold text-xs"
              :to="localePath('/' + data.group.username)"
            >
              {{ data.group.name }}
            </nuxt-link>
          <span class="text-xs pl-2">
            {{ parseQuestDate(data.created_at) }}
          </span>
          
        </div>
 
        <span class="text-xs ml-auto flex" @click="showModal = !showModal">
          <span class="px-2" >
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              class="bi bi-three-dots"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
              />
            </svg>
          </span>
        </span>
      </div>
      <div class="w-auto flex mt-1 py-2 pb-4">
        <div class="flex flex-wrap items-start">

          <span v-if="!hideBalasan" class="w-full">
            <span
              v-if="data.quest_id"
              class="px-4 text-xs w-full"
            >
              <nuxt-link :to="localePath(`/quest/${data.quest_id}`)">
                membalas :<span class="text-primary">
                  @{{ data.membalas_user }} :
                  <span>{{ data.quest.text.slice(0,25) }}</span>
                </span>
              </nuxt-link>
            </span>
          </span>


          <div
            v-if="data.audio"
            class="w-full  flex flex-wrap p-2  text-theme_secondary "
          >
              <audio :src="data.audio" controls />
            
          </div>

          <div
            v-if="!active"
            class="w-full  flex flex-wrap px-2  text-theme_secondary "
            
          >
           

            <img v-if="data.img" class="w-full rounded-xl" :src="data.img" />

            <span @click="showDetail" class="w-full p-1 text-xs lg:text-base" :class="(data.text.length <= 150) ? 'text-base lg:text-lg': ''">
              <span
                v-for="(tx, i) in textToArray(data.text)"
                :key="i"
              >
                <nuxt-link
                  class="text-primary"
                  v-if="tx.slice(0, 1) == '@'"
                  :to="localePath('/' + tx)"
                >
                  {{ tx }}
                </nuxt-link>
                <nuxt-link
                  class="text-primary"
                  v-else-if="tx.slice(0, 1) == '#'"
                  :to="localePath('/' + tx.substring(1))"
                >
                  {{ tx }}
                </nuxt-link>
               
                <span v-else>
                  
                   <span v-if="isLink(tx)" class="w-full" >
                    
                    <a
                    class="text-primary"
                    :href="tx"
                    v-if="cekSumber(tx) !== 'spotify' && cekSumber(tx) !== 'youtube'" 
                    target="_BLANK"
                    
                    >{{ tx }}</a>
                </span>
                <span v-else> {{ tx }} </span>
                
                 </span>
              </span>
              <span class="text-primary" v-if="data.type != 2">  </span>
            </span>

              <span class="w-full" v-for="(tx1, iaa) in textToArray(data.text)" :key="iaa" >

                  <span  class="w-full my-1 " v-if="isLink(tx1)">
                    
                    <iframe class="w-full rounded-xl" v-if="cekSumber(tx1) == 'youtube'" width="560" height="315" :src="getUrl(tx1)" frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>

                    <iframe v-if="cekSumber(tx1) == 'spotify'" :src="getUrl(tx1)" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    
                </span>
            </span>


          </div>
      

          <div v-else class="w-full p-1  text-theme_secondary">
           

              
            
              <img
                @dblclick="followQuest(data.id)"
                class="w-full rounded-xl"
                :src="data.img"
              />

            <div class="px-2" >


            <span v-for="(tx, i) in textToArray(data.text)" :key="i">
              <nuxt-link
                class="text-primary"
                v-if="tx.slice(0, 1) == '@'"
                :to="localePath('/' + tx)"
              >
                {{ tx }}
              </nuxt-link>
              
              <nuxt-link
                class="text-primary"
                v-else-if="tx.slice(0, 1) == '#'"
                :to="localePath('/' + tx.substring(1))"
              >
                {{ tx }}
              </nuxt-link>

               <span v-else>
                  
                <span v-if="isLink(tx)" class="w-full" >
                    
                    <a
                    class="text-primary"
                    :href="tx"
                    target="_BLANK"
                    v-if="cekSumber(tx) !== 'spotify' && cekSumber(tx) !== 'youtube'" 
                    >{{ tx }}</a>
                </span>

             
                <span v-else>
                   {{ tx }}
                </span>
              
              </span>
            </span>

            <span class="w-full" v-for="(tx1, iaa) in textToArray(data.text)" :key="iaa" >

                  <span class="w-full my-1" v-if="isLink(tx1)">
                    
                    <iframe class="w-full rounded-xl" v-if="cekSumber(tx1) == 'youtube'" width="560" height="315" :src="getUrl(tx1)" frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>

                    <iframe v-if="cekSumber(tx1) == 'spotify'" :src="getUrl(tx1)" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                    
                </span>
            </span>

            
            </div>

           
          </div>

              
              
 
      

          <div class="flex w-full px-4 pb-2">
           
         
           <div class="flex absolute right-0 px-6 w-full" > 

                
            <div class="flex content-start items-start text-xs text-theme_secondary pr-3 pt-2" >
              <span class="mx-auto bg-primary rounded-full mr-2"> <img src="/logo.png" class="w-4 h-4" alt="Logo Aplikasi Maba"> </span> MabApp
        
            </div>
    

             <div class="flex text-xs mt-2 pl-3">
                     
                      <svg width="18px" height="18px" viewBox="0 0 16 16" class="bi bi-eye" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"/>
                        <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                      </svg>
                      <span class="px-2">
                        {{ data.view }}
                    </span>
                  </div>
              <div @click="$emit('balas',data)" class="p-1 px-5  flex">
                <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-chat-dots mt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <span class="px-1">{{ data.total_qna }} </span>
              </div>

                <div
                    @click="followQuest(data.id)"
                    :class="data.followed || followTemp ? btnFollowed : btnFollow"
                  >
                    <svg
                      width="18px"
                      height="18px"
                      viewBox="0 0 16 16"
                      class="bi bi-heart-fill mr-1 mt-1"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                      
                    </svg>
                    <span class="mt-1" v-if="data.followed">
                      {{ data.total_follower }} suka
                    </span>
                    <span class="mt-1" v-else>
                      {{
                        followTemp
                          ? parseInt(data.total_follower) + 1
                          : data.total_follower
                      }} suka
                    </span>
                   

                  </div>
                

    </div>


 

          </div>
        </div>
      </div>
           

        <div class="flex  w-full px-3 flex-wrap mt-4"  v-if="!data.quest_id">

             <button v-if="data.type == 2" @click="joinEvent(data.event_id)" class="w-full bg-primary mt-2 text-secondary border border-primary p-2 rounded-full  font-bold text-xs">
                  {{ $t("join_event") }}
              </button>
         
        </div>


    </div>


    <modal-quest style="z-index:10003" @delete="deleteQuest" @hide="showModal = false" v-if="showModal" :quest="data" />

  </div>
</template>

<style scoped>
.videoWrapper{
  width: 100%;
  border-radius: 10%;
}
</style>

<script>
import util from "~/assets/js/util";

export default {
  props: ["data", "bigtext", "active", "hideBalasan", "link","sumber"],
  data() {
    return {
      hideQuest: false,
      showModal: false,
      btnFollow:
        "flex relative ml-auto p-1 rounded-tl-xl rounded-br-xl text-xs text-theme_secondary",
      btnFollowed:
        "flex relative ml-auto p-1 rounded-tl-xl rounded-br-xl text-xs text-primary",
      followTemp: false
    };
  },
  methods: {
    cekSumber(str) {
      if (str) {
        if (str.search("spotify") > 0) {
          return "spotify";
        } else if (str.search("youtu.be") > 0 || str.search("youtube") > 0) {
          return "youtube";
        }
      }
    },
    getUrl(url) {
      if (url) {
        if (this.cekSumber(url) == "spotify") {
          let split = url.split("/");
          var res =
            "https://open.spotify.com/embed-podcast/" +
            split[3] +
            "/" +
            split[4].split("?")[0];
         
        } else if (this.cekSumber(url) == "youtube") {
          let split = url.split("/");
          var res = "https://www.youtube.com/embed/" + split[3];
        } else {
          var res = "";
        }

        return res;
      } else {
        return "";
      }
    },
    deleteQuest(){
        this.showModal = false
     this.$axios.get('/delete-quest/'+this.$props.data.id)
      .then(res => {
          if(res.data == 'success'){
             this.hideQuest = true
            //  console.log("delete")
           
          }
      })
      
    },
    joinEvent(id){
      this.$axios.get("/join-event/"+id)
        .then(res => {
          this.$router.push(this.localePath("/msg"))
        })
    },
    showDetail(){
          this.$router.push(this.localePath("/quest/"+this.$props.data.id))
       
    },
    isLink(link) {
      if (link) {
        if (link.substring(0, 4) == "http") {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    followQuest(id) {
      // console.log("Follow"+id)
      this.$axios.get("/quest/follow/" + id).then(res => {
        this.followTemp = true;
      });
    },
    parseQuestDate(data) {
      return util.parseQuestDate(data);
    },
    textToArray(text) {
      let str = text.toString();
      let forReplace = [];

      return str.split(" ");
    }
  }
}
</script>
