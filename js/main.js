function openProject(id){document.getElementById('modal-'+id).classList.add('open');document.body.style.overflow='hidden'}
function closeProject(id){document.getElementById('modal-'+id).classList.remove('open');document.body.style.overflow=''}
function filterGallery(id,cat,btn){
 const g=document.getElementById('gallery-'+id);
 g.querySelectorAll('figure').forEach(f=>f.classList.toggle('hidden',cat!=='all' && f.dataset.cat!==cat));
 btn.parentElement.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
}
function openLightbox(src){document.getElementById('lightboxImg').src=src;document.getElementById('lightbox').classList.add('open')}
function closeLightbox(){document.getElementById('lightbox').classList.remove('open')}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.modal.open').forEach(m=>m.classList.remove('open'));closeLightbox();document.body.style.overflow=''}})
const credentialSets={
english:{title:"English Development — Starfish International Training Center",items:[["Level 3A","images/certificates/english_3a.png"],["Level 3B","images/certificates/english_3b.png"],["Level 4A","images/certificates/english_4a.png"],["Level 4B","images/certificates/english_4b.png"]]},
autodesk:{title:"Zeon Light — Autodesk Authorized Training Center",items:[["AutoCAD — Intermediate","images/certificates/autodesk_autocad_intermediate.jpg"],["Revit — Essential","images/certificates/autodesk_revit_essential.jpg"],["Revit — Advanced","images/certificates/autodesk_revit_advanced.jpg"],["Revit — Specialized Structure","images/certificates/autodesk_revit_specialized.png"]]},
planning:{title:"Planning & Professional Development",items:[["Microsoft Project","images/certificates/project_ms_project.jpg"],["Primavera P6","images/certificates/project_p6.jpg"],["Integrated Project Planning & Control","images/certificates/project_integrated_planning_control.jpg"],["Bar Bending Schedule (BBS)","images/certificates/structural_bbs_sbp.jpg"],["Microsoft Office — Word, Excel, PowerPoint & Outlook","images/certificates/kmd_it_office.jpg"],["Project Management Foundations","images/certificates/linkedin_project_management_foundations.png"]]},
safety:{title:"Project Safety Award — Maxxcare Warehouse · 2017",items:[["Maxxcare Project Safety Award","images/projects/award_maxxcare.jpg"],["Maxxcare Project Team / Safety Recognition","images/projects/award_maxxcare_team.jpg"]]},
safety2:{title:"Project Safety Award — Emerald Brewery Myanmar · 2018",items:[["Emerald Brewery Project Safety Award","images/projects/award_emerald.jpg"]]}
};
function openCredentialPanel(key){const s=credentialSets[key];if(!s)return;document.getElementById("credentialTitle").textContent=s.title;document.getElementById("credentialGallery").innerHTML=s.items.map(x=>`<figure><img loading="lazy" src="${x[1]}" alt="${x[0]}" onclick="openLightbox(this.src)"><figcaption>${x[0]}</figcaption></figure>`).join("");document.getElementById("credentialPanel").classList.add("open");document.body.style.overflow="hidden"}
function closeCredentialPanel(){document.getElementById("credentialPanel").classList.remove("open");document.body.style.overflow=""}
