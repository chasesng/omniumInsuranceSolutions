<template>
    <div v-if="scanAdvisorID(usID) || scanSenderID(usID)">
        <div class="tabletView">

            <div style="width:100vw;height:95vh;margin-top:3vh;margin-bottom:3vh;margin-left:auto;margin-right:auto;">
                <div style="width:100%;height:1%;background-color:gainsboro;display:flex;flex-direction: column-reverse;">
                </div>
                <div class="sd" style="height:99%;width:100%;display:flex">

                    <div
                        style="width:30%;height:100%;border-left:1px solid #5f545e; border-right:1px solid #ebebf0;display:flex;flex-direction:column">
                        <div v-if="scanAdvisorID(usID)" class="sd primarybg"
                            style="display:flex;width:100%;height:6%;border-bottom:1px solid #ebebf0">
                            <button :class="{ active: currentView === 0 }" @click="swapview(0)"
                                style="border:none;width:50%;padding-top:.5vh;text-align: center">
                                Quick View
                            </button>
                            <button :class="{ active: currentView === 1 }" @click="swapview(1)"
                                style="border:none;width:50%;padding-top:.5vh;text-align: center">
                                Assessment
                            </button>
                        </div>
                        <div v-if="scanSenderID(usID)" class="sd primarybg"
                            style="display:flex;width:100%;height:6%;border-bottom:1px solid #ebebf0">
                            <button :class="{ active: currentView === 0 }" @click="swapview(0)"
                                style="border:none;width:100%;padding-top:.5vh;text-align: center">
                                Quick View
                            </button>

                        </div>
                        <div v-if="currentView === 0"
                            style="width:100%;height:90%;background-color:#ebebf0;display:flex;flex-direction: column;gap:1vh">
                            <p style="padding-left:1vw;padding-top:1vh" class="ibn infoMinute primary">Quickview</p>
                            <div id="chatContainer" style="width:100%;height:80%;overflow-y:scroll">

                                <div class="primary"
                                    style="text-align:center;width:100%;height:fit-content;margin-left:auto;margin-right:auto">
                                    <p>Inquiry Sent {{ timeDifference(retrieveEnquiry(enquiryID).requestDate) }}</p>
                                </div>

                                <div>
                                    <div class="mh" v-on:click="scrollToDiv('starter')"
                                        style="background-color:#5f545e;color: white;width:100%;height:fit-content;margin-left:auto;padding-left:1vw;">
                                        <p>{{ truncateString(String(retrieveEnquiry(enquiryID).enquiryContent)) }}</p>
                                        <p class="second" style="text-align:right;padding-right:1vw;padding-bottom: .5vh;">
                                            {{
                                                timeDifference(retrieveEnquiry(enquiryID).requestDate) }}</p>
                                    </div>
                                </div>

                                <div v-for="(enquiryReply, index) in returnReplyArr(enquiryID)" :key="index"
                                    style="color:whitesmoke">
                                    <!-- advisor view -->
                                    <div v-if="retrieveUser(enquiryReply.replySenderID).userID == usID">
                                        <div v-on:click="scrollToDiv(enquiryReply + '_' + index)" class=" mh"
                                            style="background-color:#17171f;border-top-left-radius: 11px;border-top-right-radius: 11px;border-bottom-left-radius: 11px;width:80%;height:fit-content;margin-left:auto;padding-left:1vw;">
                                            <p>{{ truncateString(enquiryReply.replyContent) }}</p>
                                            <p class="second"
                                                style="text-align:right;padding-right:1vw;padding-bottom: .5vh;">{{
                                                    timeDifference(enquiryReply.dateSent) }}</p>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div v-on:click="scrollToDiv(enquiryReply + '_' + index)" class="primarybg mh"
                                            style="border-top-left-radius: 11px;border-top-right-radius: 11px;border-bottom-right-radius: 11px;width:80%;height:fit-content;margin-right:auto;padding-left:1vw;">
                                            <p>{{ truncateString(enquiryReply.replyContent) }}</p>
                                            <p class="second" style="text-align:left;padding-right:1vw;padding-bottom:.5vh">
                                                {{ timeDifference(enquiryReply.dateSent) }}</p>

                                        </div>
                                    </div>
                                </div>


                            </div>


                        </div>
                        <div v-if="currentView === 1 && String(retrieveUser(retrieveEnquiry(enquiryID).senderID).assignmentArray).split(',').length >= 2"
                            style="width:100%;height:90%;background-color:#ebebf0">
                            <div
                                style="display:flex;flex-direction:column;width:fit-content;background-color:#fafafa;padding-left:1vw;height: 100%;overflow-y:scroll">
                                <div v-for="(i, index) in String(retrieveUser(retrieveEnquiry(enquiryID).senderID).assignmentArray).split(',')"
                                    :key="index">
                                    <div
                                        style="float:right;width:100%;height:fit-content;line-height:.8;border-bottom:1px solid gray;padding-bottom:2vh;padding-top:2vh;text-align:left;background-color:#fafafa">
                                        <p class="ibn primary">{{ returnQnandResponse(i)[0] }}</p>
                                        <p class="ibn second">{{ returnQnandResponse(i)[1] }}</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div v-if="currentView === 1 && String(retrieveUser(retrieveEnquiry(enquiryID).senderID).assignmentArray).split(',').length <= 2"
                            style="width:100%;height:90%;background-color:#ebebf0;text-align:center;padding-top:6vh">
                            <p class="ibn primary">This user has not completed their insurance assessment.</p>
                        </div>


                    </div>





                    <div v-if="Object.keys(retrieveEnquiry(enquiryID)).length == 0" class="selectDisable"
                        style="width:70%;text-align:center">
                        <p class="ibn infoHeader" style="text-transform:capitalize;color:whitesmoke;padding-top:11vh">Could
                            not
                            load your enquiry</p>
                    </div>
                    <div v-if="Object.keys(retrieveEnquiry(enquiryID)).length != 0" class="selectDisable" style="width:70%">
                        <div
                            style="width:95%;margin-left:auto;margin-top:2vh;margin-right:auto;height:11vh;background-color:#ebebf0;border-radius:4px">
                            <div class="nw"
                                style="width:100%;height:50%;border-bottom:1px solid gray;display:flex;overflow:hidden">

                                <div style="width:50%;text-align:left;padding-left:1vw;padding-top:.5em">
                                    <p class="ibn"><span class="second" style="padding-right:1vw">Sender: </span> {{
                                        retrieveUser(retrieveEnquiry(enquiryID).senderID).username }}</p>
                                </div>
                                <div style="width:50%;text-align:left;padding-left:1vw;padding-top:.5em">
                                    <p class="ibn"><span class="second" style="padding-right:1vw">Policy Inquiry:</span>
                                        {{ getPolicyData(retrieveEnquiry(enquiryID).referredPolicyID).name }}</p>
                                </div>
                            </div>
                            <div class="nw"
                                style="width:100%;height:50%;border-bottom:1px solid gray;display:flex;overflow:hidden">
                                <div style="width:50%;text-align:left;padding-left:1vw;padding-top:.5em">
                                    <p class="ibn"><span class="second" style="padding-right:1vw">Inquiry: </span> {{
                                        (retrieveEnquiry(enquiryID).enquiryTitle) }}</p>
                                </div>
                                <div style="width:50%;text-align:left;padding-left:5vw;padding-top:.5em">
                                    <p class="ibn"><span class="second" style="padding-right:1vw">Sent:</span>{{
                                        timeDifference(retrieveEnquiry(enquiryID).requestDate) }}</p>
                                </div>
                            </div>
                        </div>
                        <div
                            style="display:flex;width:95%;justify-content:space-between;margin-left:auto;margin-right:auto;">
                            <div
                                style="width:20%;height:5vh;margin-top:.5em;border-radius:4px;text-align:left;padding-left:1vw;overflow:hidden">
                                <p class="ibn infoHeader second">Inquiry</p>

                            </div>
                        </div>
                        <div id="container"
                            style="display:flex;flex-direction:column;gap:2vh;height:50vh;width:95%;overflow-y:scroll;margin-left:auto;margin-right:auto">
                            <div
                                style="width:100%;height:fit-content;min-height:30vh;padding:0vh 0px 1vh 0px;background-color:#ebebf0;margin-top:1vh;border-radius:4px;text-align:left">


                                <div class="primary"
                                    style="padding-left:1vw;background-color:whitesmoke;width:100%;height:3vh;display:flex;justify-content:space-between">
                                    <p style="padding-bottom:1vh">Inquiry</p>

                                </div>
                                <div style="height:90%;overflow-y:scroll;">
                                    <p id="starter" style="white-space:pre-wrap;padding-left:1vw;padding-top:1vh"
                                        class="ibn">{{
                                            retrieveEnquiry(enquiryID).enquiryContent }}
                                    </p>
                                </div>

                            </div>
                            <div v-for="(enquiryReply, index) in retrieveEnquiry(enquiryID).replies" :key="index">
                                <div :id="enquiryReply + '_' + index"
                                    style="width:100%;height:fit-content;min-height:5vh;overflow-y:scroll;padding:0vh 0px 1vh 0px;background-color:#ebebf0;margin-top:1vh;border-radius:4px;text-align:left">
                                    <div class="primary" v-if="retrieveUser(enquiryReply.replySenderID).userID == usID"
                                        style="padding-left:1vw;background-color:#17171f;color:whitesmoke;width:100%;height:3vh;display:flex;justify-content:space-between">
                                        <p style="padding-bottom:1vh">{{ retrieveUser(enquiryReply.replySenderID).username
                                        }} <span class="second" style="padding-left:.5vw">You</span></p>
                                    </div>
                                    <div v-else
                                        style="padding-left:1vw;color:whitesmoke;background-color:#423b41;width:100%;height:3vh;display:flex;justify-content:space-between">
                                        <p style="padding-bottom:1vh">{{ retrieveUser(enquiryReply.replySenderID).username
                                        }}</p>
                                    </div>
                                    <div style="height:90%;overflow-y:scroll">
                                        <p style="white-space:pre-wrap;padding-left:1vw;padding-top:1vh" class="ibn">{{
                                            enquiryReply.replyContent
                                        }}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div style="width:100%;background-color:#f5f5f5">
                            <div
                                style="height:fit-content;width:95%;margin-left:auto;margin-right:auto;margin-top:3vh;padding-top:2vh;display:flex;flex-direction:column;gap:1vh;padding-bottom:1.3vh">
                                <div style="display:flex;flex-direction: row;width:100%">
                                    <input @keyup.enter="submitPassScroll(enquiryID, usID)" id="reply" v-model="reply"
                                        type="text"
                                        style="width:90%;outline:none;height:2em;border-radius:0px;border-top-left-radius: 4px;border-bottom-left-radius: 4px;border:1px solid darkgray;padding-left:.5vw"
                                        placeholder="Enter Reply..." />
                                    <button class="mh" @click="submitPassScroll(enquiryID, usID)"
                                        style="width:10%;background-color:gray;border:none;border-top-right-radius: 4px;border-bottom-right-radius: 4px;color:whitesmoke">Reply</button>
                                </div>
                                <div style="width:100%;display:flex;justify-content:space-between">
                                    <div class="qa ibn"
                                        style="display:flex;flex-direction:row;gap:1vw;width:90%;min-width:fit-content">
                                        <button class="mh" style="background-color:#5f545e;color:whitesmoke">Get Policy
                                            Documents</button>
                                        <button
                                            v-if="(retrieveUserbyUSID(usID).userType == 'Admin' || retrieveUserbyUSID(usID).userType == 'Advisor') && !scanReported(usID, enquiryID)"
                                            class="mh" onclick="reportSpam.showModal()"
                                            style="min-width:9vw;background-color:#c70000;color:whitesmoke">Report
                                            Spam</button>

                                        <button
                                            v-if="(retrieveUserbyUSID(usID).userType == 'Admin' || retrieveUserbyUSID(usID).userType == 'Advisor') && scanReported(usID, enquiryID)"
                                            class="mh" onclick="reportSpam.showModal()"
                                            style="min-width:9vw;background-color:gray;color:whitesmoke">Reported
                                            Spam</button>

                                        <button v-if="(retrieveUserbyUSID(usID).userType == 'User')" class="mh"
                                            v-on:click="toggleRateView()"
                                            style="min-width:9vw;background-color:#55963ef6;padding:.5vh 1vw .5vh 1vw;color:whitesmoke">Rate
                                            Advisor</button>

                                        <!-- <button class="mh"
                                            style="min-width:9vw;background-color:#423b41;color:whitesmoke">End
                                            Chat</button> -->

                                    </div>
                                    <div class="qa">
                                        <button class="mh" style="min-width:9vw;background-color:lightgray;color:#17171f"
                                            @click="back()">Back</button>
                                    </div>
                                </div>


                            </div>

                        </div>






                    </div>
                </div>

            </div>
        </div>

        <div class="mobileView" style="overflow:hidden">
            <div :style="{ display: controlVisible }"
                style="z-index:2;width:100vw;height:100vh;overflow:hidden;position: fixed;top:6vh;background-color: #ebebf0;">
                <div
                    style="position:fixed;overflow:hidden;top:8vh;width:100%;height:100%;border-left:1px solid #5f545e; border-right:1px solid #ebebf0;display:flex;flex-direction:column">
                    <div v-if="scanAdvisorID(usID)" class="sd primarybg"
                        style="display:flex;width:100%;height:6%;border-bottom:1px solid #ebebf0">
                        <button :class="{ active: currentView === 0 }" @click="swapview(0)"
                            style="border:none;width:50%;padding-top:.5vh;text-align: center">
                            Quick View
                        </button>
                        <button :class="{ active: currentView === 1 }" @click="swapview(1)"
                            style="border:none;width:50%;padding-top:.5vh;text-align: center">
                            Assessment
                        </button>
                    </div>
                    <div v-if="scanSenderID(usID)" class="sd primarybg"
                        style="display:flex;width:100%;height:6%;border-bottom:1px solid #ebebf0">
                        <button :class="{ active: currentView === 0 }" @click="swapview(0)"
                            style="border:none;width:100%;padding-top:.5vh;text-align: center">
                            Quick View
                        </button>

                    </div>
                    <div v-if="currentView === 0"
                        style="width:100%;height:75%;background-color:#ebebf0;display:flex;flex-direction: column;gap:1vh">
                        <p style="padding-left:1vw;padding-top:1vh" class="ibn infoMinute primary">Quickview</p>
                        <div id="chatContainermobile" style="width:100%;height:100%;overflow-y:scroll">

                            <div class="primary"
                                style="text-align:center;width:100%;height:fit-content;margin-left:auto;margin-right:auto">
                                <p>Inquiry Sent {{ timeDifference(retrieveEnquiry(enquiryID).requestDate) }}</p>
                            </div>

                            <div>
                                <div class="mh" v-on:click="scrollToDiv('starterMobile'); closeVisible()"
                                    style="background-color:hsla(305, 6%, 35%, 0.7);color: white;width:100%;height:fit-content;margin-left:auto;padding-left:1vw;margin-bottom:2vh">
                                    <p>Inquiry: {{ truncateString(String(retrieveEnquiry(enquiryID).enquiryContent)) }}</p>
                                   
                                </div>
                            </div>

                            <div v-for="(enquiryReply, index) in returnReplyArr(enquiryID)" :key="index"
                                style="color:whitesmoke">
                                <!-- advisor view -->
                                <div v-if="retrieveUser(enquiryReply.replySenderID).userID == usID">
                                    <div v-on:click="scrollToDiv(enquiryReply + '_' + index + 'Mobile'); closeVisible()"
                                        class=" mh"
                                        style="background-color:#17171f;border-top-left-radius: 11px;border-top-right-radius: 11px;border-bottom-left-radius: 11px;width:fit-content;line-height:.5;height:fit-content;margin-left:auto;padding:1vh 2vw .5vh 2vw">
                                        <p>{{ truncateString(enquiryReply.replyContent) }}</p>
                                        <p class="second" style="text-align:right;padding-right:1vw;padding-bottom: .5vh;">
                                            {{
                                                timeDifference(enquiryReply.dateSent) }}</p>
                                    </div>
                                </div>
                                <div v-else>
                                    <div v-on:click="scrollToDiv(enquiryReply + '_' + index + 'Mobile'); closeVisible()"
                                        class="primarybg mh"
                                        style="border-top-left-radius: 11px;border-top-right-radius: 11px;border-bottom-right-radius: 11px;width:fit-content;line-height:.5;height:fit-content;margin-right:auto;padding:1vh 2vw .5vh 2vw">
                                        <p>{{ truncateString(enquiryReply.replyContent) }}</p>
                                        <p class="second" style="text-align:left;padding-right:1vw;padding-bottom:.5vh">
                                            {{ timeDifference(enquiryReply.dateSent) }}</p>

                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>
                    <div v-if="currentView === 1 && String(retrieveUser(retrieveEnquiry(enquiryID).senderID).assignmentArray).split(',').length >= 2"
                        style="width:100%;height:75%;background-color:#ebebf0">
                        <div
                            style="display:flex;flex-direction:column;width:fit-content;background-color:#fafafa;padding-left:1vw;height: 100%;overflow-y:scroll">
                            <div v-for="(i, index) in String(retrieveUser(retrieveEnquiry(enquiryID).senderID).assignmentArray).split(',')"
                                :key="index">
                                <div
                                    style="float:right;width:100%;height:fit-content;line-height:.8;border-bottom:1px solid gray;padding-bottom:2vh;padding-top:2vh;text-align:left;background-color:#fafafa">
                                    <p class="ibn primary">{{ returnQnandResponse(i)[0] }}</p>
                                    <p class="ibn second">{{ returnQnandResponse(i)[1] }}</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div v-if="currentView === 1 && String(retrieveUser(retrieveEnquiry(enquiryID).senderID).assignmentArray).split(',').length <= 2"
                        style="width:100%;height:75%;background-color:#ebebf0;text-align:center;padding-top:6vh">
                        <p class="ibn primary">This user has not completed their insurance assessment.</p>
                    </div>

                    <div class="qa" style="width:100vw;height:10%;">
                        <div style="width:100%;padding-left:2vw">
                            <button class="brMobile" style="background-color:#5f545e;color:whitesmoke;height:100%"
                                v-on:click="toggleVisible()">Close</button>
                        </div>

                    </div>

                </div>


            </div>

            <div style="width:100vw;height:95vh;margin-top:3vh;margin-bottom:3vh;margin-left:auto;margin-right:auto;">
                <div style="width:100%;height:1%;background-color:gainsboro;display:flex;flex-direction: column-reverse;">
                </div>


                <div class="sd" style="height:100%;width:100%;display:flex">




                    <div v-if="Object.keys(retrieveEnquiry(enquiryID)).length == 0" class="selectDisable"
                        style="width:100%;text-align:center">
                        <p class="ibn infoHeader" style="text-transform:capitalize;color:whitesmoke;padding-top:11vh">Could
                            not
                            load your enquiry</p>
                    </div>
                    <div v-if="Object.keys(retrieveEnquiry(enquiryID)).length != 0" class="selectDisable"
                        style="width:100%">
                        <div
                            style="width:100vw;height:5vh;border-bottom:1px solid gray;text-align:left;padding-left:2vw;padding-top:1vh;">
                            <p class="ibn second infoSection" onclick="history.back()"><i class="fa-solid fa-chevron-left"
                                    style="padding-right:1vw"></i>Back</p>
                        </div>
                        <div class="ibn"
                            style="width:95%;margin-left:auto;margin-right:auto;margin-top:4vh;display:flex;flex-direction:column;line-height:1;height:fit-content;padding-bottom:2vh">
                            <div style="display:flex;width:100vw;justify-content:left;">
                                <p class="second" style="padding-right:1vw;width:30%">Sender:</p>
                                <p style="width:50%;">{{ retrieveUser(retrieveEnquiry(enquiryID).senderID).username }}</p>
                            </div>
                            <div style="display:flex;width:100vw;justify-content:left;">
                                <p class="second" style="padding-right:1vw;width:30%">Policy Inquiry:</p>
                                <p style="width:65%;text-align:left">{{
                                    getPolicyData(retrieveEnquiry(enquiryID).referredPolicyID).name }}</p>
                            </div>
                            <div style="display:flex;width:100vw;justify-content:left;">
                                <p class="second" style="padding-right:1vw;width:30%">Enquiry:</p>
                                <p style="width:65%;text-align:left">{{ (retrieveEnquiry(enquiryID).enquiryTitle) }}</p>
                            </div>
                            <div style="display:flex;width:100vw;justify-content:left;">
                                <p class="second" style="padding-right:1vw;width:30%">Sent:</p>
                                <p style="width:50%;">{{ timeDifference(retrieveEnquiry(enquiryID).requestDate) }}</p>
                            </div>


                        </div>
                        <div
                            style="width:95%;margin-left:auto;margin-right:auto;display:flex;justify-content:space-between;padding-bottom:1vw">
                            <div class="qa ibn"
                                style="display:flex;flex-direction:row;gap:1vw;width:90%;min-width:fit-content">
                                <button class="mh"
                                    style="background-color:#5f545e;padding:.5vh 1vw .5vh 1vw;color:whitesmoke">Get Policy
                                    Documents</button>
                                <button
                                    v-if="(retrieveUserbyUSID(usID).userType == 'Admin' || retrieveUserbyUSID(usID).userType == 'Advisor') && !scanReported(usID, enquiryID)"
                                    class="mh" onclick="reportSpam.showModal()"
                                    style="min-width:9vw;background-color:#c70000;padding:.5vh 1vw .5vh 1vw;color:whitesmoke">Report
                                    Spam</button>

                                <button
                                    v-if="(retrieveUserbyUSID(usID).userType == 'Admin' || retrieveUserbyUSID(usID).userType == 'Advisor') && scanReported(usID, enquiryID)"
                                    class="mh" onclick="reportSpam.showModal()"
                                    style="min-width:9vw;background-color:gray;padding:.5vh 1vw .5vh 1vw;color:whitesmoke">Reported
                                    Spam</button>
                                <button v-if="(retrieveUserbyUSID(usID).userType == 'User')" class="mh"
                                    v-on:click="toggleRateView()"
                                    style="min-width:9vw;background-color:#55963ef6;padding:.5vh 1vw .5vh 1vw;color:whitesmoke">Rate
                                    Advisor</button>

                                <!-- <button class="mh"
                                            style="min-width:9vw;background-color:#423b41;padding:.5vh 1vw .5vh 1vw;color:whitesmoke">End
                                            Chat</button> -->

                            </div>

                        </div>









                        <div id="containermobile"
                            style="display:flex;flex-direction:column;gap:2vh;height:30vh;width:95%;overflow-y:scroll;margin-left:auto;margin-right:auto">
                            <div
                                style="width:100%;height:fit-content;min-height:30vh;padding:0vh 0px 1vh 0px;background-color:#ebebf0;margin-top:1vh;border-radius:4px;text-align:left">


                                <div class="primary"
                                    style="padding-left:1vw;background-color:whitesmoke;width:100%;height:3vh;display:flex;justify-content:space-between">
                                    <p style="padding-bottom:1vh">Inquiry</p>

                                </div>
                                <div style="height:90%;overflow-y:scroll;">
                                    <p id="starterMobile" style="white-space:pre-wrap;padding-left:1vw;padding-top:1vh"
                                        class="ibn">{{
                                            retrieveEnquiry(enquiryID).enquiryContent }}
                                    </p>
                                </div>

                            </div>
                            <div v-for="(enquiryReply, index) in retrieveEnquiry(enquiryID).replies" :key="index">
                                <div :id="enquiryReply + '_' + index + 'Mobile'"
                                    style="width:100%;height:fit-content;min-height:5vh;overflow-y:scroll;padding:0vh 0px 1vh 0px;background-color:#ebebf0;margin-top:1vh;border-radius:4px;text-align:left">
                                    <div class="primary" v-if="retrieveUser(enquiryReply.replySenderID).userID == usID"
                                        style="padding-left:1vw;background-color:#17171f;color:whitesmoke;width:100%;height:3vh;display:flex;justify-content:space-between">
                                        <p style="padding-bottom:1vh">{{ retrieveUser(enquiryReply.replySenderID).username
                                        }} <span class="second">You</span></p>
                                    </div>
                                    <div v-else
                                        style="padding-left:1vw;color:whitesmoke;background-color:#423b41;width:100%;height:3vh;display:flex;justify-content:space-between">
                                        <p style="padding-bottom:1vh">{{ retrieveUser(enquiryReply.replySenderID).username
                                        }}</p>
                                    </div>
                                    <div style="height:90%;overflow-y:scroll">
                                        <p style="white-space:pre-wrap;padding-left:1vw;padding-top:1vh" class="ibn">{{
                                            enquiryReply.replyContent
                                        }}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div style="width:100%;background-color:#f5f5f5">
                            <div
                                style="height:fit-content;width:95%;margin-left:auto;margin-right:auto;margin-top:3vh;padding-top:2vh;display:flex;flex-direction:column;gap:1vh;padding-bottom:1.3vh">
                                <div style="display:flex;width:100%">
                                    <input @keyup.enter="submitPassScrollMobile(enquiryID, usID)" id="reply" v-model="reply"
                                        type="text"
                                        style="width:90%;outline:none;height:2em;border-radius:0px;border-top-left-radius: 4px;border-bottom-left-radius: 4px;border:1px solid darkgray;padding-left:.5vw"
                                        placeholder="Enter Reply..." />
                                    <button class="mh" @click="submitPassScrollMobile(enquiryID, usID)"
                                        style="width:fit-content;background-color:gray;border:none;border-top-right-radius: 4px;border-bottom-right-radius: 4px;color:whitesmoke;padding:0 1vw 0 1vw">Reply</button>
                                </div>



                            </div>

                        </div>
                        <div
                            style="width:100%;padding-left:2vw;padding-right:3vw;display:flex;justify-content: space-between;">
                            <div class="qa">
                                <button class="brMobile" style="height:100%;background-color:#5f545e;color:whitesmoke"
                                    v-on:click="toggleVisible()">Options</button>
                            </div>
                            <div class="qa">
                                <button class="brMobile mh"
                                    style="height:100%;min-width:9vw;background-color:lightgray;color:#17171f"
                                    @click="back()">Back</button>
                            </div>
                        </div>






                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- no permission from mismatch of enquiry's advisorID and auth's advisorID -->
    <div v-else>
        <div
            style="width:95vw;height:100vh;padding-top:16vh;display:flex;justify-content:center;margin-left:auto;margin-right:auto">
            <div style="width:fit-content;margin-left:auto;margin-right:auto">
                <p style="text-transform:capitalize" class="ibn infoSection">You do not have the permission to view this
                    enquiry.</p>
                <p class="second">If you believe this to be a mistake, please contact support.</p>
                <p class="brMobile mh" style="padding-top:.5em" onclick="history.back()">Go Back</p>
            </div>


        </div>

    </div>

    <dialog id="reportSpam">
        <form class="ibn infoMinute selectDisable">
            <p class="primary">Report this inquiry as spam?</p>
            <p style="font-size:16px">Warning! As this is an active inquiry, reporting it will close it immediately and your
                ability to add additional messages is revoked.</p>
            <p class="second" style="font-size:16px">Thank you for improving Omnium's services.</p>

            <div style="width:80%;display:flex;margin-right:auto;justify-content:space-between">
                <p class="mh" style="color:#c70000" onclick="event.preventDefault();reportSpam.close()"
                    v-on:click="sendReport(usID, enquiryID); go('/Advisor_Channel')">Confirm</p>
                <p class="mh" style="color:#5f545e" onclick="event.preventDefault();reportSpam.close()">Close</p>
            </div>

        </form>

    </dialog>

    <div :style="{ display: ratingVisible }"
        style="position:fixed;top:6vh;width:100vw;height:100vh;padding-top:3vh;background-color:rgba(0, 0, 0, 0.5);z-index:2;overflow:hidden">
        <div class="ms sd"
            style="margin:auto;width:90vw;height:70vh;overflow-y:scroll;background-color:#f5f5f5;border-radius:4px;">
            <div class="primarybg" style="width:100%;height:1vh"></div>
            <div style="padding-top:2vh;padding-left:2vw;line-height:1">
                <div style="display:flex;justify-content:space-between;padding-right:2vw">
                    <p class="ms b infoHeader" style="text-transform: capitalize;">Leave a review of {{
                        retrieveUser(retrieveEnquiry(enquiryID).advisorID).username }}</p>
                    <i class="fa-solid fa-xmark infoHeader second" v-on:click="toggleRateView()"></i>
                </div>
                <p class="second">Your review greatly helps the advisor and the platform.</p>
                <div
                    style="display:flex;justify-content:left;gap:10vw;background-color:rgba(128, 128, 128, 0.1);padding:0vh 0px 2vh 2vw">
                    <div class="image gloss"
                        style="height:80px;width:80px;border-radius:50%;background-color:lightgray;margin-top:1em;">
                    </div>
                    <div v-if="rating(retrieveUser(retrieveEnquiry(enquiryID).advisorID).id)[0] >= 1"
                        style="display:flex;flex-direction:column">
                        <p style="padding-top:1em;"><span class="primary">{{
                            rating(retrieveUser(retrieveEnquiry(enquiryID).advisorID).id)[0]
                        }}</span>
                            <i class="fa-solid fa-star" style="padding-left:2vw"></i>
                        </p>
                        <span class="second">({{ rating(retrieveUser(retrieveEnquiry(enquiryID).advisorID).id)[1] }}
                            Reviews)</span>
                    </div>
                    <div v-if="rating(retrieveUser(retrieveEnquiry(enquiryID).advisorID).id) == 'No Reviews'"
                        style="display:flex;flex-direction: column">
                        <p style="padding-top:1em">No Reviews
                            <i class="fa-solid fa-star"></i>
                        </p>
                        <span class="second">(0 Reviews)</span>
                    </div>

                </div>
                <div class="second"
                    style="font-style:italic;line-height:1;padding-right:1vw;display:flex;flex-direction:column;padding-left:1vw;padding-top:1vh">
                    <p>Did your advisor help you with what you needed?</p>
                </div>
                <div style="padding-right:2vw">
                    <textarea style="width:100%;height:10vh;padding-top:.5em;resize:none" placeholder="Leave a comment here..."
                        v-model="reviewResponse"></textarea>
                </div>
                <div class="second"
                    style="font-style:italic;line-height:1;padding-right:1vw;display:flex;flex-direction:column;padding-left:1vw;padding-top:1vh">
                    <p>Rate your advisor's service from 1 - 5</p>
                </div>
                <div style="padding-right:2vw;display:flex;justify-content: center;">
                    <button class="scoreBtn" v-for="(i, index) in 5" :key="index" @click="updateScore(index + 1)"
                        :class="{ blackBtn: scoreChosen === index + 1 }">{{ index + 1 }}</button>
                </div>
                <div
                    style="display:flex;justify-content: center;padding-top:3vh;flex-direction:column;text-align:center;padding-right:2vw">
                    <p class="animate__animated animate__fadeIn errMsg ibn l"
                        style="animation-duration:.2s;min-height:16px">{{ errMsg }}</p>
                    <button class="brMobile mh"
                        v-on:click="submitReview(usID, (retrieveUser(retrieveEnquiry(enquiryID).advisorID).id))"
                        style="margin-left: auto;margin-right: auto">Submit</button>

                </div>

            </div>



        </div>
    </div>
