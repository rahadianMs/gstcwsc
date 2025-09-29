document.addEventListener('DOMContentLoaded', () => {
  // --- DATA STRUCTURE ---
  const dbData = {
      userData: {
          firstName: 'Mochamad',
          lastName: 'Nalendra',
          title: 'Marketing Specialist',
          email: 'm.nalendra@wisesteps.id',
          bio: `As a Marketing Specialist at Wise Steps Consulting, I help bridge the gap between sustainable tourism certification and strategic communication. My role centers around supporting clients such as hotels, destinations, and tourism stakeholders as they navigate the GSTC (Global Sustainable Tourism Council) certification process.`,
          role: 'Destination XX'
      },
      pillars: [
          { id: 'A', name: 'Manajemen Berkelanjutan', criteria: [
              { id: 'A1', name: 'Tanggungjawab pengelolaan destinasi', description: 'Destinasi memiliki satu organisasi, departemen, kelompok, atau komisi yang bertanggungjawab atas pengelolaan pariwisata berkelanjutan.', indicators: [
                  { id: 'A1a', text: 'Bukti terdokumentasi struktur dan tanggungjawab.', guidance: 'Contoh: SK Tim, bagan organisasi, deskripsi pekerjaan (job description).', status: 'Belum', evidence: [] },
                  { id: 'A1b', text: 'Rencana keuangan dan anggaran.', guidance: 'Contoh: Dokumen RKA, laporan anggaran tahunan.', status: 'Dalam Proses', evidence: [3] },
              ], discussion: [{ user: 'Consultant', text: 'Mohon lampirkan SK Tim terbaru.', timestamp: '2025-09-20T10:30:00Z' }]},
              { id: 'A2', name: 'Manajemen Isu dan Krisis', description: 'Sistem pemantauan keberlanjutan destinasi telah diterapkan.', indicators: [
                   { id: 'A2a', text: 'Prosedur terdokumentasi untuk manajemen krisis.', guidance: 'Contoh: SOP penanganan bencana alam, rencana kontingensi.', status: 'Belum', evidence: [] }
              ], discussion: []}
          ]},
          { id: 'B', name: 'Keberlanjutan Sosial Ekonomi', criteria: [
              { id: 'B2', name: 'Peluang Kerja dan Karir', description: 'Destinasi mendukung peluang kerja lokal dan pengembangan karir.', indicators: [
                  { id: 'B2a', text: 'Bukti program pelatihan vokasi untuk penduduk lokal.', guidance: 'Contoh: Daftar hadir pelatihan, materi training, foto kegiatan.', status: 'Belum', evidence: [] },
                  { id: 'B2b', text: 'Laporan demografi pekerja di sektor pariwisata.', guidance: 'Contoh: Laporan HRD dari hotel, data dari dinas tenaga kerja.', status: 'Belum', evidence: [] },
              ], discussion: []}
          ]},
          { id: 'C', name: 'Keberlanjutan Budaya', criteria: [
              { id: 'C1', name: 'Pelindungan Aset Budaya', description: 'Aset budaya dan warisan destinasi dilindungi dan dikelola dengan baik.', indicators: [
                  { id: 'C1a', text: 'Daftar inventaris aset budaya yang dilindungi.', guidance: 'Contoh: Dokumen dari dinas kebudayaan, SK penetapan cagar budaya.', status: 'Belum', evidence: [] },
                  { id: 'C1b', text: 'Bukti adanya regulasi atau aturan lokal terkait perlindungan situs.', guidance: 'Contoh: Peraturan Daerah (Perda), Peraturan Desa (Perdes).', status: 'Terverifikasi', evidence: [7] },
              ], discussion: []}
          ]},
          { id: 'D', name: 'Keberlanjutan Lingkungan', criteria: [
              { id: 'D5', name: 'Konservasi Energi', description: 'Destinasi memiliki program untuk mendorong konservasi energi.', indicators: [
                  { id: 'D5a', text: 'Kebijakan penggunaan energi terbarukan.', guidance: 'Contoh: Surat edaran, SOP penggunaan listrik, spesifikasi teknis lampu LED.', status: 'Belum', evidence: [] },
                  { id: 'D5b', text: 'Data audit atau laporan penggunaan energi per tahun.', guidance: 'Contoh: Tagihan listrik, laporan audit energi dari konsultan.', status: 'Belum', evidence: [] },
              ], discussion: []},
              { id: 'D6', name: 'Manajemen Air', description: 'Destinasi memiliki kebijakan dan program untuk konservasi air.', indicators: [
                  { id: 'D6a', text: 'Kebijakan konservasi air.', guidance: 'Contoh: SOP penggunaan air, bukti pemasangan keran hemat air.', status: 'Belum', evidence: [] },
              ], discussion: []}
          ]}
      ],
      evidenceHub: [
          { id: 1, name: 'SK_Tim_Pariwisata_2024.pdf', type: 'application/pdf', size: 1200000 },
          { id: 2, name: 'Bagan_Struktur_Organisasi.png', type: 'image/png', size: 850000 },
          { id: 3, name: 'RKA_Dinas_Pariwisata_2025.xlsx', type: 'application/vnd.ms-excel', size: 450000 },
          { id: 4, name: 'Daftar_Hadir_Pelatihan_Barista.pdf', type: 'application/pdf', size: 680000 },
          { id: 5, name: 'Laporan_Demografi_Pekerja_Hotel_XYZ.docx', type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', size: 1500000 },
          { id: 6, name: 'Dokumen_Inventaris_Cagar_Budaya.pdf', type: 'application/pdf', size: 2300000 },
          { id: 7, name: 'Perdes_No_5_Tahun_2023_Pelindungan_Situs.pdf', type: 'application/pdf', size: 950000 },
          { id: 8, name: 'SOP_Penggunaan_Listrik_Gedung.pdf', type: 'application/pdf', size: 400000 },
          { id: 9, name: 'Tagihan_Listrik_Jan-Des_2023.zip', type: 'application/zip', size: 5200000 },
      ],
      consultations: [
          { id: 1, agenda: "Review Kriteria A1 & A2", description: "Membahas bukti-bukti yang sudah terkumpul untuk kriteria A1 dan A2, serta mengidentifikasi kekurangan yang ada.", notes: "Tolong siapkan dokumen RKA 2024.", status: "Selesai", clientProposals: ["2025-09-15T10:00"], consultantProposal: null, confirmedDate: "2025-09-15T10:00", meetingLink: "https://meet.google.com/xyz-abc-def", notulensi: "Pembahasan berjalan lancar. Klien akan melengkapi bukti SK Tim dalam 3 hari kerja.", actionPlan: "Klien: Upload SK Tim. Konsultan: Review kembali dokumen RKA." },
          { id: 2, agenda: "Kick-off Meeting Pillar D", description: "Diskusi awal untuk strategi pemenuhan kriteria di Pillar D tentang keberlanjutan lingkungan.", notes: "", status: "Terkonfirmasi", clientProposals: ["2025-09-25T14:00", "2025-09-26T10:00"], consultantProposal: null, confirmedDate: "2025-09-26T10:00", meetingLink: null, notulensi: "", actionPlan: "" },
          { id: 3, agenda: "Evaluasi Pelatihan Vokasi", description: "Mengevaluasi efektivitas program pelatihan vokasi yang sudah berjalan dan merencanakan program selanjutnya.", notes: "Data demografi pekerja terbaru dibutuhkan.", status: "Menunggu Konfirmasi", clientProposals: ["2025-10-01T10:00", "2025-10-01T15:00", "2025-10-02T11:00"], consultantProposal: null, confirmedDate: null, meetingLink: null, notulensi: "", actionPlan: "" }
      ]
  };
  
  // --- GLOBAL STATE ---
  const statusOptions = ['Belum', 'Dalam Proses', 'Terverifikasi'];
  const isConsultant = true; // Simulates user role.
  let activeIndicatorForEvidence = null;
  let currentCriterionId = null; 
  let overallProgressChart, pillarPerformanceChart, complianceBalanceChart;
  let sessionQuota = 20;
  let selectedSessionId = null;

  function init() {
      populateSubmenu();
      renderUserProfile();
      setupEventListeners();
      updateUI();
      renderConsultationPage();
  }

  function showToast(message) {
      const toast = document.getElementById('toast-notification');
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(() => { toast.classList.remove('show'); }, 3000);
  }
  
  // --- ICON COMPONENTS ---
  const getFileIcon = (fileName) => {
      const extension = fileName.split('.').pop().toLowerCase();
      const baseClass = "w-5 h-5 mr-2 flex-shrink-0";
      switch (extension) {
          case 'pdf': return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${baseClass} text-red-500"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>`;
          case 'xlsx': case 'xls': return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${baseClass} text-green-600"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>`;
          case 'docx': case 'doc': return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${baseClass} text-blue-600"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>`;
          default: return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${baseClass} text-gray-500"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`;
      }
  };
  
  const getCriterionStatusIcon = (status) => {
       switch (status) {
          case 'Terverifikasi': return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
          case 'Dalam Proses': return `<div class="relative"><svg viewBox="0 0 100 100"><path d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90" stroke="#d1d5db" fill="none" stroke-width="10"></path><path d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90" stroke="#f59e0b" fill="none" stroke-width="10" stroke-dasharray="282.7" stroke-dashoffset="141.35"></path></svg></div>`;
          default: return `<div class="rounded-full border-2 border-gray-400 bg-white"></div>`;
      }
  };

  // --- STANDARD COMPLIANCE NEW LOGIC ---
  function renderCompliancePage(criterionId) {
      currentCriterionId = criterionId;
      const pageContainer = document.getElementById('standard-compliance-page');
      const criterion = findCriterion(criterionId);
      if (!criterion) {
          pageContainer.innerHTML = `<p class="text-center text-gray-500">Criterion not found.</p>`;
          return;
      }

      const overallStatus = getCriterionStatus(criterion);

      pageContainer.innerHTML = `
          <div class="bg-white p-6 rounded-lg shadow-sm mb-6 border">
              <div class="flex justify-between items-start">
                  <div>
                      <h1 class="text-2xl font-bold text-gray-800">${criterion.id}: ${criterion.name}</h1>
                      <p class="mt-2 text-gray-600 max-w-4xl">${criterion.description}</p>
                  </div>
                  <div class="text-right flex-shrink-0 ml-4">
                      <p class="text-sm font-medium text-gray-500 mb-1">Overall Status</p>
                      <span class="compliance-status-badge text-sm font-semibold px-3 py-1 rounded-full ${ getStatusBadgeStyle(overallStatus) }">${overallStatus}</span>
                  </div>
              </div>
          </div>
          <div class="mb-6 border-b">
              <nav class="-mb-px flex space-x-6" id="compliance-tabs">
                  <button data-tab="indicators" class="compliance-tab-btn border-blue-500 text-blue-600 py-3 px-1 border-b-2 font-medium text-sm">Indicators</button>
                  <button data-tab="evidenceHub" class="compliance-tab-btn border-transparent text-gray-500 hover:border-gray-300 py-3 px-1 border-b-2 font-medium text-sm">Evidence Hub</button>
                  <button data-tab="discussion" class="compliance-tab-btn border-transparent text-gray-500 hover:border-gray-300 py-3 px-1 border-b-2 font-medium text-sm">Discussion</button>
              </nav>
          </div>
          <div id="compliance-tab-content"></div>
      `;

      renderComplianceTab('indicators');
      
      document.querySelectorAll('.compliance-tab-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
              const tabId = e.currentTarget.dataset.tab;
              document.querySelectorAll('.compliance-tab-btn').forEach(b => {
                  b.classList.remove('border-blue-500', 'text-blue-600');
                  b.classList.add('border-transparent', 'text-gray-500', 'hover:border-gray-300');
              });
              e.currentTarget.classList.add('border-blue-500', 'text-blue-600');
              e.currentTarget.classList.remove('border-transparent', 'text-gray-500', 'hover:border-gray-300');
              renderComplianceTab(tabId);
          });
      });
  }

  function renderComplianceTab(tabId) {
      const contentContainer = document.getElementById('compliance-tab-content');
      const criterion = findCriterion(currentCriterionId);
      if (!criterion) return;

      switch(tabId) {
          case 'indicators':
              contentContainer.innerHTML = `<div class="space-y-4">${criterion.indicators.map(renderIndicator).join('')}</div>`;
              document.querySelectorAll('.status-select').forEach(el => el.addEventListener('change', handleStatusChange));
              document.querySelectorAll('.link-evidence-btn').forEach(el => el.addEventListener('click', handleLinkEvidenceClick));
              break;
          case 'evidenceHub':
              contentContainer.innerHTML = renderEvidenceHub();
              document.getElementById('file-upload-input').addEventListener('change', handleFileUpload);
              document.querySelectorAll('.delete-evidence-btn').forEach(btn => btn.addEventListener('click', handleDeleteFile));
              break;
          case 'discussion':
              contentContainer.innerHTML = renderDiscussion(criterion);
              document.getElementById('add-comment-btn').addEventListener('click', handleAddComment);
              break;
      }
  }

  function renderIndicator(indicator) {
      const linkedEvidenceHTML = indicator.evidence.length > 0
          ? `<div class="space-y-2">${indicator.evidence.map(id => { const file = dbData.evidenceHub.find(f => f.id === id); return file ? `<div class="flex items-center bg-gray-100 p-2 rounded-md text-sm">${getFileIcon(file.name)}<span class="text-gray-800 font-medium">${file.name}</span></div>` : ''; }).join('')}</div>`
          : `<p class="text-sm text-gray-500 italic text-center md:text-left">No evidence linked.</p>`;

      return `
          <div class="bg-white p-5 rounded-lg shadow-sm border">
              <p class="text-gray-800 font-semibold">${indicator.id.slice(-1)}. ${indicator.text}</p>
              <p class="text-sm text-gray-500 mt-1 mb-4 pl-4 border-l-2 border-gray-200">Guidance: <span class="italic">${indicator.guidance}</span></p>
              <div class="md:flex items-start justify-between">
                  <div class="flex items-center space-x-4 mb-4 md:mb-0 flex-shrink-0">
                      <button data-indicator-id="${indicator.id}" class="link-evidence-btn flex items-center px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-100">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>
                          ${indicator.evidence.length > 0 ? `Manage Links (${indicator.evidence.length})` : 'Link Evidence'}
                      </button>
                      <select class="status-select rounded-md border-gray-300 shadow-sm text-sm" data-indicator-id="${indicator.id}">
                          ${statusOptions.map(opt => `<option value="${opt}" ${indicator.status === opt ? 'selected' : ''} ${opt === 'Terverifikasi' && !isConsultant ? 'disabled' : ''}>${opt}</option>`).join('')}
                      </select>
                  </div>
                  <div class="flex-grow md:ml-6 mt-4 md:mt-0">${linkedEvidenceHTML}</div>
              </div>
          </div>
      `;
  }

  function renderEvidenceHub() {
      const filesHTML = dbData.evidenceHub.map(file => `
          <div class="flex items-center p-3 bg-gray-50 rounded-md border">
              ${getFileIcon(file.name)}
              <div class="flex-grow">
                  <p class="text-sm font-medium">${file.name}</p>
                  <p class="text-xs text-gray-500">${(file.size / 1024).toFixed(1)} KB</p>
              </div>
              <button data-file-id="${file.id}" class="delete-evidence-btn p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              </button>
          </div>
      `).join('');

      return `
          <div class="bg-white p-6 rounded-lg shadow-sm border">
              <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto h-12 w-12 text-gray-400"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                  <label for="file-upload-input" class="relative cursor-pointer mt-2 block">
                      <span class="text-sm font-semibold text-blue-600 hover:text-blue-500">Click to upload files</span>
                      <p class="text-xs text-gray-500 mt-1">PDF, XLSX, DOCX, etc.</p>
                      <input id="file-upload-input" type="file" class="sr-only" multiple>
                  </label>
              </div>
              <h4 class="text-lg font-semibold text-gray-700 mb-3">Evidence Library</h4>
              <div class="space-y-2">${filesHTML.length > 0 ? filesHTML : `<p class="text-center text-gray-500 py-4">No files uploaded.</p>`}</div>
          </div>
      `;
  }

  function renderDiscussion(criterion) {
      const commentsHTML = criterion.discussion.map(c => `
          <div class="flex items-start space-x-3">
              <div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${c.user === 'Consultant' ? 'bg-blue-500' : 'bg-green-500'}">${c.user.charAt(0)}</div>
              <div class="flex-1 bg-gray-100 p-3 rounded-lg">
                  <div class="flex justify-between items-center">
                      <p class="font-semibold text-sm text-gray-800">${c.user}</p>
                      <p class="text-xs text-gray-500">${new Date(c.timestamp).toLocaleString()}</p>
                  </div>
                  <p class="text-sm text-gray-700 mt-1">${c.text}</p>
              </div>
          </div>
      `).join('');
      
      return `
          <div class="bg-white p-6 rounded-lg shadow-sm border">
              <h4 class="text-lg font-semibold text-gray-700 mb-4">Discussion Thread</h4>
              <div class="space-y-4 mb-6 max-h-96 overflow-y-auto pr-2 custom-scrollbar">${commentsHTML.length > 0 ? commentsHTML : `<p class="text-center text-gray-500 py-4">No comments yet.</p>`}</div>
              <div>
                  <textarea id="new-comment-input" class="w-full p-2 border rounded-md" rows="3" placeholder="Type your comment..."></textarea>
                  <button id="add-comment-btn" class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add Comment</button>
              </div>
          </div>
      `;
  }
  
  function handleFileUpload(e) {
      if (!e.target.files) return;
      Array.from(e.target.files).forEach(file => {
          dbData.evidenceHub.push({
              id: Date.now() + Math.random(),
              name: file.name,
              type: file.type,
              size: file.size
          });
      });
      showToast(`${e.target.files.length} file(s) uploaded.`);
      e.target.value = null; // Reset input
      renderComplianceTab('evidenceHub');
  }

  function handleDeleteFile(e) {
      const fileId = parseInt(e.currentTarget.dataset.fileId);
      if (confirm("Are you sure? This will unlink the file from all indicators.")) {
          dbData.evidenceHub = dbData.evidenceHub.filter(f => f.id !== fileId);
          dbData.pillars.forEach(p => p.criteria.forEach(c => c.indicators.forEach(i => {
              i.evidence = i.evidence.filter(id => id !== fileId);
          })));
          showToast("File deleted.");
          renderComplianceTab('evidenceHub');
      }
  }

  function handleAddComment() {
      const input = document.getElementById('new-comment-input');
      if (input.value.trim() === '') return;
      const criterion = findCriterion(currentCriterionId);
      criterion.discussion.push({
          user: isConsultant ? 'Consultant' : 'Destination',
          text: input.value,
          timestamp: new Date().toISOString()
      });
      input.value = '';
      renderComplianceTab('discussion');
  }


  // --- CONSULTATION PAGE LOGIC (EXISTING) ---
  // ... (All functions from renderConsultationPage to addSessionActionListeners remain unchanged) ...
  function renderConsultationPage(){document.getElementById('session-quota-display').textContent=sessionQuota;renderSessionList();if(selectedSessionId){renderSessionDetails(selectedSessionId)}else{document.getElementById('session-details-container').innerHTML=`
               <div class="text-center text-gray-500 pt-16 h-full flex flex-col justify-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 class="mt-2 text-sm font-medium text-gray-900">Select a session</h3>
                  <p class="mt-1 text-sm text-gray-500">Select a session from the list to see its details or request a new one.</p>
              </div>`}}
  function getStatusBadge(status){switch(status){case'Selesai':return`<span class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800">${status}</span>`;case'Terkonfirmasi':return`<span class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full bg-green-100 text-green-800">${status}</span>`;case'Menunggu Konfirmasi':return`<span class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-800">${status}</span>`;case'Jadwal Baru Diusulkan':return`<span class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">${status}</span>`;case'Dibatalkan':return`<span class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full bg-red-100 text-red-800">${status}</span>`;default:return`<span class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800">${status}</span>`}}
  function formatDate(dateString){if(!dateString)return'N/A';const options={year:'numeric',month:'long',day:'numeric',hour:'2-digit',minute:'2-digit',timeZoneName:'short'};return new Date(dateString).toLocaleString('id-ID',options)+" (WIB)"}
  function renderSessionList(){const container=document.getElementById('session-list-container');const sortedSessions=dbData.consultations.sort((a,b)=>(a.confirmedDate||a.clientProposals[0])<(b.confirmedDate||b.clientProposals[0])?1:-1);container.innerHTML=sortedSessions.map(session=>`
          <div class="session-item p-4 rounded-lg cursor-pointer hover:bg-gray-100 ${selectedSessionId===session.id?'bg-blue-50 border border-blue-300':''}" data-id="${session.id}">
              <div class="flex justify-between items-start">
                   <h3 class="font-semibold text-gray-800 mb-1">${session.agenda}</h3>
                   ${getStatusBadge(session.status)}
              </div>
              <p class="text-sm text-gray-500">${formatDate(session.confirmedDate||session.clientProposals[0])}</p>
          </div>`).join('');document.querySelectorAll('.session-item').forEach(item=>{item.addEventListener('click',()=>{selectedSessionId=parseInt(item.dataset.id);renderConsultationPage()})})}
  function renderSessionDetails(sessionId){const session=dbData.consultations.find(s=>s.id===sessionId);if(!session){selectedSessionId=null;renderConsultationPage();return}
  const container=document.getElementById('session-details-container');const proposalText=(arr)=>arr.length>1?`${arr.length} Opsi Jadwal`:`${arr.length} Opsi Jadwal`;let html=`
          <div class="flex justify-between items-start">
              <div>
                 <h2 class="text-2xl font-bold text-gray-800">${session.agenda}</h2>
                 ${getStatusBadge(session.status)}
              </div>
              ${session.status==='Terkonfirmasi'||session.status==='Menunggu Konfirmasi'?`<button data-action="cancel" data-id="${session.id}" class="cancel-session-btn text-sm text-red-600 hover:text-red-800">Batalkan Sesi</button>`:''}
          </div>
          <div class="mt-6 border-t pt-6 space-y-6">
              <div>
                  <h4 class="font-semibold text-gray-600">Deskripsi Agenda</h4>
                  <p class="text-gray-800">${session.description}</p>
              </div>
               <div>
                  <h4 class="font-semibold text-gray-600">Catatan Tambahan dari Klien</h4>
                  <p class="text-gray-800 italic">"${session.notes||'Tidak ada catatan tambahan.'}"</p>
              </div>`;if(session.status==='Menunggu Konfirmasi'){html+=`
              <div>
                 <h4 class="font-semibold text-gray-600">${proposalText(session.clientProposals)} dari Klien</h4>
                  <ul class="list-disc list-inside mt-2 space-y-2">
                      ${session.clientProposals.map((p,index)=>`
                          <li class="flex items-center justify-between">
                              <span>${formatDate(p)}</span>
                              ${isConsultant?`<button data-action="confirm" data-id="${session.id}" data-date="${p}" class="confirm-schedule-btn px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700">Konfirmasi Jadwal Ini</button>`:''}
                          </li>`).join('')}
                  </ul>
                  ${isConsultant?`
                      <div class="mt-4 pt-4 border-t">
                          <h4 class="font-semibold text-gray-600">Tidak ada yang cocok?</h4>
                          <p class="text-sm text-gray-500 mb-2">Usulkan jadwal lain kepada klien.</p>
                          <input type="datetime-local" id="consultant-proposal-input" class="border rounded-md p-2">
                          <button data-action="propose" data-id="${session.id}" class="propose-new-btn ml-2 px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">Usulkan Jadwal Baru</button>
                      </div>`:''}
              </div>`}else if(session.status==='Terkonfirmasi'){html+=`
              <div>
                 <h4 class="font-semibold text-gray-600">Jadwal Terkonfirmasi</h4>
                 <p class="text-lg font-medium text-green-700 bg-green-50 p-3 rounded-md">${formatDate(session.confirmedDate)}</p>
              </div>
               <div>
                 <h4 class="font-semibold text-gray-600">Link Video Conference</h4>
                  ${session.meetingLink?`<a href="${session.meetingLink}" target="_blank" class="text-blue-600 hover:underline">${session.meetingLink}</a>`:''}
                  ${isConsultant&&!session.meetingLink?`
                      <div class="flex items-center mt-2">
                          <input type="text" id="meeting-link-input" placeholder="https://meet.google.com/..." class="w-full border rounded-md p-2">
                          <button data-action="add-link" data-id="${session.id}" class="add-link-btn ml-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 whitespace-nowrap">Simpan Link</button>
                      </div>`:''}
                  ${!isConsultant&&!session.meetingLink?`<p class="text-gray-500">Konsultan akan segera menambahkan link meeting.</p>`:''}
              </div>
              <div class="text-center pt-4">
                 <button data-action="complete" data-id="${session.id}" class="mark-complete-btn px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">Tandai Sesi Selesai</button>
              </div>`}else if(session.status==='Selesai'){html+=`
              <div>
                 <h4 class="font-semibold text-gray-600">Jadwal Sesi</h4>
                 <p class="text-gray-800">${formatDate(session.confirmedDate)}</p>
              </div>
              <div>
                 <h4 class="font-semibold text-gray-600">Link Video Conference</h4>
                 <a href="${session.meetingLink}" target="_blank" class="text-blue-600 hover:underline">${session.meetingLink||'N/A'}</a>
              </div>
              <div class="mt-6 border-t pt-6">
                  <h3 class="text-xl font-bold mb-4">Notulensi Sesi</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <label for="notulensi-input" class="block text-sm font-medium text-gray-700">Poin Pembahasan / Notulensi</label>
                          <textarea id="notulensi-input" rows="6" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">${session.notulensi}</textarea>
                      </div>
                       <div>
                          <label for="action-plan-input" class="block text-sm font-medium text-gray-700">Tindak Lanjut / Action Plan</label>
                          <textarea id="action-plan-input" rows="6" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">${session.actionPlan}</textarea>
                      </div>
                  </div>
                  <div class="mt-4 flex justify-between items-center">
                      <button class="upload-file-btn text-sm bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Upload File Pendukung</button>
                      <button data-action="save-notes" data-id="${session.id}" class="save-notes-btn px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Simpan Notulensi</button>
                  </div>
              </div>`}
  html+='</div>';container.innerHTML=html;addSessionActionListeners()}
  function renderNewSessionForm(){const container=document.getElementById('session-details-container');container.innerHTML=`
          <h2 class="text-2xl font-bold text-gray-800">Request a New Consultation Session</h2>
          <p class="text-gray-500 mb-6">Propose up to 3 date and time options for the consultant.</p>
          <form id="new-session-form" class="space-y-6">
              <div>
                  <label for="new-agenda" class="block text-sm font-medium text-gray-700">Agenda</label>
                  <input type="text" id="new-agenda" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2">
              </div>
              <div>
                   <label for="new-description" class="flex items-center text-sm font-medium text-gray-700">
                      <span>Deskripsi</span>
                      <span class="ml-2 text-gray-400 cursor-pointer" title="Jelaskan secara singkat tujuan sesi ini dan poin-poin utama yang ingin didiskusikan. Semakin jelas, semakin efektif sesi konsultasi akan berjalan.">(?)</span>
                   </label>
                  <textarea id="new-description" rows="4" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"></textarea>
              </div>
               <div>
                  <label for="new-notes" class="block text-sm font-medium text-gray-700">Catatan Tambahan untuk Konsultan (Opsional)</label>
                  <input type="text" id="new-notes" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2">
              </div>
              <div id="proposal-slots-container">
                   <label class="block text-sm font-medium text-gray-700">Opsi Jadwal 1</label>
                   <input type="datetime-local" name="proposals" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2">
              </div>
              <button type="button" id="add-proposal-slot" class="text-sm text-blue-600 hover:underline">+ Add another time option</button>
              
              <div class="text-right pt-4 border-t">
                   <button type="button" id="cancel-new-session" class="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
                   <button type="submit" class="ml-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit Request</button>
              </div>
          </form>`;let slotCount=1;document.getElementById('add-proposal-slot').addEventListener('click',()=>{if(slotCount<3){slotCount++;const container=document.getElementById('proposal-slots-container');const newSlot=document.createElement('div');newSlot.className='mt-4';newSlot.innerHTML=`
                  <label class="block text-sm font-medium text-gray-700">Opsi Jadwal ${slotCount}</label>
                  <input type="datetime-local" name="proposals" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2">`;container.appendChild(newSlot);if(slotCount===3)document.getElementById('add-proposal-slot').style.display='none'}});document.getElementById('cancel-new-session').addEventListener('click',()=>{selectedSessionId=null;renderConsultationPage()});document.getElementById('new-session-form').addEventListener('submit',(e)=>{e.preventDefault();if(sessionQuota<=0){showToast("Error: Session quota has been reached.");return}
  const proposals=Array.from(document.querySelectorAll('input[name="proposals"]')).map(input=>input.value);const newSession={id:Math.max(...dbData.consultations.map(s=>s.id))+1,agenda:document.getElementById('new-agenda').value,description:document.getElementById('new-description').value,notes:document.getElementById('new-notes').value,status:"Menunggu Konfirmasi",clientProposals:proposals,consultantProposal:null,confirmedDate:null,meetingLink:null,notulensi:"",actionPlan:""};dbData.consultations.push(newSession);showToast("Notifikasi: Permintaan sesi baru telah dikirim.");selectedSessionId=newSession.id;renderConsultationPage()})}
  function handleSessionAction(e){const button=e.target.closest('button');if(!button)return;const action=button.dataset.action;const sessionId=parseInt(button.dataset.id);const session=dbData.consultations.find(s=>s.id===sessionId);if(!session)return;switch(action){case'confirm':const confirmedDate=button.dataset.date;session.status="Terkonfirmasi";session.confirmedDate=confirmedDate;session.clientProposals=[confirmedDate];sessionQuota--;showToast("Notifikasi: Jadwal telah terkonfirmasi.");renderConsultationPage();break;case'propose':const proposalInput=document.getElementById('consultant-proposal-input');if(proposalInput.value){session.status="Jadwal Baru Diusulkan";session.consultantProposal=proposalInput.value;showToast("Notifikasi: Usulan jadwal baru telah dikirim ke klien.");renderConsultationPage()}else{showToast("Error: Harap pilih tanggal dan waktu.")}
  break;case'add-link':const linkInput=document.getElementById('meeting-link-input');if(linkInput.value){session.meetingLink=linkInput.value;showToast("Notifikasi: Link meeting telah disimpan.");renderConsultationPage()}
  break;case'cancel':if(confirm("Are you sure you want to cancel this session?")){if(session.status==='Terkonfirmasi'){sessionQuota++}
  session.status="Dibatalkan";showToast("Notifikasi: Sesi telah dibatalkan.");renderConsultationPage()}
  break;case'complete':session.status="Selesai";showToast("Notifikasi: Sesi telah ditandai selesai.");renderConsultationPage();break;case'save-notes':session.notulensi=document.getElementById('notulensi-input').value;session.actionPlan=document.getElementById('action-plan-input').value;showToast("Notifikasi: Notulensi telah disimpan.");renderConsultationPage();break}}
  function addSessionActionListeners(){const container=document.getElementById('session-details-container');container.addEventListener('click',handleSessionAction)}

  // --- USER PROFILE AND GENERIC UI LOGIC ---
  function renderUserProfile() {
      const { firstName, lastName, title, email, bio, role } = dbData.userData;
      const fullName = `${firstName} ${lastName}`;
      const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

      document.getElementById('header-user-name').textContent = fullName;
      document.getElementById('header-user-role').textContent = role;
      document.querySelector('#profile-dropdown-toggle img').src = `https://placehold.co/40x40/EAB308/0A2540?text=${initials}`;
      document.querySelector('#profile-dropdown-toggle img').alt = fullName;

      document.getElementById('profile-sidebar-name').textContent = fullName;
      document.getElementById('profile-sidebar-title').textContent = title;
      document.querySelector('#my-profile-page aside img').src = `https://placehold.co/64x64/EAB308/0A2540?text=${initials}`;

      document.getElementById('first-name').value = firstName;
      document.getElementById('last-name').value = lastName;
      document.getElementById('email').value = email;
      document.getElementById('title').value = title;
      document.getElementById('bio').value = bio;
  }

  function populateSubmenu() {
      const submenu = document.getElementById('compliance-submenu');
      submenu.innerHTML = '';
      dbData.pillars.forEach(pillar => {
          const pillarLi = document.createElement('li');
          pillarLi.innerHTML = `
              <a href="#" class="pillar-toggle flex justify-between items-center py-2 px-3 rounded hover:bg-gray-600" data-pillar-id="${pillar.id}">
                  <span>Pillar ${pillar.id}: ${pillar.name}</span>
                  <svg class="w-3 h-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </a>
              <ul class="criteria-list ml-4 mt-1 hidden" data-pillar-id="${pillar.id}">
                  ${pillar.criteria.map(criterion => `
                      <li class="my-1">
                          <a href="#" class="criterion-link flex items-center gap-2 p-2 rounded hover:bg-gray-500" data-criterion-id="${criterion.id}">
                              <span class="status-icon" data-criterion-id="${criterion.id}">${getCriterionStatusIcon(getCriterionStatus(criterion))}</span>
                              <span>${criterion.id}</span>
                          </a>
                      </li>
                  `).join('')}
              </ul>
          `;
          submenu.appendChild(pillarLi);
      });
      document.querySelectorAll('.pillar-toggle').forEach(el => el.addEventListener('click', handlePillarToggle));
      document.querySelectorAll('.criterion-link').forEach(el => el.addEventListener('click', handleCriterionClick));
  }
  
  function handleStatusChange(e) { 
      const indicator = findIndicator(e.target.dataset.indicatorId); 
      if (indicator) { 
          indicator.status = e.target.value; 
          updateUI();
          // Re-render the compliance page to update overall status badge
          if (currentCriterionId) {
              renderCompliancePage(currentCriterionId);
          }
      } 
  }
  
  function renderLinkedEvidence(evidenceIds) {
      if (evidenceIds.length === 0) return '<p class="text-xs text-gray-400">No evidence linked yet.</p>';
      return evidenceIds.map(id => {
          const file = dbData.evidenceHub.find(f => f.id === id);
          return `<div class="flex items-center justify-between bg-gray-50 p-2 rounded"><span class="text-sm">${file ? file.name : `File ID: ${id}`}</span><button class="unlink-evidence-btn text-red-500 hover:text-red-700 font-bold text-lg" data-file-id="${id}">&times;</button></div>`;
      }).join('');
  }
  
  function populateEvidenceModal(indicatorId) {
      const fileListEl = document.getElementById('evidence-file-list');
      const indicator = findIndicator(indicatorId);
      if (!indicator) return;
      
      fileListEl.innerHTML = dbData.evidenceHub.map(file => `<label class="flex items-center space-x-3 p-2 rounded hover:bg-gray-100"><input type="checkbox" class="evidence-checkbox h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" value="${file.id}" ${indicator.evidence.includes(file.id) ? 'checked' : ''}><span>${file.name}</span></label>`).join('');
  }
  
  function handlePageNavigation(e) {
      e.preventDefault();
      const targetPageId = e.currentTarget.dataset.page;
      
      if (targetPageId === 'consultation-session') { selectedSessionId = null; renderConsultationPage(); }

      if (targetPageId !== 'standard-compliance') {
          document.getElementById('compliance-submenu').classList.add('hidden');
          document.getElementById('compliance-arrow').classList.remove('rotate-180');
          currentCriterionId = null;
      }
      document.querySelectorAll('.page-content').forEach(page => page.classList.add('hidden'));
      const targetPage = document.getElementById(`${targetPageId}-page`);
      if (targetPage) targetPage.classList.remove('hidden');
      document.querySelectorAll('.main-nav-item').forEach(item => item.classList.remove('bg-gray-700', 'font-semibold'));
      e.currentTarget.classList.add('bg-gray-700', 'font-semibold');
      document.getElementById('profile-dropdown-menu').classList.add('hidden');

      if (targetPageId === 'standard-compliance' && !currentCriterionId) {
          // If landing on compliance page with no criterion selected, show a placeholder
          document.getElementById('standard-compliance-page').innerHTML = `
          <div class="bg-white p-8 rounded-xl shadow-md h-full flex flex-col justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-16 h-16 text-gray-300 mb-4"><path d="m15 18-6-6 6-6"></path></svg>
              <h1 class="text-2xl font-bold text-gray-800">Select a Criterion</h1>
              <p class="text-gray-500 mt-2">Please select a criterion from the navigation menu on the left to begin.</p>
          </div>`;
      }
  }

  function handleComplianceToggle(e) { e.preventDefault(); document.getElementById('compliance-submenu').classList.toggle('hidden'); document.getElementById('compliance-arrow').classList.toggle('rotate-180'); }
  function handlePillarToggle(e) { e.preventDefault(); e.stopPropagation(); const pillarId = e.currentTarget.dataset.pillarId; document.querySelector(`.criteria-list[data-pillar-id="${pillarId}"]`).classList.toggle('hidden'); e.currentTarget.querySelector('svg').classList.toggle('rotate-180'); }
  function handleCriterionClick(e) {
      e.preventDefault();
      const criterionId = e.currentTarget.dataset.criterionId;
      document.querySelectorAll('.page-content').forEach(page => page.classList.add('hidden'));
      document.getElementById('standard-compliance-page').classList.remove('hidden');
      document.querySelectorAll('.main-nav-item').forEach(item => item.classList.remove('bg-gray-700', 'font-semibold'));
      document.querySelector('.main-nav-item[data-page="standard-compliance"]').classList.add('bg-gray-700', 'font-semibold');
      document.querySelectorAll('.criterion-link').forEach(link => link.classList.remove('bg-gray-600', 'font-bold'));
      e.currentTarget.classList.add('bg-gray-600', 'font-bold');
      renderCompliancePage(criterionId);
  }
  
  function handleLinkEvidenceClick(e) { activeIndicatorForEvidence = e.target.closest('button').dataset.indicatorId; populateEvidenceModal(activeIndicatorForEvidence); document.getElementById('evidence-hub-modal').classList.remove('hidden'); }
  function handleSaveEvidence() {
      const indicator = findIndicator(activeIndicatorForEvidence); if (!indicator) return;
      const selectedEvidence = Array.from(document.querySelectorAll('.evidence-checkbox:checked')).map(cb => parseInt(cb.value));
      indicator.evidence = selectedEvidence;
      closeEvidenceModal();
      renderComplianceTab('indicators'); // Re-render tab
  }
  function handleProfileDropdownToggle(e) { e.stopPropagation(); document.getElementById('profile-dropdown-menu').classList.toggle('hidden'); }
  function handleProfileTabClick(e) {
      e.preventDefault();
      const targetTabId = e.currentTarget.dataset.tab;
      document.querySelectorAll('.profile-tab-item').forEach(item => item.classList.remove('bg-blue-100', 'text-blue-700', 'font-semibold'));
      e.currentTarget.classList.add('bg-blue-100', 'text-blue-700', 'font-semibold');
      document.querySelectorAll('.profile-tab-content').forEach(content => content.classList.add('hidden'));
      document.getElementById(`${targetTabId}-tab`).classList.remove('hidden');
  }
  function handleProfileFormSubmit(e) {
      e.preventDefault();
      dbData.userData.firstName = document.getElementById('first-name').value;
      dbData.userData.lastName = document.getElementById('last-name').value;
      dbData.userData.email = document.getElementById('email').value;
      dbData.userData.title = document.getElementById('title').value;
      dbData.userData.bio = document.getElementById('bio').value;
      renderUserProfile();
      const button = e.target.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      button.textContent = 'Saved!';
      button.classList.add('bg-green-500', 'hover:bg-green-600');
      button.classList.remove('bg-blue-600', 'hover:bg-blue-700');
      setTimeout(() => { button.textContent = originalText; button.classList.remove('bg-green-500', 'hover:bg-green-600'); button.classList.add('bg-blue-600', 'hover:bg-blue-700'); }, 2000);
  }
  
  function updateUI() {
      const data = calculateDashboardData();
      if(document.getElementById('overallProgressChart').offsetParent !== null) updateCharts(data);
      updateSidebarStatusIcons();
      updateActionableInsights(data);
      updateOverallComplianceText(data);
  }

  function calculateDashboardData() {
      let totalIndicators = 0, totalVerified = 0;
      const pillarData = dbData.pillars.map(pillar => {
          let pillarTotal = 0, pillarVerified = 0;
          pillar.criteria.forEach(criterion => { pillarTotal += criterion.indicators.length; pillarVerified += criterion.indicators.filter(i => i.status === 'Terverifikasi').length; });
          totalIndicators += pillarTotal; totalVerified += pillarVerified;
          return { name: `Pillar ${pillar.id}`, compliance: pillarTotal > 0 ? (pillarVerified / pillarTotal) * 100 : 0 };
      });
      return { overallCompliance: totalIndicators > 0 ? (totalVerified / totalIndicators) * 100 : 0, pillarData };
  }
  
  function updateOverallComplianceText(data) { document.getElementById('overallComplianceText').textContent = `${data.overallCompliance.toFixed(1)}%`; }

  function getStatusBadgeStyle(status) {
      switch (status) {
          case 'Terverifikasi': return 'bg-green-100 text-green-800';
          case 'Dalam Proses': return 'bg-yellow-100 text-yellow-800';
          default: return 'bg-gray-100 text-gray-800';
      }
  }

  function getCriterionStatus(criterion) {
      const statuses = criterion.indicators.map(i => i.status);
      if (statuses.length > 0 && statuses.every(s => s === 'Terverifikasi')) return 'Terverifikasi';
      if (statuses.some(s => s === 'Dalam Proses' || s === 'Terverifikasi')) return 'Dalam Proses';
      return 'Belum';
  }

  function updateSidebarStatusIcons() {
      dbData.pillars.forEach(pillar => {
          pillar.criteria.forEach(criterion => {
              const iconEl = document.querySelector(`.status-icon[data-criterion-id="${criterion.id}"]`); if (!iconEl) return;
              iconEl.innerHTML = getCriterionStatusIcon(getCriterionStatus(criterion));
          });
      });
  }
  
  function updateActionableInsights(data) {
      document.getElementById('countdownText').innerHTML = `<strong>250 days</strong> remaining until the certification target date.`;
      const sortedPillars = [...data.pillarData].sort((a, b) => a.compliance - b.compliance);
      const focusPillars = sortedPillars.slice(0, 2).filter(p => p.compliance < 100);
      if (focusPillars.length > 0) {
          const focusText = focusPillars.map(p => `${p.name} (${dbData.pillars.find(dbP => dbP.id === p.name.split(' ')[1]).name})`).join(' dan ');
          document.getElementById('focusAreaText').textContent = `Pillar yang perlu menjadi fokus perbaikan saat ini adalah: ${focusText}.`;
      } else { document.getElementById('focusAreaText').textContent = 'Selamat! Semua pillar telah mencapai 100% kepatuhan.'; }
  }

  function updateCharts(data) {
      const overallCtx = document.getElementById('overallProgressChart').getContext('2d');
      if (overallProgressChart) overallProgressChart.destroy();
      overallProgressChart = new Chart(overallCtx, { type: 'doughnut', data: { datasets: [{ data: [data.overallCompliance, 100 - data.overallCompliance], backgroundColor: ['#16A34A', '#E5E7EB'], borderWidth: 1, circumference: 180, rotation: 270 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '80%', plugins: { tooltip: { enabled: false }, legend: { display: false } } } });
      
      const pillarCtx = document.getElementById('pillarPerformanceChart').getContext('2d');
      if (pillarPerformanceChart) pillarPerformanceChart.destroy();
      pillarPerformanceChart = new Chart(pillarCtx, { type: 'bar', data: { labels: data.pillarData.map(p => p.name), datasets: [{ label: '% Compliance', data: data.pillarData.map(p => p.compliance), backgroundColor: ['#3B82F6', '#8B5CF6', '#F59E0B', '#10B981'], borderRadius: 5 }] }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 100, grid: { color: '#e5e7eb' } }, x: { grid: { display: false } } }, plugins: { legend: { display: false } } } });

      const radarCtx = document.getElementById('complianceBalanceChart').getContext('2d');
      if (complianceBalanceChart) complianceBalanceChart.destroy();
      complianceBalanceChart = new Chart(radarCtx, { type: 'radar', data: { labels: data.pillarData.map(p => [p.name, dbData.pillars.find(dbP => dbP.id === p.name.split(' ')[1]).name]), datasets: [{ label: 'Compliance %', data: data.pillarData.map(p => p.compliance), backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: 'rgba(59, 130, 246, 1)', borderWidth: 2, pointBackgroundColor: 'rgba(59, 130, 246, 1)', pointBorderColor: '#fff' }] }, options: { responsive: true, maintainAspectRatio: false, scales: { r: { beginAtZero: true, max: 100, pointLabels: { font: { size: 12 } } } }, plugins: { legend: { display: false } } } });
  }
  
  function findIndicator(indicatorId) { for (const p of dbData.pillars) for (const c of p.criteria) { const i = c.indicators.find(ind => ind.id === indicatorId); if (i) return i; } return null; }
  function findCriterion(criterionId) { for (const p of dbData.pillars) { const c = p.criteria.find(crit => crit.id === criterionId); if (c) return c; } return null; }
  function closeEvidenceModal() { document.getElementById('evidence-hub-modal').classList.add('hidden'); activeIndicatorForEvidence = null; }
  function setupEventListeners() {
      document.querySelectorAll('.main-nav-item').forEach(el => el.addEventListener('click', handlePageNavigation));
      document.getElementById('standard-compliance-toggle').removeEventListener('click', handlePageNavigation);
      document.getElementById('standard-compliance-toggle').addEventListener('click', handleComplianceToggle);
      document.getElementById('cancel-evidence-link').addEventListener('click', closeEvidenceModal);
      document.getElementById('save-evidence-link').addEventListener('click', handleSaveEvidence);
      document.getElementById('profile-dropdown-toggle').addEventListener('click', handleProfileDropdownToggle);
      document.querySelectorAll('.profile-tab-item').forEach(el => el.addEventListener('click', handleProfileTabClick));
      document.getElementById('profile-form').addEventListener('submit', handleProfileFormSubmit);
      document.addEventListener('click', (e) => { const dropdown = document.getElementById('profile-dropdown-menu'); const toggle = document.getElementById('profile-dropdown-toggle'); if (!dropdown.classList.contains('hidden') && !toggle.contains(e.target)) dropdown.classList.add('hidden'); });
      document.getElementById('request-session-btn').addEventListener('click', renderNewSessionForm);
  }
  
  init();
});