</template>

<script>
import { getFirestore, onSnapshot, collection, query, updateDoc, doc, arrayUnion } from 'firebase/firestore';
import { onAuthStateChanged, getAuth } from '@firebase/auth';
import { ref, onUnmounted, onMounted } from 'vue';
import { app, timeDifference, truncateString } from '@/configs.js';

const db = getFirestore(app);

const errMsg = ref();


export default {
    name: 'enquiryView',
    data() {
        return {
            users: ref([]),
            policies: ref([]),
            enquiries: ref([]),
            assessments: ref([]),
            currentView: 0,
            reply: ref(''),
            reviewResponse: ref(''),
            controlVisible: 'none',
            ratingVisible: 'none',
            scoreChosen: 0,
        }
    },
    methods: {
        returnUserObject(uid) {
            return Object(this.users.find(u => u.userID === uid))
        },
        updateScore(val) {
            this.scoreChosen = val
        },
        toggleVisible() {
            this.controlVisible = this.controlVisible === 'none' ? 'block' : 'none';
        },
        rating(uid) {
            let obj = Object(Object(this.users.find(u => u.id == uid)).rating);
            let val = 0;
            for (let i = 0; i < obj.length; i++) {
                val += obj[i].score;
            }
            let averageRating = val / obj.length;
            if (averageRating <= 0 || obj.length == 0) {
                return 'No Reviews';
            } else {
                return [averageRating.toFixed(2), obj.length];
            }
        },

        toggleRateView() {
            this.ratingVisible = this.ratingVisible === 'none' ? 'block' : 'none';
        },
        closeVisible() {
            this.controlVisible = 'none'
        },
        go(val) {
            this.$router.push({ path: val })
        },
        scrollToDiv(divId) {
            const container = document.getElementById('container');
            const element = document.getElementById(divId);

            if (container && element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        },

        back() {
            window.history.back();
        },
        scanAdvisorID(usID) {
            return this.retrieveEnquiry(this.enquiryID).advisorID == this.retrieveUserbyUSID(usID).id
        },
        scanSenderID(usID) {
            return this.retrieveEnquiry(this.enquiryID).senderID == this.retrieveUserbyUSID(usID).id
        },
        scanReported(usID, enqID) {
            let reportArr = Object(this.enquiries.find(e => e.id == enqID)).reports
            if (reportArr.includes(this.retrieveUserbyUSID(usID).id)) {
                return true
            }
            else {
                return false
            }
        },
        sendReport(usID, enqID) {
            let enq = Object(this.enquiries.find(e => e.id === enqID));
            let user = Object(this.users.find(u => u.userID == usID))
            if (!String(enq.reports).split(',').includes(user.id)) {
                updateDoc(doc(db, 'omniumISSEnquiries', enq.id), {
                    reports: arrayUnion(user.id),
                    advisorID: ''
                })
            }
        },
        swapview(val) {
            this.currentView = val
        },
        returnText(val) {
            if (val == 0) {
                return "You are viewing open inquiries submitted by users, responding to an enquiry will place it in your personal inbox."
            }
            else if (val == 1) {
                return 'Your personal inbox stores inquiries you have responded to, with only you being able to view them and its contents.'
            }
        },
        getPolicyData(policyID) {
            const pol = this.policies.find(p => p.id === policyID);
            return Object(pol)
        },

        showEnquiry(index) {
            this.selectedEnquiry = index;
        },

        retrieveEnquiry(enqID) {
            return Object(this.enquiries.find(e => e.id === enqID))
        },

        retrieveUser(userid) {
            return Object(this.users.find(u => u.id === userid))
        },

        retrieveUserbyUSID(userid) {
            return Object(this.users.find(u => u.userID === userid))
        },
        returnQuestionObj(qnNumber) {
            const questionObject = Object(this.assessments.find(a => a.qnNumber == qnNumber));
            return questionObject
        },
        returnQnandResponse(qnItem) { //parameter takes in Qn1_0 etc
            let split = String(qnItem).split('_')
            var cleanedFirst = split[0].replace('Qn', ''); //returns question number
            let qnDesc = Object(this.returnQuestionObj(cleanedFirst)).qnDesc
            let qnResponse = Object(this.returnQuestionObj(cleanedFirst)).qnOptions_SC_Delimiter;
            let qnResponseArr = String(qnResponse).split(';')[split[1]]
            let qnandAnswer = [qnDesc, qnResponseArr]

            return qnandAnswer;

        },
        returnRatings(advID) {
            return Object(this.users.find(u => u.id == advID))
        },
        acceptEnquiry(usid, enqId) {
            let user = Object(this.users.find(u => u.userID === usid))
            let enq = Object(this.enquiries.find(e => e.id === enqId))
            let boolFor = enq.advisorID == '';
            if (user.userType == 'Admin' && boolFor) {
                updateDoc(doc(db, 'omniumISSEnquiries', enqId), {
                    advisorID: user.id
                })
            }
        },

        returnReplyArr(enqId) {
            return Object(this.enquiries.find(e => e.id === enqId)).replies
        },
        sendReply(enqId, usid) {
            let adID = this.retrieveUserbyUSID(usid).id
            if (this.scanAdvisorID(usid) || this.scanSenderID(usid)) {
                if (String(this.reply).trim() == '') {
                    errMsg.value = 'Please enter a reply for this inquiry first.'
                }
                else {
                    updateDoc(doc(db, 'omniumISSEnquiries', enqId), {
                        replies: arrayUnion({
                            replyContent: String(this.reply).trim(),
                            dateSent: Date.now(),
                            replySenderID: adID
                        })
                    })
                    this.reply = ''
                }

            }
            else {
                errMsg.value = 'You do not have permission to view/reply to this enquiry!'
            }
            if (errMsg.value != '') {
                setTimeout(function () {
                    errMsg.value = '';
                }, 3000);
            }

        },

        submitReview(usID, advID) {
            let reviewContent = this.reviewResponse;
            let user = Object(this.users.find(u => u.userID == usID))
            let reviewStars = this.scoreChosen;
            let advisorID = advID;
            const ratings = this.returnRatings(this.retrieveUser(this.retrieveEnquiry(this.enquiryID).advisorID).id).rating
            if (reviewContent.length <= 0 || reviewStars == 0) {
                errMsg.value = 'Please complete your review before submitting.'
            }
            else {

                if (ratings.some(r => r.userid == user.id)) {
                    errMsg.value = 'You have already left a review for this advisor!'
                    console.log('You have already left a review for this advisor!')
                    this.reviewResponse = '';
                    this.reviewStars = 0;
                    return;
                }
                else {
                    updateDoc(doc(db, 'omniumISSUsers', advisorID), {
                        rating: arrayUnion({
                            review: reviewContent,
                            score: reviewStars,
                            userid: user.id
                        })

                    })
                    this.toggleRateView()
                    this.reviewResponse = '';
                    this.reviewStars = 0;
                }

            }
            if (errMsg.value != '') {
                setTimeout(function () {
                    errMsg.value = '';
                }, 3000);
            }

        },
        scrollToBottom() {
            const containerDiv = document.getElementById('container');
            const ccontainerDiv = document.getElementById('chatContainer');
            containerDiv.scrollTop = containerDiv.scrollHeight;
            ccontainerDiv.scrollTop = containerDiv.scrollHeight;

        },

        scrolltoBottomMobile() {
            const containerDiv = document.getElementById('containermobile');
            const ccontainerDiv = document.getElementById('chatContainermobile');
            containerDiv.scrollTop = containerDiv.scrollHeight;
            ccontainerDiv.scrollTop = containerDiv.scrollHeight;
        },
        submitPassScroll(enquiryID, usID) {
            this.sendReply(enquiryID, usID);
            setTimeout(() => {
                this.scrollToBottom();
            }, 10);
        },
        submitPassScrollMobile(enquiryID, usID) {
            this.sendReply(enquiryID, usID);
            setTimeout(() => {
                this.scrolltoBottomMobile();
            }, 10);
        }







    },
    computed: {
    },
    props: ['enquiryID'],
    mounted() {
        const enquiryQuery = query(collection(db, 'omniumISSEnquiries'));
        const liveEnquiries = onSnapshot(enquiryQuery, (snapshot) => {
            this.enquiries = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    advisorID: doc.data().advisorID,
                    enquiryContent: doc.data().enquiryContent,
                    enquiryTitle: doc.data().enquiryTitle,
                    finalizedPurchase: doc.data().finalizedPurchase,
                    referredPolicyID: doc.data().referredPolicyID,
                    replies: doc.data().replies,
                    requestDate: doc.data().requestDate,
                    senderID: doc.data().senderID,
                    status: doc.data().status,
                    reports: doc.data().reports
                }
            })
        })
        const assessmentQuery = query(collection(db, 'omniumAssessment'));
        const liveQns = onSnapshot(assessmentQuery, (snapshot) => {
            this.assessments = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    qnDesc: doc.data().qnDesc,
                    qnNumber: doc.data().qnNumber,
                    qnOptions_SC_Delimiter: doc.data().qnOptions_SC_Delimiter
                }
            })
        })

        const policyQuery = query(collection(db, 'policiesOfISS'));
        const livePolicies = onSnapshot(policyQuery, (snapshot) => {
            this.policies = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    coverageDetails: doc.data().policy_CoverageDetails,
                    duration: doc.data().policy_Duration,
                    issueAge: doc.data().policy_IssueAge,
                    name: doc.data().policy_Name,
                    registeredNumber: doc.data().policy_Number,
                    periodType: doc.data().policy_Period,
                    policyPremium: doc.data().policy_Premium,
                    provider: doc.data().policy_Provider,
                    sumInsured: doc.data().policy_SumInsured,
                    policyTNC: doc.data().policy_TermsAndConditions,
                    type: doc.data().policy_Type,
                    policyFrequency: doc.data().premium_Frequency
                }


            })
        })

        const userQuery = query(collection(db, "omniumISSUsers"));
        const liveOISSUsers = onSnapshot(userQuery, (snapshot) => {
            this.users = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    userID: doc.data().userID,
                    username: doc.data().username,
                    gender: doc.data().gender,
                    assignmentArray: doc.data().assignmentArray,
                    from: doc.data().from,
                    occupation: doc.data().occupation,
                    emailRef: doc.data().emailRef,
                    userType: doc.data().userType,
                    dateOfBirth: doc.data().dateOfBirth,
                    rating: doc.data().rating

                }
            });
        })


        onUnmounted(liveEnquiries, liveQns, livePolicies, liveOISSUsers)
    },

}




</script>

<script setup>
var usID = ref('');
var usEmail = ref('');
let auth;

const isLoggedin = ref(false);
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {

            isLoggedin.value = true;
            usID.value = user.uid;
            usEmail.value = user.email;

        }
        else {
            isLoggedin.value = false;
        }
        return {
            usID
        }
    })
})

</script>

<style scoped>
button.active {
    background-color: #5f545e;
    color: whitesmoke;


}

div .qa button {
    background-color: whitesmoke;
    color: #5f545e;
    border: none;
    border-radius: 4px;
    padding: .5vh .5vw .5vh .5vw;
}

.scoreBtn {
    padding: 1vh 6vw 1vh 6vw;
    border-radius: 0;
    border: 1px solid gray;
    color: black;
    outline: none
}

.blackBtn {
    background-color: #5f545e;
    color: whitesmoke
}
</style>

<style>
.fa-star {
    color: gold;
}
</style>